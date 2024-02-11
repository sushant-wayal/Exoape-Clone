import NavButton from "./NavButton"
import Navigate from "./Navigate"


const OurStory = () => {
    return (
        <div className="h-[calc(100vh+100px)] py-[30px] w-lvw p-40 bg-[#070707] relative text-white overflow-x-hidden" data-scroll data-scroll-speed="-0.5">
            <div className="flex justify-between">
                <div className="w-[500px]">
                    <p className="text-9xl mb-10">Our Story</p>
                    <p className="text-lg">The story behind Exo Ape is one of </p>
                    <p className="text-lg">exploration, creativity and curiosity.</p>
                </div>
                <video className="relative top-[-70px]" src="../../videos/ourStory.mp4" muted autoPlay loop/>
            </div>
            <hr className="mb-20"/>
            <div>
                <div className="flex gap-40">
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a src="https://goo.gl/maps/8z56qdL3F85VQmLf9">Willem || Single 8</a>
                        </li>
                        <li>
                            <a src="https://goo.gl/maps/8z56qdL3F85VQmLf9">6041 HS, Roermond</a>
                        </li>
                        <li>
                            <a src="https://goo.gl/maps/8z56qdL3F85VQmLf9">The Netherlands</a>
                        </li>
                        <li>
                            <Navigate islink={true} styling={""} content={"hello@exoape.com"} link={"mailto:hello@exoape.com"}/>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Navigate islink={true} styling={""} content={"Work"} link={"/work"}/>
                        </li>
                        <li>
                            <Navigate islink={true} styling={""} content={"Studio"} link={"/studio"}/>
                        </li>
                        <li>
                            <Navigate islink={true} styling={""} content={"News"} link={"/news"}/>
                        </li>
                        <li>
                            <Navigate islink={true} styling={""} content={"Contact"} link={"/contact"}/>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Navigate islink={false} styling={""} content={"Behance"} link={"https://www.behance.net/exoape"}/>
                        </li>
                        <li>
                            <Navigate islink={false} styling={""} content={"Dribbble"} link={"https://dribbble.com/ExoApe"}/>
                        </li>
                        <li>
                            <Navigate islink={false} styling={""} content={"Twitter"} link={"https://twitter.com/exoape"}/>
                        </li>
                        <li>
                            <Navigate islink={false} styling={""} content={"Instagram"} link={"https://twitter.com/exoape/?hl=en"}/>
                        </li>
                    </ul>
                    <NavButton color={"white"} styling={"absolute bottom-24 right-36"} content={"Our Story"} link={"/story"}/>
                </div>
            </div>
        </div>
    )
}

export default OurStory