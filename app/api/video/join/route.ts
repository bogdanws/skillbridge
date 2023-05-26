import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {getTwilioToken} from "@/lib/twilio/video";

export async function GET(request: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session) {
		return NextResponse.json({error: "You must be signed in to join a room."}, {status: 401})
	}

	const user = (await prisma.user.findUnique({
		where: {
			id: session.user.id
		}
	}))!;
	const name = user.name || user.email || "Unknown";

	const roomId = request.nextUrl.searchParams.get("roomId");
	if (!roomId) {
		return NextResponse.json({error: "Missing roomId parameter."}, {status: 400})
	}

	const token = await getTwilioToken(name, roomId);

	return NextResponse.json({token});
}