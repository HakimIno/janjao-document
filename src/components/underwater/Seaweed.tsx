import React from 'react';

interface SeaweedProps {
  count?: number;
}

export const Seaweed: React.FC<SeaweedProps> = ({ count = 5 }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute bottom-0 bg-teal-800/30 will-change-transform"
          style={{
            width: `${Math.random() * 15 + 8}px`,
            height: `${Math.random() * 100 + 60}px`,
            left: `${(i * 20) + Math.random() * 5}%`,
            borderRadius: '40% 60% 80% 20% / 40% 40% 60% 60%',
            animation: `sway ${Math.random() * 4 + 6}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}; 