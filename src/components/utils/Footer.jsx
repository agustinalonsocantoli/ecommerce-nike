
export const Footer = ({ footerAPI: { titles, links } }) => {
    return(
        <div>
            <footer className="bg-theme pt-7 pb-5">
                <div className="nike-container text-slate-200 text-center">
                    <div className="grid items-start grid-cols-3 max-w-2x1 w-full m-auto md:max-w-none md:gap-5">
                        {titles.map((item, i) => (
                            <div key={i} className='grid items-center'>
                                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">{item.title}</h1>
                            </div>
                        ))}
                        {links.map((list, i) => (
                            <ul key={i} className="grid items-center gap-1">
                                {list.map((item, i) => (
                                    <li className="text-sm sm:text-xs" key={i}>{item.link}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    
                    <div className="mt-5 text-center">
                        <p className="text-sm md:text-center">
                            Copyright
                            &copy;
                            All Reserved Rights 2023
                        </p>

                        <p className="text-sm md:text-center font-semibold">
                            Agustin Alonso Cantoli
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}