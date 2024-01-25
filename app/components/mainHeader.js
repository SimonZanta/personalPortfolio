import NavBar from './universal/navBar';
import MainTitle from './font/mainTitle';
import Image from 'next/image'

export default function MainHeader(){

    return (
        <section className='h-screen'>
          <div className='relative'>
            <div className='absolute h-screen gradient-mask-b-0'></div>
            <Image src="/personalPortfolio/background/obstract.png" width={0} height={0} sizes="100vw" className='h-screen w-auto absolute invisible gradient-mask-b-0 lg:visible'/>px
          </div>
          <div className='absolute flex flex-col p-5 lg:pt-5 pt-10 lg:p-32 gap-14 top-1/4 -translate-y-1/4 md:top-0 md:-translate-y-0'>
            <MainTitle text={"šimon"} noUnderline={true}/>
            <MainTitle text={"tech"} noUnderline={true}/>
            <MainTitle text={"ventures"} noUnderline={true}/>
          </div>
        </section>
        )
}