export default function NavButton({children}: {children: string | React.ReactElement}) {
    return <button className={'hover:bg-gray p-3'}>{children}</button>;
}