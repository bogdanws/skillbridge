import {twMerge} from "tailwind-merge";
import Link from "next/link";

export default function PersonButton({selected, chatName, chatId}: { selected?: boolean, chatName: string, chatId: number }) {
	const selectedStyle = selected ? 'bg-primary-950' : '';
	const classes = twMerge('p-4 m-2 text-left text-white font-medium bg-primary-900 rounded-lg', selectedStyle);
	return <Link href={`/chat/${chatId}`} className={classes}>{chatName}</Link>;
}