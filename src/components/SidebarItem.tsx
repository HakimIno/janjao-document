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
                    relative pl-4 transition-all duration-300 ease-in-out
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

                <div className="flex items-center gap-2">
                    <span className={`w-1 h-1 ${active ? "bg-[#64ffda] animate-pulse": "bg-[#38bdf8]"} rounded-full`}></span>
                    {/* Label with glow effect when active */}
                    <span className={`relative ${active ? 'text-[#64ffda]' : 'text-[#ccd6f6]'} 
                    ${active ? 'drop-shadow-[0_0_3px_rgba(100,255,218,0.5)]' : ''}`}>
                        {label}
                    </span>
                </div>

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

