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
        <nav className="flex flex-row justify-between w-[100%] px-4 py-3 relative z-10 bg-white dark:bg-black shadow-sm">
            {/* Logo + Title */}
            <div className="flex items-center gap-2">
                <img src="/pdlogo1.png" alt="NavLogo" className="size-10" />
                <p className="font-bold text-2xl text-green-950/80 dark:text-green-200">
                    Phantom Dev
                </p>
            </div>

            {/* Hamburger / Close */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
                {open ? (
                    <X size={24} strokeWidth={1.5} />
                ) : (
                    <Menu size={22} strokeWidth={1.5} />
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
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
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
                        <ToggleTheme />
                    </Motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Mobile;
