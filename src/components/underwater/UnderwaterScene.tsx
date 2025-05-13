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
    orange: 'rgba(251, 146, 60, 0.3)'
  };

  // สร้างสีที่หลากหลายสำหรับปลาเล็ก
  const smallFishColors = {
    sky: 'rgba(14, 165, 233, 0.25)',
    teal: 'rgba(20, 184, 166, 0.25)',
    fuchsia: 'rgba(217, 70, 239, 0.25)'
  };

  // Check if device is likely mobile
  const isMobile = window.innerWidth < 768;
  
  // Reduce fish count on mobile
  const mediumFishLimit = isMobile ? 2 : 4;
  const smallFishLimit = isMobile ? 2 : 3;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ปลาวาฬ - เหลือแค่ 1 ตัว */}
      <Fish 
        type={FishType.WHALE} 
        position={{ bottom: '15%', left: '-150px' }} 
        color="rgba(56, 189, 248, 0.1)"
        duration={40}
        direction="ltr"
      />
      
      {/* ปลาขนาดกลาง - ลดจาก 8 ตัวเหลือ 4 */}
      {Object.entries(fishColors).slice(0, mediumFishLimit).map(([, color], i) => (
        <Fish 
          key={`medium-fish-${i}`}
          type={FishType.MEDIUM_FISH} 
          position={{ top: `${15 + i * 15}%`, left: '-50px' }} 
          color={color}
          size={{ width: 30 + Math.random() * 15, height: 15 + Math.random() * 8 }}
          duration={15 + i * 2}
          delay={i * 2}
          direction="ltr"
        />
      ))}

      {/* ปลาขนาดเล็ก - ลดจาก 6 ตัวเหลือ 3 */}
      {Object.entries(smallFishColors).slice(0, smallFishLimit).map(([, color], i) => (
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

      {/* ลดจำนวนฟองอากาศลง */}
      <Bubbles count={isMobile ? 10 : 20} />


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

      {/* สาหร่าย */}
      <Seaweed count={5} />
    </div>
  );
}; 