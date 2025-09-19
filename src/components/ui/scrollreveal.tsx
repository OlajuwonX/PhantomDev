import { type ReactNode, useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type ScrollRevealProps = {
    children: ReactNode;
    delay?: number;
};

const ScrollReveal = ({ children, delay = 0.1 }: ScrollRevealProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <Motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </Motion.div>
    );
};

export default ScrollReveal;