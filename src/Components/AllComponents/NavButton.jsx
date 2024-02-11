import { Link } from "react-router-dom"

const NavButton = ({ color, styling, content, link }) => {
    return (
        <div className={`flex items-center gap-2 text-base navBuuton ${styling}`}>
            <Link className={`${color == "white" ? "link-white text-white" : "link-black text-black"} relative text-lg`} to={link}>{content}</Link>
        </div>
    )
}

export default NavButton