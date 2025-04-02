import { Stat, Feature } from './types';

export const STATS: Stat[] = [
    { label: "Deployments", value: "100K+", icon: "🌊" },
    { label: "Components", value: "50+", icon: "🐋" },
    { label: "GitHub Stars", value: "2.5K", icon: "⭐" },
    { label: "Contributors", value: "100+", icon: "🧜‍♂️" }
];

export const FEATURES: Feature[] = [
    {
        icon: "🚀",
        title: "Performance Optimized",
        description: "Built with performance in mind. Every component is optimized for smooth animations and transitions, even on lower-end devices."
    },
    {
        icon: "🎨",
        title: "Customizable Design System",
        description: "Easily adapt components to match your brand with our flexible theming system. No more fighting with styles."
    },
    {
        icon: "📱",
        title: "Cross-Platform Consistency",
        description: "Achieve pixel-perfect consistency across iOS and Android without platform-specific code or workarounds."
    },
    {
        icon: "♿",
        title: "Accessibility First",
        description: "Every component is fully accessible out of the box, with screen reader support and keyboard navigation."
    },
    {
        icon: "📦",
        title: "Ready-to-Use Components",
        description: "Over 50 production-ready components that you can drop into your app and customize to your needs."
    },
    {
        icon: "📚",
        title: "Comprehensive Documentation",
        description: "Detailed guides, API references, and examples to help you get the most out of every component."
    }
];

export const TESTIMONIALS = [
    {
        quote: "DeepUI has cut our development time in half. The components are beautiful, performant, and incredibly easy to customize.",
        author: {
            name: "Sarah Chen",
            role: "Lead Developer at TechFlow",
            initial: "S"
        }
    },
    {
        quote: "The attention to detail in DeepUI is incredible. From animations to accessibility, everything just works exactly as you'd expect.",
        author: {
            name: "Michael Rodriguez",
            role: "Mobile Developer at AppWorks",
            initial: "M"
        }
    }
]; 