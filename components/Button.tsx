"use client";
import {twMerge} from "tailwind-merge";

export default function Button({children, fill, className, onClick, ...props}: ButtonProps) {
	// Get style based on fill
	let style = fill ? "bg-primary hover:bg-primary-600 text-white border-0"
    : "bg-white hover:bg-neutral-100 text-primary border-4 border-primary";

	style = twMerge("transition-colors p-3 rounded-md m-2", style, className);

	return <button className={style} onClick={onClick} {...props}>
		{children}
	</button>
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: string | React.ReactNode;
	fill?: boolean;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}