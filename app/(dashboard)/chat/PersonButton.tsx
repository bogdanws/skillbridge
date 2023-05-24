import {twMerge} from "tailwind-merge";

export default function PersonButton({selected}: { selected?: boolean }) {
	const selectedStyle = selected ? 'bg-primary-950' : '';
	const classes = twMerge('p-4 m-2 text-left text-white font-medium bg-primary-900 rounded-lg', selectedStyle);
	return <button className={classes}>Person name</button>;
}