import twilioClient from "@/lib/twilio/index";
import {prisma} from "@/lib/prisma";
import {Chat} from "@prisma/client";

export async function createChat({account1, account2}: { account1: string, account2: string }) {
	if (account1 === account2) {
		throw new Error("Cannot create chat with same account");
	}

	const user1 = await prisma.user.findUnique({
		where: {
			id: account1
		},
	});
	const user2 = await prisma.user.findUnique({
		where: {
			id: account2
		}
	});

	if (!user1 || !user2) {
		throw new Error("Cannot create chat with nonexistent user");
	}

	// check if chat between account1 and account2 already exists
	const findChat = await prisma.chat.findFirst({
		where: {
			participants: {
				every: {
					id: {
						in: [account1, account2]
					}
				}
			}
		}
	})

	if (findChat) {
		return findChat;
	}

	// create chat in twilio
	const twilioChat = await twilioClient.conversations.v1.conversations.create({
		friendlyName: `${user1.name} & ${user2.name}`,
	});

	await twilioChat.participants().create({
		identity: account1
	});
	await twilioChat.participants().create({
		identity: account2
	});

	return prisma.chat.create({
		data: {
			participants: {
				connect: [
					{
						id: account1
					},
					{
						id: account2
					}
				]
			},
			twilioId: twilioChat.sid
		}
	});
}

export async function getChatMessages(chatId: number) {
	const chat = await prisma.chat.findUnique({
		where: {
			id: chatId
		},
		include: {
			participants: true,
		}
	});

	if (!chat) {
		throw new Error("Chat not found");
	}

	return twilioClient.conversations.v1.conversations(chat.twilioId).messages;
}

export async function getChats(accountId: string): Promise<ChatType[]> {
	const user = await prisma.user.findUnique({
		where: {
			id: accountId
		},
	});

	if (!user) {
		throw new Error("User not found");
	}

	return prisma.chat.findMany({
		where: {
			participants: {
				some: {
					id: accountId
				}
			}
		},
		include: {
			participants: {
				select: {
					id: true,
					name: true,
					email: true,
				},
				where: {
					id: {
						not: accountId
					}
				}
			}
		}
	});
}

export interface ChatType extends Chat {
	participants: {
		id: string,
		name: string | null,
		email: string | null,
	}[]
}

export async function sendMessage(chatId: number, author: string, message: string) {
	const chat = await prisma.chat.findUnique({
		where: {
			id: chatId
		},
		include: {
			participants: true
		}
	});

	if (!chat) {
		throw new Error("Chat not found");
	}
	if (!chat.participants.find(p => p.id === author)) {
		throw new Error("User not in chat");
	}

	await twilioClient.conversations.v1.conversations(chat.twilioId).messages.create({
		body: message,
		author: author
	});
}

export type MessageType = {
	body: string,
	sid: string,
	dateCreated: string,
	author: string
};