import UpcomingCard from "@/app/(dashboard)/dashboard/UpcomingCard";

export default function Courses() {
	return <div>
		<h1 className={'text-3xl font-semibold py-3'}>Upcoming</h1>
		<div className={'w-full md:max-w-fit flex flex-col gap-3 md:grid grid-rows-2 grid-flow-col overflow-auto pb-3'}>
			<UpcomingCard/>
			<UpcomingCard/>
		</div>
	</div>
}