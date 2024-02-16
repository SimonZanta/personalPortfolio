import TextLink from './UI/Link/textLink'
import IconLink from './UI/Link/iconLink'

const skillDict = {
    'Backend': ["Java", "Python"],
    'Frontend': ["React", "Angular", "JS"],
    'Design': ["Figma"]
}

export default function SkillBlock(){

    return (
    <div className="border-4 border-secondary w-max rounded-xl mb-auto h-min flex flex-col pl-4 pr-14 md:pl-10 md:pr-20 md:mt-auto mt-14 ">
        <SkillItems/>
    </div>
    )
}

export function SkillItems(){
    let imageSize = 0
    return(
        Object.entries(skillDict).map( ([key, value]) => (
            <section className='py-8'>
            <div className='flex flex-row'>
                <IconLink icon={key.toLowerCase() + ".svg"} isSmall={true}/>
                <TextLink text={key}/>
            </div>

            <ul className='pl-20 md:pl-24'>
                {value.map((skillName, index) => (
                    <li className='pt-4' key={index}><TextLink text={skillName} isUnderlined={true}/></li>
                ))}
            </ul>
            </section>
            
        ))
    )
}