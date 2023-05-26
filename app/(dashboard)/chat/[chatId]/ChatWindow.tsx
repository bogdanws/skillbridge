"use client";
import {useCallback, useEffect, useState} from "react";
import {MessageType} from "@/lib/twilio/chat";
import {getSession} from "next-auth/react";

export default function ChatWindow({chatId} : {chatId: number}) {
	const [messages, setMessages] = useState<MessageType[]>([]);
	const [session, setSession] = useState<any>();
	useEffect(() => {
		getSession().then(setSession);
	}, []);

	const fetchMessages = useCallback(async () => {
		const res = await fetch("/api/user/contact/getMessages?chatId=" + chatId);

		if (!res.ok) {
			console.log(await res.json());
			alert("Error getting messages.");
		}

		const messages = await res.json();
		setMessages(messages.messages);
	}, [chatId]);
	useEffect(() => {
		fetchMessages();
		const interval = setInterval(async () => {
			await fetchMessages();
		}, 2000);

		return () => clearInterval(interval);
	}, [chatId, fetchMessages]);

	return <div className={'flex-grow flex flex-col items-start m-2'}>
		{messages.map(message => <ChatMessage key={message.sid} message={message} sentByLocal={message.author === session.user.id}/>)}
	</div>
}

function ChatMessage({message, sentByLocal} : {message: MessageType, sentByLocal: boolean}) {
	return <div className={'flex flex-col p-4 m-1 rounded-md ' + (sentByLocal ? 'self-end bg-primary-100' : 'bg-primary-150')}>
		<div className={'flex-grow text-lg'}>{message.body}</div>
		<div className={'text-xs text-neutral-600'}>{message.dateCreated}</div>
	</div>
}