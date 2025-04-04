import { Stat, Feature } from './types';

export const STATS: Stat[] = [
    { label: "Installations", value: "250K+", icon: "📱" },
    { label: "Components", value: "60+", icon: "🧩" },
    { label: "GitHub Stars", value: "3.8K", icon: "⭐" },
    { label: "Contributors", value: "85+", icon: "👨‍💻" }
];

export const FEATURES: Feature[] = [
    {
        icon: "⚡",
        title: "Native Performance",
        description: "Built for maximum performance on both iOS and Android. Our components use native primitives for buttery-smooth animations and interactions."
    },
    {
        icon: "🎨",
        title: "Modern Design System",
        description: "Fully customizable design tokens that adapt to light/dark themes and respect platform conventions while maintaining a consistent look."
    },
    {
        icon: "📱",
        title: "Cross-Platform Excellence",
        description: "Pixel-perfect consistency across iOS and Android with adaptive behavior that feels natural on each platform."
    },
    {
        icon: "♿",
        title: "Full Accessibility",
        description: "Every component is fully accessible with VoiceOver and TalkBack support, respecting platform guidelines for assistive technologies."
    },
    {
        icon: "🚀",
        title: "Expo Compatible",
        description: "Seamless integration with Expo and bare React Native projects. No native linking required for most components."
    },
    {
        icon: "🔌",
        title: "TypeScript Ready",
        description: "Built with TypeScript from the ground up with complete type definitions and excellent developer experience."
    }
];

export const TESTIMONIALS = [
    {
        quote: "JanjaoUI has transformed how we build our React Native apps. The components are beautiful, responsive, and incredibly easy to customize to our brand.",
        author: {
            name: "Somchai Thongdee",
            role: "Lead Mobile Developer at ThaiTech",
            initial: "S"
        }
    },
    {
        quote: "After trying multiple UI libraries for React Native, JanjaoUI stands out for its performance and attention to detail. It's become our go-to for all new mobile projects.",
        author: {
            name: "Malee Wongsawang",
            role: "Senior Developer at BangkokApps",
            initial: "M"
        }
    }
];

export const SPONSORS = [
    {
        name: "ThaiTech Solutions",
        logo: "/sponsors/thaitech.svg", 
        tier: "platinum",
        link: "https://thaitech.example.com"
    },
    {
        name: "BangkokApps",
        logo: "/sponsors/bangkokapps.svg",
        tier: "gold", 
        link: "https://bangkokapps.example.com"
    },
    {
        name: "Phuket Digital",
        logo: "/sponsors/phuketdigital.svg",
        tier: "gold",
        link: "https://phuketdigital.example.com"
    },
    {
        name: "Chiang Mai Dev",
        logo: "/sponsors/chiangmaidev.svg",
        tier: "silver",
        link: "https://chiangmaidev.example.com"
    },
    {
        name: "SiamCode",
        logo: "/sponsors/siamcode.svg",
        tier: "silver",
        link: "https://siamcode.example.com"
    },
    {
        name: "Thai Mobile Dev",
        logo: "/sponsors/thaimobiledev.svg",
        tier: "silver",
        link: "https://thaimobiledev.example.com"
    }
]; 


