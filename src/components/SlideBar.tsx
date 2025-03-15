import React, { ReactNode } from 'react';
import SidebarItem from './SidebarItem';
import SidebarAccordion from './SidebarAccordion';
import {
    SolarAsteroidBoldDuotone,
    SolarDocumentsBoldDuotone,
    SolarHomeAngleBoldDuotone,
    SolarLayersBoldDuotone,
} from '../shared/icons/Solar';

const DivIcon: React.FC<{ children: ReactNode }> = ({ children }) => (
    <div className="relative overflow-hidden p-1 grid rounded-lg transition-all duration-300 hover:scale-105 group">
        {/* กรอบเรืองแสงแบบใต้ทะเล */}
        <span className="absolute inset-0 rounded-lg overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            <span className="absolute w-[200%] aspect-square inset-0 translate-x-[-50%] translate-y-[-15%] bg-[conic-gradient(from_0deg,_transparent_0_340deg,_#0ea5e9_345deg,_#06b6d4_350deg,_#0891b2_360deg)] opacity-80 animate-[spin_4s_linear_infinite]"></span>
        </span>
        
        {/* พื้นหลังหลัก */}
        <span className="absolute inset-[1px] rounded-lg bg-blue-950/90 backdrop-blur-sm z-0"></span>
        
        {/* เอฟเฟกต์ฟองอากาศ - แสดงเมื่อ hover */}
        <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            {/* ฟองอากาศขนาดเล็ก */}
            <div className="absolute w-1 h-1 bg-cyan-300/30 rounded-full left-[15%] bottom-0 animate-bubble-rise-1"></div>
            <div className="absolute w-1.5 h-1.5 bg-cyan-300/20 rounded-full left-[40%] bottom-0 animate-bubble-rise-2"></div>
            <div className="absolute w-1 h-1 bg-cyan-300/30 rounded-full left-[75%] bottom-0 animate-bubble-rise-3"></div>
        </div>
        
        {/* เอฟเฟกต์แสงเรืองแสงใต้ทะเล */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        
        {/* เนื้อหาหลัก */}
        <div className="relative z-10 flex items-center justify-center">
            {children}
        </div>
        
        {/* เอฟเฟกต์กระเพื่อมน้ำ */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-water-wave z-0"></div>
    </div>
);

// เพิ่ม keyframes สำหรับแอนิเมชันในส่วน <head> ของเอกสาร
// ใช้ CSS-in-JS หรือเพิ่มในไฟล์ CSS หลักของโปรเจค

// Sidebar Navigation Items
const sidebarItems = [
    {
        icon: <SolarHomeAngleBoldDuotone className={"text-neutral-50"} />,
        label: "Introduction",
        children: [
            { href: "/getting-started", label: "Getting Started" },
            { href: "/installation", label: "Installation" },
        ]
    },
    {
        icon: <SolarDocumentsBoldDuotone className={"text-neutral-50"} />,
        label: "Documentation",
        href: "/documentation"
    },
    {
        icon: <SolarAsteroidBoldDuotone className={"text-neutral-50"} />,
        label: "Colors",
        href: "/colors"
    },
    {
        icon: <SolarLayersBoldDuotone className={"text-neutral-50"} />,
        label: "Components",
        children: [
            { href: "/components/button", label: "Button" },
            { href: "/components/modal", label: "Modal" },
            { href: "/components/accordion", label: "Accordion" },
        ]
    }
];

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <>
            {/* Mobile backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                    onClick={onClose}
                />
            )}

            <nav className={`
                fixed top-16 bottom-0 left-0 lg:left-20 w-64 bg-blue-950/80 border border-cyan-900/50 z-50 backdrop-blur-lg
                transform transition-transform duration-300 ease-in-out
                lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <nav className="h-full overflow-y-auto p-3">
                    <ul className="space-y-1.5">
                        {sidebarItems.map((item) => {
                            if (item.children) {
                                item.children.sort((a, b) => a.label.localeCompare(b.label));
                            }
                            return (
                                <SidebarAccordion
                                    key={item.label}
                                    icon={<DivIcon>{item.icon}</DivIcon>}
                                    label={item.label}
                                    href={String(item?.href)}
                                >
                                    {item.children?.map((child) => (
                                        <SidebarItem
                                            key={child.href}
                                            href={child.href}
                                            label={child.label}
                                            type="Sidebar"
                                        />
                                    ))}
                                </SidebarAccordion>
                            );
                        })}
                    </ul>
                </nav>
            </nav>
        </>
    );
};

export default Sidebar;
