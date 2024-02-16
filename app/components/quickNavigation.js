'use client';
import {useState, Suspense, useEffect} from 'react';
import TextFont from './UI/universalText.js';
import { lazy } from 'react';


export default function ContentBox({toLeft, textShort, textLong, imgName}){


        // this dynamically imports icons as a components
        // TODO: replace default import of aboutMe to Load component

        //firstly initialize component IconLoad - it has to have Capitalize first word to be component
        const [IconLoad, iconIsLoading] = useState(lazy(() => import('./icons/aboutMeSvg.js')))

        //this will update IconLoad for the first time to its correct component
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
                    {/* //TODO remake this to use two textFont for textShort and textLong */}
                    <span className='hidden lg:block'><TextFont text={isHovering ? textShort : textLong} isSmaller={isHovering ? true : false} isUppercase={true} /></span>
                </div>      
            </div>
        )
}