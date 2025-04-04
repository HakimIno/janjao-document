import React from 'react';

interface BubbleProps {
  count?: number;
}

export const Bubbles: React.FC<BubbleProps> = ({ count = 15 }) => {
  // สร้างฟองอากาศที่มีขนาดและความเร็วแตกต่างกัน
  const bubbles = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 4, // ลดขนาดลงเพื่อเพิ่มประสิทธิภาพ
      left: Math.random() * 100,
      bottom: Math.random() * 20,
      duration: Math.random() * 5 + 5, // ลดระยะเวลาอนิเมชัน
      delay: Math.random() * 3,
      opacity: Math.random() * 0.2 + 0.1 // ลดความทึบแสง
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
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // ใช้สีพื้นฐานแทนเพื่อลดการคำนวณ
            animation: `bubbleRise ${bubble.duration}s linear infinite`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity
          }}
        />
      ))}
    </div>
  );
}; 