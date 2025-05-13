import React, { useRef, useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { UnderwaterScene } from '../components/underwater/UnderwaterScene';
import '../styles/underwater-animations.css';
import HeroSection from '../components/underwater/HeroSection';
import { Testimonial } from '../components/home/Testimonial';
import { UnderwaterBackground } from '../components/home/UnderwaterBackground';
import { TESTIMONIALS } from '../components/home/constants';
import { ANIMATION_STYLES } from '../components/home/animations';
import { ComponentShowcase } from '../components/home/ComponentShowcase';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { FEATURES } from '../components/home/Feature';

const MemoizedUnderwaterScene = React.memo(UnderwaterScene);
const MemoizedUnderwaterBackground = React.memo(UnderwaterBackground);
const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedFeaturesSection = React.memo(FeaturesSection);
const MemoizedComponentShowcase = React.memo(ComponentShowcase);

// Helper for performance optimization
const useAnimationStyles = (styles: string) => {
    const styleRef = useRef<HTMLStyleElement | null>(null);

    useEffect(() => {
        // Check if style element already exists
        if (!styleRef.current) {
            const styleElement = document.createElement('style');
            styleElement.textContent = styles;
            document.head.appendChild(styleElement);
            styleRef.current = styleElement;
        }

        return () => {
            if (styleRef.current) {
                document.head.removeChild(styleRef.current);
                styleRef.current = null;
            }
        };
    }, [styles]);
};

const HomePage: React.FC = () => {
    // Use the custom hook for animation styles
    useAnimationStyles(ANIMATION_STYLES);

    // Detect if we're on a low-performance device
    const isLowPerformanceDevice = useRef(
        window.navigator.hardwareConcurrency < 4 || // Less than 4 CPU cores
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            window.navigator.userAgent
        )
    ).current;

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-blue-950 to-black relative overflow-hidden">
                {/* Underwater Background Effects - only render on higher performance devices */}
                <MemoizedUnderwaterBackground />
                {!isLowPerformanceDevice && <MemoizedUnderwaterScene />}

                {/* Main Content */}
                <div className="relative z-10">
                    {/* Hero Section */}
                    <section className="min-h-full relative">
                        <MemoizedHeroSection />
                    </section>

                    {/* Features Section */}
                    <section className="relative px-4 py-32">
                        <div className="max-w-7xl mx-auto">
                            <MemoizedFeaturesSection features={FEATURES} />

                            {/* Component Showcase */}
                            <MemoizedComponentShowcase />

                            {/* Social Proof Section */}
                            <div className="relative bg-blue-900/20 backdrop-blur-md rounded-3xl p-12 border border-cyan-400/20 mb-32">
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl font-sf-bold text-white mb-4">Trusted by React Native developers</h3>
                                    <p className="text-blue-100/70 text-lg">Join thousands of mobile developers building amazing user experiences</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {TESTIMONIALS.map((testimonial, index) => (
                                        <Testimonial key={index} {...testimonial} />
                                    ))}
                                </div>
                            </div>

                            {/* Footer Section */}
                            <div className="text-center">
                                <p className="text-blue-100/70 text-sm">© 2025 React Native UI Kit. All rights reserved.</p>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </LazyMotion>
    );
};

export default HomePage;