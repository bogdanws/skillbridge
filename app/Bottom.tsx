import Button from "@/components/Button";
import {RiArrowRightSFill} from "react-icons/ri";
export function Bottom() {
    return <div className={'relative h-[30vh]'}>
        <img src={'Header_bg.svg'} alt="" className={'absolute w-[60%] bottom-0 left-0'} />
        <div className={'absolute flex flex-col justify-center items-center top-0 left-0 right-0 mx-1'}>
            <p>Connecting aspiring learners with passionate experts for unparalleled growth!</p>
        </div>
        <div className={'absolute right-5 top-0 bottom-0 flex justify-center flex-col'}>
            <Button fill className={'shadow-lg'}>Get Started<RiArrowRightSFill className={'w-[2em] h-[2em]'}/></Button>
        </div>
    </div>
}
