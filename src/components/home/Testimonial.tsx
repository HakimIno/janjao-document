import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialProps } from './types';

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => (
    <motion.div 
        className="p-8 rounded-2xl bg-blue-900/30 backdrop-blur-md border border-cyan-500/20 relative overflow-hidden group"
        whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)" }}
        transition={{ duration: 0.3 }}
    >
        {/* Decorative Quote Mark */}
        <div className="absolute -top-4 -left-4 text-8xl text-cyan-500/10 font-serif">"</div>
        <div className="absolute -bottom-8 -right-4 text-8xl text-teal-500/10 font-serif rotate-180">"</div>
        
        {/* Ocean-themed Glow */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-teal-500/5 rounded-full blur-xl"></div>
        
        <p className="text-blue-100 italic mb-6 relative z-10">{quote}</p>
        <motion.div 
            className="flex items-center relative z-10"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
        >
            <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg"
                whileHover={{ scale: 1.1 }}
            >
                {author.initial}
            </motion.div>
            <div className="ml-3">
                <p className="text-white font-medium group-hover:text-cyan-200 transition-colors">{author.name}</p>
                <p className="text-teal-200/70 text-sm">{author.role}</p>
            </div>
        </motion.div>
    </motion.div>
); 