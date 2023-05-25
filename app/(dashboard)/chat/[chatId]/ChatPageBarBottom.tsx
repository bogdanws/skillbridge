"use client";
import Input from "@/components/forms/Input";
import Submit from "@/components/forms/Submit";
import {useRouter} from "next/navigation";

export default function ChatPageBarBottom({chatId} : {chatId: number}) {
	const router = useRouter();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const message = formData.get('message');

		// clear the form
		e.currentTarget.reset();

		const res = await fetch("/api/user/contact/sendMessage", {
			method: "POST",
			body: JSON.stringify({message, chatId}),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok) {
			console.log(await res.json());
			alert("Error sending message.");
		}

		router.refresh();
	}

	return <div className={'h-20 bg-neutral-500 p-2'}>
		<form className={'w-full flex flex-row justify-center'} onSubmit={handleSubmit}>
			<Input type={"text"} name={"message"} id={"message"} placeholder={"Type a message..."} className={'flex-grow mb-0'} minLength={1}/>
			<Submit>Send</Submit>
		</form>
	</div>
}