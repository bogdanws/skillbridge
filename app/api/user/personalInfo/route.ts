import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";

export async function POST(request: NextRequest) {
	const session = await getServerSession(authOptions);
	if (!session) {
		return NextResponse.json({error: "You must be logged in to do that."}, {status: 401});
	}

	const data = await request.json();
	const {name, image} = data;
	if (!validate(name, image)) {
		return NextResponse.json({error: "Invalid data."}, {status: 400});
	}

	const user = await prisma.user.update({
		where: {
			id: session.user.id
		},
		data: {
			name,
			image
		}
	});

	if (!user) {
		return NextResponse.json({error: "An error occurred."}, {status: 500});
	}

	return NextResponse.json({success: true}, {status: 200});
}

function validate(name: string, image: string) {
	if (!name || !image) {
		return false;
	}

	if (name.length > 50 || name.length < 3) {
		return false;
	}

	if (image.length > 1000) {
		return false;
	}

	return true;
}