import CourseCard from "@/app/(dashboard)/profile/[teacherId]/CourseCard";

export default function CourseList() {
	return <div className={'flex-grow m-5 overflow-auto'}>
		<h1 className={'text-2xl font-bold text-center'}>Published courses</h1>
		<div className={'w-100 flex flex-col items-center'}>
			<CourseCard/>
			<CourseCard/>
			<CourseCard/>
		</div>
	</div>
}