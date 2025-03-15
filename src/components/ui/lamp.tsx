import React from "react";
import { cn } from "../../lib/utils";

const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative z-0 flex min-h-[85vh] md:min-h-screen justify-center flex-col overflow-hidden w-full rounded-md",
                className
            )}
        >
            {/* Lamp Effect Container */}
            <div className="relative flex w-full flex-1 scale-y-105 items-center isolate z-0 mx-auto">
                {/* Left Lamp Gradient */}
                <div className="absolute inset-auto right-[45%] xs:right-[47%] sm:right-1/2 
                    h-28 xs:h-32 sm:h-40 md:h-56 
                    w-[10rem] xs:w-[12rem] sm:w-[20rem] md:w-[30rem] 
                    overflow-hidden hidden lg:block">
                    {/* Main gradient */}
                    <div className="absolute inset-0 
                        bg-gradient-to-tr from-amber-500 via-amber-400/80 to-transparent 
                        rotate-[-60deg] origin-top-right
                        animate-pulse-slow ">
                    </div>
                    {/* Overlay gradient for smoother transition */}
                    <div className="absolute inset-0 
                        bg-gradient-to-r from-amber-500/40 via-amber-400/20 to-transparent 
                        rotate-[-45deg] origin-top-right
                        blur-xl">
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 
                        bg-gradient-to-tr from-amber-400/30 via-amber-400/10 to-transparent 
                        rotate-[-60deg] origin-top-right
                        blur-2xl">
                    </div>
                    {/* Mask overlays */}
                    <div className="absolute w-full left-0 bg-neutral-950 
                        h-16 xs:h-20 sm:h-28 md:h-40 bottom-0 z-20 
                        [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-12 xs:w-16 sm:w-20 md:w-40 h-full left-0 
                        bg-neutral-950 bottom-0 z-20 
                        [mask-image:linear-gradient(to_right,white,transparent)]" />
                </div>

                {/* Right Lamp Gradient */}
                <div className="absolute inset-auto left-[45%] xs:left-[47%] sm:left-1/2 
                    h-28 xs:h-32 sm:h-40 md:h-56 
                    w-[10rem] xs:w-[12rem] sm:w-[20rem] md:w-[30rem] 
                    overflow-hidden hidden lg:block">
                    {/* Main gradient */}
                    <div className="absolute inset-0 
                        bg-gradient-to-tl from-amber-500 via-amber-400/80 to-transparent 
                        rotate-[60deg] origin-top-left
                        animate-pulse-slow">
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 
                        bg-gradient-to-l from-amber-500/40 via-amber-400/20 to-transparent 
                        rotate-[45deg] origin-top-left
                        blur-xl">
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 
                        bg-gradient-to-tl from-amber-400/30 via-amber-400/10 to-transparent 
                        rotate-[60deg] origin-top-left
                        blur-2xl">
                    </div>
                    {/* Mask overlays */}
                    <div className="absolute w-12 xs:w-16 sm:w-20 md:w-40 h-full right-0 
                        bg-neutral-950 bottom-0 z-20 
                        [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-full right-0 bg-neutral-950 
                        h-16 xs:h-20 sm:h-28 md:h-40 bottom-0 z-20 
                        [mask-image:linear-gradient(to_top,white,transparent)]" />
                </div>

                {/* Enhanced Bottom Effects */}
                <div className="absolute top-1/2 h-20 xs:h-24 sm:h-32 md:h-48 w-full 
                    translate-y-12 scale-x-150 bg-neutral-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-20 xs:h-24 sm:h-32 md:h-48 w-full 
                    bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-40 
                    h-20 xs:h-24 sm:h-32 md:h-44 w-full 
                    -translate-y-[4rem] xs:-translate-y-[5rem] sm:-translate-y-[8rem] md:-translate-y-[12.5rem] 
                    bg-neutral-950"></div>

                {/* Additional ambient glow */}
                <div className="absolute -top-40 left-0 right-0 h-40 
                    bg-gradient-to-b from-amber-500/5 to-transparent 
                    blur-2xl"></div>
            </div>

            {/* Content Container with enhanced spacing */}
            <div className="relative z-50 flex 
                -translate-y-24 xs:-translate-y-28 sm:-translate-y-36 md:-translate-y-72 
                flex-col items-center px-4 sm:px-10 md:px-20 
                space-y-4">
                {children}
            </div>
        </div>
    );
};

export default LampContainer;