import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/authOptions";
import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import stripe from "@/lib/stripe";

export async function POST(request: NextRequest) {
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

	if (!user.teacherProfile?.stripeAccountId) {
		return NextResponse.json({error: "You must set up your account."}, {status: 403});
	}

	let {name, description, price, image} = await request.json();

	if (!name || !price || !image) {
		return NextResponse.json({error: "You must fill out all fields."}, {status: 400});
	}

	try {
		price = parseInt(price);
	} catch (e) {
		return NextResponse.json({error: "Price must be a number."}, {status: 400});
	}

	// Create a new product and price for the course.
	const product = await stripe.products.create({
		name,
		description,
		images: [image],
	}, {
		stripeAccount: user.teacherProfile.stripeAccountId!
	});

	const stripePrice = await stripe.prices.create({
		product: product.id,
		currency: 'usd',
		unit_amount: price * 100,
	}, {
		stripeAccount: user.teacherProfile.stripeAccountId!
	});

	// Add the course to the database.
	const course = await prisma.course.create({
		data: {
			name,
			description,
			price,
			image,
			teacher: {
				connect: {
					id: user!.teacherProfile!.id
				}
			},
			stripeProductId: product.id,
			stripePriceId: stripePrice.id
		}
	});

	return NextResponse.json({course});
}
