import { useEffect } from "react"
import Navigate from "./Navigate"


const Navbar = () => {

    useEffect(() => {
        const vanish = () => {
            if (window.scrollY > 10) {
                document.querySelector("#navbar").style.opacity = 0;
            }
            else {
                document.querySelector("#navbar").style.opacity = 1;
            }
        }
        document.addEventListener("scroll", vanish)

        return () => {
            document.removeEventListener("scroll",vanish);
        }
    },[])

    return (
        <div id="navbar" className="fixed top-14 flex justify-between w-screen pr-16 items-center z-50">
            <img className="mix-blend-multiply scale-75" src="../../images/exo_ape_logo.png"/>
            <ul className="flex gap-10">
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
        </div>
    )
}

export default Navbar