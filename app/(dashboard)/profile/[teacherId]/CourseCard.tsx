export default function CourseCard({name, description, image, price}: {
	name: string,
	description?: string | null,
	image?: string | null,
	price: number
}) {
	return <div
		className={"w-full md:w-96 h-32 bg-white rounded-lg shadow-lg p-4 flex flex-row gap-4 border border-black m-5 mb-0"}>
		<div className={"h-full w-32 rounded"}
		     style={{
			     backgroundImage: `url(${image})`,
			     backgroundSize: 'cover',
			     backgroundPosition: 'center'
		     }}/>
		<div className={'flex flex-col'}>
			<div className={'flex-grow'}>
				<h2 className={"text-lg font-semibold"}>{name}</h2>
				<h3 className={"text-md"}>{description}</h3>
			</div>
			<h4 className={"text-md font-medium"}>${price}</h4>
		</div>

	</div>
}