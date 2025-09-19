
import { cn } from "../../lib/utils";
import {useEffect, useState, useCallback, useRef} from "react";

export const InfiniteMovingCards = ({
                                        items,
                                        direction = "left",
                                        speed = "slow",
                                        pauseOnHover = true,
                                        className,
                                    }: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    const getDirection = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            let duration;
            switch (speed) {
                case "fast":
                    duration = "20s";
                    break;
                case "normal":
                    duration = "40s";
                    break;
                case "slow":
                    duration = "80s";
                    break;
                default:
                    duration = "80s";
            }
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    }, [speed]);

    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            const existingDuplicates = scrollerRef.current.querySelectorAll('[data-duplicate="true"]');
            existingDuplicates.forEach(dup => dup.remove());

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                duplicatedItem.setAttribute('data-duplicate', 'true');
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    useEffect(() => {
        addAnimation();
    }, [items, addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-screen overflow-hidden",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
                pauseOnHover && "hover:[animation-play-state:paused]",
            )}
                style={{
                    animation: start ? `scroll var(--animation-duration, 80s) linear infinite` : 'none',
                    animationDirection: 'var(--animation-direction, forwards)',
                }}
            >
                {items.map((item, idx) => (
                    <li
                        className="relative w-[80vw] max-w-full shrink-0 rounded-2xl border-teal-300 p-5 md:p-8 lg:p-10 md:w-[60vw] bg-green-200 dark:bg-green-950"
                        key={`${item.name}-${idx}`}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm md:text-[16px] leading-[1.2] font-normal ">
                {item.quote}
              </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <div className="flex flex-col gap-1">
                  <span className="text-xl leading-[1.2] font-bold">
                    {item.name}
                  </span>
                                    <span className="text-sm leading-[1.2] font-normal ">
                    {item.title}
                  </span>
                                </div>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};