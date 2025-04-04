import React from 'react';
import { motion } from 'framer-motion';
import { StatItemProps } from './types';

export const StatItem: React.FC<StatItemProps> = ({ stat, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="text-center group"
        whileHover={{ y: -5 }}
    >
        <motion.div 
            className="text-3xl mb-3 p-3 w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-900/50 to-teal-900/50 border border-teal-500/20 shadow-lg"
            whileHover={{ 
                rotate: 5, 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)" 
            }}
            style={{ 
                animationDuration: '2s', 
                animationDelay: `${index * 0.2}s` 
            }}
        >
            {stat.icon}
        </motion.div>
        <div className="text-2xl md:text-4xl font-sf-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 mb-1">
            {stat.value}
        </div>
        <div className="text-sm text-blue-100/80 mt-1 group-hover:text-cyan-200 transition-colors">{stat.label}</div>
        
        {/* Decorative line */}
        <div className="w-12 h-0.5 mx-auto mt-2 bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
    </motion.div>
); 