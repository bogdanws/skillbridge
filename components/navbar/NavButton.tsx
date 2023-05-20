export default function NavButton({children, label}: {children: string | React.ReactElement, label?: string}) {
    return <button className={'hover:bg-gray p-3'} aria-label={label}>{children}</button>;
}