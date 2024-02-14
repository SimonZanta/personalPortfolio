import Image from 'next/image';

export default function IconLink({link="/personalPortfolio", icon, isSmall=false}){
    //TODO create animation for hover
    return(
        <a href={link} target="_blank">
            <Image
            src={"/personalPortfolio/icons/" + icon}
            width={0}
            height={0}
            alt={"icon"}
            sizes="100vw"
            className={"pr-4  " + (isSmall ? "w-14" : "pl-4 w-20 h-20 md:w-32 md:h-32")}/>
        </a>
    )
}