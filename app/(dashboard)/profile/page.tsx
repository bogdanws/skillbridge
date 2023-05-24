import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {prisma} from "@/lib/prisma";
import PersonalInfo from "@/app/(dashboard)/profile/PersonalInfo";
import TeacherProfile, {OnboardTeacherProfile} from "@/app/(dashboard)/profile/TeacherProfile";

export default async function Profile() {
	const session = (await getServerSession(authOptions))!;
	const user = await prisma.user.findUnique({
		where: {
			id: session.user.id
		},
		include: {
			teacherProfile: true
		}
	});

	if (!user) {
		return <div className={"m-3"}>
			<h1 className={"text-3xl font-semibold text-center"}>You don&apos;t have a profile yet</h1>
			<p className={"text-center"}>Please contact an administrator.</p>
		</div>
	}

	return <div className={"m-3"}>
		<h1 className={"text-3xl font-semibold text-center"}>Your profile settings</h1>
		<PersonalInfo user={user} />
		{user.teacherProfile?.onboardingSuccess && <TeacherProfile teacher={user.teacherProfile} /> }
		{!user.teacherProfile?.onboardingSuccess && <OnboardTeacherProfile /> }
	</div>
}