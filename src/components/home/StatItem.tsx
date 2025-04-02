import React from 'react';
import { motion } from 'framer-motion';
import { StatItemProps } from './types';

export const StatItem: React.FC<StatItemProps> = ({ stat, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="text-center"
    >
        <div 
            className="text-2xl mb-2 animate-bounce" 
            style={{ 
                animationDuration: '2s', 
                animationDelay: `${index * 0.2}s` 
            }}
        >
            {stat.icon}
        </div>
        <div className="text-2xl md:text-3xl font-sf-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            {stat.value}
        </div>
        <div className="text-sm text-blue-100/70 mt-1">{stat.label}</div>
    </motion.div>
); 