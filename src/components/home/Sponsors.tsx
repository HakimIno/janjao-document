import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import './sponsors.css'; // CSS file for optimized animations
import { sponsors } from './spon';

const Sponsors = () => {
  // Memoize the sponsors instead of creating a new array on every render
  const infiniteSponsors = useMemo(() => 
    [...sponsors, ...sponsors, ...sponsors].slice(0, 18), 
    []
  );
  
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [centerItems, setCenterItems] = useState<number[]>([]);
  
  // Debounced update function with throttle to reduce calculations
  const updateCenterItems = useCallback(() => {
    if (!marqueeRef.current) return;
    
    const containerRect = marqueeRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const maxDistance = containerRect.width / 2;
    
    // Get all items at once to prevent multiple DOM queries
    const items = Array.from(marqueeRef.current.querySelectorAll('.sponsor-item'));
    const newCenterItems: number[] = [];
    
    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distanceFromCenter = Math.abs(containerCenter - itemCenter);
      
      // Calculate opacity and scale based on distance from center
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
      const opacity = 1 - (normalizedDistance * 0.7);
      const scale = 1 - (normalizedDistance * 0.3);
      
      // Type assertion to HTMLElement to use style property
      (item as HTMLElement).style.opacity = Math.max(0.3, opacity).toString();
      (item as HTMLElement).style.transform = `scale(${Math.max(0.8, scale)})`;
      
      // Store indices of center items to avoid class manipulations
      if (normalizedDistance < 0.3) {
        newCenterItems.push(index);
        if (normalizedDistance < 0.15) {
          newCenterItems.push(-index); // Negative to mark super-center items
        }
      }
    });
    
    setCenterItems(newCenterItems);
  }, []);
  
  // Memoize static elements to prevent recreation on each render
  const bubbles = useMemo(() => {
    const elements = [];
    for (let i = 0; i < 15; i++) { // Reduced from 30 to 15 for better performance
      const size = 2 + Math.random() * 10;
      const positionLeft = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 3 + Math.random() * 10;
      
      elements.push(
        <div 
          key={i}
          className="bubble absolute rounded-full z-0"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${positionLeft}%`,
            bottom: '-10px',
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return elements;
  }, []);
  
  // Memoize rays to prevent recreation on each render
  const lightRays = useMemo(() => {
    const elements = [];
    for (let i = 0; i < 3; i++) {
      const width = 30 + Math.random() * 40;
      const leftPos = 10 + Math.random() * 70;
      const opacity = 0.03 + Math.random() * 0.07;
      const rotation = -15 + Math.random() * 30;
      
      elements.push(
        <div 
          key={i}
          className="absolute bg-sky-300/5"
          style={{
            width: `${width}%`,
            height: '300%',
            top: '-100%',
            left: `${leftPos}%`,
            opacity: opacity,
            transform: `rotate(${rotation}deg)`,
            pointerEvents: 'none',
            zIndex: 1,
            filter: 'blur(20px)'
          }}
        />
      );
    }
    return elements;
  }, []);
  
  // Optimized event listeners with throttling
  useEffect(() => {
    let rafId: number | null = null;
    let isScrolling = false;
    
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        rafId = window.requestAnimationFrame(() => {
          updateCenterItems();
          isScrolling = false;
        });
      }
    };
    
    // Initial update
    updateCenterItems();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Use a throttled interval for updates instead of frequent intervals
    const intervalId = setInterval(updateCenterItems, 200); // Reduced from 60ms to 200ms
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
      clearInterval(intervalId);
    };
  }, [updateCenterItems]);

  return (
    <div className="relative mb-32 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-sf-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Our Sponsors
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100/70 text-lg"
        >
          Powered by industry leaders in AI and technology
        </motion.p>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Modern underwater glass container */}
        <div className="sponsors-container relative p-6 rounded-2xl border border-blue-400/30 backdrop-blur-xl transition-all duration-700 overflow-hidden">
          
          {/* Water surface refraction effect */}
          <div className="water-surface absolute left-0 right-0 top-0 h-12 opacity-20"></div>
          
          {/* Underwater light rays - memoized */}
          {lightRays}
          
          {/* CSS-only shimmer effects - reduced amount */}
          <div className="shimmer-container">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i}
                className="shimmer-line"
                style={{ 
                  top: `${Math.random() * 100}%`,
                  width: `${30 + Math.random() * 50}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* CSS-only bubbles - memoized */}
          <div className="bubbles-container">
            {bubbles}
          </div>
          
          {/* CSS-only light beam effect */}
          <div className="light-beam"></div>

          {/* Optimized infinite smooth scrolling marquee */}
          <div className="marquee-container relative z-10" ref={marqueeRef}>
            <div className="marquee-track">
              {infiniteSponsors.map((sponsor, index) => {
                const isCenterFocus = centerItems.includes(index);
                const isCenterShimmer = centerItems.includes(-index);
                
                return (
                  <div
                    key={index}
                    className={`sponsor-item ${isCenterFocus ? 'center-focus' : ''} ${isCenterShimmer ? 'center-shimmer' : ''}`}
                  >
                    {/* Conditionally render effects for better performance */}
                    {isCenterShimmer && <div className="sponsor-glow active"></div>}
                    {!isCenterShimmer && <div className="sponsor-glow"></div>}
                    
                    {/* Logo */}
                    <div className="logo-container">
                      {sponsor.svg}
                    </div>

                    {/* Only add active shimmer to center items */}
                    {isCenterShimmer ? (
                      <div className="shimmer-effect active"></div>
                    ) : (
                      <div className="shimmer-effect"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Underwater plants - simplified */}
          <div className="absolute bottom-0 left-0 w-full h-16 z-1 opacity-40">
            <div className="absolute left-[10%] bottom-0 w-16 h-24 bg-teal-400/10" 
              style={{ 
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                filter: 'blur(5px)',
                animation: 'sway 8s ease-in-out infinite alternate' 
              }}
            ></div>
            <div className="absolute right-[15%] bottom-0 w-12 h-16 bg-cyan-400/10" 
              style={{ 
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                filter: 'blur(5px)',
                animation: 'sway 9s ease-in-out infinite alternate' 
              }}
            ></div>
          </div>
        </div>

        {/* Bottom content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <h3 className="text-xl font-bold text-white mb-3">
            Trusted by Leading Companies
          </h3>
          <p className="text-blue-100/70 max-w-2xl mx-auto">
            Our platform is backed by industry leaders pushing the boundaries of artificial intelligence and technology innovation.
          </p>
          <div className="mt-6 hover-scale">
            <button className="sponsor-button relative px-8 py-3 rounded-full text-white font-medium overflow-hidden">
              <span className="relative z-10">Become a Sponsor</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsors;