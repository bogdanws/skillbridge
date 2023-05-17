import Button from "@/components/Button";

export default function Header() {
    return <div className={'relative border-2 border-gray m-4'}>
        <img src={'Header_bg.svg'} alt="" style={{
            opacity: 0.5,
            transform: 'scaleX(-1)',
        }}/>
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
