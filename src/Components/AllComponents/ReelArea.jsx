import { useEffect } from "react";
import { useMouseFollower } from "../../Context/MouseFollower";

const ReelArea = () => {
    // const { setContent, setRadius } = useMouseFollower();
    const { setContent, appear, disappear } = useMouseFollower();

    useEffect(() => {
        const stickyRect = document.querySelector("#sticky").getBoundingClientRect();
        const reelAreaRect = document.querySelector("#reelArea").getBoundingClientRect();
        const iniTop = reelAreaRect.top;
        const iniBottom = reelAreaRect.bottom;
        const stickyHeight = stickyRect.bottom-stickyRect.top;
        const stickyWidth = stickyRect.right-stickyRect.left;
        const move = iniBottom-iniTop-stickyHeight;
        const video = document.querySelector("#video");
        const videoRect = video.getBoundingClientRect();
        const iniHeight = videoRect.bottom-videoRect.top;
        const iniWidth = videoRect.right-videoRect.left;
        document.addEventListener("scroll", () =>{
            if (window.scrollY >= iniTop && window.scrollY <= iniTop+stickyHeight) {
                video.style.height = (iniHeight+((stickyHeight-iniHeight)/(stickyHeight))*(window.scrollY-iniTop))+"px";
                video.style.width = (iniWidth+((stickyWidth-iniWidth)/(stickyHeight))*(window.scrollY-iniTop))+"px";
            }
            if (window.scrollY >= iniTop && window.scrollY < iniBottom-stickyHeight) {
                sticky.style.position = "fixed";
                sticky.style.top = "0px";
            } else if (window.scrollY >= iniBottom-stickyHeight) {
                sticky.style.position = "relative";
                sticky.style.top = move+"px";
            } else {
                sticky.style.position = "relative";
                sticky.style.top = "0px";
            }
        })
    },[])
    const horizontalScroll = (eleId, parEleId, speed) => {
        let ele = document.getElementById(eleId);
        let parEle = document.getElementById(parEleId);
        ele.style.position = "relative";
        if (ele.style.left == "") {
            ele.style.left = "0px";
        }
        let parEleRect = parEle.getBoundingClientRect();
        let parEleIniTop = parEleRect.top;
        let parEleIniBottom = parEleRect.bottom;
        let eleIniLeft = parseFloat(ele.style.left.slice(0,ele.style.left.length-2));
        document.addEventListener("scroll", () => {
            if (window.scrollY <= parEleIniBottom) {
                if (speed > 0) {
                    ele.style.left = eleIniLeft+Math.max(0,(window.scrollY-parEleIniTop)*speed)+"px";
                }
                else if (speed < 0) {
                    ele.style.left = eleIniLeft+Math.min(0,(window.scrollY-parEleIniTop)*speed)+"px";
                }
            }
        })
    }
    useEffect(() => {
        horizontalScroll("play","sticky",0.45);
        horizontalScroll("reel","sticky",-0.45);
    },[])
    return (
        <div onMouseEnter={() => {
            appear();
            // setRadius(40);
            setContent("Play");
        }} onMouseLeave={() => {
            disappear();
            // setRadius(0);
            setContent("");
        }} className="w-screen relative" id="reelArea">
            <div id="sticky" className="w-screen h-lvh bg-[#0d0e13] flex flex-col justify-center items-center gap-44 text-white">
                <p className="text-lg z-10 opacity-85">Work in motion</p>
                <div className="flex justify-center items-center gap-[688px] h-1/4"  data-scroll-container>
                    <p id="play" className="text-[150px] z-10 opacity-85">Play</p>
                    <p id="reel" className="text-[150px] z-10 opacity-85">Reel</p>
                </div>
                <p className="w-[350px] text-center text-lg z-10 opacity-85">Our Work is best experienced in motion. Don't forgot to put on your headphones.</p>
                <video  id="video" className="w-[400px] h-[calc(100vh/4)] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="../../videos/reel.mp4" muted autoPlay loop/>
                <div className="w-full h-full absolute top-0 left-0 bg-[#0d0e13] bg-opacity-75"></div>
            </div>
        </div>
    )
}

export default ReelArea