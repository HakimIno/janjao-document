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

    .animate-ripple {
        animation: ripple 2s ease-out infinite;
    }

    .animate-glow {
        animation: glowPulse 3s ease-in-out infinite;
    }
`; 