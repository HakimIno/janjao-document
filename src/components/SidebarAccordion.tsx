import React, { useState, ReactNode, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarAccordionProps {
    icon: ReactNode;
    label: string;
    href: string;
    children?: ReactNode;
}

const SidebarAccordion: React.FC<SidebarAccordionProps> = ({ icon, label, href, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleNavigation = (linkHref: string) => {
        navigate(linkHref);
    };

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            } else {
                contentRef.current.style.maxHeight = '0';
            }
        }
    }, [isOpen]);

    return (
        <div className="hs-accordion">
            <button
                type="button"
                className="group relative w-full font-sf-semibold text-start flex items-center gap-x-3.5 p-1.5 px-2 text-sm 
                    rounded-xl overflow-hidden
                    bg-blue-900/20 hover:bg-blue-900/40
                    text-cyan-100 hover:text-cyan-50
                    transition-all duration-300 ease-out
                    focus:outline-none focus:ring-1 focus:ring-cyan-500/40
                    shadow-sm hover:shadow-md hover:shadow-cyan-500/10"
                onClick={() => children ? handleToggle() : handleNavigation(href)}
                aria-expanded={isOpen}
            >
                {/* Subtle glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Icon and label */}
                <span className="relative z-10 text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300">{icon}</span>
                <span className="relative z-10">{label}</span>

                {children && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`ms-auto transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-cyan-400 group-hover:text-cyan-300 relative z-10`}
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M17 15a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 15z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                style={{ maxHeight: '0' }}
            >
                <div className="ml-2 mt-1 py-1">{children}</div>
            </div>
        </div>
    );
};

export default SidebarAccordion;
