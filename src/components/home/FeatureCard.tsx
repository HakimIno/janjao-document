import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from './types';

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => (
    <motion.div
        className="relative p-8 rounded-2xl bg-blue-900/20 backdrop-blur-md border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group overflow-hidden"
        whileHover={{ 
            scale: 1.03,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            transition: { duration: 0.3 }
        }}
    >
        {/* Background gradient with motion */}
        <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-900/5 to-cyan-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

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
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white/10 border border-white/20"
                    style={{
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
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
            <motion.div 
                className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-800/50 to-cyan-900/50 border border-blue-500/30 shadow-lg shadow-blue-500/20"
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                animate={{ y: [0, -5, 0], transition: { duration: 2, repeat: Infinity, repeatType: "reverse", delay: index * 0.2 } }}
            >
                {feature.icon}
            </motion.div>
            <motion.h3 
                className="text-xl font-sf-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1, x: 3, transition: { duration: 0.2 } }}
            >
                {feature.title}
            </motion.h3>
            <motion.p 
                className="text-sm text-blue-100/80 group-hover:text-blue-100/90 transition-colors duration-300 leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, transition: { duration: 0.2 } }}
            >
                {feature.description}
            </motion.p>
            
            {/* Subtle arrow indicator that appears on hover */}
            <div className="mt-4 flex items-center text-blue-300/60 group-hover:text-blue-300/90 transition-all duration-300 overflow-hidden h-6">
                <span className="text-xs font-medium mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">Learn more</span>
                <motion.span 
                    className="transform opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                    animate={{ x: [0, 5, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: index * 0.1 } }}
                >
                    →
                </motion.span>
            </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
); 