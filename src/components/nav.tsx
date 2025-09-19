
import useMediaQuery from "../hooks/useMediaQuery";
import Mobile from "./mobile";
import Desktop from "./desktop";

const Nav = () => {
    const isMobile = useMediaQuery("(max-width: 760px)");
    return (
        <div className="sticky top-0 z-50">
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    );
};
export default Nav;