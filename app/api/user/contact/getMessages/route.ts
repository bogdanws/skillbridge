import {NextRequest, NextResponse} from "next/server";
import {getChatMessages} from "@/lib/twilio/chat";
import {MessageType} from "@/lib/twilio/chat";

export async function GET(request: NextRequest) {
	let chatId;
	try {
		chatId = request.nextUrl.searchParams?.get("chatId");
	} catch (e) {
		return NextResponse.json({
			error: "Invalid chat ID",
		}, {status: 400});
	}

	if (!chatId) {
		return NextResponse.json({
			error: "Chat ID not provided",
		}, {status: 400});
	}

	const messages = await (await getChatMessages(parseInt(chatId))).list({ limit: 30 });
	const messagesData = messages.map(((message) => {
		return {
			body: message.body,
			sid: message.sid,
			dateCreated: message.dateCreated.toDateString(),
			author: message.author
		} as MessageType;
	}));

	return NextResponse.json({
		messages: messagesData,
	});
}