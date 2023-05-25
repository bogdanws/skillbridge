import PersonButton from './PersonButton';
import {Chat} from "@prisma/client";
import {ChatType} from "@/lib/twilio/chat";

export default function PeopleList({chats} : {chats: ChatType[]}) {
	return <div className={'w-80 h-full bg-primary-700 flex flex-col'}>
		{chats.map(chat => {
			return <PersonButton key={chat.id} chatName={chat.participants[0].name ?? chat.participants[0].email ?? "New User"} chatId={chat.id}/>
		})}
	</div>
}