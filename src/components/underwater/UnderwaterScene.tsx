import React from 'react';
import { Fish, FishType } from './Fish';
import { Bubbles } from './Bubbles';
import { Seaweed } from './Seaweed';
import '../../styles/underwater-animations.css';

export const UnderwaterScene: React.FC = () => {
  // สร้างสีที่หลากหลายสำหรับปลา
  const fishColors = {
    cyan: 'rgba(56, 189, 248, 0.3)',
    teal: 'rgba(94, 234, 212, 0.3)',
    purple: 'rgba(167, 139, 250, 0.3)',
    orange: 'rgba(251, 146, 60, 0.3)',
    amber: 'rgba(251, 191, 36, 0.3)',
    green: 'rgba(74, 222, 128, 0.3)',
    red: 'rgba(248, 113, 113, 0.3)',
    blue: 'rgba(147, 197, 253, 0.3)'
  };

  // สร้างสีที่หลากหลายสำหรับปลาเล็ก
  const smallFishColors = {
    sky: 'rgba(14, 165, 233, 0.25)',
    teal: 'rgba(20, 184, 166, 0.25)',
    fuchsia: 'rgba(217, 70, 239, 0.25)',
    pink: 'rgba(236, 72, 153, 0.25)',
    lime: 'rgba(132, 204, 22, 0.25)',
    cyan: 'rgba(6, 182, 212, 0.25)'
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ปลาวาฬ */}
      <Fish 
        type={FishType.WHALE} 
        position={{ bottom: '15%', left: '-150px' }} 
        color="rgba(56, 189, 248, 0.1)"
        duration={40}
        direction="ltr"
      />
      
      <Fish 
        type={FishType.WHALE} 
        position={{ bottom: '40%', left: '-150px' }} 
        color="rgba(129, 140, 248, 0.1)"
        size={{ width: 250, height: 100 }}
        duration={50}
        delay={15}
        direction="ltr"
      />

      {/* ปลาฉลาม */}
      <Fish 
        type={FishType.SHARK} 
        position={{ top: '30%', left: '-120px' }} 
        duration={25}
        delay={5}
        direction="ltr"
      />

      {/* ปลาขนาดกลาง */}
      {Object.entries(fishColors).map(([, color], i) => (
        <Fish 
          key={`medium-fish-${i}`}
          type={FishType.MEDIUM_FISH} 
          position={{ top: `${15 + i * 8}%`, left: '-50px' }} 
          color={color}
          size={{ width: 30 + Math.random() * 15, height: 15 + Math.random() * 8 }}
          duration={15 + i * 2}
          delay={i * 2}
          direction="ltr"
        />
      ))}

      {/* ปลาขนาดเล็ก */}
      {Object.entries(smallFishColors).map(([, color], i) => (
        <Fish 
          key={`small-fish-${i}`}
          type={FishType.SMALL_FISH} 
          position={{ top: `${30 + Math.sin(i) * 25}%`, left: '-30px' }} 
          color={color}
          size={{ width: 10 + Math.random() * 10, height: 5 + Math.random() * 5 }}
          duration={8 + i * 1.5}
          delay={i * 0.5}
          direction="ltr"
        />
      ))}

      {/* ปลาดาว */}
      {Array.from({ length: 3 }).map((_, i) => (
        <Fish 
          key={`starfish-${i}`}
          type={FishType.STARFISH} 
          position={{ bottom: `${5 + i * 10}%`, left: `${20 + i * 25}%` }} 
          color="rgba(251, 146, 60, 0.3)"
          size={{ width: 40, height: 40 }}
        />
      ))}

      {/* แมงกะพรุน */}
      {Array.from({ length: 2 }).map((_, i) => (
        <Fish 
          key={`jellyfish-${i}`}
          type={FishType.JELLYFISH} 
          position={{ top: `${30 + i * 20}%`, right: `${10 + i * 30}%` }} 
          color="rgba(217, 70, 239, 0.2)"
          size={{ width: 40, height: 30 }}
          duration={10 + i * 5}
          delay={i * 2}
        />
      ))}

      {/* ฟองอากาศ */}
      <Bubbles count={12} />

      {/* สาหร่าย */}
      <Seaweed count={5} />
    </div>
  );
}; 