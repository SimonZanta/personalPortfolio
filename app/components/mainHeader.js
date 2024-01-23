import NavBar from './universal/navBar';
import MainTitle from './font/mainTitle';

export default function MainHeader(){

    return (
        <section className='h-screen'>
          <div className='relative'>
            <img src='/background/keyboard.jpg' className='absolute gradient-mask-b-0 filter blur-sm hue-rotate-[-30deg] aspect-video'></img>
          </div>
          <div className='absolute flex flex-col p-5 lg:pt-5 pt-10 lg:p-32 gap-14'>
            <MainTitle text={"šimon"} noUnderline={true}/>
            <MainTitle text={"tech"} noUnderline={true}/>
            <MainTitle text={"ventures"} noUnderline={true}/>
          </div>
        </section>
        )
}