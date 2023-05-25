import ChatPage from './ChatPage';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {getChatMessages} from "@/lib/twilio/chat";

export default async function Chat({params} : {params: {chatId: string}}) {
	const session = (await getServerSession(authOptions))!;

	// @ts-expect-error Async Server Component
	return <ChatPage chatId={parseInt(params.chatId)}/>
}