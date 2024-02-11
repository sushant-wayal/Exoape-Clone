import { useEffect } from "react";
import NavButton from "./NavButton.jsx";

const HomeNews = () => {
    const horizontalScroll = (eleId, parEleId, speed, eleIniLeft) => {
        let ele = document.getElementById(eleId);
        let parEle = document.getElementById(parEleId);
        let parEleRect = parEle.getBoundingClientRect();
        let parEleIniTop = parEleRect.top;
        let parEleIniBottom = parEleRect.bottom;
        let start = 2*parEleIniTop-parEleIniBottom;
        document.addEventListener("scroll", () => {
            if (window.scrollY <= parEleIniBottom) {
                if (speed > 0) {
                    ele.style.left = eleIniLeft+Math.max(0,(window.scrollY-start)*speed)+"px";
                }
                else if (speed < 0) {
                    ele.style.left = eleIniLeft+Math.min(0,(window.scrollY-start)*speed)+"px";
                }
            }
        })
    }
    useEffect(() => {
        horizontalScroll("horScroll1","homeNews",0.05,350);
        horizontalScroll("horScroll2","homeNews",-0.09,-350);
        horizontalScroll("horScroll3","homeNews",-0.05,-740);
        horizontalScroll("horScroll4","homeNews",0.09,300);
    },[])
    return (
        <div id="homeNews" className="w-lvw h-lvh flex justify-center items-center pt-[400px] flex-wrap relative z-50 bg-white" style={{height: "300vh"}}>
            <img className="w-[400px] h-[680px] object-center relative top-[-230px] left-[470px]" src="../../images/image11.webp" data-scroll data-scroll-speed="-0.18"/>
            <img id="horScroll1" className="w-40 h-60 object-center relative top-[-380px] left-[480px]" src="../../images/image12.webp" />
            <img id="horScroll2" className="w-96 h-[300px] object-center relative left-[-500px] top-[190px]" src="../../images/image13.webp" />
            <video id="horScroll3" className="w-96 h-96 object-center relative top-[-250px] left-[-810px]" src="../../videos/video11.mp4" muted autoPlay loop/>
            <video id="horScroll4" className="w-96 h-[400px] object-center relative top-[-710px] left-[430px]" src="../../videos/video12.mp4" muted autoPlay loop/>
            <div className="text-black flex flex-col justify-center gap-20 items-center w-[500px] absolute bottom-[200px] right-[500px]">
                <p className="text-center">In the media</p>
                <p className="text-9xl text-center">Spread the News</p>
                <p className="text-3xl text-center">Find out more about our work on these leading design and technology platforms.</p>
                <NavButton color={"black"} styling={""} content={"Browse all news"} link={"/news"}/>
            </div>
        </div>
    )
}

export default HomeNews