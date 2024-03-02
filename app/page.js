import React from 'react'
import ContentBox from './components/quickNavigation';
import MainHeader from './components/welcomeBlock';
import Section from './components/UI/section';
import MainTitle from './components/UI/headerText';
import {MainTitleLink} from './components/UI/headerText';
import TextFont from './components/UI/universalText'
import SkillBlock from './components/skillBlock'
import ProjectTile from './components/projectBlock'
import IconLink from './components/UI/Link/iconLink';
import { skillDict } from './files/skillDictionary'
import { templateDict } from './files/projectDictionary';


const quoteFlood = {
  'Šimon': ["about me", "Passionate developer and dedicated student", "aboutMeSvg.js"],
  'projects': ["my projects", "From JavaScript enthusiast to java developer", "projectSvg.js"],
  'contacts': ["contacts", "want to get to me right away?", "contactMeSvg.js"]
}

export default async function Home() {
  let imageSize = 0;
  return (
      <main>
        <MainHeader/>
        <Section smIsHidden={true}>
            <div className='absolute top-1/2 -translate-y-1/2 w-full'>
              {Object.entries(quoteFlood).map(([key, value], index) => {
                let shouldBeLeft = index % 2 != 0
                return(
                  <div className={(index != 0 ? 'mt-[-8px]' : '')}>
                    <ContentBox 
                    toLeft={shouldBeLeft} 
                    textLong={value[0]} 
                    textShort={value[1]} 
                    imgName={value[2]}
                    linkID={key}/>
                  </div>
                )})}                
            </div>
        </Section>
        <Section ID="Šimon">
          <div className={'flex min-h-screen flex-col md:flex-row '}>
            <div className='flex flex-col'>
              <span className='pt-20'>
                <MainTitle text="Šimon"/>
              </span>
              <span className='md:pt-20 pt-14 '>
                <TextFont text="Thats me!" isSmaller={true}/>
              </span>
              <span className='md:w-2/3 text-left md:pt-20 pt-10'>
                <TextFont
                text="An aspiring student, transitioning from Frontend development in JavaScript to Java development for desktop and web applications."/>
              </span>
            </div>
            <>
              <SkillBlock skillDict={skillDict}/>
            </>
          </div>
        </Section>
        <Section ID="projects">
          <div className='flex min-h-1/2 flex-col-reverse xl:flex-row'>
            <div className='w-full xl:w-1/2 xl:h-screen flex flex-col md:flex-row xl:flex-col md:gap-24 gap-16 justify-center md:pt-0 pt-20 mb-32 xl:mb-0'>
                {templateDict.map((value) => (
                  
                    <div className='sm:w-2/3'><ProjectTile title={value.title} technologies={value.displayTechnologies}/></div>
                  
                ))}
            </div>
            <span className='xl:mt-auto xl:mb-auto md:mt-32 md:mb-32 lg:mb-40 lg:mt-28 mt-40'>
              <MainTitleLink text="projects"/>
            </span>
          </div>
        </Section>
        <Section ID="contacts">
          <div className='flex flex-col 2xl:flex-row'>
            <span className='xl:mt-auto xl:mb-auto md:mt-32 md:mb-32 lg:mb-40 lg:mt-28 mt-40'>
              <MainTitle text="contacts"/>
            </span>
            <div className='w-full xl:w-1/2 xl:h-[50vh] flex flex-row md:gap-16 gap-6 justify-center lg:justify-end items-center md:pt-0 pt-20 mb-32 xl:mb-0'>
                <IconLink link={"https://www.linkedin.com/in/simonzanta/"} icon={"linkedInLogo.svg"} />
                <IconLink link={"https://github.com/simonZanta"} icon={"githubIcon.svg"} />
                <IconLink link={"mailto:simon.zanta@protonmail.com"}icon={"EmailIcon.svg"} />
            </div>            
          </div>
        </Section>
        <section className='h-[10vh]'>
            <div className='flex justify-center gap-12 items-center h-full'>
              <TextFont text={"@simon.zanta"} isSmaller={true}/>
              <TextFont text={"2023"} isSmaller={true}/>
            </div>
        </section>
      </main>
  )
}
