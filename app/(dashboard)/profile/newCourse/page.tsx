"use client";
import Card from "@/components/forms/Card";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";
import Submit from "@/components/forms/Submit";

export default function NewCourse() {
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		const res = await fetch('/api/user/teacher/newCourse', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok) {
			const error = await res.json();
			error.message ? alert(error.message) : alert('An error occurred');

			return;
		} else {
			alert('Course created!');
			window.location.href = '/dashboard';
		}
	}

	return <form className={'m-4'} onSubmit={handleSubmit}>
		<h1 className={"text-3xl font-semibold mb-3"}>Create a new course</h1>
		<Card>
			<h2 className={"text-2xl font-semibold mb-3"}>Name & Description</h2>
			<Label htmlFor="name">Course name</Label>
			<Input placeholder="Pick a name for your course" name="name" id="name" type="text" required={true}/>
			<Label htmlFor="description">Description</Label>
			<Input placeholder="Add a description" name="description" id="description" type="text"/>
		</Card>
		<Card>
			<h2 className={"text-2xl font-semibold mb-3"}>Course image</h2>
			<Label htmlFor="image">Image URL</Label>
			<Input placeholder="Add an image URL" name="image" id="image" type="text" required={true}/>
		</Card>
		<Card>
			<h2 className={"text-2xl font-semibold mb-3"}>Price</h2>
			<Label htmlFor="price">Amount</Label>
			<Input placeholder="Add a price" name="price" id="price" type="number" min={0} required={true}/>
		</Card>
		<div className={'w-full flex justify-center'}>
			<Submit className={'w-1/3'}>Create</Submit>
		</div>
	</form>
}