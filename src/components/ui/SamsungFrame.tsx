import React from 'react';

interface SamsungFrameProps {
    text?: string;
    title?: string;
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    glowColor?: string;
}

/**
 * A component that displays a Samsung S25 Ultra frame with customizable text inside
 */
export const SamsungFrame: React.FC<SamsungFrameProps> = ({
    text = "안녕하세요! 이것은 Samsung S25 Ultra입니다",
    title = "Samsung S25 Ultra",
    textColor = "text-black"
}) => {
    return (
        <div className="flex justify-center items-center w-full p-4 sm:p-6 md:p-8">
            {/* Main Container - Samsung S25 Ultra specific dimensions */}
            <div className="relative w-full max-w-[320px] aspect-[390/844] mx-auto">
                {/* Frame border - designed for Samsung S25 Ultra with glow effect */}
                <div className="absolute inset-0 rounded-[40px] border-[6px] border-slate-900 bg-slate-900/30 backdrop-blur-sm shadow-[0_0_15px_3px_rgba(34,211,238,0.4)] transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.6)]">
                    {/* Punch hole camera */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-20 border border-slate-900/40"></div>

                    {/* Screen Content */}
                    <div className={`absolute inset-[1px] rounded-[34px] overflow-hidden flex flex-col `}>
                        {/* Status Bar */}
                        <div className="h-10 px-6 flex justify-between items-center">
                            
                        </div>

                        {/* App Content */}
                        <div className="flex-1 flex flex-col p-4">
                            {/* App Title */}
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex flex-col p-1">
                                    <h1 className="text-white font-semibold text-lg">{title}</h1>
                                    <p className="text-cyan-200/80 text-xs">Modern & Customizable</p>
                                </div>
                                <button className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500/30 to-cyan-400/20 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Component Showcase */}
                            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-2xl p-4 border border-cyan-400/20 mb-4">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="text-cyan-100 text-sm font-medium">Button Components</div>
                                    <div className="w-6 h-6 bg-cyan-400/30 rounded-full flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="h-10 rounded-lg bg-cyan-500/30 flex items-center justify-center">
                                        <span className="text-white text-xs">Primary</span>
                                    </div>
                                    <div className="h-10 rounded-lg bg-transparent border border-cyan-400/30 flex items-center justify-center">
                                        <span className="text-cyan-100 text-xs">Secondary</span>
                                    </div>
                                </div>
                            </div>

                            {/* Component List */}
                            <div className="flex-1 bg-blue-900/20 rounded-2xl p-3 border border-blue-400/10">
                                <ul className="space-y-2">
                                    {["Button", "Card", "Modal", "List", "Navigation"].map((item, index) => (
                                        <li key={index} className="flex items-center justify-between p-2 bg-blue-900/30 rounded-lg">
                                            <div className="flex items-center">
                                                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-md flex items-center justify-center mr-3">
                                                    <span className="text-white text-[10px]">{index + 1}</span>
                                                </div>
                                                <span className="text-cyan-100 text-sm">{item}</span>
                                            </div>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Text Description */}
                            <div className="mt-4">
                                <p className={`${textColor} text-xs text-center`}>
                                    {text}
                                </p>
                            </div>
                        </div>

                        {/* Navigation Bar */}
                        <div className="h-14 px-8 flex justify-between items-center border-t border-cyan-500/10">
                            <button className="w-6 h-6 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 22V12H15V22" stroke="cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="w-6 h-6 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                                </svg>
                            </button>
                            <button className="w-6 h-6 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" opacity="0.6"/>
                                    <circle cx="12" cy="8" r="1" fill="white" opacity="0.6"/>
                                    <rect x="11" y="11" width="2" height="6" rx="1" fill="white" opacity="0.6"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-white/30 rounded-full" />
                </div>

                {/* Action buttons - matching Samsung S25 Ultra buttons */}
                <div className="absolute -right-1 top-28 h-12 w-1 bg-slate-900 rounded-r-lg"></div>
                <div className="absolute -right-1 top-44 h-20 w-1 bg-slate-900 rounded-r-lg"></div>
                <div className="absolute -left-1 top-40 h-14 w-1 bg-slate-900 rounded-l-lg"></div>
                
               
            </div>
        </div>
    );
};

export default SamsungFrame; 