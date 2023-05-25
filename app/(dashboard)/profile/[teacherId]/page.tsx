import {prisma} from "@/lib/prisma";
import ProfileInfo from "@/app/(dashboard)/profile/[teacherId]/ProfileInfo";
import CourseList from "@/app/(dashboard)/profile/[teacherId]/CourseList";
import {notFound} from "next/navigation";

export default async function TeacherProfile({params} : {params: {teacherId: string}}) {
	const profile = await prisma.user.findUnique({
		where: {
			id: params.teacherId
		},
		include: {
			teacherProfile: {
				include: {
					classes: true,
				}
			}
		}
	});

	if (!profile) return notFound();

	return <div className={'h-full flex flex-col md:flex-row'}>
		<ProfileInfo name={profile.name!} image={profile.image} id={profile.id}/>
		<CourseList courses={profile.teacherProfile!.classes}/>
	</div>
}
