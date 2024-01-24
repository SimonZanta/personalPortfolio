import React from 'react'
import ContentBox from './components/contentBox';
import MainHeader from './components/mainHeader';
import Section from './components/universal/section';
import MainTitle from './components/font/mainTitle';
import TextFont from './components/font/smallestFont'
import SkillBlock from './components/skillBlock'
import ProjectTile from './components/projectTile'
import Image from 'next/image';


const quoteFlood = [
  ["Passionate developer and dedicated student", "about me", "aboutMeSvg.js"],
  ["From JavaScript enthusiast to java developer", "my projects", "projectSvg.js"],
  ["want to get to me right away?", "contacts", "contactMeSvg.js"]
]

export default async function Home() {
  let imageSize = 0;
  return (
      <main>
        <MainHeader/>
        <Section fullFlexPage={false}>
            <div className='absolute top-1/2 -translate-y-1/2 w-full'>
              {quoteFlood.map((item, index) => {
                let shouldBeLeft = index % 2 != 0
                return(
                  <div className={(index != 0 ? 'mt-[-8px]' : '')}>
                    <ContentBox 
                    toLeft={shouldBeLeft} 
                    textLong={item[0]} 
                    textShort={item[1]} 
                    imgName={item[2]}/>
                  </div>
                )})}                
            </div>
        </Section>
        <Section>
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
              <SkillBlock/>
            </>
          </div>
        </Section>
        <Section>
          <div className='flex min-h-1/2 flex-col-reverse xl:flex-row'>
            <div className='w-full xl:w-1/2 xl:h-screen flex flex-col md:flex-row xl:flex-col md:gap-36 gap-16 justify-center md:pt-0 pt-20 mb-32 xl:mb-0'>
                <ProjectTile projectTitle="lul" projectTechnologies="xddddd"/>
                <ProjectTile projectTitle="lul" projectTechnologies="xddddd"/>
            </div>
            <span className='xl:mt-auto xl:mb-auto md:mt-32 md:mb-32 lg:mb-40 lg:mt-28 mt-40'>
              <MainTitle text="projects"/>
            </span>
          </div>
        </Section>
        <Section>
          <div className='flex min-h-1/2 flex-col 2xl:flex-row'>
            <span className='xl:mt-auto xl:mb-auto md:mt-32 md:mb-32 lg:mb-40 lg:mt-28 mt-40'>
              <MainTitle text="contacts"/>
            </span>
            <div className='w-full xl:w-1/2 xl:h-screen flex flex-row md:gap-16 gap-6 justify-center lg:justify-end items-center md:pt-0 pt-20 mb-32 xl:mb-0'>
             <Image
                src={"/personalPortfolio/icons/linkedInLogo.svg"}
                width={imageSize}
                height={imageSize}
                alt={"gear"}
                sizes="100vw"
                className={"w-20 h-20 md:w-40 md:h-40 px-4"}/>
                <Image
                src={"/personalPortfolio/icons/githubIcon.svg"}
                width={imageSize}
                height={imageSize}
                alt={"gear"}
                sizes="100vw"
                className={"w-20 h-20 md:w-40 md:h-40 px-4"}/>
                <Image
                src={"/personalPortfolio/icons/EmailIcon.svg"}
                width={imageSize}
                height={imageSize}
                alt={"gear"}
                sizes="100vw"
                className={"w-20 h-20 md:w-40 md:h-40 px-4"}/>
            </div>            
          </div>
        </Section>
        <section className='h-[25vh]'>
            <div className='flex justify-center gap-12 items-center h-full'>
              <TextFont text={"@simon.zanta"}/>
              <TextFont text={"2023"}/>
            </div>
        </section>
      </main>
  )
}
