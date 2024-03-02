//component description
//used to create container for section of a page

//options
//children - element, added automatically, all elements inside of the section
//smIsHidden - boolean, if true this section will be hidden on small displays

export default function Section({children, smIsHidden = false, ID}){
    return(
        <section className={'min-h-[75vh] mx-5 lg:mx-32 relative ' + (smIsHidden ? 'hidden md:block' : '')} id={ID}>
            {children}
        </section>
    )
}

