import React from 'react';

interface IPhoneFrameProps {
    text?: string;
    title?: string;
    backgroundColor?: string;
    textColor?: string;
    fontSize?: string;
    glowColor?: string;
}

/**
 * A component that displays an iPhone 16 Pro Max frame with customizable text inside
 */
export const IPhoneFrame: React.FC<IPhoneFrameProps> = ({
    text = "สวัสดี! นี่คือ iPhone 16 Pro Max",
    title = "iPhone 16 Pro Max"
}) => {
    return (
        <div className="flex justify-center items-center w-full p-4 sm:p-6 md:p-8">
            {/* Main Container - iPhone 16 Pro Max specific dimensions */}
            <div className="relative w-full max-w-[320px] aspect-[390/844] mx-auto">
                {/* Frame border - updated to match iPhone 16 Pro Max with glow effect */}
                <div className={`absolute inset-0 rounded-[55px] border-[6px] border-slate-900 bg-slate-900/30 backdrop-blur-sm shadow-[0_0_15px_3px_rgba(34,211,238,0.4)] transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.6)]`}>
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[32px] bg-black rounded-[20px] z-20">
                        <div className="absolute right-7 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-slate-700/70"></div>
                    </div>

                    {/* Screen Content */}
                    <div className={`absolute inset-[1px] rounded-[46px] overflow-hidden flex flex-col `}>
                        {/* Status Bar */}
                        <div className="h-12 px-8 pt-2 flex justify-between items-center">

                        </div>

                        {/* App Content */}
                        <div className="flex-1 flex flex-col p-4">
                            {/* App Header */}
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex flex-col p-1">
                                    <h1 className="text-white font-semibold text-lg">{title}</h1>
                                    <p className="text-cyan-200/80 text-xs">{text}</p>
                                </div>
                                <button className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500/30 to-cyan-400/20 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>

                            {/* Component Preview */}
                            <div className="bg-blue-950/60 rounded-2xl p-4 mb-4 border border-cyan-500/20">
                                <div className="h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl mb-3 flex items-center justify-center">
                                    <div className="h-8 w-24 bg-cyan-500/40 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">Button</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-3">
                                    <div className="h-8 flex-1 bg-blue-800/40 rounded-lg"></div>
                                    <div className="h-8 flex-1 bg-blue-800/40 rounded-lg"></div>
                                </div>
                                <div className="h-16 bg-blue-800/40 rounded-xl"></div>
                            </div>

                            {/* Component Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-xl p-3 flex flex-col items-center justify-center border border-cyan-400/20">
                                    <div className="w-8 h-8 bg-cyan-400/30 rounded-full mb-2 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 6H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 12H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 18H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-xs font-medium">Lists</span>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-xl p-3 flex flex-col items-center justify-center border border-cyan-400/20">
                                    <div className="w-8 h-8 bg-cyan-400/30 rounded-full mb-2 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-xs font-medium">Cards</span>
                                </div>
                            </div>


                        </div>

                        {/* Navigation Bar */}
                        <div className="h-16 px-6 flex justify-between items-center  border-t border-cyan-500/10">
                            <div className="flex flex-col items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 22V12H15V22" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-cyan-400 text-[10px] mt-1">Home</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                                    <path d="M7 11V7C7 5.93913 7.42143 4.92172 8.17157 4.17157C8.92172 3.42143 9.93913 3 11 3H13C14.0609 3 15.0783 3.42143 15.8284 4.17157C16.5786 4.92172 17 5.93913 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                                </svg>
                                <span className="text-white text-[10px] mt-1 opacity-50">Components</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                                    <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                                    <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                                </svg>
                                <span className="text-white text-[10px] mt-1 opacity-50">Info</span>
                            </div>
                        </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-white/30 rounded-full" />
                </div>

                {/* Action buttons - matching iPhone 16 Pro Max buttons */}
                <div className="absolute -left-1 top-28 h-16 w-1 bg-slate-900 rounded-l-lg"></div>
                <div className="absolute -left-1 top-48 h-16 w-1 bg-slate-900 rounded-l-lg"></div>
                <div className="absolute -left-1 top-72 h-24 w-1 bg-slate-900 rounded-l-lg"></div>
                <div className="absolute -right-1 top-44 h-20 w-1 bg-slate-900 rounded-r-lg"></div>
            </div>
        </div>
    );
};

export default IPhoneFrame; 