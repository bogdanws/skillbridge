export default function Button({children, label}: {children:React.ReactNode, label?: string}) {
    return <button className={'hover:bg-gray text-primary-950 p-3'} aria-label={label}>{children}</button>;
}