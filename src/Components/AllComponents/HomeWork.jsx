import { useEffect, useRef } from "react"
import NavButton from "./NavButton"
import { useMouseFollower } from "../../Context/MouseFollower";

const HomeWork = () => {
    // const { setContent, setRadius } = useMouseFollower();
    const { setContent, appear, disappear } = useMouseFollower();

    const containerRefs = useRef([]);

    useEffect(() => {
        containerRefs.current.forEach((container,ind) => {
            container.addEventListener("mousemove", () => {
                if (container.firstChild.tagName == "IMG") {
                    container.removeChild(container.firstChild);
                    let video = document.createElement("video");
                    video.src = `../../videos/video${ind+1}.mp4`;
                    video.classList.add("w-full","h-full","object-center");
                    video.muted = true;
                    video.play();
                    video.loop = true;
                    container.append(video);
                }
            })
            container.addEventListener("mouseleave", () => {
                if (container.firstChild.tagName == "VIDEO") {
                    container.removeChild(container.firstChild);
                    let image = document.createElement("img");
                    image.src = `../../images/image${ind+1}.webp`;
                    image.classList.add("w-full","h-full","object-center");
                    container.append(image);
                }
            })

        })
    },[])
    return (
        <div onMouseEnter={() => {
            disappear();
            // setRadius(0);
            setContent("");
        }} id="homeWork" className="px-56 py-28 pb-[400px]" data-scroll-section>
            <div id="work" className="text-[280px]"><p>Work</p></div>
            <div onMouseEnter={() => {
                appear();
                // setRadius(40);
                setContent("View");
            }} onMouseLeave={() => {
                disappear();
                // setRadius(0);
                setContent("");
            }} className="container h-[calc(100vh+20px)] w-[600px] inline-block relative" ref={ref => containerRefs.current[0] = ref}>
                <img className="thumbnail w-full h-full object-center" src="../../images/image1.webp"/>
            </div>
            <div className="inline-block w-[400px] h-80 relative top-[-520px] left-40">
                <p className="text-lg mb-16">Featured Projects</p>
                <p className="w-full text-3xl">
                    Highlights of cases that we passionately built with forward- thinking clients and friends over the years.
                </p>
            </div>
            <div onMouseEnter={() => {
                appear();
                // setRadius(40);
                setContent("View");
            }} onMouseLeave={() => {
                disappear();
                // setRadius(0);
                setContent("");
            }} className="container h-[480px] w-96 inline-block relative left-[830px] top-[-510px]" ref={ref => containerRefs.current[1] = ref} data-scroll data-scroll-speed="0.1">
                <img className="thumbnail w-full h-full object-center" src="../../images/image2.webp"/>
            </div>
            <div onMouseEnter={() => {
                appear();
                // setRadius(40);
                setContent("View");
            }} onMouseLeave={() => {
                disappear();
                // setRadius(0);
                setContent("");
            }} className="container h-[620px] w-[490px] inline-block relative left-28 top-[260px]" ref={ref => containerRefs.current[2] = ref} data-scroll data-scroll-speed="0.1">
                <img className="thumbnail w-full h-full object-center" src="../../images/image3.webp"/>
            </div>
            <div onMouseEnter={() => {
                appear();
                // setRadius(40);
                setContent("View");
            }} onMouseLeave={() => {
                disappear();
                // setRadius(0);
                setContent("");
            }} className="container h-[384px] w-[305px] inline-block relative left-10 top-28" ref={ref => containerRefs.current[3] = ref}>
                <img className="thumbnail w-full h-full object-center" src="../../images/image4.webp"/>
            </div>
            <NavButton color={"black"} styling={"w-[140px] relative left-[850px] top-[200px]"} link={"/work"} content={"Browse all work"}/>
        </div>
    )
}

export default HomeWork