import {twMerge} from "tailwind-merge";

export default function Card({children, className}: CardProps) {
	const classes = twMerge('bg-neutral-200 rounded-lg p-6 my-4', className);

	return <div className={classes}>
		{children}
	</div>
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}