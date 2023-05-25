import {NextRequest, NextResponse} from "next/server";
import {createChat} from "@/lib/twilio/chat";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import twilioClient from "@/lib/twilio";

export async function POST(request: NextRequest) {
	const session = await getServerSession(authOptions);
	const user = session?.user;

	if (!user) return NextResponse.json({error: "You must be logged in to do that."}, {status: 401});

	const data = await request.json();
	const {id} = data;
	if (!id) return NextResponse.json({error: "Invalid data."}, {status: 400});

	const chat = await createChat({account1: user.id, account2: id});
	if (!chat) return NextResponse.json({error: "An error occurred while creating the chat."}, {status: 500});

	return NextResponse.json({chatId: chat.id});
}