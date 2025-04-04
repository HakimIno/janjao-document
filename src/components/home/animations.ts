export const ANIMATION_STYLES = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
            transform: translateY(-10px) translateX(5px) rotate(5deg);
        }
        50% {
            transform: translateY(0) translateX(10px) rotate(0deg);
        }
        75% {
            transform: translateY(10px) translateX(5px) rotate(-5deg);
        }
        100% {
            transform: translateY(0) translateX(0) rotate(0deg);
        }
    }
    
    @keyframes floatBubble {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        100% { 
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }

    @keyframes ripple {
        0% {
            transform: scale(1);
            opacity: 0.5;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }

    @keyframes glowPulse {
        0% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
        }
        50% {
            box-shadow: 0 0 30px rgba(34, 211, 238, 0.4);
        }
        100% {
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.2);
        }
    }
    
    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
    
    @keyframes pulse {
        0% {
            opacity: 0.4;
        }
        50% {
            opacity: 0.7;
        }
        100% {
            opacity: 0.4;
        }
    }
    
    @keyframes fadeInSlideUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes rotateGradient {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    @keyframes borderGlow {
        0% {
            border-color: rgba(139, 92, 246, 0.3);
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }
        50% {
            border-color: rgba(6, 182, 212, 0.5);
            box-shadow: 0 0 25px rgba(6, 182, 212, 0.7);
        }
        100% {
            border-color: rgba(139, 92, 246, 0.3);
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }
    }
    
    @keyframes morphBackground {
        0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
        }
        50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
        }
        75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
        }
        100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
    }
    
    @keyframes gradientFlow {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .animate-ripple {
        animation: ripple 2s ease-out infinite;
    }

    .animate-glow {
        animation: glowPulse 3s ease-in-out infinite;
    }
    
    .animate-shimmer {
        background: linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0.2) 50%, rgba(56, 189, 248, 0) 100%);
        background-size: 200% 100%;
        animation: shimmer 3s infinite;
    }
    
    .animate-pulse {
        animation: pulse 2s ease-in-out infinite;
    }
    
    .animate-fade-in-up {
        animation: fadeInSlideUp 0.7s ease-out forwards;
    }
    
    .animate-rotate-gradient {
        animation: rotateGradient 10s linear infinite;
    }
    
    .animate-border-glow {
        animation: borderGlow 4s ease infinite;
    }
    
    .animate-morph {
        animation: morphBackground 8s ease-in-out infinite;
    }
    
    .animate-gradient-flow {
        background-size: 200% 200%;
        animation: gradientFlow 3s ease infinite;
    }
    
    .stagger-delay-1 {
        animation-delay: 0.15s;
    }
    
    .stagger-delay-2 {
        animation-delay: 0.3s;
    }
    
    .stagger-delay-3 {
        animation-delay: 0.45s;
    }
    
    .stagger-delay-4 {
        animation-delay: 0.6s;
    }
    
    .stagger-delay-5 {
        animation-delay: 0.75s;
    }
`; 