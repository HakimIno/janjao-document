import React from 'react';

interface JanJaoLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<JanJaoLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className} w-full`}>
      {/* ข้อความหลัก */}
      <span
        className={`
          ${sizeStyles[size]} font-logo 
          tracking-wide relative z-10 bg-clip-text
           text-transparent bg-gradient-to-r from-cyan-500 via-cyan-500 to-teal-500
           
        `}
      >
        JanJao UI
      </span>

      
      {/* ลูกเล่น: เส้นโค้งเหมือนคลื่นน้ำ */}
      <svg
        className="absolute w-full h-2 bottom-0 left-0 z-0"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0 5 Q 25 0, 50 5 T 100 5"
          fill="none"
          stroke="url(#waveGradient)"
          strokeWidth="1.5"
          className="animate-wave"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
      </svg>


      <style>
        {`
  @keyframes wave {
    0% { d: path("M0 5 Q 25 0, 50 5 T 100 5"); }
    50% { d: path("M0 5 Q 25 10, 50 5 T 100 5"); }
    100% { d: path("M0 5 Q 25 0, 50 5 T 100 5"); }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.5; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.3); }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.03); }
  }
  .animate-wave {
    animation: wave 2s infinite ease-in-out;
  }
  
`}
      </style>
    </div>
  );
};

// CSS Animation


export default Logo;
