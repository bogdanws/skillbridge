import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/navbar/NavBar";
import Footer from "@/app/Footer";

const inter = Inter({subsets: ['latin-ext']})

export const metadata = {
	title: 'SkillBridge',
	description: 'SkillBridge is a platform for connecting students and mentors.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
		<body className={inter.className}>
			<Navbar/>
			{children}
			{/*<Footer/>*/}
		</body>
		</html>
	)
}
