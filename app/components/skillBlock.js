import TextLink from './UI/Link/textLink'
import IconLink from './UI/Link/iconLink'
import Section from './UI/section'
import TextFont from './UI/universalText'

//component description
//displays all skills, their category names
//TODO feat link to project page and filter by selected skill or category

//options
//skillDict - dictionary, key - skill category, value - skill name

export default function SkillBlock({skillDict}){

    return (
    <div className="border-4 border-secondary w-max md:w-[50vw] rounded-xl mb-auto h-min flex flex-col pl-4 pr-14 md:pl-10 md:pr-20 md:mt-auto mt-14 ">
        <SkillItems skillDict={skillDict}/>
    </div>
    )
}

export function SkillItems({skillDict}){
    if(skillDict != null || skillDict != undefined){
        return(

            Object.entries(skillDict).map(([key, value]) => (
                
                <section className='py-8'>
                    <div className='flex flex-row'>
                        <IconLink icon={key + ".svg"} isSmall={true}/>
                        <TextFont text={key}/>
                    </div>

                    <ul className='pl-20 md:pl-24'>
                    {value.map((skillName, index) => (
                            <li className='pt-4' key={index}><TextFont text={skillName} isUnderlined={true}/></li>
                        ))}
                    </ul>
                </section>
            ))
        )
    }
}