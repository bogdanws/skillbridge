import {PT_Serif} from "next/font/google";
const font = PT_Serif({weight: "700", style: "italic", subsets: ['latin-ext']})

export default function Title({children, className}: {children: string, className?: string}){
    return <h2 className={`${font.className} ${className} text-2xl md:text-4xl mx-3 md:mx-6`}>{children}</h2>
}