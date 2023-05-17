import {PT_Serif} from "next/font/google";
const font = PT_Serif({weight: "400", style: "italic", subsets: ['latin-ext']})

export default function Title({children}: {children: string}){
    return <h2 className={font.className}>{children}</h2>
}