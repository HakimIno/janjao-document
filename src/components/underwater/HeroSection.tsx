import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SparklesCore } from "../ui/sparkles";
import { useEffect, useRef } from "react";
import IPhoneFrame from "../ui/IPhoneFrame";
import SamsungFrame from "../ui/SamsungFrame";

// เพิ่ม CSS สำหรับ water stream animation
const waterStreamStyles = `
    @keyframes flowRight {
        0% { transform: translateX(-100%) translateY(0); opacity: 0; }
        10% { opacity: 0.7; }
        90% { opacity: 0.7; }
        100% { transform: translateX(100vw) translateY(20px); opacity: 0; }
    }

    @keyframes flowLeft {
        0% { transform: translateX(100%) translateY(0); opacity: 0; }
        10% { opacity: 0.7; }
        90% { opacity: 0.7; }
        100% { transform: translateX(-100vw) translateY(30px); opacity: 0; }
    }

    @keyframes flowUp {
        0% { transform: translateY(100%) translateX(0); opacity: 0; }
        10% { opacity: 0.7; }
        90% { opacity: 0.7; }
        100% { transform: translateY(-100vh) translateX(-20px); opacity: 0; }
    }

    @keyframes flowDiagonal {
        0% { transform: translateX(-100%) translateY(100%); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateX(100vw) translateY(-100vh); opacity: 0; }
    }

    .water-stream-right {
        position: absolute;
        height: 2px;
        background: linear-gradient(90deg, transparent, #22d3ee, #0ea5e9, transparent);
        border-radius: 100px;
        z-index: 1;
        overflow: hidden;
        animation: flowRight 8s linear infinite;
    }

    .water-stream-left {
        position: absolute;
        height: 2px;
        background: linear-gradient(270deg, transparent, #22d3ee, #0ea5e9, transparent);
        border-radius: 100px;
        z-index: 1;
        overflow: hidden;
        animation: flowLeft 10s linear infinite;
    }

    .water-stream-up {
        position: absolute;
        width: 2px;
        background: linear-gradient(0deg, transparent, #22d3ee, #0ea5e9, transparent);
        border-radius: 100px;
        z-index: 1;
        overflow: hidden;
        animation: flowUp 12s linear infinite;
    }

    .water-stream-diagonal {
        position: absolute;
        height: 2px;
        background: linear-gradient(45deg, transparent, #22d3ee, #0ea5e9, transparent);
        border-radius: 100px;
        z-index: 1;
        overflow: hidden;
        transform-origin: 0 0;
        animation: flowDiagonal 15s linear infinite;
    }

    .bubble {
        position: absolute;
        background: radial-gradient(circle at center, rgba(34, 211, 238, 0.7), rgba(34, 211, 238, 0.1));
        border-radius: 50%;
        opacity: 0;
        z-index: 1;
        animation: float 8s ease-in-out infinite;
    }

    @keyframes float {
        0% { transform: translateY(0) scale(1); opacity: 0; }
        10% { opacity: 0.7; }
        50% { transform: translateY(-20vh) scale(0.8); opacity: 0.5; }
        100% { transform: translateY(-40vh) scale(0.2); opacity: 0; }
    }
`;

interface PrimaryButtonProps {
    to: string;
    children: React.ReactNode;
}

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // สร้างสายน้ำแบบ dynamic
    useEffect(() => {
        if (!containerRef.current) return;

        // ล้าง element เดิมออกก่อน
        const existingStreams = containerRef.current.querySelectorAll('.water-stream-right, .water-stream-left, .water-stream-up, .water-stream-diagonal, .bubble');
        existingStreams.forEach(stream => stream.remove());

        // สร้าง style element
        const styleElement = document.createElement('style');
        styleElement.innerHTML = waterStreamStyles;
        document.head.appendChild(styleElement);

        // สร้างสายน้ำวิ่งไปทางขวา
        for (let i = 0; i < 5; i++) {
            const stream = document.createElement('div');
            stream.className = 'water-stream-right';
            stream.style.width = `${Math.random() * 10 + 15}vw`;
            stream.style.top = `${Math.random() * 80 + 10}%`;
            stream.style.animationDelay = `${Math.random() * 5}s`;
            stream.style.opacity = `${Math.random() * 0.5 + 0.2}`;
            containerRef.current.appendChild(stream);
        }

        // สร้างสายน้ำวิ่งไปทางซ้าย
        for (let i = 0; i < 5; i++) {
            const stream = document.createElement('div');
            stream.className = 'water-stream-left';
            stream.style.width = `${Math.random() * 10 + 15}vw`;
            stream.style.top = `${Math.random() * 80 + 10}%`;
            stream.style.animationDelay = `${Math.random() * 5}s`;
            stream.style.opacity = `${Math.random() * 0.5 + 0.2}`;
            containerRef.current.appendChild(stream);
        }

        // สร้างสายน้ำวิ่งขึ้นบน
        for (let i = 0; i < 5; i++) {
            const stream = document.createElement('div');
            stream.className = 'water-stream-up';
            stream.style.height = `${Math.random() * 10 + 15}vh`;
            stream.style.left = `${Math.random() * 80 + 10}%`;
            stream.style.animationDelay = `${Math.random() * 5}s`;
            stream.style.opacity = `${Math.random() * 0.5 + 0.2}`;
            containerRef.current.appendChild(stream);
        }

        // สร้างฟองน้ำลอยขึ้น
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 20 + 5;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 90 + 5}%`;
            bubble.style.bottom = `${Math.random() * 20}%`;
            bubble.style.animationDelay = `${Math.random() * 8}s`;
            containerRef.current.appendChild(bubble);
        }

        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    // Component สำหรับปุ่ม CTA หลัก
    const PrimaryButton: React.FC<PrimaryButtonProps> = ({ to, children }) => (
        <NavLink to={to}>
            <div className="relative">
                <button className="group relative h-12 w-full sm:w-40 overflow-hidden rounded-full bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 p-[1px] transition-all duration-300 hover:shadow-[0_0_1.5rem_-0.5rem] hover:shadow-cyan-600">
                    <div className="relative h-full w-full rounded-full bg-blue-950/85 backdrop-blur-sm px-6 transition-all duration-300 group-hover:bg-blue-900/80">
                        <div className="absolute inset-0">
                            <SparklesCore
                                background="transparent"
                                minSize={0.5}
                                maxSize={1}
                                particleDensity={150}
                                className="w-full h-full"
                                particleColor="#22d3ee"
                            />
                        </div>
                        <div className="relative flex h-full items-center justify-center gap-2">
                            <span className="font-sf-bold text-white text-sm">{children}</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
        <div ref={containerRef} className="flex flex-col w-full relative overflow-hidden h-screen ">
            {/* Background effect */}
            <div className="absolute inset-0 opacity-20">
                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.2}
                    particleDensity={40}
                    className="w-full h-full"
                    particleColor="#22d3ee"
                />
            </div>

            <div className="mt-24  flex flex-col w-full h-full">
                {/* Hero Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div className="flex flex-col space-y-6">
                            {/* Badge */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex px-4 py-2 rounded-full bg-blue-900/50 backdrop-blur-lg border border-cyan-400/30 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                        </span>
                                        <p className="text-xs font-medium text-cyan-100 tracking-wider">
                                            Modern React Native UI Components
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sf-bold text-white tracking-tight leading-[1.1]">
                                    <span className="block mb-2">Beautiful UI for</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300">
                                        React Native Apps
                                    </span>
                                </h2>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-blue-100/90 max-w-lg text-base md:text-lg leading-relaxed"
                            >
                                Beautifully crafted UI components built with performance and customization in mind. Create stunning cross-platform apps with pixel-perfect animations and modern design.
                            </motion.p>

                            {/* Feature Tags */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.35 }}
                                className="flex flex-wrap gap-2 pt-1"
                            >
                                {['Customizable', 'Type-Safe', 'Accessible', 'Dark Mode'].map((tag, index) => (
                                    <span key={index} className="px-3 py-1 text-xs rounded-full bg-blue-900/40 border border-cyan-500/30 text-cyan-300">
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 pt-3"
                            >
                                <PrimaryButton to="/getting-started">
                                    Get Started
                                </PrimaryButton>

                                <a
                                    href="https://github.com/your-repo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-12 w-full sm:w-40 rounded-full border border-cyan-400/40 bg-blue-900/30 backdrop-blur-md text-cyan-100 font-sf-bold text-sm hover:bg-blue-800/40 hover:border-cyan-400/60 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                                    </svg>
                                    GitHub
                                </a>
                            </motion.div>
                        </div>

                        {/* CodeFrame */}
                        {/* <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="w-full"
                        >
                            <CodeFrame title="Build Beautiful Apps">
                                <div className="text-sm font-mono text-blue-200/90 leading-relaxed">
                                    <div className="mb-3 border-l-2 border-cyan-500/30 pl-3">
                                        <span className="text-cyan-400 opacity-70">// Quick installation</span>
                                        <br />
                                        <span className="text-yellow-200">npm</span> <span className="text-blue-200">install</span> <span className="text-green-300">janjao-ui</span>
                                    </div>

                                    <div className="mb-4 border-l-2 border-cyan-500/30 pl-3">
                                        <span className="text-cyan-400 opacity-70">// Import what you need</span>
                                        <br />
                                        <span className="text-purple-300">import</span> <span className="text-cyan-300">{'{'}</span> <span className="text-orange-300"> Button, Card</span> <span className="text-cyan-300">{'}'}</span> <span className="text-purple-300">from</span> <span className="text-green-400">'janjao-ui'</span>;
                                    </div>

                                    <div className="border-l-2 border-cyan-500/30 pl-3">
                                        <span className="text-cyan-400 opacity-70">// Create stunning interfaces</span>
                                        <br />
                                        <span className="text-purple-300">function</span> <span className="text-yellow-300">MyAwesomeApp</span><span className="text-cyan-300">()</span> <span className="text-cyan-300">{'{'}</span>
                                        <div className="ml-4">
                                            <span className="text-purple-300">return</span> <span className="text-cyan-300">(</span>
                                            <div className="ml-4">
                                                <div className="ml-4">
                                                    <span className="text-blue-300">{'<'}</span><span className="text-yellow-300">Card</span>
                                                    <span className="text-green-300"> shadow</span><span className="text-cyan-300">=</span><span className="text-orange-300">"lg"</span>
                                                    <span className="text-green-300"> rounded</span><span className="text-cyan-300">=</span><span className="text-orange-300">"xl"</span>
                                                    <span className="text-blue-300">{'>'}</span>
                                                    <div className="ml-4">
                                                        <span className="text-blue-300">{'<'}</span><span className="text-yellow-300">Text</span> <span className="text-green-300">variant</span><span className="text-cyan-300">=</span><span className="text-orange-300">"title"</span><span className="text-blue-300">{'>'}</span>
                                                        <span className="text-white">Hello JanjaoUI!</span>
                                                        <span className="text-blue-300">{'</'}</span><span className="text-yellow-300">Text</span><span className="text-blue-300">{'>'}</span>
                                                        <br />
                                                        <span className="text-blue-300">{'<'}</span><span className="text-yellow-300">Button</span>
                                                        <span className="text-green-300"> variant</span><span className="text-cyan-300">=</span><span className="text-orange-300">"gradient"</span>
                                                        <span className="text-green-300"> size</span><span className="text-cyan-300">=</span><span className="text-orange-300">"lg"</span>
                                                        <span className="text-blue-300">{'>'}</span>
                                                        <span className="text-white">Get Started</span>
                                                        <span className="text-blue-300">{'</'}</span><span className="text-yellow-300">Button</span><span className="text-blue-300">{'>'}</span>
                                                    </div>
                                                    <span className="text-blue-300">{'</'}</span><span className="text-yellow-300">Card</span><span className="text-blue-300">{'>'}</span>
                                                </div>
                                            </div>
                                            <span className="text-cyan-300">);</span>
                                        </div>
                                        <span className="text-cyan-300">{'}'}</span>
                                    </div>
                                </div>
                            </CodeFrame>
                        </motion.div> */}
                        {/* <IPhoneFrame
                            text={"Beautiful React Native UI"}
                            title={"JanjaoUI Demo"}
                            textColor={"text-white"}
                            fontSize={"text-lg"}
                        /> */}

                    </div>
                    <div
                        className="absolute hidden lg:flex top-0 -right-96 w-full justify-center ">
                        <div className="w-full md:w-1/2 max-w-[360px] flex flex-col items-center ">
                            <IPhoneFrame
                                text={"Modern & Customizable"}
                                title={"Components"}
                                textColor={"text-white"}
                                fontSize={"text-lg"}
                            />
                            <div className="flex flex-col items-center p-2 border border-cyan-400/40 rounded-xl">
                                <span className="text-white text-sm font-sf-bold">iOS</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 max-w-[360px] flex flex-col items-center ">
                            <SamsungFrame
                                text={"Modern & Customizable"}
                                title={"Components"}
                                textColor={"text-cyan-100"}
                                fontSize={"text-xl"}
                            />
                            <div className="flex flex-col items-center p-2 border border-cyan-400/40 rounded-xl">
                                <span className="text-white text-sm font-sf-bold">Android</span>
                            </div>
                        </div>
                    </div>

                    {/* Wave Divider */}

                </div>
            </div>
        </div>
    );
};

export default HeroSection;