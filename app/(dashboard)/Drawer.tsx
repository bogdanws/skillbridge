'use client';
import Link from "next/link";
import {ImHome} from "react-icons/im";
import {FiSearch} from "react-icons/fi";
import {BsChatLeftDotsFill, BsFillPersonFill} from "react-icons/bs";
import {usePathname} from "next/navigation";

const iconSize = '1.5rem';
const routes = [
	{
		path: '/dashboard',
		label: 'Home',
		icon: <ImHome size={iconSize}/>,
	},
	{
		path: '/search',
		label: 'Search',
		icon: <FiSearch size={iconSize}/>,
	},
	{
		path: '/chat',
		label: 'Chat',
		icon: <BsChatLeftDotsFill size={iconSize}/>,
	},
	{
		path: '/profile',
		label: 'Profile',
		icon: <BsFillPersonFill size={iconSize}/>,
	}
];

export default function Drawer() {
	const pathname = usePathname();
	const active = (path: string) => pathname.startsWith(path);

	return <div
		className={'h-16 md:w-20 w-full md:h-full z-10 flex flex-row md:flex-col justify-center ' +
			'max-md:border-t md:border-r border-black rounded'}>
		{routes.map((route) =>
			<NavButton key={route.path} path={route.path} label={route.label} active={active(route.path)}>
				{route.icon}
			</NavButton>)}
	</div>
}


function NavButton({children, label, active, path}: {
	children: React.ReactNode,
	label?: string,
	active?: boolean,
	path: string
}) {
	const activeClass = active ? 'bg-primary-900 text-white' : 'hover:bg-neutral-200 text-neutral-700';

	return <Link href={path}
	             className={activeClass + ' p-4 max-md:py-0.5 flex flex-col justify-center items-center rounded-lg m-0.5 transition-colors'}
	             aria-label={label}>
		{children}
		<span className={'font-medium'}>
        {label}
      </span>
	</Link>;
}