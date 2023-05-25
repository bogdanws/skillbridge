import ContactButton from "@/app/(dashboard)/profile/[teacherId]/ContactButton";

export default function ProfileInfo({name, image, id}: {name: string, image?: string | null, id: string}) {
	return <div className={'w-full md:w-2/5 h-80 md:h-full max-md:border-b-2 md:border-r-2 border-primary-950 flex flex-col'}>
		<div className={"h-48 md:h-64 bg-neutral-300 rounded-md flex justify-center m-5"}
		     style={{
			     backgroundImage: `url(${image})`,
			     backgroundSize: 'contain',
			     backgroundRepeat: 'no-repeat',
			     backgroundPosition: 'center'
		     }}/>
		<h2 className={"text-2xl font-semibold text-center"}>{name}</h2>
		<ContactButton id={id}/>
	</div>
}