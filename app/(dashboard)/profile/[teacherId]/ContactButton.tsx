"use client";
import {useRouter} from "next/navigation";

export default function ContactButton({id} : {id: string}) {
	const router = useRouter();

	async function handleClick() {
		const res = await fetch('/api/user/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({id})
		});

		if (!res.ok) {
			alert('Something went wrong! Please try again later.')
		}

		router.push('/chat/' + (await res.json()).chatId);
	}

	return <button onClick={handleClick}
		className={'bg-primary-500 hover:bg-primary-700 text-white text-center font-bold py-3 px-4 rounded m-3'}>
		Contact
	</button>
}