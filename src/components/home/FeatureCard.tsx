import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from './types';

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
    <motion.div
        className="relative p-8 rounded-2xl bg-blue-900/20 backdrop-blur-md border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group overflow-hidden"
        
    >
        {/* Water ripple effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-400/5 to-teal-400/10 animate-ripple"></div>
        </div>

        {/* Glowing effect overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-400/10 to-teal-400/20 blur-xl"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-400/5 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
        </div>

        {/* Bubble decoration - reduced number and simplified */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white/10 border border-white/20"
                    style={{
                        width: '6px',
                        height: '6px',
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
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-800/50 to-cyan-900/50 border border-blue-500/30 shadow-lg shadow-blue-500/20">
                {feature.icon}
            </div>
            <h3 className="text-xl font-sf-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
            </h3>
            <p className="text-sm text-blue-100/80 group-hover:text-blue-100/90 transition-colors duration-300 leading-relaxed">
                {feature.description}
            </p>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
); 