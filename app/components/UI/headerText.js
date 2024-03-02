'use client'
import { useInView } from 'react-intersection-observer'
 
//component description
//used to create heading, applies underline animation by default if component is in view

//options
//text - string, text to be displayed
//noUnderline - boolean, if true, text wont be underlined and wont have animation

export default function MainTitle({text, noUnderline, hasHoverEffect}) {

    const [ref, inView] = useInView({treshold: 1})
    return(
            <h1
            ref={ref}
            className={
            'uppercase text-lg lg:text-xl tracking-wide ' + 
            'overflow-hidden relative ' + 
            (inView ? 'after:animate-underline max-w-fit ' : '') +
            (noUnderline ? '' : 'after:underline-text-base ') + 
            (hasHoverEffect ? "block hover:scale-105 text-link " : "")}
            >
                {text}
            </h1>
    )
}

export function MainTitleLink({text}){
    return(
            <a href="./personalPortfolio/projects">
                <MainTitle text={text} hasHoverEffect={true}/>
            </a>
    )
}