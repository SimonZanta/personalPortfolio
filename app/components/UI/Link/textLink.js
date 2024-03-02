import TextFont from "../universalText"

//component description:
//used to display TextFont with link attached to it

//options: 
//text - string, displayed text
//isUnderlined - boolean, checks if text should have underline
//isUppercase - boolean, checks if text should be uppercase
//isSmall - boolean, true sets font size to small
//link - string, points to some URL

export default function TextLink({text, isUnderlined, isUppercase, isSmall, link=".", hasHoverEffect = true}){
    return(
        <a href={link}><TextFont text={text} isUnderlined={isUnderlined} isUppercase={isUppercase} isSmall={isSmall} hasHoverEffect={hasHoverEffect}/></a>
    )
}