import Header from "@/app/(index)/Header"
import ContentView from "@/app/(index)/ContentView";
import {Bottom} from "@/app/(index)/Bottom";

export default function Home() {
	return <>
		{/* @ts-expect-error Async Server Component */}
		<Header/>
		<ContentView/>
		<Bottom/>
	</>;
}
