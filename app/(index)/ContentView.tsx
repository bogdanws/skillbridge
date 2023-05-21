import Title from "@/app/(index)/Title";
import {ContentSlider, ContentSliderItem} from "@/app/(index)/ContentSlider";

export default function ContentView() {
	return (
		<div className={"m-3"}>
			<Section>
				<Title>Master new skills or boost your existing talents...</Title>
				<ContentSlider>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
				</ContentSlider>
			</Section>
			<Section>
				<Title className={"text-right"}>Explore Arts, Tech, Fitness & More!</Title>
				<ContentSlider className={"bg-gradient-to-b from-primary-400 to-primary-700 rounded"}>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
				</ContentSlider>
			</Section>
			<Section>
				<Title>Or teach others what you love!</Title>
				<ContentSlider>
					<ContentSliderItem title={"Kawase Hasui"} rating={4.5}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Kawase Hasui"} rating={4.5}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Kawase Hasui"} rating={4.5}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Kawase Hasui"} rating={4.5}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
					<ContentSliderItem title={"Kawase Hasui"} rating={4.5}
					                   image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
				</ContentSlider>
			</Section>
		</div>
	);
}


function Section({children}: { children: React.ReactNode }) {
	return <section className={"py-10"}>{children}</section>;
}