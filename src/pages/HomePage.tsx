import React from 'react';
import { NavLink } from 'react-router-dom';
import { SparklesCore } from '../components/ui/sparkles';
import { motion, HTMLMotionProps } from 'framer-motion';
import { FlipWords } from '../components/ui/flip-words';
import { UnderwaterScene } from '../components/underwater/UnderwaterScene';
import '../styles/underwater-animations.css';
import HeroSection from '../components/underwater/HeroSection';

// TypeScript interfaces and types
interface Feature {
    icon: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
}

interface Stat {
    label: React.ReactNode;
    value: React.ReactNode;
    icon: React.ReactNode;
}



interface FeatureCardProps {
    feature: Feature;
    index: number;
}

interface StatItemProps {
    stat: Stat;
    index: number;
}

// Motion component type definitions
type MotionDivProps = HTMLMotionProps<"div">;
type MotionHeadingProps = HTMLMotionProps<"h2">;
type MotionParagraphProps = HTMLMotionProps<"p">;

const STATS: Stat[] = [
    { label: "Deployments", value: "100K+", icon: "🌊" },
    { label: "Components", value: "50+", icon: "🐋" },
    { label: "GitHub Stars", value: "2.5K", icon: "⭐" },
    { label: "Contributors", value: "100+", icon: "🧜‍♂️" }
];



// Updated FeatureCard component with underwater-themed glowing effect
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => (
    <motion.div
        className="relative p-6 rounded-2xl bg-blue-900/10 backdrop-blur-sm border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group"
        style={{
            // Add subtle floating animation
            animation: `float ${3 + index % 2}s ease-in-out infinite alternate`,
            animationDelay: `${index * 0.2}s`
        }}
    >
        {/* Glowing effect overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-400/10 to-teal-400/20 blur-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-400/5 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
        </div>

        {/* Bubble decoration */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white/10 border border-white/20"
                    style={{
                        width: `${Math.random() * 10 + 5}px`,
                        height: `${Math.random() * 10 + 5}px`,
                        right: `${Math.random() * 80}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `floatBubble ${Math.random() * 4 + 3}s linear infinite`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center w-12 h-12 rounded-full bg-blue-800/50 border border-blue-500/30">
                {feature.icon}
            </div>
            <h3 className="text-lg font-sf-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
            </h3>
            <p className="text-sm text-blue-100/70 group-hover:text-blue-100/90 transition-colors duration-300">
                {feature.description}
            </p>
        </div>

    </motion.div>
);

// Component สำหรับ Stat Item
const StatItem: React.FC<StatItemProps> = ({ stat, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="text-center"
    >
        <div className="text-2xl mb-2 animate-bounce" style={{ animationDuration: '2s', animationDelay: `${index * 0.2}s` }}>{stat.icon}</div>
        <div className="text-2xl md:text-3xl font-sf-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            {stat.value}
        </div>
        <div className="text-sm text-blue-100/70 mt-1">{stat.label}</div>
    </motion.div>
);

const HomePage: React.FC = () => {
    // Create a style element using React's createElement
    React.useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            @keyframes float {
                0% { transform: translateY(0px); }
                100% { transform: translateY(-10px); }
            }
            
            @keyframes floatBubble {
                0% { transform: translateY(0); opacity: 0.7; }
                100% { transform: translateY(-100px); opacity: 0; }
            }
        `;
        document.head.appendChild(styleElement);

        // Clean up function to remove the style when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col gap-32 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 relative overflow-hidden">
            {/* Ocean Overlay Effect */}
            <div className="absolute inset-0 bg-[url('/ocean-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            {/* Underwater Scene - รวมปลา, ฟองอากาศ, และสาหร่าย */}
            <UnderwaterScene />

            <HeroSection />


            {/* Features Section with Underwater Theme */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="min-h-screen relative px-4 py-20"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-sf-bold text-white mb-6"
                        >
                            Everything you need to build
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500">
                                exceptional mobile experiences
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-blue-100/80 max-w-2xl mx-auto"
                        >
                            Ship faster with our meticulously crafted components that work seamlessly across iOS and Android.
                            From animations to accessibility, we've handled the complexity so you can focus on creating.
                        </motion.p>
                    </div>

                    {/* Features Grid with Underwater-Themed Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {[
                            {
                                icon: "🚀",
                                title: "Performance Optimized",
                                description: "Built with performance in mind. Every component is optimized for smooth animations and transitions, even on lower-end devices."
                            },
                            {
                                icon: "🎨",
                                title: "Customizable Design System",
                                description: "Easily adapt components to match your brand with our flexible theming system. No more fighting with styles."
                            },
                            {
                                icon: "📱",
                                title: "Cross-Platform Consistency",
                                description: "Achieve pixel-perfect consistency across iOS and Android without platform-specific code or workarounds."
                            },
                            {
                                icon: "♿",
                                title: "Accessibility First",
                                description: "Every component is fully accessible out of the box, with screen reader support and keyboard navigation."
                            },
                            {
                                icon: "📦",
                                title: "Ready-to-Use Components",
                                description: "Over 50 production-ready components that you can drop into your app and customize to your needs."
                            },
                            {
                                icon: "📚",
                                title: "Comprehensive Documentation",
                                description: "Detailed guides, API references, and examples to help you get the most out of every component."
                            }
                        ].map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                        ))}
                    </div>

                    {/* Stats Section with Ocean-Themed Visual Effects */}
                    <div className="relative">
                        {/* ลดความซับซ้อนของ gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-2xl opacity-20" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative bg-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/10 hover:border-blue-400/20 transition-all"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {STATS.map((stat, index) => (
                                    <StatItem key={index} stat={stat} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Section with Ocean-Themed Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mt-20 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-12 rounded-2xl border border-blue-500/20"
                    >
                        <h3 className="text-3xl font-sf-bold text-white mb-4">Ready to transform your mobile development?</h3>
                        <p className="text-blue-100/80 max-w-2xl mx-auto mb-8">
                            Join thousands of developers building exceptional mobile experiences with DeepUI.
                            Get started in minutes with our comprehensive documentation and ready-to-use components.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <NavLink to="/getting-started">
                                <button className="before:ease relative h-12 w-40 overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 p-[0.1rem] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-cyan-400 hover:before:-translate-x-40 rounded-full">
                                    <div className="flex h-full w-full items-center justify-center bg-blue-950 back rounded-full">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <SparklesCore
                                                background="transparent"
                                                minSize={0.4}
                                                maxSize={1}
                                                particleDensity={500}
                                                className="w-full h-full"
                                                particleColor="#22d3ee"
                                            />
                                        </div>
                                        <span className="relative z-10 font-sf-bold">Get Started</span>
                                    </div>
                                </button>
                            </NavLink>

                            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="h-12 px-6 flex items-center justify-center rounded-full border border-blue-400/30 text-white hover:bg-blue-800/30 transition-all">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                                </svg>
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Proof Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative bg-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/10 my-20 "
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-sf-bold text-white">Trusted by developers worldwide</h3>
                            <p className="text-blue-100/70 mt-2">Join thousands of developers building amazing mobile experiences</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-blue-800/20 border border-blue-500/20">
                                <p className="text-blue-100 italic mb-4">"DeepUI has cut our development time in half. The components are beautiful, performant, and incredibly easy to customize."</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">S</div>
                                    <div className="ml-3">
                                        <p className="text-white font-medium">Sarah Chen</p>
                                        <p className="text-blue-200/70 text-sm">Lead Developer at TechFlow</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl bg-blue-800/20 border border-blue-500/20">
                                <p className="text-blue-100 italic mb-4">"The attention to detail in DeepUI is incredible. From animations to accessibility, everything just works exactly as you'd expect."</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold">M</div>
                                    <div className="ml-3">
                                        <p className="text-white font-medium">Michael Rodriguez</p>
                                        <p className="text-blue-200/70 text-sm">Mobile Developer at AppWorks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default HomePage;