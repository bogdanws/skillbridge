import CourseCard from "@/app/(dashboard)/profile/[teacherId]/CourseCard";
import {Course} from "@prisma/client";

export default function CourseList({courses} : {courses: Course[]}) {
	return <div className={'flex-grow m-5 overflow-auto'}>
		<h1 className={'text-2xl font-bold text-center'}>Published courses</h1>
		<div className={'w-100 flex flex-col items-center'}>
			{courses.map(course =>
				<CourseCard
					name={course.name}
					description={course.description}
					image={course.image}
					price={course.price}
					key={course.id}
				/>
			)}
		</div>
	</div>
}