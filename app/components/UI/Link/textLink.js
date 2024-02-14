import TextFont from "../universalText"
export default function TextLink({text, isUnderlined, link="."}){
    return(
        <a href={link}><TextFont text={text} isUnderlined={isUnderlined} hasHowerEffect={true}/></a>
    )
}