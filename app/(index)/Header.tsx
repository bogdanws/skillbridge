import Image from "next/image";
import header_photo from "@/public/Header_bg.svg";
import {GetStarted, LearnMore} from "@/app/(index)/Buttons";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";

export default async function Header() {
	const session = await getServerSession(authOptions);
	const status = session ? "authenticated" : "unauthenticated";

	return <div className={'relative h-[40vh] md:h-[95vh] border-2 border-gray m-4'}>
		<Image src={header_photo} priority={true} alt=""
		       className={"opacity-50 blur-sm -scale-x-100 w-auto h-full absolute bottom-0 right-0 object-bottom object-contain"}/>
		<div className={'absolute flex flex-col justify-center items-center top-4 left-0 right-0 bottom-0 pt-1 mx-1 '}>
			<h1 className={'font-bold text-2xl text-center md:text-5xl '}>Learn everything from experts</h1>
			<p className={'text-center md:text-4xl'}>Get access to 1-on-1 lessons on your favorite subjects</p>
			<div className={'flex md:m-10 '}>
				<GetStarted status={status}/>
				<LearnMore/>
			</div>
		</div>
	</div>
}
