'use client'
import { useInView } from 'react-intersection-observer'
 
export default function MainTitle({text, noUnderline}) {

    const [ref, inView] = useInView({treshold: 1})

    if(noUnderline){
        return (
            <h1 className="uppercase text-lg lg:text-xl tracking-wide">{text}</h1>
          )
    }else{
        

        return(
                <h1
                ref={ref}
                className={
                'uppercase text-lg lg:text-xl tracking-wide max-w-fit ' +
                'overflow-hidden relative ' +
                'after:underline-text-base ' +  
                (inView ? 'after:animate-underline' : '')}
                >
                    {text}
                </h1>
        )
    }
}