import React, { useEffect, useState } from 'react';

// ประเภทของปลาและสัตว์ทะเล
export enum FishType {
  WHALE,
  SHARK,
  MEDIUM_FISH,
  SMALL_FISH,
  STARFISH,
  JELLYFISH
}

// คุณสมบัติของปลาและสัตว์ทะเล
interface FishProps {
  type: FishType;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  color?: string;
  size?: {
    width: number;
    height: number;
  };
  delay?: number;
  duration?: number;
  direction?: 'ltr' | 'rtl'; // left-to-right หรือ right-to-left
}

// Component สำหรับปลาและสัตว์ทะเลแต่ละประเภท
export const Fish: React.FC<FishProps> = ({ 
  type, 
  position, 
  color, 
  size, 
  delay = 0, 
  duration = 20,
  direction = 'ltr'
}) => {
  // กำหนดค่าเริ่มต้นตามประเภทของปลา
  const getDefaultProps = () => {
    switch (type) {
      case FishType.WHALE:
        return {
          className: "whale",
          defaultSize: { width: 300, height: 120 },
          defaultColor: "rgba(56, 189, 248, 0.1)",
          defaultDuration: 40
        };
      case FishType.SHARK:
        return {
          className: "shark",
          defaultSize: { width: 120, height: 50 },
          defaultColor: "rgba(148, 163, 184, 0.15)",
          defaultDuration: 25
        };
      case FishType.MEDIUM_FISH:
        return {
          className: "fish-medium",
          defaultSize: { width: 40, height: 20 },
          defaultColor: "rgba(56, 189, 248, 0.3)",
          defaultDuration: 15
        };
      case FishType.SMALL_FISH:
        return {
          className: "fish-small",
          defaultSize: { width: 20, height: 10 },
          defaultColor: "rgba(94, 234, 212, 0.25)",
          defaultDuration: 10
        };
      case FishType.STARFISH:
        return {
          className: "starfish",
          defaultSize: { width: 40, height: 40 },
          defaultColor: "rgba(251, 146, 60, 0.3)",
          defaultDuration: 0
        };
      case FishType.JELLYFISH:
        return {
          className: "jellyfish",
          defaultSize: { width: 40, height: 60 },
          defaultColor: "rgba(217, 70, 239, 0.2)",
          defaultDuration: 10
        };
      default:
        return {
          className: "",
          defaultSize: { width: 20, height: 10 },
          defaultColor: "rgba(56, 189, 248, 0.2)",
          defaultDuration: 15
        };
    }
  };

  const { 
    className, 
    defaultSize, 
    defaultColor, 
    defaultDuration 
  } = getDefaultProps();

  const actualSize = size || defaultSize;
  const actualColor = color || defaultColor;
  const actualDuration = duration || defaultDuration;
  
  // สร้าง animation keyframes ตามทิศทาง
  const [animationName, setAnimationName] = useState("");
  
  useEffect(() => {
    // สร้าง unique animation name สำหรับแต่ละตัว
    const uniqueId = Math.random().toString(36).substring(2, 9);
    const newAnimName = `swim-${type}-${uniqueId}`;
    
    // สร้าง keyframes animation ตามทิศทาง
    let keyframes = '';
    if (direction === 'ltr') {
      keyframes = `
        @keyframes ${newAnimName} {
          0% { transform: translateX(-100%) ${type === FishType.JELLYFISH ? 'translateY(0)' : ''}; }
          100% { transform: translateX(100vw) ${type === FishType.JELLYFISH ? 'translateY(-20px)' : ''}; }
        }
      `;
    } else {
      keyframes = `
        @keyframes ${newAnimName} {
          0% { transform: translateX(100vw) scaleX(-1) ${type === FishType.JELLYFISH ? 'translateY(0)' : ''}; }
          100% { transform: translateX(-100%) scaleX(-1) ${type === FishType.JELLYFISH ? 'translateY(-20px)' : ''}; }
        }
      `;
    }
    
    // เพิ่ม keyframes ลงใน document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    styleSheet.id = newAnimName;
    document.head.appendChild(styleSheet);
    
    setAnimationName(newAnimName);
    
    // Cleanup เมื่อ component unmount
    return () => {
      const styleElement = document.getElementById(newAnimName);
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, [type, direction]);

  // สร้าง style ตามประเภทของปลา
  const style: React.CSSProperties = {
    ...position,
    width: `${actualSize.width}px`,
    height: `${actualSize.height}px`,
    backgroundColor: actualColor,
  };

  if (animationName) {
    style.animation = `${animationName} ${actualDuration}s linear infinite`;
    style.animationDelay = `${delay}s`;
  }


  if (direction === 'rtl' && type === FishType.STARFISH) {
    style.transform = 'scaleX(-1)';
  }

  const addWiggleEffect = () => {
    if (type === FishType.MEDIUM_FISH || type === FishType.SMALL_FISH) {
      return "fish-wiggle";
    }
    return "";
  };

  // สร้าง element ตามประเภทของปลา
  const renderFish = () => {
    switch (type) {
      case FishType.WHALE:
        return (
          <div className={`absolute rounded-[50%] will-change-transform ${className} ${addWiggleEffect()}`} 
            style={{
              ...style,
              // เพิ่ม z-index เพื่อให้แน่ใจว่าปลาวาฬอยู่ด้านหน้า
              zIndex: 10,
              // ปรับความโปร่งใสให้มองเห็นได้ชัดเจนขึ้น
              backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3')
            }}>
            {/* ครีบหลังปลาวาฬ */}
            <div className="absolute w-[40px] h-[60px] rounded-tl-[100%] rounded-tr-[100%]"
              style={{ 
                top: '-30px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3')
              }}></div>
            {/* หางปลาวาฬ */}
            <div className="absolute w-[80px] h-[40px] right-[-20px] bottom-[20px]">
              <div className="absolute w-full h-full rounded-br-[100%]" 
                style={{ backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3') }}></div>
            </div>
            {/* ตาปลาวาฬ */}
            <div className="absolute w-[10px] h-[10px] bg-white/50 rounded-full" 
              style={{ top: '30%', left: '15%' }}></div>
            {/* ครีบข้าง */}
            <div className="absolute w-[30px] h-[20px] rounded-full"
              style={{ 
                bottom: '20px', 
                left: '30%', 
                backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3'),
                transform: 'rotate(30deg)'
              }}></div>
          </div>
        );
      case FishType.SHARK:
        return (
          <div className={`absolute will-change-transform ${className} ${addWiggleEffect()}`} style={{
            ...style,
            borderRadius: '50% 30% 30% 50%',
          }}>
            {/* ครีบหลังฉลาม */}
            <div className="absolute" 
              style={{ 
                top: '-15px', 
                left: '40%', 
                width: '0',
                height: '0',
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderBottom: '30px solid ' + actualColor
              }}></div>
            {/* หางฉลาม */}
            <div className="absolute" 
              style={{ 
                right: '-15px', 
                top: '30%',
                width: '0',
                height: '0',
                borderTop: '15px solid transparent',
                borderBottom: '15px solid transparent',
                borderLeft: '30px solid ' + actualColor
              }}></div>
            {/* ตาฉลาม */}
            <div className="absolute w-[6px] h-[6px] bg-red-500/50 rounded-full" 
              style={{ top: '30%', left: '10%' }}></div>
            {/* ครีบข้าง */}
            <div className="absolute w-[20px] h-[10px] rounded-full"
              style={{ 
                bottom: '0', 
                left: '30%', 
                backgroundColor: actualColor,
                transform: 'rotate(30deg)'
              }}></div>
          </div>
        );
      case FishType.MEDIUM_FISH:
        return (
          <div className={`absolute will-change-transform ${className} ${addWiggleEffect()}`} style={{
            ...style,
            borderRadius: '50% 30% 30% 50%',
          }}>
            {/* ตาปลา */}
            <div className="absolute w-[4px] h-[4px] bg-white/70 rounded-full" 
              style={{ top: '30%', left: '15%' }}></div>
            {/* หางปลา */}
            <div className="absolute" 
              style={{ 
                right: '-8px', 
                top: '25%',
                width: '0',
                height: '0',
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '12px solid ' + actualColor
              }}></div>
            {/* ครีบบน */}
            <div className="absolute" 
              style={{ 
                top: '-5px', 
                left: '50%', 
                width: '0',
                height: '0',
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderBottom: '8px solid ' + actualColor
              }}></div>
          </div>
        );
      case FishType.SMALL_FISH:
        return (
          <div className={`absolute will-change-transform ${className} ${addWiggleEffect()}`} style={{
            ...style,
            borderRadius: '50% 30% 30% 50%',
          }}>
            {/* ตาปลาเล็ก */}
            <div className="absolute w-[2px] h-[2px] bg-white/70 rounded-full" 
              style={{ top: '30%', left: '20%' }}></div>
            {/* หางปลาเล็ก */}
            <div className="absolute" 
              style={{ 
                right: '-5px', 
                top: '30%',
                width: '0',
                height: '0',
                borderTop: '3px solid transparent',
                borderBottom: '3px solid transparent',
                borderLeft: '8px solid ' + actualColor
              }}></div>
          </div>
        );
      case FishType.STARFISH:
        return (
          <div className={`absolute will-change-transform ${className}`} 
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              backgroundColor: actualColor
            }}>
            <div className="absolute w-[8px] h-[8px] bg-white/30 rounded-full" 
              style={{ top: '45%', left: '45%' }}></div>
          </div>
        );
      case FishType.JELLYFISH:
        return (
          <div className={`absolute will-change-transform ${className}`} style={{
            ...style,
            borderRadius: '50% 50% 0 0',
            overflow: 'visible'
          }}>
            {/* หนวดแมงกะพรุน */}
            <div className="absolute w-full" style={{ bottom: '-20px', left: '0' }}>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="absolute w-[2px] bg-opacity-40 animate-pulse" 
                  style={{ 
                    left: `${10 + (i * 10)}%`, 
                    height: `${15 + Math.random() * 20}px`,
                    backgroundColor: actualColor,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}></div>
              ))}
            </div>
            {/* ลายบนตัวแมงกะพรุน */}
            <div className="absolute w-[60%] h-[30%] rounded-full bg-white/10"
              style={{ top: '30%', left: '20%' }}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return renderFish();
}; 