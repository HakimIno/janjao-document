import React from 'react';

interface CodeFrameProps {
    children: React.ReactNode;
    title: string;
}

const CodeFrame: React.FC<CodeFrameProps> = ({ children, title }) => {
    return (
        <div className="relative rounded-lg overflow-hidden border border-cyan-500/30 bg-blue-950/60 backdrop-blur-md">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-blue-900 to-cyan-900 flex items-center px-4">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="text-xs text-cyan-300 ml-4 font-mono">{title}</div>
            </div>
            <div className="pt-10 p-6">
                {children}
            </div>
        </div>
    );
};

export default CodeFrame;