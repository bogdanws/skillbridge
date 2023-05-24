"use client";
import {twMerge} from "tailwind-merge";

export default function Submit({ children, className, ...props }: SubmitProps) {
	const classes = twMerge("bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded m-3", className);

	return (
		<button
			className={classes}
			type="submit"
			{...props}
		>
			{children}
		</button>
	);
}

export interface SubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
}
