import Courses from "@/app/(dashboard)/dashboard/Courses";
import Upcoming from "@/app/(dashboard)/dashboard/Upcoming";

export default function Dashboard() {
	return <div className={'m-5'}>
		<Courses/>
		<Upcoming/>
	</div>
}