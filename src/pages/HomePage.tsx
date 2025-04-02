import React from 'react';
import { NavLink } from 'react-router-dom';
import { SparklesCore } from '../components/ui/sparkles';
import { motion } from 'framer-motion';
import { UnderwaterScene } from '../components/underwater/UnderwaterScene';
import '../styles/underwater-animations.css';
import HeroSection from '../components/underwater/HeroSection';
import { FeatureCard } from '../components/home/FeatureCard';
import { StatItem } from '../components/home/StatItem';
import { Testimonial } from '../components/home/Testimonial';
import { UnderwaterBackground } from '../components/home/UnderwaterBackground';
import { STATS, FEATURES, TESTIMONIALS } from '../components/home/constants';
import { ANIMATION_STYLES } from '../components/home/animations';

const HomePage: React.FC = () => {
    React.useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.textContent = ANIMATION_STYLES;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-blue-950 to-black relative overflow-hidden">
            {/* Underwater Background Effects */}
            <UnderwaterBackground />

            {/* Main Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-full relative">
                    <UnderwaterScene />
                    <HeroSection />
                </section>

                {/* Features Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative px-4 py-32"
                >
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-24">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl font-sf-bold text-white mb-8"
                            >
                                Everything you need to build
                                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 mt-2">
                                    exceptional mobile experiences
                                </span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-blue-100/80 max-w-2xl mx-auto text-lg"
                            >
                                Ship faster with our meticulously crafted components that work seamlessly across iOS and Android.
                                From animations to accessibility, we've handled the complexity so you can focus on creating.
                            </motion.p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                            {FEATURES.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} index={index} />
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="relative mb-32">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-2xl opacity-20" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="relative bg-blue-900/30 backdrop-blur-md rounded-3xl p-12 border border-blue-400/20 hover:border-blue-400/30 transition-all duration-500"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                                    {STATS.map((stat, index) => (
                                        <StatItem key={index} stat={stat} index={index} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-32 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-16 rounded-3xl border border-blue-500/20 relative overflow-hidden"
                        >
                            {/* Background bubbles */}
                            

                            <h3 className="text-4xl font-sf-bold text-white mb-6">Ready to transform your mobile development?</h3>
                            <p className="text-blue-100/80 max-w-2xl mx-auto mb-12 text-lg">
                                Join thousands of developers building exceptional mobile experiences with DeepUI.
                                Get started in minutes with our comprehensive documentation and ready-to-use components.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <NavLink to="/getting-started">
                                    <button className="before:ease relative h-14 w-48 overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 p-[0.1rem] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-cyan-400 hover:before:-translate-x-40 rounded-full">
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
                                            <span className="relative z-10 font-sf-bold text-lg">Get Started</span>
                                        </div>
                                    </button>
                                </NavLink>

                                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="h-14 px-8 flex items-center justify-center rounded-full border border-blue-400/30 text-white hover:bg-blue-800/30 transition-all text-lg">
                                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
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
                            className="relative bg-blue-900/20 backdrop-blur-md rounded-3xl p-12 border border-blue-400/20"
                        >
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-sf-bold text-white mb-4">Trusted by developers worldwide</h3>
                                <p className="text-blue-100/70 text-lg">Join thousands of developers building amazing mobile experiences</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {TESTIMONIALS.map((testimonial, index) => (
                                    <Testimonial key={index} {...testimonial} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default HomePage;