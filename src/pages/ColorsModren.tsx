import React, { useState, useEffect } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';
import { SolarCheckCircleBoldDuotone, SolarCopyBoldDuotone, SolarDocumentsBoldDuotone } from '../shared/icons/Solar';
import OnThisPage from '../components/onThisPage';
import { colorUtils } from '../lib/colorUtils';
import colors from '../assets/colors';
import { Tooltip } from '@radix-ui/themes';

const Colors = () => {
    const [isClick, setIsClick] = useState("");
    const [copied, setCopied] = useState(false);
    const colorNames = Object.keys(colors);

    const handleCopy = (color: string) => {
        navigator.clipboard.writeText(color);
        setCopied(true);
    };

    useEffect(() => {
        setCopied(false);
    }, [isClick]);

    useEffect(() => {
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const ColorSwatch = ({ color, name, index }: { color: string; name: string; index: number }) => {
        const contrast = colorUtils.getContrastText(color);
        const rgbaColor = colorUtils.hexToRGB(color);

        return (
            <div className="relative group">
                <button
                    onClick={() => setIsClick(color)}
                    className={`
                        w-full h-14 transition-all duration-200 relative
                        ${color === isClick ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-neutral-950 scale-105" :
                            "hover:scale-105 hover:ring-2 hover:ring-neutral-700 hover:ring-offset-2 hover:ring-offset-neutral-950"}
                        ${index === 0 ? "rounded-tl-md rounded-tr-md" : index === 11 ? "rounded-bl-md rounded-br-md" : ""}
                    `}
                    style={{ backgroundColor: color }}
                >
                    <div className={`
                        opacity-0 group-hover:opacity-100 transition-opacity
                        absolute inset-0 flex items-center justify-center
                        text-xs font-medium
                    `}
                        style={{ color: contrast }}
                    >
                        {index * 100}
                    </div>
                </button>
                {isClick === color && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-72
                        bg-neutral-900 border border-neutral-800 shadow-2xl rounded-lg p-4
                        text-sm z-50 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-md" style={{ backgroundColor: color }} />
                                    <h3 className="font-semibold text-white">{name} {index * 100}</h3>
                                </div>
                                <div className="flex gap-3 text-xs text-neutral-400">
                                    <span>{color}</span>
                                    <span>{rgbaColor}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tooltip content={copied ? "Copied!" : "Copy color"}>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCopy(color);
                                        }}
                                        className="p-2 hover:bg-neutral-800 rounded-md transition-colors"
                                    >
                                        {copied ? (
                                            <SolarCheckCircleBoldDuotone className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <SolarCopyBoldDuotone className="h-5 w-5 text-neutral-300" />
                                        )}
                                    </button>
                                </Tooltip>
                                <Tooltip content="Color information">
                                    <button className="p-2 hover:bg-neutral-800 rounded-md transition-colors">
                                        <SolarDocumentsBoldDuotone className="h-5 w-5 text-neutral-300" />
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-xs">
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">Contrast ratio</span>
                                <span className="font-mono text-white">4.5:1</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-neutral-400">WCAG 2.1</span>
                                <span className="text-green-500">AA Compliant</span>
                            </div>
                        </div>
                        <div className="border-t border-neutral-800" />
                        <div className="flex gap-2">
                            <button
                                onClick={() => window.open(`https://ui.shadcn.com/docs/components/colors#${name}-${index * 100}`, '_blank')}
                                className="flex-1 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 
                                    rounded-md text-xs font-medium text-white transition-colors"
                            >
                                View documentation
                            </button>
                            <button
                                onClick={() => setIsClick("")}
                                className="px-3 py-1.5 text-red-500 hover:bg-neutral-800 
                                    rounded-md text-xs font-medium transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const ColorGrid = ({ type }: { type: 'light' | 'dark' }) => {
        return (
            <div className="w-full overflow-x-auto">
                <div className="min-w-[1000px]">
                    {colorNames.map((name) => (
                        <div key={name} className="mb-8">
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-lg font-semibold text-white capitalize">{name}</h3>
                                <span className="text-xs text-neutral-500">({colors[name][type].length} colors)</span>
                            </div>
                            <div className="grid grid-cols-12 gap-1">
                                {colors[name][type].map((color, index) => (
                                    <ColorSwatch
                                        key={index}
                                        color={color}
                                        name={name}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const sections = [
        {
            id: 'light-colors',
            title: 'Light Mode',
            content: () => <ColorGrid type="light" />
        },
        {
            id: 'dark-colors',
            title: 'Dark Mode',
            content: () => <ColorGrid type="dark" />
        }
    ];

    return (
        <div className="flex">
            {/* Main content */}
            <div className="flex-1 p-6 lg:p-8">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-3">Colors</h1>
                        <p className="text-neutral-400">
                            Our color system is designed to be accessible, flexible, and consistent
                            across all platforms and devices.
                        </p>
                    </div>

                    {sections.map((section, index) => (
                        <Element
                            name={section.id}
                            key={section.id}
                            className={`
                                bg-neutral-950 rounded-lg mb-6 p-6
                                ${index > 0 ? 'mt-12' : ''}
                            `}
                        >
                            <h2 className="text-xl font-bold text-white mb-6">
                                {section.title}
                            </h2>
                            {section.content()}
                        </Element>
                    ))}
                </div>
            </div>

            {/* Right sidebar */}
            <div className="hidden lg:block w-72 flex-shrink-0 border-l border-neutral-800">
                <div className="sticky top-16 p-6">
                    <OnThisPage sections={sections} />
                </div>
            </div>
        </div>
    );
};

export default Colors;