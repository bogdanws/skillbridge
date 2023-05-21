"use client";
import Button from "@/components/Button";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export function GetStarted() {
	const {data: session, status} = useSession();
	const router = useRouter();

	function signinHandler() {
		router.push("/api/auth/signin");
	}
	function dashboardHandler() {
		router.push("/dashboard");
	}

	if (status === "loading" || status === "unauthenticated") {
		return <Button fill className={'shadow-lg md:p-5 md:m-10 md:text-2xl'} onClick={signinHandler} role="link">Get Started</Button>
	} else {
		return <Button fill className={'shadow-lg md:p-5 md:m-10 md:text-2xl'} onClick={dashboardHandler} role="link">Dashboard</Button>
	}
}

export function LearnMore() {
	function clickHandler() {
		window.scrollTo({top: window.innerHeight * 0.9, behavior: 'smooth'});
	}

	return <Button className={'hidden md:block md:p-5 md:m-10 md:text-2xl'} onClick={clickHandler}>Learn More</Button>
}