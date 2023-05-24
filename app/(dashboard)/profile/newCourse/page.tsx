import Card from "@/components/forms/Card";
import Input from "@/components/forms/Input";
import Label from "@/components/forms/Label";
import Submit from "@/components/forms/Submit";

export default function NewCourse() {
	return <div className={'m-4'}>
		<h1 className={"text-3xl font-semibold mb-3"}>Create a new course</h1>
		<Card>
			<h2 className={"text-2xl font-semibold mb-3"}>Name & Description</h2>
			<Label htmlFor="name">Course name</Label>
			<Input placeholder="Pick a name for your course" name="name" id="name" type="text"/>
			<Label htmlFor="description">Description</Label>
			<Input placeholder="Add a description" name="description" id="description" type="text"/>
		</Card>
		<Card>
			<h2 className={"text-2xl font-semibold mb-3"}>Course image</h2>
			<Label htmlFor="image">Image URL</Label>
			<Input placeholder="Add an image URL" name="image" id="image" type="text"/>
		</Card>
		<Card>
			<h2 className={"text-2xl font-semibold mb-3"}>Price</h2>
			<Label htmlFor="price">Amount</Label>
			<Input placeholder="Add a price" name="price" id="price" type="number"/>
		</Card>
		<div className={'w-full flex justify-center'}>
			<Submit className={'w-1/3'}>Create</Submit>
		</div>
	</div>
}