import Title from "@/components/Title";
import {ContentSlider, ContentSliderItem} from "@/app/(index)/ContentSlider";

export default function ContentView() {
    return (
        <div className={"m-3"}>
            <Title>Master new skills or boost your existing talents...</Title>
            <ContentSlider>
                <ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"} image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
                <ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"} image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
              <ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"} image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
              <ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"} image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
                <ContentSliderItem title={"Cloudy day at Mizuki"} author={"Kawase Hasui"} price={"$29.99"} image={"https://images.unsplash.com/photo-1684410767605-2a6fd002b346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80"}/>
            </ContentSlider>
        </div>
    );
}
