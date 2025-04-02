"use client";
import { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

type ParticlesProps = {
    id?: string;
    className?: string;
    background?: string;
    particleSize?: number;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
};
export const SparklesCore = (props: ParticlesProps) => {
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        speed,
        particleColor,
        particleDensity,
    } = props;
    const [init, setInit] = useState(false);
    
    // Optimize initialization
    useEffect(() => {
        const initEngine = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setInit(true);
        };
        initEngine();
    }, []);

    const controls = useAnimation();

    const particlesLoaded = async (container?: Container) => {
        if (container) {
            controls.start({
                opacity: 1,
                transition: {
                    duration: 0.5, // Reduced duration
                },
            });
        }
    };

    const generatedId = useId();
    return (
        <motion.div animate={controls} className={cn("opacity-0", className)}>
            {init && (
                <Particles
                    id={id || generatedId}
                    className={cn("h-full w-full")}
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: background || "#0d47a1",
                            },
                        },
                        fullScreen: {
                            enable: false,
                            zIndex: 1,
                        },
                        fpsLimit: 60, // Reduced FPS limit
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: false,
                                    mode: "repulse",
                                },
                                resize: true as any,
                            },
                            modes: {
                                push: {
                                    quantity: 2, // Reduced quantity
                                },
                                repulse: {
                                    distance: 100, // Reduced distance
                                    duration: 0.2, // Reduced duration
                                },
                            },
                        },
                        particles: {
                            bounce: {
                                horizontal: {
                                    value: 0.8, // Reduced bounce
                                },
                                vertical: {
                                    value: 0.8, // Reduced bounce
                                },
                            },
                            collisions: {
                                enable: false,
                                maxSpeed: 30, // Reduced max speed
                                mode: "bounce",
                                overlap: {
                                    enable: true,
                                    retries: 0,
                                },
                            },
                            color: {
                                value: particleColor || "#ffffff",
                                animation: {
                                    enable: false, // Disabled color animation
                                },
                            },
                            move: {
                                enable: true,
                                speed: {
                                    min: 0.1,
                                    max: 0.5, // Reduced max speed
                                },
                                direction: "none",
                                random: false,
                                straight: false,
                                outModes: {
                                    default: "out",
                                },
                            },
                            number: {
                                density: {
                                    enable: true,
                                    width: 400,
                                    height: 400,
                                },
                                limit: {
                                    mode: "delete",
                                    value: 0,
                                },
                                value: particleDensity || 60, // Reduced default particle count
                            },
                            opacity: {
                                value: {
                                    min: 0.2,
                                    max: 0.8,
                                },
                                animation: {
                                    enable: true,
                                    speed: speed || 2, // Reduced animation speed
                                    decay: 0,
                                    sync: false,
                                },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: {
                                    min: minSize || 1,
                                    max: maxSize || 2, // Reduced max size
                                },
                                animation: {
                                    enable: false, // Disabled size animation
                                },
                            },
                            groups: {},
                            links: {
                                enable: false,
                            },
                            repulse: {
                                enabled: false,
                            },
                            rotate: {
                                enable: false,
                            },
                            tilt: {
                                enable: false,
                            },
                            twinkle: {
                                enable: false,
                            },
                            wobble: {
                                enable: false,
                            },
                            life: {
                                enable: false,
                            },
                            orbit: {
                                enable: false,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </motion.div>
    );
};
