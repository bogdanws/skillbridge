import PeopleList from './PeopleList';
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {getChats} from "@/lib/twilio/chat";

export default async function ChatLayout({children} : {children: React.ReactNode}) {
	const session = (await getServerSession(authOptions))!;
	const chats = await getChats(session.user.id);

	return <div className={'h-full flex flex-row'}>
		<PeopleList chats={chats}/>
		{children}
	</div>
}