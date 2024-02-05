export default function Section({children, smIsHidden = false }){
    return(
        <section className={'min-h-[75vh] mx-5 lg:mx-32 relative ' + (smIsHidden ? 'hidden md:block' : '')}>
            {children}
        </section>
    )
}

