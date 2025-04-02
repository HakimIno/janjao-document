import React from 'react';
import { TestimonialProps } from './types';

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => (
    <div className="p-6 rounded-xl bg-blue-800/20 border border-blue-500/20">
        <p className="text-blue-100 italic mb-4">{quote}</p>
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                {author.initial}
            </div>
            <div className="ml-3">
                <p className="text-white font-medium">{author.name}</p>
                <p className="text-blue-200/70 text-sm">{author.role}</p>
            </div>
        </div>
    </div>
); 