import twilioClient from "./index";
import {prisma} from "@/lib/prisma";

export async function createRoom({classId} : {classId: string}) {
	const Class = await prisma.course.findUnique({
		where: {
			id: classId
		}
	});

	if (!Class) {
		throw new Error("Cannot create room for nonexistent class");
	}

	// TODO: Change this to P2P or group room to allow for more than 2 people
	const room = await twilioClient.video.v1.rooms.create({
		uniqueName: classId,
	});

	prisma.meeting.create({
		data: {
			twilioId: room.sid,
			Class: {
				connect: {
					id: classId
				}
			}
		}
	});

	const chat = await twilioClient.conversations.v1.conversations.create({
		friendlyName: `${Class.name} Chat`,
		uniqueName: room.sid,
	});

	prisma.chat.create({
		data: {
			twilioId: chat.sid,
			meeting: {
				connect: {
					twilioId: room.sid
				}
			}
		}
	});

	return {
		room,
		chat
	}
}

export async function getRoom({classId} : {classId: string}) {
	const Class = await prisma.course.findUnique({
		where: {
			id: classId
		},
		include: {
			currentMeeting: {
				include: {
					chat: true
				}
			}
		}
	});

	if (!Class) {
		throw new Error("Cannot get room for nonexistent class");
	}

	if (!Class.currentMeeting) {
		throw new Error("Cannot get room for class without current meeting");
	}

	return Class.currentMeeting.twilioId;
}

export async function endRoom({classId} : {classId: string}) {
	const Class = await prisma.course.findUnique({
		where: {
			id: classId
		},
		include: {
			currentMeeting: true
		}
	});

	if (!Class) {
		throw new Error("Cannot end room for nonexistent class");
	}

	if (!Class.currentMeeting) {
		throw new Error("Cannot end room for class without current meeting");
	}

	return await twilioClient.video.v1.rooms(Class.currentMeeting.twilioId).update({
		status: "completed"
	});
}

export async function getRoomParticipants({classId} : {classId: string}) {
	const Class = await prisma.course.findUnique({
		where: {
			id: classId
		},
		include: {
			currentMeeting: true
		}
	});

	if (!Class) {
		throw new Error("Cannot get room participants for nonexistent class");
	}

	if (!Class.currentMeeting) {
		throw new Error("Cannot get room participants for class without current meeting");
	}

	return await twilioClient.video.v1.rooms(Class.currentMeeting.twilioId).participants.list();
}

