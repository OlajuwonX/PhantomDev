import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import type { JSX } from 'react';
import { ExternalLink } from 'lucide-react';

export interface ProjectItem {
    id: number;
    name: string;
    description: string;
    link: string;
    img: string[];
}

export interface ProjectGridProps {
    projects: ProjectItem[];
    pauseOnHover?: boolean;
    imageRevealDuration?: number;
    showButton?: boolean;
    buttonText?: string;
    className?: string;
    columns?: {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
}

export default function ProjectGrid({
                                        projects,
                                        pauseOnHover = true,
                                        imageRevealDuration = 3000,
                                        showButton = true,
                                        buttonText = "View Project",
                                        className = "",
                                        columns = { sm: 2, md: 2, lg: 3, xl: 3 }
                                    }: ProjectGridProps): JSX.Element {
    const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: number]: number}>({});
    const [hoveredCards, setHoveredCards] = useState<{[key: number]: boolean}>({});

    // Image cycling for each project
    useEffect(() => {
        const imageTimers = projects.map((project, projectIndex) => {
            // Only cycle if not hovered (when pauseOnHover is enabled)
            if (pauseOnHover && hoveredCards[projectIndex]) {
                return null;
            }

            return setInterval(() => {
                setCurrentImageIndexes(prev => ({
                    ...prev,
                    [projectIndex]: ((prev[projectIndex] || 0) + 1) % project.img.length
                }));
            }, imageRevealDuration);
        });

        return () => {
            imageTimers.forEach(timer => {
                if (timer) clearInterval(timer);
            });
        };
    }, [projects, imageRevealDuration, hoveredCards, pauseOnHover]);

    const handleCardHover = (projectIndex: number, isHovered: boolean) => {
        if (pauseOnHover) {
            setHoveredCards(prev => ({
                ...prev,
                [projectIndex]: isHovered
            }));
        }
    };

    const getGridClasses = () => {
        const { sm = 2, md = 2, lg = 3, xl = 4 } = columns;
        return `grid grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg} xl:grid-cols-${xl} gap-8 md:gap-10 lg:gap-10 item-center justify-center`;
    };

    return (
        <div className={`w-full px-5 py-8 md:py-10 md:px-15 lg:py-10 lg:px-15 ${className}`}>
            <div className={getGridClasses()}>
                {projects.map((project, index) => {
                    const currentImageIndex = currentImageIndexes[index] || 0;

                    return (
                        <div
                            key={project.id}
                            className="w-[350px] border bg-white dark:bg-black rounded-lg overflow-hidden shadow-xs shadow-teal-300 hover:shadow-lg transition-shadow duration-300"
                            onMouseEnter={() => handleCardHover(index, true)}
                            onMouseLeave={() => handleCardHover(index, false)}
                        >
                            {/* Image Section */}
                            <div className="relative h-38 w-[350px] overflow-hidden ">
                                <motion.img
                                    key={`${project.id}-${currentImageIndex}`}
                                    src={project.img[currentImageIndex]}
                                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                                    className="w-[350px] h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/placeholder-project.png';
                                    }}
                                />

                                {/* Image indicators */}
                                {project.img.length > 1 && (
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                                        {project.img.map((_, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                    imgIndex === currentImageIndex
                                                        ? 'bg-white scale-110'
                                                        : 'bg-white/50'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-4 w-full">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.name}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 text-[16px] mb-4">
                                    {project.description}
                                </p>

                                {/* Button */}
                                {showButton && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 hover:scale-110 text-gray-200 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                                    >
                                        {buttonText}
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}