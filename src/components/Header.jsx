// import { Clips } from "./utils/Clips";
import { Social } from "./utils/Social";

export const Header = ({ heroapi }) => {
    return(
        <div className="relative h-auto w-auto flex flex-col">
            <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
            <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
                <div className="grid items-center justify-items-center mt-28 md:mt-24">
                    <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{heroapi.title}</h1>
                    <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{heroapi.subtitle}</h1>
                    <button type="button" className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5 ">{heroapi.btntext}</button>

                    {/* <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
                        {heroapi.videos?.map((item, index) => (
                            <Clips
                            key={index}
                            imgsrc={item.imgsrc}
                            clip={item.clip} />
                        ))}
                    </div> */}
                    <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-[15%] gap-3">
                        {heroapi.sociallinks?.map((item, index) => (
                            <Social
                            key={index}
                            icon={item.icon} />
                        ))}
                    </div>
                </div>
                <div className="">
                    <img 
                    src={heroapi.img} 
                    alt="header-img"
                    className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill mt-7" />
                </div>
            </div>
        </div>
    );
}