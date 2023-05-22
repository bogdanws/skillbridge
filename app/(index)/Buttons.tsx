"use client";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";

export function GetStarted({status}: { status?: "authenticated" | "unauthenticated" }) {
	const router = useRouter();

	function signinHandler() {
		router.push("/api/auth/signin");
	}

	function dashboardHandler() {
		router.push("/dashboard");
	}

	if (status === "authenticated") {
		return <Button fill className={'shadow-lg md:p-5 md:m-10 md:text-2xl'} onClick={dashboardHandler}
		               role="link">Dashboard</Button>
	} else {
		return <Button fill className={'shadow-lg md:p-5 md:m-10 md:text-2xl'} onClick={signinHandler} role="link">Get
			Started</Button>
	}
}

export function LearnMore() {
	function clickHandler() {
		window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
	}

	return <Button className={'hidden md:block md:p-5 md:m-10 md:text-2xl'} onClick={clickHandler}>Learn More</Button>
}