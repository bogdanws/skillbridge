"use client";

export default function Button({children, fill, className, onClick, ...props}: {
	children: string | React.ReactNode,
	fill?: boolean,
	className?: string,
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
	[key: string]: any
}) {
	const style = fill ? "bg-primary hover:bg-primary-600 text-white border-0"
    : "bg-white hover:bg-neutral-100 text-primary border-4 border-primary";

	return <button className={`transition-colors p-3 rounded-md m-2 ${style} ${className}`} onClick={onClick} {...props}>
		{children}
	</button>
}