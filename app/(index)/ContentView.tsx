import Title from "@/app/(index)/Title";
import {ContentSlider, ContentSliderItem} from "@/app/(index)/ContentSlider";

const courses = [
	{
		title: "Learn Brush Painting",
		image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
		price: "$15",
	},
	{
		title: "Programming basics",
		image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
		price: "$30",
	},
	{
		title: "Creative writing",
		image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
		price: "$20",
	},
	{
		title: "Psychology of Relationships",
		image: "https://images.unsplash.com/photo-1613870221528-f7a918522a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHN5Y2hvbG9neSUyMG9mJTIwbW9uZXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		price: "$25",
	},
	{
		title: "Introduction to biology",
		image: "https://images.unsplash.com/photo-1532153470116-e8c2088b8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		price: "$40",
	},
	{
		title: "JavaScript basics",
		image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amF2YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
		price: "$25"
	},
	{
		title: "Learn to crochet",
		image: "https://images.unsplash.com/photo-1619234711431-644a9d28d6ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyb2NoZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
		price: "$15"
	},
	{
		title: "Math101",
		image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
		price: "$20"
	},
	{
		title: "Sustainable Gardening",
		image: "https://images.unsplash.com/photo-1580600301354-0ce8faef576c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R0FSREVOfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
		price: "$30"
	},
	{
		title: "Mastering the piano",
		image: "https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlhbm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		price: "$40"
	}
]
const authors = [
	{
		name: "Sophia Morrow",
		image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYWNoZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
		rating: 4.5,
	},
	{
		name: "Irene Gillis",
		image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
		rating: 4.2,
	},
	{
		name: "Anthony Haller",
		image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		rating: 4.8,
	},
	{
		name: "Robert Wilt",
		image: "https://images.unsplash.com/photo-1525954322486-aa196091220f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhY2hlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
		rating: 4.6,
	},
	{
		name: "Paula Leavitt",
		image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
		rating: 4.2,
	}
]

export default function ContentView() {
	return (
		<div className={"m-3"}>
			<Section>
				<Title>Master new skills or boost your existing talents...</Title>
				<ContentSlider>
					{courses.slice(0, 5).map((course, index) => (
						<ContentSliderItem key={index} title={course.title} author={authors[index].name}
						                   price={course.price} image={course.image}/>
					))}
				</ContentSlider>
			</Section>
			<Section>
				<Title className={"md:text-right"}>Explore Arts, Tech, Fitness & More!</Title>
				<ContentSlider className={"bg-gradient-to-b from-primary-400 to-primary-700 rounded"}>
					{courses.slice(5, 11).map((course, index) => (
						<ContentSliderItem key={index} title={course.title} author={authors[index].name}
						                   price={course.price} image={course.image}/>
					))}
				</ContentSlider>
			</Section>
			<Section>
				<Title>Or teach others what you love!</Title>
				<ContentSlider>
					{authors.map((author, index) => (
						<ContentSliderItem key={index} title={author.name}
						                   image={author.image} rating={author.rating}/>
					))}
				</ContentSlider>
			</Section>
		</div>
	);
}


function Section({children}: { children: React.ReactNode }) {
	return <section className={"py-10"}>{children}</section>;
}