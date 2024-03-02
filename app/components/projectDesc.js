import TextFont from "./UI/universalText"
import ProjectTile from "./projectBlock"
export default function ProjectDesc({tileValue, title}){
    return(
        <div className="flex gap-10">
            <div className="w-1/3">
                <ProjectTile link={tileValue.link} technologies={tileValue.linkDesc} img={tileValue.img} title={""}/>
            </div>
            <div className="flex flex-col gap-5 overflow-hidden w-2/3">
                <TextFont text={title} isUnderlined={true}/>
                <div className="flex flex-row gap-5">
                { tileValue.technologies.map((value)=>(
                    <TextFont text={value} isUppercase={true} isSmall={true}/>
                ))}
                </div>
                <TextFont text={tileValue.desc} isSmall={true}/>
            </div>
        </div>
    )
}