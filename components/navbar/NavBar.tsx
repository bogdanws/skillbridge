import NavButton from "@/components/navbar/NavButton";
import {RxHamburgerMenu} from "react-icons/rx";
import {FiSearch} from "react-icons/fi";
import {BsPersonCircle} from "react-icons/bs";

export default function Navbar() {
    return <>
        <div className={'h-12'}/>
        <div className={'h-12 w-screen z-10 fixed top-0 flex flex-row justify-between items-center border-b border-grey bg-white'}>
            <NavButton><RxHamburgerMenu className={'w-[1.5em] h-[1.5em]'}/></NavButton>
            <div>
                <NavButton><FiSearch className={'w-[1.5em] h-[1.5em]'}/></NavButton>
                <NavButton><BsPersonCircle className={'w-[1.5em] h-[1.5em]'}/></NavButton>
            </div>
        </div>
    </>


}