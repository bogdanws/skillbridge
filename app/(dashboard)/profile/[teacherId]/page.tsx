import ProfileInfo from "@/app/(dashboard)/profile/[teacherId]/ProfileInfo";
import CourseList from "@/app/(dashboard)/profile/[teacherId]/CourseList";

export default function TeacherProfile() {
	return <div className={'h-full flex flex-col md:flex-row'}>
		<ProfileInfo/>
		<CourseList/>
	</div>
}