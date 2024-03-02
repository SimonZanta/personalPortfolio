import NavBar from './UI/navBar';
import MainTitle from './UI/headerText';
import Image from 'next/image'

//component description
//welcome section on main page

export default function MainHeader(){

    return (
        <section className='h-screen'>
          <div className='relative'>
            <Image src="/personalPortfolio/background/obstract.png" width={0} height={0} sizes="100vw" className='h-screen w-auto absolute invisible lg:visible'/>
            <div className='absolute h-screen w-full bg-gradient-to-t from-mainBackground  from-10%'></div>
          </div>
          <div className='absolute flex flex-col p-5 pt-10 lg:p-32 gap-14 top-1/4 -translate-y-1/4 md:text-end'>
            <MainTitle text={"šimon"} noUnderline={true}/>
            <MainTitle text={"tech"} noUnderline={true}/>
            <MainTitle text={"ventures"} noUnderline={true}/>
          </div>
        </section>
        )
}