import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  isMenuOpen?: boolean;
  onMenuClick?: () => void;
  className?: string;
}

const UnderwaterNavbar: React.FC<NavbarProps> = ({ 
  isMenuOpen = false, 
  onMenuClick, 
  className = '' 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // เช็คการเลื่อนหน้าจอเพื่อเปลี่ยนสไตล์ Navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // เมนูสำหรับ Navbar
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Getting Started', path: '/getting-started' },
    { name: 'Components', path: '/components/button' },
    { name: 'Documentation', path: '/documentation' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${className} ${
        scrolled 
          ? 'bg-blue-900/70 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo และชื่อแบรนด์ */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/bubble-texture.png')] mix-blend-overlay opacity-30"></div>
                <span className="text-xl">🐠</span>
                {/* เอฟเฟกต์ฟองอากาศในโลโก้ */}
                <div className="absolute w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ top: '20%', left: '70%', animationDuration: '2s' }}></div>
                <div className="absolute w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ top: '60%', left: '30%', animationDuration: '3s' }}></div>
              </div>
              <span className="text-xl font-sf-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">DeepUI</span>
            </NavLink>
          </div>

          {/* เมนูสำหรับหน้าจอขนาดใหญ่ */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || 
                  (item.path !== '/' && location.pathname.startsWith(item.path));
                
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-cyan-500/20 border border-cyan-400/30'
                        : 'text-blue-100/80 hover:text-white hover:bg-blue-800/30'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* ปุ่ม GitHub */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yourusername/deepui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100/80 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            {/* ปุ่มเมนูสำหรับหน้าจอขนาดเล็ก */}
            <button
              onClick={onMenuClick}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-800/30 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* เมนูสำหรับหน้าจอขนาดเล็ก */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/80 backdrop-blur-md border-b border-cyan-500/20">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== '/' && location.pathname.startsWith(item.path));
            
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-white bg-cyan-500/20 border border-cyan-400/30'
                    : 'text-blue-100/80 hover:text-white hover:bg-blue-800/30'
                }`}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* เอฟเฟกต์ฟองอากาศใน Navbar */}
      {scrolled && (
        <>
          <div className="absolute top-1/2 left-[10%] w-2 h-2 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/4 left-[30%] w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-3/4 left-[70%] w-2 h-2 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
          <div className="absolute top-1/3 left-[90%] w-1 h-1 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
        </>
      )}
    </motion.nav>
  );
};

export default UnderwaterNavbar; 