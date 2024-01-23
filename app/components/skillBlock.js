import Image from 'next/image'
import TextFont from './font/smallestFont'

const skillDict = {
    'Backend': ["Java", "Python"],
    'Frontend': ["React", "Angular", "JS"],
    'Design': ["Figma"]
}

export default function SkillBlock(){

    return (
    <div className="border-4 border-secondary md:w-2/3 rounded-xl  mb-auto h-min flex flex-col px-8 md:mt-auto mt-14">
        <SkillItems/>
    </div>
    )
}

export function SkillItems(){
    let imageSize = 75
    return(
        Object.entries(skillDict).map( ([key, value]) => (
            <section className='py-8'>
            <div className='flex flex-row'>
                <Image
                src={"/icons/" + key.toLowerCase() + ".svg"}
                width={imageSize}
                height={imageSize}
                alt={"gear"}
                className={"px-4"}/>
                <TextFont text={key}/>
            </div>

            <ul className='pl-24'>
                {value.map((skillName, index) => (
                    <li className='pt-4' key={index}><TextFont text={skillName} isUnderlined={true}/></li>
                ))}
            </ul>
            </section>
            
        ))
    )
}