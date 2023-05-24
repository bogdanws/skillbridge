import {NextAuthOptions, DefaultSession} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
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
		session({session, user}) {
			session!.user!.id = user.id;
			return session;
		}
	}
}

declare module "next-auth" {
	interface Session extends DefaultSession {
		user: {
			id: string
		}
	}
}