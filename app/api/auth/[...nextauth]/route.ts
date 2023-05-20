import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/email';
import type {NextAuthOptions} from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/prisma";

const options: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
			allowDangerousEmailAccountLinking: true
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
			allowDangerousEmailAccountLinking: true
		}),
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER!,
				port: Number(process.env.EMAIL_PORT!),
				auth: {
					user: process.env.EMAIL_USERNAME!,
					pass: process.env.EMAIL_PASSWORD!
				}
			},
			from: process.env.EMAIL_FROM!
		})
	],
	theme: {
		logo: "/logo.png",
		colorScheme: "light",
		brandColor: "#0D8C89"
	},
	callbacks: {
		session: async ({session, user}) => {
			return session;
		}
	}
}

const handler = NextAuth(options);
export { handler as GET, handler as POST };