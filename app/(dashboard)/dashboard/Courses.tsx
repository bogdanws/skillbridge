import CourseCard from "@/app/(dashboard)/dashboard/CourseCard";

export default function Courses() {
	return <div>
		<h1 className={'text-3xl font-semibold pb-3'}>Courses</h1>
		<div className={'w-full md:max-w-fit flex flex-col gap-3 md:grid grid-rows-3 grid-flow-col overflow-auto pb-3'}>
			<CourseCard/>
			<CourseCard/>
		</div>
	</div>
}