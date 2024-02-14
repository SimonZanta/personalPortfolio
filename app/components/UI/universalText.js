'use client'
import { useInView } from 'react-intersection-observer'

export default function TextFont({text, isSmaller, isUppercase, isUnderlined, isHidden, hasHowerEffect}){
    const [ref, inView] = useInView({treshold: 1})
    return(
        <span ref={ref} className={
            (!isSmaller ? "md:text-base text-[25px] " : "text-sm ") +
            (isUppercase ? "uppercase " : "") + 
            (isUnderlined ? "block relative tracking-wide max-w-fit after:underline-text-base " : "") + 
            (inView & isUnderlined ? "after:animate-underline " : "") + 
            (isHidden ? "hidden " : "") + 
            (hasHowerEffect ? "block hover:scale-105 " : "")
            }>
            {text}
        </span>
    )
}