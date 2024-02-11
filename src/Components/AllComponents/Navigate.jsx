import { Link } from "react-router-dom"

const Navigate = ({ islink, styling, content, link }) => {
    if (islink) {
        return (
            <Link className={`${styling} navigate relative text-lg text-white`} to={link}>{content}</Link>
        )
    }
    else {
        return (
            <a className={`${styling} navigate relative text-lg text-white`} href={link}>{content}</a>
        )
    }
}

export default Navigate