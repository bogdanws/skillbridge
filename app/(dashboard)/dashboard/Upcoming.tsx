import UpcomingCard from "@/app/(dashboard)/dashboard/UpcomingCard";

export default function Courses() {
	return <div>
		<h1 className={'text-3xl font-semibold pb-3'}>Upcoming</h1>
		<div className={'flex flex-col gap-3 md:grid grid-rows-2 auto-cols-auto grid-flow-row overflow-auto'}>
			<UpcomingCard/>
			<UpcomingCard/>
			<UpcomingCard/>
			<UpcomingCard/>
		</div>
	</div>
}