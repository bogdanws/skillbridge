"use client";

import {MouseEventHandler} from "react";

export default function Button({ children, fill, className, onClick }: {
    children: string | React.ReactNode,
    fill?: boolean,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}) {
    const style = fill ? "bg-primary text-white border-0" : "bg-white text-primary border-4 border-primary";

    return <button className={`p-3 rounded-md m-2 ${style} ${className}`} onClick={onClick}>
        {children}
    </button>
}