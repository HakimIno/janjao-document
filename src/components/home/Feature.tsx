import { AccessibilityIcon,PerformanceIcon, CrossPlatformIcon, DesignSystemIcon, ExpoIcon, TypeScriptIcon } from "./icons/FeatureIcons";
import { Feature } from "./types";

export const FEATURES: Feature[] = [
    {
        icon: <PerformanceIcon className="w-full h-full text-cyan-400" />,
        title: "Native Performance",
        description: "Achieve maximum performance with our components that use native primitives for fluid animations and instant response. Optimized for both iOS and Android platforms with minimal JS bridge overhead."
    },
    {
        icon: <DesignSystemIcon className="w-full h-full text-teal-400" />,
        title: "Comprehensive Design System",
        description: "A complete design system with customizable tokens that adapt to light/dark themes while respecting platform conventions. Create beautiful interfaces with minimal effort."
    },
    {
        icon: <CrossPlatformIcon className="w-full h-full text-blue-400" />,
        title: "True Cross-Platform",
        description: "Guarantee pixel-perfect consistency across iOS and Android while maintaining platform-specific behaviors. Write once, deploy everywhere with confidence."
    },
    {
        icon: <AccessibilityIcon className="w-full h-full text-emerald-400" />,
        title: "Advanced Accessibility",
        description: "Every component is built with accessibility as a priority, supporting VoiceOver, TalkBack, and keyboard navigation. Meet WCAG guidelines without extra work."
    },
    {
        icon: <ExpoIcon className="w-full h-full text-cyan-400" />,
        title: "Expo & React Native Compatible",
        description: "Seamlessly integrates with both Expo and bare React Native projects. No native linking required for most components, ensuring a smooth development workflow."
    },
    {
        icon: <TypeScriptIcon className="w-full h-full text-blue-400" />,
        title: "TypeScript First",
        description: "Built with TypeScript from the ground up with complete type definitions. Enjoy excellent developer experience with autocompletion, type checking, and detailed documentation."
    }
];