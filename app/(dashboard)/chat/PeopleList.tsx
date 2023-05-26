'use client';
import PersonButton from './PersonButton';
import {ChatType} from "@/lib/twilio/chat";
import {twMerge} from "tailwind-merge";
import {useRouter} from "next/navigation";

export default function PeopleList({chats, className} : {chats: ChatType[], className?: string}) {
	const classes = twMerge('w-80 h-full bg-primary-700 flex flex-col', className);

	return <div className={classes}>
		{chats.map(chat => {
			return <PersonButton key={chat.id} chatName={chat.participants[0].name ?? chat.participants[0].email ?? "New User"} chatId={chat.id}/>
		})}
	</div>
}

export function PeopleListMobile({chats, className} : {chats: ChatType[], className?: string}) {
	const router = useRouter();
	const classes = twMerge('flex flex-col', className);

	return <div className={classes}>
		<select className={'w-full bg-primary-700 text-white p-4 rounded-lg'} onChange={(e) => {
			router.push('/chat/' + e.target.value);
		}}>
			{chats.map(chat => {
				return <option key={chat.id} value={chat.id}>{chat.participants[0].name ?? chat.participants[0].email ?? "New User"}
				</option>
			})}
		</select>
	</div>
}