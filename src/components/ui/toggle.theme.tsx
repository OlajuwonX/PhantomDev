import { Moon, Sun } from "lucide-react";
import {useTheme} from "../theme-provider";

const ToggleTheme = () => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center h-6 w-13 mt-2  rounded-full border bg-green-800 dark:bg-teal-200 border-green-300 transition-all duration-300 ease-in-out px-1 cursor-pointer shadow-inner"
        >

            <Sun
                className={`z-10 size-4/5 text-yellow-400 transition-opacity duration-300 ${
                    theme === "dark" ? "opacity-10" : "opacity-100"
                }`}
            />
            <Moon
                className={`z-10 size-4/5 text-gray-800 transition-opacity duration-300 ml-auto ${
                    theme === "dark" ? "opacity-100" : "opacity-10"
                }`}
            />
        </button>
    )
}
export default ToggleTheme
