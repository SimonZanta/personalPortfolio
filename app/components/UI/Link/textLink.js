import TextFont from "../universalText"
export default function TextLink({text, isUnderlined, link="."}){

//component description:
//used to display TextFont with link attached to it

//options: 
//text - string, displayed text
//isUnderlined - boolean, checks if text should have underline
//isUppercase - boolean, checks if text should be uppercase
//isSmall - boolean, true sets font size to small
//link - string, points to some URL
    return(
        <a href={link}><TextFont text={text} isUnderlined={isUnderlined} hasHowerEffect={true}/></a>
    )
}