import {NextRequest, NextResponse} from "next/server";
import {sendMessage} from "@/lib/twilio/chat";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";

export async function POST(req: NextRequest) {
	const session = await getServerSession(authOptions);
	const account = session?.user?.id;

	if (!account) {
		return NextResponse.json({
			error: "Not logged in"
		}, { status: 401 });
	}

	const {message, chatId} = await req.json();

	if (!message || !chatId) {
		return NextResponse.json({
			error: "Missing message or chatId"
		}, { status: 400 });
	}

	await sendMessage(chatId, account, message);

	return NextResponse.json({
		success: true
	});
}