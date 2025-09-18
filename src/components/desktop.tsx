import { Link, useLocation } from 'react-router-dom';
import { NavData } from '../data/data';
import ToggleTheme from "./ui/toggle.theme";

const Desktop = () => {
    const location = useLocation();
    return (
        <nav className="flex flex-row items-center justify-between w-full px-4 py-2 bg-white dark:bg-black text-black dark:text-white">
            <div className="flex flex-row">
                <img src="/pdlogo1.png" alt="NavLogo" className="size-10"  />
                <p className="font-bold text-2xl text-green-950/70">Phantom Dev</p>
            </div>
            <ul className="flex justify-center items-center list-none gap-8 uppercase">
                {NavData.map(({id, name, path}) => (
                    <li key={id}
                        className={`transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer font-semibold ${
                        location.pathname === path ? "text-green-800 font-bolder underline"
                            : ""
                    }`}>
                        <Link to={path}
                              className="no-underline text-inherit tracking-[0.4px] text-base">
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ToggleTheme />
        </nav>
    )
}
export default Desktop


