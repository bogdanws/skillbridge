"use client";
import {TeacherProfile} from "@prisma/client";
import Link from "next/link";

export default function TeacherProfile({teacher}: { teacher: TeacherProfile }) {
	return <div className={"m-3"}>
		<h1 className={"text-2xl font-semibold mb-3"}>Teacher profile</h1>
		<form>

		</form>
	</div>
}

export function OnboardTeacherProfile() {
	return <div className={"m-3"}>
		<h1 className={"text-2xl font-semibold mb-3"}>Teacher profile</h1>
		<Link href={"/api/user/teacher/onboard"}
		      className={"bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded m-3"}>
			Set up your teacher account
		</Link>
	</div>
}