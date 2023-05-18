import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import type {NextAuthOptions} from "next-auth";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/prisma";

const options: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? console.error("Missing GOOGLE_ID env variable")!,
			clientSecret: process.env.GOOGLE_SECRET ?? console.error("Missing GOOGLE_SECRET env variable")!,
			allowDangerousEmailAccountLinking: true
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? console.error("Missing GITHUB_ID env variable")!,
			clientSecret: process.env.GITHUB_SECRET ?? console.error("Missing GITHUB_SECRET env variable")!,
			allowDangerousEmailAccountLinking: true
		}),
	],
	theme: {
		logo: "/logo.png",
		colorScheme: "light",
		brandColor: "#0D8C89",
	}
}

const handler = NextAuth(options);
export { handler as GET, handler as POST };