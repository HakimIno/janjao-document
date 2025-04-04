import React, { useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// แสดงตัวอย่าง Component ที่น่าสนใจ
export const ComponentShowcase: React.FC = () => {
    const [activeItem, setActiveItem] = useState<number | null>(null);

    // Mouse spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const handleMouseMove = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    // ข้อมูลตัวอย่าง components
    const showcaseItems = [
        {
            name: 'Button',
            description: 'Customizable button components with multiple variants',
            image: '/images/components/button.png',
            color: 'from-cyan-500/20 to-blue-500/20',
        },
        {
            name: 'Card',
            description: 'Flexible card components with shadow and border options',
            image: '/images/components/card.png',
            color: 'from-indigo-500/20 to-purple-500/20',
            
        },
        {
            name: 'Input',
            description: 'Text input fields with validation and icon support',
            image: '/images/components/input.png',
            color: 'from-cyan-400/20 to-teal-500/20',
            
        },
        {
            name: 'Avatar',
            description: 'Beautiful avatar components with various shapes and badge support',
            image: '/images/components/avatar.png',
            color: 'from-pink-500/20 to-rose-500/20',
            
        },
        
    ];

    return (
        <div className="mb-32">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-sf-bold text-white mb-6">
                    Beautiful Components for
                    <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 mt-2">
                        Your Next Mobile App
                    </span>
                </h2>
                <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
                    Explore our component library with 60+ customizable React Native components
                    designed for modern mobile applications.
                </p>
            </div>

            {/* Component showcase - ปรับเป็น masonry grid และเพิ่ม hover effect */}
            <div 
                className="relative px-4"
                onMouseMove={handleMouseMove}
            >
                {/* Spotlight effect */}
                <motion.div 
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(56, 189, 248, 0.1), transparent 80%)`
                    }}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-min">
                    {showcaseItems.map((item, index) => {
                        // สร้าง dynamic grid layout
                        const isWide = index % 3 === 0;
                        const colSpan = isWide ? "md:col-span-8" : "md:col-span-4";
                        
                        return (
                            <motion.div
                                key={index}
                                className={`group ${colSpan} bg-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 overflow-hidden hover:border-blue-400/40 transition-all duration-300 relative`}
                                whileHover={{ y: -5 }}
                                onClick={() => setActiveItem(activeItem === index ? null : index)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
                                
                                <div className={`${isWide ? "h-64 md:h-72" : "h-40"} relative`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-16 h-16 flex items-center justify-center">
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 animate-pulse" />
                                            <span className="relative z-10 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                                                {item.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Hover indicator */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            
            {/* "View All Components" button */}
            <div className="text-center mt-12">
                <a 
                    href="/components" 
                    className="group relative px-8 py-3 bg-gradient-to-r from-blue-600/40 to-cyan-600/40 rounded-full text-white font-medium border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
                >
                    <span className="relative z-10">View All Components</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
            </div>
        </div>
    );
}; 