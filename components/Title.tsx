import {PT_Serif} from "next/font/google";
const font = PT_Serif({weight: "700", style: "italic", subsets: ['latin-ext']})

export default function Title({children}: {children: string}){
    return <h2 className={font.className + " text-xl"}>{children}</h2>
}