import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Github, Moon, Sun, Globe, X, SidebarClose } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import JanJaoLogo from './JanJaoLogo';

interface NavbarProps {
    isSidebarOpen?: boolean;
    onMenuClick?: () => void;
    className?: string;
    sections?: any[];
    isMenuOpen?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, onMenuClick, className, sections, isMenuOpen = true }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const { theme, toggleTheme } = useTheme();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus input when search opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Close search on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            <nav className={`
                fixed top-0 w-full z-50 transition-all duration-300 px-0 lg:px-20
                border-b border-blue-800/50
                ${isScrolled
                    ? ' backdrop-blur-xl  shadow-lg'
                    : 'bg-transparent'}
                ${className}
            `}>
                <div className="h-16 flex items-center">
                    {/* Left section - Logo and Menu */}
                    <div className="w-full lg:w-64 pl-4 flex items-center gap-4">
                        {isMenuOpen && <button
                            onClick={onMenuClick}
                            className="group relative overflow-hidden inline-flex items-center justify-center rounded-full p-2.5
                                bg-gradient-to-r from-blue-900/80 to-blue-950/80 backdrop-blur-md
                                text-cyan-300 hover:text-cyan-100
                                transition-all duration-300 ease-out
                                hover:shadow-[0_0_8px_0] hover:shadow-cyan-500/30
                                focus:outline-none focus:ring-1 focus:ring-cyan-500/50
                                active:scale-95 lg:hidden
                                border border-cyan-500/20 hover:border-cyan-400/40"
                            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
                        >
                            {/* Bubble effect */}
                            <span className="absolute w-1.5 h-1.5 bg-cyan-400/20 rounded-full top-1 right-1 animate-ping" 
                                  style={{ animationDuration: '3s' }}></span>
                            <span className="absolute w-1 h-1 bg-cyan-400/20 rounded-full bottom-1 left-1 animate-ping" 
                                  style={{ animationDuration: '4s' }}></span>
                            
                            {/* Icon */}
                            {!isSidebarOpen ? (
                                <Menu className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                            ) : (
                                <X className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                            )}
                            
                            {/* Glow effect */}
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </button>}

                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <JanJaoLogo size="lg" className="py-2" />
                            </div>
                        </Link>
                    </div>

                    {/* Center section - Search */}
                    <div className="flex-1 hidden lg:flex items-center justify-center px-4">
                        <div className="w-full max-w-xl">
                            <div className="group flex items-center gap-2 rounded-full 
                                bg-neutral-900/70 backdrop-blur-md py-2 px-4 
                                ring-1 ring-neutral-800/80 
                                transition-all duration-300 
                                hover:ring-cyan-500/30 hover:bg-neutral-900/90
                                focus-within:ring-teal-400/50 focus-within:bg-neutral-900/90">
                                <Search className="h-5 w-5 text-cyan-600 group-hover:text-cyan-500 
                                    group-focus-within:text-teal-500 transition-colors duration-300" />
                                <input
                                    type="text"
                                    placeholder="Search components..."
                                    className="w-full bg-transparent text-sm text-neutral-100 
                                        placeholder-neutral-400 focus:outline-none 
                                        group-hover:placeholder-neutral-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right section - Actions */}
                    <div className="w-72 pr-4 flex items-center justify-end gap-3">
                        <button
                            onClick={toggleTheme}
                            className="nav-icon-button group"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Moon className="h-5 w-5 transition-all duration-300 group-hover:rotate-45" />
                            ) : (
                                <Sun className="h-5 w-5 transition-all duration-300 group-hover:rotate-45" />
                            )}
                        </button>
                        <a
                            href="https://github.com/your-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-icon-button"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="nav-icon-button lg:hidden"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Mobile search dropdown - ปรับปรุงการแสดงผล */}
                <div className={`
                    absolute top-full left-0 right-0 
                     backdrop-blur-xl 
                    transition-all duration-300 transform
                    ${isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}
                    lg:hidden shadow-lg
                `}>
                    <div className="p-4">
                        <div className="relative">
                            <div className="flex items-center gap-2 rounded-lg 
                                bg-neutral-900/70 px-3 py-2 
                                ring-1 ring-neutral-800 
                                focus-within:ring-cyan-500/50 transition-all duration-300">
                                <Search className="h-5 w-5 text-neutral-400 group-focus-within:text-cyan-400" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search components..."
                                    className="w-full bg-transparent text-sm text-neutral-100 
                                        placeholder-neutral-400 focus:outline-none"
                                />
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="text-neutral-400 hover:text-cyan-400 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 
                                bg-gradient-to-r from-transparent via-teal-500/70 to-transparent 
                                group-focus-within:w-[95%] transition-all duration-500 
                                after:content-[''] after:absolute after:w-full after:h-3 after:bottom-0 
                                after:left-0 after:bg-gradient-to-t after:from-cyan-500/20 after:to-transparent 
                                after:opacity-0 after:group-focus-within:opacity-100 after:transition-opacity after:duration-700"></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Backdrop */}
            {isSearchOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSearchOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;