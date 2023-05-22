import Drawer from "@/app/(dashboard)/Drawer";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";

export default async function DashboardLayout({children}: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/api/auth/signin", RedirectType.replace);
	}

	return <div className={"h-screen flex flex-col-reverse md:flex-row"}>
		<Drawer/>
		<div className={"flex-grow overflow-auto"}>
			{children}
		</div>
	</div>
}