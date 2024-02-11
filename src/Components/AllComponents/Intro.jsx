import { useMouseFollower } from "../../Context/MouseFollower";
import NavButton from "./NavButton";
import Navigate from "./Navigate";

const Intro = () => {
    // const { setContent, setRadius } = useMouseFollower();
    const { setContent, appear } = useMouseFollower();

    return (
        <div onMouseEnter={() => {
            // setRadius(40);
            appear();
            setContent("Scroll");
        }} id="intro" className="w-screen overflow-hidden h-[2075px] relative text-white">
            <img id="introImage" className="w-full relative top-[-33.5px]" src={"../../images/background.webp"} data-scroll data-scroll-speed="-1.5"/>
            <div className="w-full h-2/3 absolute top-1/3 left-0 z-10" style={{background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)"}}></div>
            <div className="absolute h-full w-full top-[360px] pt-[66px] pl-[119px] left-0 z-20">
                <p className="text-3xl w-[600px] mb-20">Global digital design studio partnering with brandsand bussinesses that create exceptional experience where people live, work, and unwind.</p>
                <div className="text-9xl mb-28" style={{fontSize: "260px"}}>
                    <p>Digital</p>
                    <p>Design</p>
                    <p>Experience</p>
                </div>
                <p className="text-3xl w-[550px]">We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgottable journeys start with a click.</p>
            </div>
            <NavButton color={"white"} styling={"z-20 relative top-[-400px] pl-[119px]"} link={"/studio"} content={"The Studio"}/>
            <div className="relative top-[-510px] z-20 left-[calc(100vw-500px)] flex gap-40">
                <ul className="flex flex-col gap-2">
                    <li>
                        <Navigate islink={true} styling={""} link={"/work"} content={"Work"}/>
                    </li>
                    <li>
                        <Navigate islink={true} styling={""} link={"/studio"} content={"Studio"}/>
                    </li>
                    <li>
                        <Navigate islink={true} styling={""} link={"/news"} content={"News"}/>
                    </li>
                    <li>
                        <Navigate islink={true} styling={""} link={"/contact"} content={"Contact"}/>
                    </li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Navigate islink={false} styling={""} link={"mailto:hello@exoape.com"} content={"hello@exoape.com"}/>
                    </li>
                    <li>
                        <Navigate islink={false} styling={""} link={"tel:+31 772 086 200"} content={"+31 772 086 200"}/>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Intro;