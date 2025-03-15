import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarBrand from '../SidebarBrand';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnderwaterSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // กลุ่มเมนูสำหรับ Sidebar
  const menuGroups = [
    {
      title: 'Getting Started',
      items: [
        { name: 'Introduction', path: '/getting-started' },
        { name: 'Installation', path: '/installation' },
      ]
    },
    {
      title: 'Components',
      items: [
        { name: 'Button', path: '/components/button' },
        { name: 'Modal', path: '/components/modal' },
        { name: 'Accordion', path: '/components/accordion' },
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', path: '/documentation' },
        { name: 'Colors', path: '/colors' },
      ]
    }
  ];

  // Animation variants
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 }
  };

  const overlayVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-blue-950/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`
          fixed top-0 left-0 z-50 h-full w-64 
          bg-gradient-to-b from-blue-900/90 to-blue-950/90 backdrop-blur-md
          border-r border-cyan-500/20 shadow-lg shadow-cyan-500/5
          transform lg:translate-x-0 lg:static lg:z-0
          overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-transparent
        `}
      >
        {/* Sidebar header */}
        <div className="p-4 border-b border-cyan-500/20">
          <SidebarBrand />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 lg:hidden text-blue-100/80 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar content */}
        <div className="p-4">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              <h3 className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => {
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <li key={itemIndex}>
                      <NavLink
                        to={item.path}
                        className={`
                          block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
                          relative overflow-hidden group
                          ${isActive 
                            ? 'text-white bg-cyan-500/20 border border-cyan-400/30' 
                            : 'text-blue-100/80 hover:text-white hover:bg-blue-800/30'}
                        `}
                      >
                        {/* Bubble effect on hover */}
                        <span className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
                        {item.name}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 w-full"></span>
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-cyan-500/20 bg-blue-900/50">
          <div className="flex items-center justify-between">
            <span className="text-xs text-blue-100/60">DeepUI v1.0.0</span>
            <a
              href="https://github.com/yourusername/deepui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative bubbles */}
        <div className="absolute top-1/4 right-4 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </motion.aside>
    </>
  );
};

export default UnderwaterSidebar; 