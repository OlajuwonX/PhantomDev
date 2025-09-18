import {BsLinkedin} from "react-icons/bs";
import {FaFacebook, FaGithub, FaInstagram, FaX} from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="flex flex-row items-center gap-5">
            <a href="https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/">
                <BsLinkedin />
            </a>
            <a href="">
                <FaFacebook />
            </a>
            <a href="">
                <FaX />
            </a>
            <a href="">
                <FaInstagram />
            </a>
            <a href="">
                <FaGithub />
            </a>
        </div>
    )
}
export default Socials
