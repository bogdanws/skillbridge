import ContactButton from "@/app/(dashboard)/profile/[teacherId]/ContactButton";

export default function ProfileInfo() {
	return <div className={'w-full md:w-2/5 h-80 md:h-full max-md:border-b-2 md:border-r-2 border-primary-950 flex flex-col'}>
		<div className={"h-48 md:h-64 rounded flex justify-center m-5"}
		     style={{
			     backgroundImage: `url(https://i.pinimg.com/564x/a8/1d/3d/a81d3d7b66bf95f0c01f7683a1e292fb.jpg)`,
			     backgroundSize: 'contain',
			     backgroundRepeat: 'no-repeat',
			     backgroundPosition: 'center'
		     }}/>
		<h2 className={"text-2xl font-semibold text-center"}>Teacher Name</h2>
		<ContactButton />
	</div>
}