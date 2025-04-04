import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SparklesCore } from "../ui/sparkles";


interface PrimaryButtonProps {
    to: string;
    children: React.ReactNode;
}

const HeroSection = () => {

    // Component สำหรับปุ่ม CTA หลัก
    const PrimaryButton: React.FC<PrimaryButtonProps> = ({ to, children }) => (
        <NavLink to={to}>
            <div className="relative">
              

                <button className="group relative h-14 w-full sm:w-48 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 p-[1px] transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-cyan-500">
                    <div className="relative h-full w-full rounded-full bg-blue-950 px-8 transition-all duration-300 group-hover:bg-blue-900/90">
                        <div className="absolute inset-0">
                            <SparklesCore
                                background="transparent"
                                minSize={0.5}
                                maxSize={1}
                                particleDensity={200}
                                className="w-full h-full"
                                particleColor="#22d3ee"
                            />
                        </div>
                        <div className="relative flex h-full items-center justify-center gap-2">
                            <span className="font-sf-bold text-white">{children}</span>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </NavLink>
    );

    return (
        <div className="flex flex-col w-full relative overflow-hidden min-h-screen">
            <div className="mt-20 flex flex-col w-full">
                {/* Refined Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                    {/* Subtle Water Flow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-teal-900/10 to-blue-900/20 animate-flow"></div>

                    {/* Enhanced Light Rays */}
                    <div className="absolute top-0 left-1/5 w-[200px] h-[800px] bg-cyan-300/10 rotate-[25deg] blur-2xl animate-pulse"></div>
                    <div className="absolute top-0 right-1/5 w-[180px] h-[700px] bg-teal-300/10 rotate-[-20deg] blur-2xl animate-pulse delay-500"></div>

                    {/* Glowing Coral-like Spots */}
                    <div className="absolute top-1/3 left-1/5 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/15 via-teal-400/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/5 w-[450px] h-[450px] bg-gradient-to-tl from-blue-500/15 via-teal-400/10 to-transparent rounded-full blur-3xl"></div>
                </div>

                {/* Interactive Floating Bubbles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-125 transition-transform duration-300"
                            style={{
                                width: `${Math.random() * 25 + 15}px`,
                                height: `${Math.random() * 25 + 15}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100 + 100}%`,
                                animation: `float ${Math.random() * 15 + 20}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-16 px-6 text-center">
                    {/* Elegant Badge */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="px-6 py-2.5 rounded-full bg-blue-900/40 backdrop-blur-lg border border-cyan-400/30 shadow-xl">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                                </span>
                                <p className="text-sm font-medium text-cyan-100 tracking-wider">
                                    Modern React Native UI Components
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Refined Main Heading */}
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-sf-bold text-white tracking-tight leading-tight"
                    >
                        <span className="block">Beautiful UI for</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300">
                            React Native Apps
                        </span>
                    </motion.h2>

                    {/* Elegant Description */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="text-blue-100/90 max-w-2xl mx-auto"
                    >
                        JanjaoUI delivers 60+ stunning, high-performance components for React Native. Build beautiful cross-platform mobile apps that feel native on both iOS and Android.
                    </motion.p>

                    {/* Refined CTA Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 pt-6"
                    >
                        <NavLink to="/getting-started">
                            <PrimaryButton to="/getting-started">
                                Get Started
                            </PrimaryButton>
                        </NavLink>
                        <a
                            href="https://github.com/your-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 w-full sm:w-52 rounded-full border border-cyan-400/40 bg-blue-900/30 backdrop-blur-md text-cyan-100 font-sf-bold text-lg hover:bg-blue-800/40 hover:border-cyan-400/60 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                            </svg>
                            GitHub
                        </a>
                    </motion.div>



                    {/* Enhanced Stats Display */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="grid grid-cols-3 gap-10 pt-10 max-w-4xl mx-auto w-full"
                    >
                        {[
                            { label: "Components", value: "60+" },
                            { label: "Installations", value: "250K+" },
                            { label: "Platforms", value: "iOS & Android" },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="text-3xl md:text-4xl font-sf-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-cyan-100/80 tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>


                    {/* Subtle Wave Divider */}
                    <div className="w-full max-w-5xl mx-auto mt-12">
                        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-wave"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;