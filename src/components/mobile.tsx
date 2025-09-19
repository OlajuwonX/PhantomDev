import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavData } from "../data/data";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ToggleTheme from "./ui/toggle.theme";
import Socials from "./socials";

const Mobile = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="flex flex-row sticky top-0 justify-between w-[100%] px-4 py-3 z-50 bg-white dark:bg-black">
            {/* Logo + Title */}
            <div className="flex items-center">
                <img src="/pdlogo1.png" alt="NavLogo" className="h-10 w-11" />
            </div>

            {/* Hamburger / Close */}
            <div className="flex flex-row gap-2">
                <ToggleTheme />
                <button
                    onClick={() => setOpen((prev) => !prev)}
                    className="p-2 rounded-md text-black hover:scale-110 dark:text-white hover:bg-green-50 dark:hover:bg-gray-800 transition cursor-pointer"
                >
                    {open ? (
                        <X size={24} strokeWidth={2.5} />
                    ) : (
                        <Menu size={21} strokeWidth={2.5} />
                    )}
                </button>

                {/* AnimatePresence for dropdown menu */}
                <AnimatePresence>
                    {open && (
                        <Motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-14 left-0 w-[100%] flex flex-col items-start gap-5 bg-white dark:bg-black py-6 px-5 shadow-md rounded-md"
                        >
                            {NavData.map(({ id, name, path }) => (
                                <Motion.li
                                    key={id}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.90 }}
                                    onClick={() => setOpen(false)}
                                >
                                    <Link
                                        to={path}
                                        className={`uppercase tracking-wide text-lg font-medium transition-all duration-200 ${
                                            location.pathname === path
                                                ? "text-green-700 dark:text-green-400 border-b-2 border-green-600 pb-1"
                                                : "text-gray-800 dark:text-gray-200 hover:text-green-700 dark:hover:text-green-400"
                                        }`}
                                    >
                                        {name}
                                    </Link>
                                </Motion.li>
                            ))}
                            <Socials />
                        </Motion.ul>
                    )}
                </AnimatePresence>
            </div>

        </nav>
    );
};

export default Mobile;
