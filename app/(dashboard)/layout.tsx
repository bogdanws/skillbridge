import Drawer from "@/app/(dashboard)/Drawer";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";
import Header_bg from "@/public/Header_bg.svg";
import Image from "next/image";


export default async function DashboardLayout({children}: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/api/auth/signin", RedirectType.replace);
	}

	return <div className={"h-screen flex flex-col-reverse md:flex-row"}>
		<Drawer/>
		<div className={"flex-grow overflow-auto relative"}>
			{children}
			<Image src={Header_bg} alt={"Header Background"}
			       className={"w-2/3 h-2/3 -z-10 fixed bottom-0 right-0 -scale-x-100 object-contain object-left-bottom opacity-10"}/>
		</div>
	</div>
}