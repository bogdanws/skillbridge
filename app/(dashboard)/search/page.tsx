import {prisma} from "@/lib/prisma";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

export default async function Search() {
	const courses = await prisma.course.findMany({
		include: {
			teacher: {
				select: {
					user: {
						select: {
							name: true,
							id: true
						}
					}
				}
			}
		}
	});

	return <div className={"m-3"}>
		<h1 className={"text-3xl font-semibold mb-3"}>All courses</h1>
		<div className={"flex justify-center flex-wrap gap-4"}>
			{courses.map(course =>
				<Link href={"/profile/" + course.teacher.user.id} key={course.id}>
					<CourseCard
						name={course.name}
						description={course.description}
						image={course.image}
						author={course.teacher.user.name!}
						price={course.price}
						className={"h-full"}
					/>
				</Link>
			)}
		</div>
	</div>
}