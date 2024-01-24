'use client'
import { useState } from "react";
import TextFont from "./font/smallestFont";
import Image from 'next/image'

export default function ProjectTile({projectTitle, projectTechnologies}){

    const [isHovering, setIsHovering] = useState(false);

    function setHoverTrue() {
        setIsHovering(true)
    }

    function setHoverFalse(){
        setIsHovering(false)
    }
    return(
        <div className="bg-secondary overflow-hidden w-full sm:w-2/3 xl:h-72 h-44 rounded-xl relative" 
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}>
            <Image src="./projectBackground/Rectangle.png" alt={projectTitle} width={0} height={0} sizes="100vw" className={"md:w-[500px] h-auto w-64 absolute left-16 top-16 rounded-xl shadow-[0px_0px_4.4px_7.7px_rgba(20,20,20,0.25)] " + (isHovering ? "scale-110 duration-500" : "scale-100 duration-500")}/>
            <div className={'absolute w-full h-full bg-mainBackground bg-opacity-60 ' + (isHovering ? 'translate-y-2/3 duration-500' : 'translate-y-0 duration-500')}>
                <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " + (isHovering ? "invisible" : "visible delay-[400ms]")}><TextFont text={projectTitle} isUppercase={true}/></div>
                <div className={"absolute top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 " + (isHovering ? "visible delay-[450ms]" : "invisible")}><TextFont text={projectTechnologies} isUppercase={true}/></div>
            </div>
        </div>
    )
}