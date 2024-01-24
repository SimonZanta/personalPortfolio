export default function Section({children, fullFlexPage = true, reverseFlex = false, colLayout = false}){
    return(
        <section className='min-h-[75vh] md:min-h-screen mx-5 lg:mx-32 relative'>
            {children}
        </section>
    )
}
