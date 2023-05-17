export default function Button({children, fill, className}: {children: string, fill?: boolean, className?: string}) {
    const style = fill ? "bg-primary text-white border-0" : "bg-white text-primary border-4 border-primary";

    return <button className={`p-3 rounded-md m-2 ${style} ${className}`}>
        {children}
    </button>
}