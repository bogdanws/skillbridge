"use client";
import {User} from "@prisma/client";
import Label from "@/components/forms/Label";
import Input from "@/components/forms/Input";
import Submit from "@/components/forms/Submit";

export default function PersonalInfo({user}: { user: User }) {
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const body = {
			name: formData.get("name"),
			image: formData.get("image")
		}

		const res = await fetch("/api/user/personalInfo", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (res.ok) {
			alert("Saved!");
		} else {
			alert("Error! Please try again.");
		}
	}

	return <div className={"m-3"}>
		<h1 className={"text-2xl font-semibold mb-3"}>Personal info</h1>
		<form onSubmit={handleSubmit}>
			<Label htmlFor="name">Name</Label>
			<Input type="text" name="name" id="name" placeholder={"Name"} defaultValue={user.name!} minLength={3}/>
			<Label htmlFor="image">Avatar URL</Label>
			<Input type="text" name="image" id="image" placeholder={"Avatar"} defaultValue={user.image!}/>
			<Submit>Save</Submit>
		</form>
	</div>
}
