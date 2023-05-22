'use client';
import Button from "@/components/drawer/Button";
import {RxHamburgerMenu} from "react-icons/rx";
import {ImHome} from "react-icons/im";
import {FiSearch} from "react-icons/fi";
import {BsChatLeftDotsFill, BsFillPersonFill} from "react-icons/bs";

export default function Drawer() {
    return <>
        <div className={'w-40'}/>
        <div
            className={'w-40 h-full z-10 fixed left-0 flex flex-col justify-start items-stretch border-r-2 border-primary-950 bg-white rounded'}>
            <Button label="Menu"><RxHamburgerMenu className={'w-[1.5em] h-[1.5em]'}/></Button>
            <div className={'flex flex-col items-start'}>
                <Button label="Home"><ImHome className={'w-[1.5em] h-[1.5em]'}/> Home</Button>
                <Button label="Search"><FiSearch className={'w-[1.5em] h-[1.5em]'}/> Search</Button>
                <Button label="Chat"><BsChatLeftDotsFill className={'w-[1.5em] h-[1.5em]'}/> Chat</Button>
                <Button label="Profile"><BsFillPersonFill className={'w-[1.5em] h-[1.5em]'}/> Profile</Button>
            </div>
        </div>
    </>
}