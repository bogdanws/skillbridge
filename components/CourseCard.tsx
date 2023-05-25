import {BsFillBookmarkFill} from "react-icons/bs";
import {twMerge} from "tailwind-merge";

export default function CourseCard({name, description, image, author, price, className, isOwner}: {
	name: string,
	description?: string | null,
	image?: string | null,
	author?: string | null,
	price?: number,
	className?: string
	isOwner?: boolean
}) {
	const classes = twMerge("w-full md:w-96 h-32 min-h-32 bg-white rounded-lg shadow-lg p-4 " +
		"flex flex-row gap-4 border border-black", className);

	return <div
		className={classes}>
		<div className={"bg-gray-200 h-full w-32 rounded"}
		     style={{
			     backgroundImage: `url(${image})`,
			     backgroundSize: 'cover',
			     backgroundPosition: 'center'
		     }}/>
		<div className={'flex-grow'}>
			<h2 className={"text-lg font-semibold"}>{name}</h2>
			{author && <h3 className={"text-md"}>{author} {description ? "- " + description : ""}</h3>}
			{price && <h4 className={"text-md font-semibold"}>${price}</h4>}
		</div>
		{!isOwner && <BsFillBookmarkFill size={"1.75rem"} className={"text-white bg-primary p-1.5 rounded-lg"}/>}
		{isOwner && <div className={"flex flex-col gap-1"}>
			<button className={"bg-primary text-white rounded-lg p-1.5"}>Edit</button>
		</div>}
	</div>
}