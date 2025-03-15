import React from 'react';

interface BubbleProps {
  count?: number;
}

export const Bubbles: React.FC<BubbleProps> = ({ count = 15 }) => {
  // สร้างฟองอากาศที่มีขนาดและความเร็วแตกต่างกัน
  const bubbles = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 5, // ลดขนาดลงเพื่อเพิ่มประสิทธิภาพ
      left: Math.random() * 100,
      bottom: Math.random() * 20,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full will-change-transform"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `${bubble.bottom}%`,
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(56, 189, 248, 0.1))',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 0 5px rgba(56, 189, 248, 0.1)',
            animation: `bubbleRise ${bubble.duration}s ease-in infinite`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity
          }}
        />
      ))}
    </div>
  );
}; 