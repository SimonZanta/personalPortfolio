'use client'
import { useState } from "react";
import TextFont from "./UI/universalText";
import Image from 'next/image'
import TextLink from "./UI/Link/textLink";

//component description
//small tile that displays project

//options
//title - string, name of the project
//technologies - array, technologies used for this project - 1 or 2 optimally
//img - string, img name in "/personalPortfolio/projectBackground/" used as a project background
//link - URL, url leading to project github page

export default function ProjectTile({title, technologies, img="Rectangle.png", link="https://github.com/simonZanta"}){

    const [isHovering, setIsHovering] = useState(false);

    function setHoverTrue() {
        setIsHovering(true)
    }

    function setHoverFalse(){
        setIsHovering(false)
    }
    return(
        <div className="bg-secondary overflow-hidden w-full xl:h-56 h-40 rounded-xl relative" 
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}>
            <Image src={"/personalPortfolio/projectBackground/" + img} alt={title} width={0} height={0} sizes="100vw" className={"md:w-[500px] h-auto w-64 absolute left-16 top-16 rounded-xl shadow-[0px_0px_4.4px_7.7px_rgba(20,20,20,0.25)] " + (isHovering ? "scale-110 duration-500" : "scale-100 duration-500")}/>
            <div className={'absolute w-full h-full bg-mainBackground bg-opacity-80 ' + (isHovering ? 'translate-y-2/3 duration-500' : 'translate-y-0 duration-500')}>
                <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " + (isHovering ? "invisible" : "visible delay-[400ms]")}><TextFont text={title} isUppercase={true}/></div>
                {/* TODO: add github link to project */}
                <a href={link}><div className={"absolute top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 " + (isHovering ? "visible delay-[450ms]" : "invisible")}>
                    <div className="flex gap-3">
                        { technologies.map((value)=>(
                            <TextFont text={value} isUppercase={true} link={"."}/>
                        ))}
                    </div>
                </div></a>
            </div>
        </div>
        
    )
}

