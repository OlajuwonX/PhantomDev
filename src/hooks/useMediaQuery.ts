import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
    const [isMatch, setIsMatch] = useState(false);

    useEffect(() => {
        // Only run in the browser
        if (typeof window === "undefined") return;

        const media = window.matchMedia(query);
        setIsMatch(media.matches); // set initial value once mounted

        const handleChange = () => setIsMatch(media.matches);
        media.addEventListener("change", handleChange);

        return () => media.removeEventListener("change", handleChange);
    }, [query]);

    return isMatch;
};

export default useMediaQuery;
