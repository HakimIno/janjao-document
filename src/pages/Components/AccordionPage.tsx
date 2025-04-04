import React from 'react'
import { Link, Element } from 'react-scroll'
import { Box, Tabs, } from '@radix-ui/themes'
import CodeBlockWithCopyButton from '../../components/CodeBlockWithCopyButton';

const AccordionPage = () => {
    const codeSnippet = ``;

    const accordionPropertiesData = [
        {
            name: 'title',
            type: 'string',
            description: 'The title of the accordion'
        },
        {
            name: 'content',
            type: 'string',
            description: 'The content of the accordion'
        }
    ];

    const sections = [
        {
            id: 'introduction',
            title: 'Accordion',
            content: "Accordions allow users to toggle the visibility of content sections. Our versatile accordion components provide a rich set of customization options to fit any design system."
        },
        {
            id: 'key-features',
            title: 'Key Features',
            features: [
                {
                    title: 'Multiple Variants',
                    description: 'Choose from seven distinct button styles: solid, faded, bordered, light, flat, ghost, and shadow to match your UI requirements.'
                },
                {
                    title: 'Flexible Sizing',
                    description: 'Three predefined sizes (small, medium, large) plus custom sizing through style prop offer the perfect fit for any layout.'
                },
                {
                    title: 'State Management',
                    description: 'Built-in support for loading and disabled states, with appropriate visual feedback for each state.'
                },
                {
                    title: 'Icon Support',
                    description: 'Display icons alongside text or create icon-only buttons with the isIconOnly prop for compact UI elements.'
                }
            ]
        },
        {
            id: 'usage',
            title: 'Usage',
            content: () => (
                <TabsComponent
                    previewSrc="http://localhost:8081/accordion/accordion"
                    codeContent={<CodeBlockWithCopyButton codeSnippet={codeSnippet} language="jsx" />}
                />
            )
        },
        {
            id: 'properties',
            title: 'Properties',
            content: "The Button component accepts the following properties:",
            properties: accordionPropertiesData
        }
    ];

    return (
        <div className="w-full relative">
            {/* Light rays effect - optimized for performance */}
            <div className="absolute top-0 left-1/4 w-[150px] h-[500px] bg-cyan-300/5 rotate-[25deg] blur-xl hidden md:block -z-10"></div>
            <div className="absolute top-0 right-1/3 w-[120px] h-[400px] bg-teal-300/5 rotate-[-20deg] blur-xl hidden md:block -z-10"></div>

            <div className="w-full">
                {sections.map((section, index) => (
                    <Element
                        name={section.id}
                        key={section.id}
                        className={`
                            bg-blue-950/60 mb-6 
                            p-4 sm:p-6 rounded-lg sm:rounded-xl
                            border border-cyan-500/20
                            shadow-md
                            transition-colors duration-300
                            relative overflow-hidden
                            will-change-auto
                            ${index > 0 ? 'mt-8' : ''}
                        `}
                    >
                        {/* Reduced decorative elements for better performance */}
                        <div className="absolute top-1/4 right-4 w-1.5 h-1.5 bg-cyan-400/20 rounded-full hidden md:block"
                            style={{ animationDuration: '3s' }}></div>

                        <h2 className="text-xl sm:text-2xl font-sf-bold text-cyan-100 mb-4 sm:mb-6 relative">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                {section.title}
                            </span>
                            <span className="absolute -bottom-2 left-0 w-12 sm:w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
                        </h2>

                        {section.content && (
                            typeof section.content === 'function' ? (
                                <div className="text-blue-100/90 leading-relaxed font-sf-regular mb-6 sm:mb-8">
                                    {section.content()}
                                </div>
                            ) : (
                                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-sf-regular mb-6 sm:mb-8">
                                    {section.content}
                                </p>
                            )
                        )}

                        {section.features && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                {section.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 sm:p-5 rounded-lg bg-blue-900/40
                                            border border-cyan-500/20 hover:border-cyan-500/40
                                            transition-colors duration-300
                                            group"
                                    >
                                        <h4 className="text-base sm:text-lg font-sf-semibold text-cyan-200 mb-2 sm:mb-3 group-hover:text-cyan-100 transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm sm:text-base text-blue-100/70 group-hover:text-blue-100/90 transition-colors">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}


                        {section.properties && (
                            <div>
                                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-sf-regular mb-4">
                                    {section.content}
                                </p>
                                <div className="bg-blue-950/50 rounded-lg overflow-x-auto">
                                    <table className="min-w-full divide-y divide-cyan-900/30">
                                        <thead className="bg-blue-900/30">
                                            <tr>
                                                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-sf-medium text-cyan-200 uppercase tracking-wider">Property</th>
                                                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-sf-medium text-cyan-200 uppercase tracking-wider">Type</th>
                                                <th className="px-2 sm:px-4 py-2 sm:py-3 text-left text-xs font-sf-medium text-cyan-200 uppercase tracking-wider">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-cyan-900/30">
                                            {section.properties.map((prop, pidx) => (
                                                <tr key={pidx} className={pidx % 2 === 0 ? 'bg-blue-900/10' : 'bg-blue-900/20'}>
                                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-sf-medium text-cyan-100">{prop.name}</td>
                                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-blue-100/70"><code className="bg-blue-900/30 px-1 sm:px-2 py-0.5 rounded text-xs">{prop.type}</code></td>
                                                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-blue-100/70">{prop.description}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </Element>
                ))}
            </div>

            {/* Fixed Table of Contents for large screens - simplified for better performance */}
            <div className="hidden xl:block fixed top-24 right-14 w-64 z-10">
                <div className="bg-blue-950/70 p-6 rounded-xl border border-cyan-500/20 shadow-md">
                    <h3 className="text-lg font-sf-semibold text-cyan-200 mb-4">On This Page</h3>
                    <ul className="space-y-3">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <Link
                                    to={section.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={300}
                                    className="text-blue-100/80 hover:text-cyan-300 transition-colors cursor-pointer block font-sf-semibold text-sm"
                                    activeClass="text-cyan-300 font-sf-medium"
                                >
                                    {section.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile navigation - Fixed at bottom on small screens - simplified for better performance */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-blue-950/90 border-t border-cyan-500/20 z-20 p-2">
                <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none">
                    {sections.map((section) => (
                        <Link
                            key={section.id}
                            to={section.id}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={300}
                            className="text-xs whitespace-nowrap px-3 py-2 rounded-full bg-blue-900/50 text-blue-100/80 hover:text-cyan-300 transition-colors flex-shrink-0"
                            activeClass="bg-blue-800/70 text-cyan-300"
                        >
                            {section.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


const TabContent = ({ children }: { children: React.ReactNode }) => (
    <Box pt="3">
        {children}
    </Box>
);

const IframePreview = ({ src, title }: { src: string; title?: string }) => {
    // สร้าง breakpoints สำหรับขนาดต่างๆ
    const getFrameSize = () => {
        const width = window.innerWidth;
        if (width < 640) return 'w-full max-w-[320px]';  // mobile
        if (width < 768) return 'w-full max-w-[360px]';  // small tablet
        if (width < 1024) return 'w-full max-w-[375px]'; // tablet
        return 'w-full max-w-[390px]';                   // desktop
    };

    return (
        <div className="flex justify-center items-center w-full p-4 sm:p-6 md:p-8">
            {/* Main Container with dynamic sizing */}
            <div className={`relative ${getFrameSize()} aspect-[430/932] mx-auto`}>
                {/* Background with subtle gradient */}
                <div className="absolute inset-0 rounded-[50px] bg-gradient-to-tr from-blue-900/30 to-cyan-900/20 shadow-lg" />

                {/* Frame border */}
                <div className="absolute inset-0 rounded-[50px] border-[8px] border-blue-900/60 bg-blue-950/30 backdrop-blur-sm">
                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] lg:w-[120px] lg:h-[40px] h-[30px] bg-black rounded-[20px] z-20">
                        {/* Camera & Sensors */}
                    </div>

                    {/* Status Bar - Responsive font sizes */}
                    <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-30">
                        <div className="text-xs sm:text-sm font-medium text-cyan-200">9:41</div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M18.5 9.5L19.5 8.5V4.5L18.5 3.5H16.5L15.5 4.5V8.5L16.5 9.5H18.5Z" fill="currentColor" className="text-cyan-200" />
                                <path d="M12.5 13.5L13.5 12.5V4.5L12.5 3.5H10.5L9.5 4.5V12.5L10.5 13.5H12.5Z" fill="currentColor" className="text-cyan-200" />
                                <path d="M6.5 17.5L7.5 16.5V4.5L6.5 3.5H4.5L3.5 4.5V16.5L4.5 17.5H6.5Z" fill="currentColor" className="text-cyan-200" />
                            </svg>
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                                <path d="M2 9.5C2 13.0899 5.41015 16.5 9 16.5C12.5899 16.5 16 13.0899 16 9.5C16 5.91015 12.5899 2.5 9 2.5C5.41015 2.5 2 5.91015 2 9.5Z" fill="currentColor" className="text-cyan-200" />
                            </svg>
                            <div className="flex items-center">
                                <div className="w-5 sm:w-6 h-3 sm:h-3.5 rounded-full border border-cyan-200 relative">
                                    <div className="absolute inset-[2px] rounded-full bg-cyan-200" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Screen Content */}
                    <div className="absolute inset-0 rounded-[46px] overflow-hidden">
                        <iframe
                            src={src}
                            title={title || "Component Preview"}
                            className="w-full h-full bg-white"
                        />
                    </div>

                    {/* Home Indicator - Responsive width */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-1 bg-cyan-200/90 rounded-full" />
                </div>

                {/* Subtle reflection effect */}
                <div className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            </div>
        </div>
    );
};

const CodePreview = () => (
    <div className="bg-blue-950/80 p-3 sm:p-5 rounded-lg overflow-x-auto border border-cyan-900/50 text-sm">
        <pre className="text-cyan-100 font-mono">
            {`// Code example will be shown here`}
        </pre>
    </div>
);

const TabsComponent = ({ previewSrc, codeContent }: { previewSrc: string; codeContent?: React.ReactNode }) => (
    <div className="w-full">
        <Tabs.Root defaultValue="preview">
            <Tabs.List className="bg-blue-900/40 p-1 rounded-lg">
                <Tabs.Trigger
                    value="preview"
                    className="data-[state=active]:bg-blue-800/70 data-[state=active]:text-cyan-300 px-4 py-2 rounded-md text-blue-100/80 transition-colors"
                >
                    Preview
                </Tabs.Trigger>
                <Tabs.Trigger
                    value="code"
                    className="data-[state=active]:bg-blue-800/70 data-[state=active]:text-cyan-300 px-4 py-2 rounded-md text-blue-100/80 transition-colors"
                >
                    Code
                </Tabs.Trigger>
            </Tabs.List>

            <TabContent>
                <Tabs.Content value="preview">
                    <IframePreview src={previewSrc} title="Component Preview" />
                </Tabs.Content>

                <Tabs.Content value="code">
                    {codeContent || <CodePreview />}
                </Tabs.Content>
            </TabContent>
        </Tabs.Root>
    </div>
);

export default AccordionPage