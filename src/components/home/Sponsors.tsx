import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './sponsors.css'; // CSS file for optimized animations
import { sponsors } from './spon';

const Sponsors = () => {
  const infiniteSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors];
  
  const marqueeRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const updateCenterItems = () => {
    if (!marqueeRef.current || itemsRef.current.length === 0) return;
    
    const containerRect = marqueeRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    
    itemsRef.current.forEach((item) => {
      if (!item) return;
      
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distanceFromCenter = Math.abs(containerCenter - itemCenter);
      
      // Clear previous center-focus and center-shimmer classes
      item.classList.remove('center-focus', 'center-shimmer');
      
      // Calculate opacity based on distance from center
      const maxDistance = containerRect.width / 2;
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);
      
      // Apply center focus and shimmer effect
      if (normalizedDistance < 0.3) {
        item.classList.add('center-focus');
        
        // Add shimmer effect to center items
        if (normalizedDistance < 0.15) {
          item.classList.add('center-shimmer');
          
          // Find and activate shimmer effect element
          const shimmerElement = item.querySelector('.shimmer-effect');
          if (shimmerElement) {
            shimmerElement.classList.add('active');
          }
          
          // Add glow animation to the glow element
          const glowElement = item.querySelector('.sponsor-glow');
          if (glowElement) {
            glowElement.classList.add('active');
          }
        }
      } else {
        // Remove active classes from elements when not in center
        const shimmerElement = item.querySelector('.shimmer-effect');
        if (shimmerElement) {
          shimmerElement.classList.remove('active');
        }
        
        const glowElement = item.querySelector('.sponsor-glow');
        if (glowElement) {
          glowElement.classList.remove('active');
        }
      }
      
      // Adjust opacity and scale based on distance from center
      const opacity = 1 - (normalizedDistance * 0.7);
      const scale = 1 - (normalizedDistance * 0.3);
      
      item.style.opacity = Math.max(0.3, opacity).toString();
      item.style.transform = `scale(${Math.max(0.8, scale)})`;
    });
  };
  
  // Generate bubbles with CSS only
  const renderBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 30; i++) {
      const size = 2 + Math.random() * 10;
      const positionLeft = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 3 + Math.random() * 10;
      
      bubbles.push(
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
    return bubbles;
  };
  
  // Generate underwater light rays
  const renderLightRays = () => {
    const rays = [];
    
    for (let i = 0; i < 3; i++) {
      const width = 30 + Math.random() * 40;
      const leftPos = 10 + Math.random() * 70;
      const opacity = 0.03 + Math.random() * 0.07;
      const rotation = -15 + Math.random() * 30;
      
      rays.push(
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
    
    return rays;
  };
  
  // Add scroll event listener for center highlighting
  useEffect(() => {
    // Initial update
    updateCenterItems();
    
    // Setup animation frame for smooth updates
    let animationFrameId: number;
    const scrollCallback = () => {
      animationFrameId = window.requestAnimationFrame(updateCenterItems);
    };
    
    window.addEventListener('scroll', scrollCallback);
    
    // Periodic updates for animation
    const intervalId = setInterval(updateCenterItems, 60);
    
    return () => {
      window.removeEventListener('scroll', scrollCallback);
      window.cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

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
          
          {/* Underwater light rays */}
          {renderLightRays()}
          
          {/* CSS-only shimmer effects */}
          <div className="shimmer-container">
            {Array.from({ length: 12 }).map((_, i) => (
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
          
          {/* CSS-only bubbles */}
          <div className="bubbles-container">
            {renderBubbles()}
          </div>
          
          {/* CSS-only light beam effect */}
          <div className="light-beam"></div>


          {/* Optimized infinite smooth scrolling marquee */}
          <div className="marquee-container relative z-10" ref={marqueeRef}>
            <div className="marquee-track">
              {infiniteSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  ref={el => itemsRef.current[index] = el}
                  className="sponsor-item"
                >
                  {/* Modern frosted glass effect with shimmering glow */}
                  <div className="sponsor-glow"></div>
                  
                  {/* Logo */}
                  <div className="logo-container">
                    {sponsor.svg}
                  </div>

                  {/* Optimized shimmer effect */}
                  <div className="shimmer-effect"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Underwater plants subtle effect */}
          <div className="absolute bottom-0 left-0 w-full h-16 z-1 opacity-40">
            <div className="absolute left-[10%] bottom-0 w-16 h-24 bg-teal-400/10" 
              style={{ 
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                filter: 'blur(5px)',
                animation: 'sway 8s ease-in-out infinite alternate' 
              }}
            ></div>
            <div className="absolute left-[30%] bottom-0 w-8 h-20 bg-sky-400/10" 
              style={{ 
                clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
                filter: 'blur(5px)',
                animation: 'sway 7s ease-in-out infinite alternate-reverse' 
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