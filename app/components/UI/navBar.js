export default function NavBar({linkArr}){
    if(linkArr){
        return(
            <nav className="uppercase group block text-center text-base lg:text-right h-max">
                <label htmlFor="menuCheck" className="lg:bg-mainBackground bg-mainBackgroundDark 
                                                    block relative z-10 w-full uppercase py-2
                                                    lg:text-right text-center shadow-[0_-2.5rem_0_0_#141414]">menu</label>
                <input type="checkbox" id="menuCheck" className="peer hidden"></input>
                <ul className="translate-y-[-23.5rem] pointer-events-none lg:group-hover:pointer-events-auto lg:w-auto w-full fixed peer-checked:translate-y-[0] lg:group-hover:translate-y-[0] lg:bg-transparent bg-mainBackgroundDark py-10 transition duration-200">
                    {linkArr.map((link, index) => (<li className="pb-5" key={index}><a href="">{link}</a></li>))}
                </ul>
            </nav>
        )
    }
    
}