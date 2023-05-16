import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
	title: 'SkillBridge',
	description: 'SkillBridge is a platform for connecting students and mentors.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
		<body className={inter.className}>{children}</body>
		</html>
	)
}
