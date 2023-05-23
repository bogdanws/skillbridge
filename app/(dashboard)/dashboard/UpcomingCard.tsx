
export default function CourseCard() {
	return <div className={"w-full md:w-80 h-24 bg-white rounded-lg shadow-lg p-4 flex flex-row gap-4 border border-black"}>
		<div className={"bg-gray-200 h-full w-24 rounded"}
		     style={{backgroundImage: `url(https://i.pinimg.com/564x/a8/1d/3d/a81d3d7b66bf95f0c01f7683a1e292fb.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
		<div className={'flex-grow gap-2'}>
			<h2 className={"text-lg font-bold"}>Course Name</h2>
			<h3 className={"text-md"}>date</h3>
		</div>
	</div>
}