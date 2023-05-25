import CourseCard from "@/components/CourseCard";
import {prisma} from "@/lib/prisma";
import {Course} from "@prisma/client";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Courses() {
	const session = (await getServerSession(authOptions))!;

	const teacherId = (await prisma.teacherProfile.findUnique({
		where: {
			userId: session.user.id
		},
		select: {
			id: true
		}
	}))?.id;
	let myCourses: Course[] = [];
	if (teacherId) {
		myCourses = await prisma.course.findMany({
			where: {
				teacherId: teacherId
			}
		});
	}

	const enrolledCourses = await prisma.course.findMany({
		where: {
			students: {
				some: {
					id: session.user.id
				}
			}
		},
		include: {
			teacher: {
				include: {
					user: {
						select: {
							name: true
						}
					}
				}
			}
		}
	});

	return <div>
		<h1 className={'text-3xl font-semibold pb-3'}>Courses</h1>
		<div className={'w-full md:max-w-fit flex flex-col gap-3 md:grid grid-rows-3 grid-flow-col overflow-auto pb-3'}>
			{myCourses.map(course => <CourseCard key={course.id} name={course.name} image={course.image} isOwner={true} />)}
			{enrolledCourses.map(course => <CourseCard key={course.id} name={course.name} image={course.image} author={course.teacher.user.name} />)}
		</div>
	</div>
}