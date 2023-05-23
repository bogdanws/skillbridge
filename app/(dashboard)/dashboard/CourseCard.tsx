import {BsFillBookmarkFill} from "react-icons/bs";

export default function CourseCard() {
	return <div className={"w-full md:w-96 h-32 bg-white rounded-lg shadow-lg p-4 flex flex-row gap-4 border border-black"}>
		<div className={"bg-gray-200 h-full w-32 rounded"}
		     style={{backgroundImage: `url(https://i.pinimg.com/564x/a8/1d/3d/a81d3d7b66bf95f0c01f7683a1e292fb.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
		<div className={'flex-grow'}>
			<h2 className={"text-lg font-semibold"}>Course Name</h2>
			<h3 className={"text-md"}>Course Description</h3>
		</div>
		<BsFillBookmarkFill size={"1.75rem"} className={"text-white bg-primary p-1.5 rounded-lg"}/>
	</div>
}