import Image from 'next/image';

export default function IconLink({link="/personalPortfolio", icon, isSmall=false}){
    //TODO create animation for hover
    return(
        <a href={link} target="_blank" className={'pr-4' + (isSmall ? "" : "pl-4")}>
            <Image
            src={"/personalPortfolio/icons/" + icon}
            width={0}
            height={0}
            alt={"icon"}
            sizes="100vw"
            className={" hover:animate-shake origin-center " + (isSmall ? "w-10" : "w-14 h-14 md:w-24 md:h-24") }/>
        </a>
    )
}