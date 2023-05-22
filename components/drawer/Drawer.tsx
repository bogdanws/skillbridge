import Button from "@/components/drawer/Button";
import {RxHamburgerMenu} from "react-icons/rx";
import {FiSearch} from "react-icons/fi";
import {BsPersonCircle} from "react-icons/bs";

export default function Drawer() {
    return <>
        <div className={'h-12'}/>
        <div className={'h-12 w-full z-10 fixed top-0 flex flex-row justify-between items-center border-b border-grey bg-white'}>
            <Button label="Menu"><RxHamburgerMenu className={'w-[1.5em] h-[1.5em]'}/></Button>
            <div>
                <Button label="Search"><FiSearch className={'w-[1.5em] h-[1.5em]'}/></Button>
                <Button label="Profile"><BsPersonCircle className={'w-[1.5em] h-[1.5em]'}/></Button>
            </div>
        </div>
    </>
}