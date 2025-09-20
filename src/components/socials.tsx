import {BsLinkedin} from "react-icons/bs";
import {FaGithub, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="flex flex-col justify-start gap-5">
            <p className="text-xl font-semibold">Let's Connect</p>
            <div className="flex flex-row items-center gap-3">
                <a
                    className="size-9 transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                    href="https://www.linkedin.com/in/olasimbo-olajuwon-b986b7230/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
                <a
                    className="size-9 transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                    href="https://x.com/PhantomXDev"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTwitter />
                </a>
                <a
                    className="size-9 transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                    href="https://www.instagram.com/yung_in?igsh=cXNjZGFueGUzaDBk&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>
                <a
                    className="size-9 transition-all hover:scale-105 hover:text-green-700 cursor-pointer"
                    href="https://www.tiktok.com/@olajuwonx15?_t=ZS-8zqvw3thoy8&_r=1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTiktok />
                </a>
                <a
                    className="size-9 transition-all hover:scale-110 hover:text-green-700 cursor-pointer"
                    href="https://github.com/OlajuwonX"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}
export default Socials
