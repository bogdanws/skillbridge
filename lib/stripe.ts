import Stripe from 'stripe';
import {prisma} from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2022-11-15',
});

export default stripe;

// Create a new account for the user.
export async function createAccount({ email } : { email: string }) {
	const account = await stripe.accounts.create({
		type: 'express',
		email,
	});

	return account.id;
}

// Create a login link for the user using the Stripe Express onboarding flow.
export async function onboard({ accountID, returnURL } : { accountID: string, returnURL: string }) {
	return await stripe.accountLinks.create({
		account: accountID,
		refresh_url: returnURL,
		return_url: returnURL,
		type: 'account_onboarding',
	});
}

// Check if the user has completed the onboarding flow.
export async function checkOnboarding(accountID: string) {
	const account = await stripe.accounts.retrieve(accountID);

	return account.details_submitted;
}

// Create a new product for a course.
export async function createProduct({ name, description, image, price } : { name: string, description: string, image: string, price: number }) {
	return await stripe.products.create({
		name,
		description,
		images: [image],
		default_price_data: {
			currency: 'usd',
			unit_amount: price,
		}
	});
}