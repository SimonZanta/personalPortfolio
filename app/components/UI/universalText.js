'use client'
import { useInView } from 'react-intersection-observer'

//component description
//universal text used all throughout app

//options
//text - string, displayed text
//isSmall - boolean, true sets font size to small
//isUppercase - boolean, checks if text should be uppercase
//isUnderlined - boolean, checks if text should have underline
//isHidden - boolean, hides text
//hasHoverEffect - boolean, if chcked, text will scale up little bit

export default function TextFont({text, isSmall, isUppercase, isUnderlined, isHidden, hasHoverEffect}){
    const [ref, inView] = useInView({treshold: 1})
    return(
        <span ref={ref} className={
            (!isSmall ? "md:text-base text-[25px] " : "text-sm ") +
            (isUppercase ? "uppercase " : "") + 
            (isUnderlined ? "block relative tracking-wide max-w-fit after:underline-text-base " : "") + 
            (inView & isUnderlined ? "after:animate-underline " : "") + 
            (isHidden ? "hidden " : "") + 
            (hasHoverEffect ? "block hover:scale-105 text-link " : "")
            }>
            {text}
        </span>
    )
}