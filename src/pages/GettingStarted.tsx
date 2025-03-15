import { useEffect } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import { Badge } from '@radix-ui/themes';
import '../styles/jellyfish.css';

const GettingStarted = () => {
    const sections = [
        {
            id: 'introduction',
            title: 'Introduction',
            content: `Welcome to JanJao DeepUI! This comprehensive underwater-themed UI library is designed to help you build beautiful, immersive React Native applications with ease and consistency. Dive into a world of elegant components inspired by the depths of the ocean.`,
            subsections: [
                {
                    title: 'Why JanJao DeepUI?',
                    content: `JanJao DeepUI combines deep sea-inspired design principles with powerful functionality, offering developers a complete toolkit for creating exceptional mobile experiences. Built with performance and customization in mind, it streamlines the development process while maintaining high standards of quality and aesthetics. Our underwater theme creates a unique, immersive experience that stands out from conventional UI libraries.`
                }
            ]
        },
        {
            id: 'key-features',
            title: 'Key Features',
            content: 'Explore the depths of what our library offers:',
            features: [
                {
                    title: 'Immersive Components',
                    description: 'Access a rich collection of underwater-themed UI components, from basic elements to complex patterns, all with subtle animations and glowing effects.'
                },
                {
                    title: 'Responsive Fluidity',
                    description: 'All components are built with fluid, responsive design principles, ensuring your app flows seamlessly on any device, just like water.'
                },
                {
                    title: 'Deep Sea Theming',
                    description: 'Our powerful theming capabilities allow you to customize the intensity and color variations of the underwater experience across your entire application.'
                },
                {
                    title: 'Performance Optimized',
                    description: 'Built with performance in mind, ensuring smooth animations and transitions that mimic the gentle movement of underwater currents.'
                }
            ]
        },
        {
            id: 'installation',
            title: 'Installation',
            content: 'Dive into JanJao DeepUI by following these simple steps to integrate it into your React Native project:',
            codeBlocks: [
                {
                    title: 'Using npm',
                    code: 'npm install @janjao/deep-ui'
                },
                {
                    title: 'Using yarn',
                    code: 'yarn add @janjao/deep-ui'
                }
            ]
        },
        {
            id: 'basic-usage',
            title: 'Basic Usage',
            content: 'After installation, you can start using JanJao DeepUI components in your application:',
            codeExample: `
import { DeepThemeProvider, Button } from '@janjao/deep-ui';

const App = () => {
  return (
    <DeepThemeProvider>
      <Button 
        variant="glow" 
        onPress={() => console.log('Diving deeper!')}
        bubbleEffect={true}
      >
        Dive In
      </Button>
    </DeepThemeProvider>
  );
};`
        },
        {
            id: 'components',
            title: 'Core Components',
            content: 'JanJao DeepUI offers a variety of underwater-themed components to enhance your React Native application:',
            components: [
                {
                    title: 'Buttons',
                    description: 'Interactive elements with fluid animations and glowing effects.',
                    variants: ['glow', 'ripple', 'bubble', 'coral', 'abyss'],
                    properties: [
                        { name: 'variant', type: 'string', description: 'Visual style of the button' },
                        { name: 'bubbleEffect', type: 'boolean', description: 'Adds rising bubble animation on press' },
                        { name: 'glowIntensity', type: 'number', description: 'Controls the intensity of the glow effect (0-1)' },
                        { name: 'fluidAnimation', type: 'boolean', description: 'Enables water-like ripple effect on press' }
                    ]
                },
                {
                    title: 'Cards',
                    description: 'Content containers with depth effects and translucent backgrounds.',
                    variants: ['surface', 'deep', 'abyss', 'coral', 'treasure'],
                    properties: [
                        { name: 'depth', type: 'number', description: 'Controls the visual depth effect (1-5)' },
                        { name: 'transparency', type: 'number', description: 'Adjusts background transparency (0-1)' },
                        { name: 'bubbleDecoration', type: 'boolean', description: 'Adds subtle bubble decorations to corners' },
                        { name: 'glowBorder', type: 'boolean', description: 'Adds a subtle glowing border effect' }
                    ]
                },
                {
                    title: 'Navigation',
                    description: 'Fluid navigation components with underwater transitions.',
                    variants: ['float', 'dive', 'surface', 'current'],
                    properties: [
                        { name: 'transitionStyle', type: 'string', description: 'Type of transition between screens' },
                        { name: 'depthIndicator', type: 'boolean', description: 'Shows visual depth indicator for navigation levels' },
                        { name: 'bubbleTrail', type: 'boolean', description: 'Adds bubble trail effect during transitions' }
                    ]
                }
            ]
        },
        {
            id: 'theming',
            title: 'Theming',
            content: `JanJao DeepUI's theming system allows you to customize the underwater experience of your application. You can modify depths, luminosity, currents, and more:`,
            themeExample: `
const deepSeaTheme = {
  depths: {
    surface: '#0EA5E9',    // Bright cyan for surface water
    shallow: '#0891B2',    // Teal for shallow water
    medium: '#155E75',     // Darker teal for medium depth
    deep: '#164E63',       // Deep blue for deep water
    abyss: '#0F172A',      // Near black for the abyss
  },
  luminosity: {
    bioluminescent: '#5EEAD4',  // Bright teal glow
    coral: '#FB923C',           // Warm orange coral
    jellyfish: '#D946EF',       // Purple jellyfish glow
    algae: '#4ADE80',           // Green algae
  },
  currents: {
    strength: 0.7,              // Animation intensity
    direction: 'bidirectional', // Flow pattern
  },
  typography: {
    fontFamily: 'Fluid',
    fontSize: {
      base: 16,
      h1: 24,
      h2: 20,
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    }
  },
};`
        }
    ];

    useEffect(() => {
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <>
            {/* Optimized light rays - reduced size and blur for better performance */}
            <div className="absolute top-0 left-1/4 w-[200px] h-[600px] bg-cyan-300/5 rotate-[25deg] blur-xl hidden md:block -z-10"></div>
            <div className="absolute top-0 right-1/3 w-[150px] h-[500px] bg-teal-300/5 rotate-[-20deg] blur-xl hidden md:block -z-10"></div>
            
            {/* Main content */}
            <div className="w-full">
                {sections.map((section) => (
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
                            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-sf-regular mb-6 sm:mb-8">
                                {section.content}
                            </p>
                        )}

                        {section.subsections?.map((subsection, idx) => (
                            <div key={idx} className="mb-6 sm:mb-8 bg-blue-900/40 p-4 sm:p-6 rounded-lg border-l-2 border-cyan-500/30">
                                <h3 className="text-lg sm:text-xl font-sf-semibold text-cyan-200 mb-2 sm:mb-3">
                                    {subsection.title}
                                </h3>
                                <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
                                    {subsection.content}
                                </p>
                            </div>
                        ))}

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

                        {section.codeBlocks?.map((block, idx) => (
                            <div key={idx} className="mb-4 sm:mb-6">
                                <Badge variant="outline" className="mb-2 bg-blue-900/50 text-cyan-200 border-cyan-500/30">
                                    {block.title}
                                </Badge>
                                <pre className="bg-blue-950/80 p-3 sm:p-5 rounded-lg overflow-x-auto border border-cyan-900/50 text-sm">
                                    <code className="text-cyan-100 font-mono">
                                        {block.code}
                                    </code>
                                </pre>
                            </div>
                        ))}

                        {section.codeExample && (
                            <pre className="bg-blue-950/80 p-3 sm:p-5 rounded-lg overflow-x-auto mt-4 sm:mt-6 border border-cyan-900/50 text-sm">
                                <code className="text-cyan-100 font-mono">
                                    {section.codeExample}
                                </code>
                            </pre>
                        )}

                        {section.themeExample && (
                            <pre className="bg-blue-950/80 p-3 sm:p-5 rounded-lg overflow-x-auto mt-4 sm:mt-6 border border-cyan-900/50 text-sm">
                                <code className="text-cyan-100 font-mono">
                                    {section.themeExample}
                                </code>
                            </pre>
                        )}

                        {section.components && (
                            <div className="space-y-6 sm:space-y-8 mt-4 sm:mt-6">
                                {section.components.map((component, idx) => (
                                    <div key={idx} className="bg-blue-900/40 p-4 sm:p-6 rounded-lg border-l-2 border-cyan-500/30">
                                        <h3 className="text-lg sm:text-xl font-sf-semibold text-cyan-200 mb-2 sm:mb-3">
                                            {component.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed mb-3 sm:mb-4">
                                            {component.description}
                                        </p>
                                        
                                        {component.variants && (
                                            <div className="mb-3 sm:mb-4">
                                                <h4 className="text-sm sm:text-md font-sf-medium text-cyan-300 mb-2">Variants</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {component.variants.map((variant, vidx) => (
                                                        <span key={vidx} className="px-2 sm:px-3 py-1 bg-blue-800/50 rounded-full text-xs sm:text-sm text-cyan-200 border border-cyan-500/20">
                                                            {variant}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        
                                        {component.properties && (
                                            <div>
                                                <h4 className="text-sm sm:text-md font-sf-medium text-cyan-300 mb-2">Properties</h4>
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
                                                            {component.properties.map((prop, pidx) => (
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
                                    </div>
                                ))}
                            </div>
                        )}
                    </Element>
                ))}
            </div>

            {/* Fixed Table of Contents for large screens - simplified for better performance */}
            <div className="hidden xl:block fixed top-24 right-14 w-64 z-10">
                <div className="bg-blue-950/70 p-6 rounded-xl border border-cyan-500/20 shadow-md">
                    <h3 className="text-lg font-sf-semibold text-cyan-200 mb-4">On This Page</h3>
                    
                    {/* Jellyfish Animation */}
                    <div className="jellyfish-container relative h-40 mb-6 overflow-hidden rounded-lg bg-blue-950/50">
                        <div className="jellyfish">
                            <div className="jellyfish-body">
                                <div className="smile"></div>
                            </div>
                            <div className="jellyfish-tentacles">
                                <div className="tentacle tentacle-1"></div>
                                <div className="tentacle tentacle-2"></div>
                                <div className="tentacle tentacle-3"></div>
                                <div className="tentacle tentacle-4"></div>
                                <div className="tentacle tentacle-5"></div>
                            </div>
                        </div>
                        
                        <div className="jellyfish jellyfish-small" style={{ left: '65%', animationDelay: '2s' }}>
                            <div className="jellyfish-body">
                                <div className="smile"></div>
                            </div>
                            <div className="jellyfish-tentacles">
                                <div className="tentacle tentacle-1"></div>
                                <div className="tentacle tentacle-2"></div>
                                <div className="tentacle tentacle-3"></div>
                            </div>
                        </div>
                        
                        {/* Light rays */}
                        <div className="light-ray light-ray-1"></div>
                        <div className="light-ray light-ray-2"></div>
                        <div className="light-ray light-ray-3"></div>
                        
                        {/* Bubbles */}
                        <div className="bubble bubble-1"></div>
                        <div className="bubble bubble-2"></div>
                        <div className="bubble bubble-3"></div>
                    </div>
                    
                    <ul className="space-y-3">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <Link
                                    to={section.id}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={300}
                                    className="text-blue-100/80 hover:text-cyan-300 transition-colors cursor-pointer block"
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
        </>
    );
};

export default GettingStarted;