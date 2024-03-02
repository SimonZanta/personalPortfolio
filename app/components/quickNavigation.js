'use client';
import {useState, Suspense, useEffect} from 'react';
import TextLink from './UI/Link/textLink.js';
import { lazy } from 'react';

//component description
//stylish navigation for main page, not relly any other use

//options
//toLeft - boolean, if true component will have content on the left
//textShort - string, main text displayed as name of navigation]
//textLong - string, more detailed description of the title
//imgName - string, name of icon component stored in "./icons/"
//linkID - string, id name of element this navigation links to

export default function ContentBox({toLeft, textShort, textLong, imgName, linkID}){


        // this dynamically imports icons as a components
        // TODO: replace default import of aboutMe to Load component

        //firstly initialize component IconLoad - it has to have Capitalize first word to be component
        const [IconLoad, iconIsLoading] = useState(lazy(() => import('./icons/aboutMeSvg.js')))

        //this will update IconLoad for the first time so its correct component
        useEffect(() => {
            let myComponentPath = "./icons/" + imgName;
            iconIsLoading(lazy(() => import(`${myComponentPath}`)));
            
        }, [])

        const [isHovering, setIsHovering] = useState(false);

        function setHoverTrue() {
            setIsHovering(true)
        }

        function setHoverFalse(){
            setIsHovering(false)
            
        }

        const link = "#" + linkID;

        console.log(link)

        return(

            <div className={(toLeft ? 'lg:ml-auto lg:mr-0 lg:hover:translate-x-20 bg-gradient-to-l' : 'lg:hover:-translate-x-20 bg-gradient-to-r') + 
            " from-secondary lg:from-50% from-10% lg:w-2/3 p-2 rounded-3xl transition duration-200 h-32"}
                onMouseEnter={setHoverTrue}
                onMouseLeave={setHoverFalse}
                >
                <div className={'bg-mainBackground rounded-2xl h-28 w-full flex p-4 items-center ' + (toLeft ? 'ml-auto text-right flex-row-reverse' : '')}>
                    <Suspense fallback={<div></div>}>
                        <IconLoad className={"w-16 h-16 px-4 " + (isHovering ? "invisible" : "visible")}/>
                    </Suspense>
                    <span className='hidden lg:block'><TextLink text={isHovering ? textShort : textLong} isSmall={isHovering ? true : false} isUppercase={true} link={link}/></span>
                </div>      
            </div>
        )
}