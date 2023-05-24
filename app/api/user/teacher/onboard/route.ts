import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {createAccount, onboard, checkOnboarding} from "@/lib/stripe";

export async function GET() {
	const session = await getServerSession(authOptions);
	if (!session) {
		return NextResponse.json({error: "You must be logged in to do that."}, {status: 401});
	}

	const user = await prisma.user.findUnique({
		where: {
			id: session.user.id
		},
		include: {
			teacherProfile: true
		}
	});

	if (!user) {
		return NextResponse.json({error: "An error occurred."}, {status: 500});
	}

	if (user.teacherProfile && user.teacherProfile.onboardingSuccess) {
		return NextResponse.redirect(process.env.BASE_URL + "/profile");
	}

	if (!user.teacherProfile) {
		const accountID = await createAccount({email: user.email!});
		await prisma.teacherProfile.create({
			data: {
				user: {
					connect: {
						id: user.id
					}
				},
				stripeAccountId: accountID
			}
		});
	}

	if (await checkOnboarding(user.teacherProfile?.stripeAccountId!)) {
		await prisma.teacherProfile.update({
			where: {
				id: user.teacherProfile!.id
			},
			data: {
				onboardingSuccess: true
			}
		});
		return NextResponse.redirect(process.env.BASE_URL + "/profile");
	}

	if (!user.teacherProfile!.onboardingSuccess) {
		const link = await onboard({accountID: user.teacherProfile!.stripeAccountId!, returnURL: `${process.env.BASE_URL}/api/user/teacher/onboard`});
		return NextResponse.redirect(link.url, {status: 302});
	}
}