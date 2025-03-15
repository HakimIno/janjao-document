import React, { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
    href: string;
    label: string;
    icon?: ReactNode;
    type?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, label, icon, type = "none" }) => {
    const [active, setactive] = useState(false);
    
    return (
        <NavLink
            to={href}
            className={({ isActive }) => {
                setactive(isActive);
                return (
                    `group flex font-sf-semibold items-center p-1.5 text-sm rounded-lg 
                    relative pl-6 transition-all duration-300 ease-in-out
                    hover:bg-[#0a192f]/30 hover:text-[#64ffda]
                    ${isActive ? 'text-[#64ffda] bg-[#0a192f]/20' : 'text-[#8892b0]'} ml-3`
                );
            }}
        >
            <div className="flex items-center justify-between w-full overflow-hidden">
                {/* Left indicator for sidebar items */}
                {type === "Sidebar" ? (
                    <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-full w-[0.15rem]
                    ${active ? 'bg-[#64ffda]' : ''} rounded-full`}></span>
                ) : icon}
                
                {/* Label with glow effect when active */}
                <span className={`relative ${active ? 'text-[#64ffda]' : 'text-[#ccd6f6]'} 
                    ${active ? 'drop-shadow-[0_0_3px_rgba(100,255,218,0.5)]' : ''}`}>
                    {label}
                </span>
                
                {/* Underwater bubble effects on hover */}
                <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute h-1.5 w-1.5 rounded-full bg-[#64ffda]/70 -top-1 right-4 animate-bubble-slow"></span>
                    <span className="absolute h-2 w-2 rounded-full bg-[#64ffda]/50 top-2 right-1 animate-bubble-medium"></span>
                    <span className="absolute h-1 w-1 rounded-full bg-[#64ffda]/60 top-3 right-3 animate-bubble-fast"></span>
                </div>
                
                {/* Item badge with first letter */}
                <div className={`font-sf-semibold text-xs w-4 h-4 flex items-center justify-center rounded-md 
                    ${active 
                        ? "bg-[#0d253e] text-[#64ffda] ring-1 ring-[#64ffda]/30" 
                        : "bg-[#112240] text-[#8892b0]"} 
                    transition-all duration-300`}>
                    {label.charAt(0).toUpperCase()}
                </div>
            </div>
        </NavLink>
    );
};

export default SidebarItem;

// Add these animations to your global CSS file:
// @keyframes bubble-slow {
//   0%, 100% { transform: translateY(0); opacity: 0.7; }
//   50% { transform: translateY(-5px); opacity: 1; }
// }
// @keyframes bubble-medium {
//   0%, 100% { transform: translateY(0); opacity: 0.5; }
//   50% { transform: translateY(-8px); opacity: 0.8; }
// }
// @keyframes bubble-fast {
//   0%, 100% { transform: translateY(0); opacity: 0.6; }
//   50% { transform: translateY(-10px); opacity: 0.9; }
// }
// .animate-bubble-slow { animation: bubble-slow 3s ease-in-out infinite; }
// .animate-bubble-medium { animation: bubble-medium 2.5s ease-in-out infinite; }
// .animate-bubble-fast { animation: bubble-fast 2s ease-in-out infinite; }
