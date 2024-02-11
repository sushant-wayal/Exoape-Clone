import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMouseFollower } from "../../Context/MouseFollower";

const MouseFollower = () => {
    const followerCircle = useRef(null);
    // const { content, radius } = useMouseFollower();

    const { content } = useMouseFollower();

    useGSAP(() => {
        let currTop = 0;
        const follow = (e) => {
            currTop = e.y;
            gsap.to("#mouseFollower",{
                left: e.x,
                top: e.y+window.scrollY,
                opacity: 1,
                duration: 0.5,
                delay: 0.1,
            })
        }
        document.addEventListener("mousemove", follow);
        document.addEventListener("scroll", () => {
            gsap.to("#mouseFollower", {
                top: currTop+window.scrollY,
            })
        })
    },{scope: followerCircle.current});

    return (
        <div id="mouseFollower" className="h-0 w-0 h-[${2*radius}px] w-[${2*radius}px] flex justify-center items-center rounded-full bg-blur backdrop-blur-md absolute left-0 top-0 bg-black bg-opacity-15 pointer-events-none opacity-0 z-30" ref={followerCircle}>
            <p className="text-white">{content}</p>
        </div>
    )
};

export default MouseFollower;