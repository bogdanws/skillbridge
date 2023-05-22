'use client';
import Button from "@/components/drawer/Button";
import {ImHome} from "react-icons/im";
import {FiSearch} from "react-icons/fi";
import {BsChatLeftDotsFill, BsFillPersonFill} from "react-icons/bs";

const iconSize = '1.5rem';

export default function Drawer() {
	return <>
		<div className={'h-16 md:w-16'}/>
		<div
			className={'h-16 md:h-full w-full md:w-16 z-10 fixed bottom-0 md:left-0 flex flex-row md:flex-col justify-center ' +
        'border-t-2 md:border-r-2 border-primary-950 bg-white rounded'}>
			<Button label="Home"><ImHome size={iconSize}/></Button>
			<Button label="Search"><FiSearch size={iconSize}/></Button>
			<Button label="Chat"><BsChatLeftDotsFill size={iconSize}/></Button>
			<Button label="Profile"><BsFillPersonFill size={iconSize}/></Button>
		</div>
	</>
}
