import React, { useRef, useEffect } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { UnderwaterScene } from '../components/underwater/UnderwaterScene';
import '../styles/underwater-animations.css';
import HeroSection from '../components/underwater/HeroSection';
import { StatItem } from '../components/home/StatItem';
import { Testimonial } from '../components/home/Testimonial';
import { UnderwaterBackground } from '../components/home/UnderwaterBackground';
import { STATS, TESTIMONIALS } from '../components/home/constants';
import { ANIMATION_STYLES } from '../components/home/animations';
import { ComponentShowcase } from '../components/home/ComponentShowcase';
import Sponsors from '../components/home/Sponsors';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { FEATURES } from '../components/home/Feature';

// Create memoized components to prevent unnecessary re-renders
const MemoizedUnderwaterScene = React.memo(UnderwaterScene);
const MemoizedUnderwaterBackground = React.memo(UnderwaterBackground);
const MemoizedHeroSection = React.memo(HeroSection);
const MemoizedFeaturesSection = React.memo(FeaturesSection);
const MemoizedComponentShowcase = React.memo(ComponentShowcase);
const MemoizedSponsors = React.memo(Sponsors);

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
                {!isLowPerformanceDevice && <MemoizedUnderwaterBackground />}
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

                            {/* Stats Section */}
                            <div className="relative mb-32">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-2xl opacity-20" />
                                <div className="relative bg-blue-900/30 backdrop-blur-md rounded-3xl p-12 border border-teal-400/20 hover:border-cyan-400/30 transition-all duration-500">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                                        {STATS.map((stat, index) => (
                                            <StatItem key={index} stat={stat} index={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>


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

                            {/* Sponsors Section */}
                            <MemoizedSponsors />

                        </div>
                    </section>
                </div>
            </div>
        </LazyMotion>
    );
};

export default HomePage;