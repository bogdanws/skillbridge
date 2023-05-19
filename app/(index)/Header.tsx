import Button from "@/components/Button";
import Image from "next/image";
import header_photo from "@/public/Header_bg.svg";

export default function Header() {
    return <div className={'relative h-[30vh] border-2 border-gray m-4'}>
        <Image src={header_photo} alt="" className={"opacity-50 blur-sm -scale-x-100 w-auto h-full absolute bottom-0 right-0 object-bottom object-contain"} />
        <div className={'absolute flex flex-col justify-center items-center top-4 left-0 right-0 pt-1 mx-1'}>
            <h1 className={'font-bold text-2xl md:'}>Learn everything from experts</h1>
            <p>Get access to 1-on-1 lessons on your favorite subjects</p>
            <div className={'flex'}>
                <Button fill className={'shadow-lg'}>Get Started</Button>
                <Button className={'hidden md:block'}>Learn More</Button>
            </div>
        </div>
    </div>
}
