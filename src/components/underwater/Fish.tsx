import React from 'react';

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

// Static animation class names to avoid dynamic style generation
const ANIMATION_CLASSES = {
  ltr: 'animate-swim-ltr',
  rtl: 'animate-swim-rtl'
};

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

  // สร้าง style ตามประเภทของปลา
  const style: React.CSSProperties = {
    ...position,
    width: `${actualSize.width}px`,
    height: `${actualSize.height}px`,
    backgroundColor: actualColor,
    animationDuration: `${actualDuration}s`,
    animationDelay: `${delay}s`
  };

  // เพิ่มเงื่อนไขใหม่สำหรับการหันหัวไปทางซ้าย
  if (direction === 'ltr') {
    style.transform = 'scaleX(-1)';
  }

  const addWiggleEffect = () => {
    if (type === FishType.MEDIUM_FISH || type === FishType.SMALL_FISH) {
      return "fish-wiggle";
    }
    return "";
  };

  // Use predefined animation classes instead of dynamic keyframes
  const animationClass = direction === 'ltr' ? ANIMATION_CLASSES.ltr : ANIMATION_CLASSES.rtl;

  // สร้าง element ตามประเภทของปลา
  const renderFish = () => {
    switch (type) {
      case FishType.WHALE:
        return (
          <div className={`absolute ${animationClass} ${className} ${addWiggleEffect()} will-change-transform`}
            style={{
              ...style,
              zIndex: 10,
              backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3'),
              borderRadius: '50% 40% 40% 50%',
              position: 'relative'
            }}>
            {/* ครีบหลังปลาวาฬ */}
            <div className="absolute w-[60px] h-[80px] rounded-tl-[100%] rounded-tr-[100%]"
              style={{
                top: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3')
              }}></div>
            {/* หางปลาวาฬ */}
            <div className="absolute w-[100px] h-[50px] right-[-30px] bottom-[30px]">
              <div className="absolute w-full h-full rounded-br-[100%]"
                style={{ backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3') }}></div>
            </div>
            {/* ตาปลาวาฬ */}
            <div className="absolute w-[12px] h-[12px] bg-white/50 rounded-full"
              style={{ top: '30%', left: '15%' }}></div>
            {/* ครีบข้าง */}
            <div className="absolute w-[40px] h-[25px] rounded-full"
              style={{
                bottom: '25px',
                left: '30%',
                backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3'),
                transform: 'rotate(30deg)'
              }}></div>
            {/* ปากปลาวาฬ */}
            <div className="absolute w-[40px] h-[20px] rounded-full"
              style={{
                bottom: '40%',
                left: '5%',
                backgroundColor: actualColor.replace(/[^,]+(?=\))/, '0.3')
              }}></div>
          </div>
        );
      case FishType.SHARK:
        return (
          <div className={`absolute ${animationClass} ${className} ${addWiggleEffect()} will-change-transform`} style={{
            ...style,
            borderRadius: '50% 30% 30% 50%',
            position: 'relative'
          }}>
            {/* ครีบหลังฉลาม */}
            <div className="absolute"
              style={{
                top: '-20px',
                left: '40%',
                width: '0',
                height: '0',
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderBottom: '40px solid ' + actualColor
              }}></div>
            {/* หางฉลาม */}
            <div className="absolute"
              style={{
                right: '-30%',
                top: '10%',
                width: '0',
                height: '0',
                borderTop: '20px solid transparent',
                borderBottom: '20px solid transparent',
                borderLeft: '40px solid ' + actualColor
              }}></div>

            <div className="absolute"
              style={{
                right: '-35%',
                top: '15%',
                width: '0',
                height: '0',
                borderTop: '15px solid transparent',
                borderBottom: '15px solid transparent',
                borderRight: '25px solid ' + actualColor
              }}></div>
            {/* ตาฉลาม */}
            <div className="absolute w-[8px] h-[8px] bg-red-500/50 rounded-full"
              style={{ top: '30%', left: '10%' }}></div>
            {/* ครีบข้าง */}
            <div className="absolute w-[25px] h-[15px] rounded-full"
              style={{
                bottom: '5px',
                left: '30%',
                backgroundColor: actualColor,
                transform: 'rotate(30deg)'
              }}></div>
            {/* ปากฉลาม */}
            <div className="absolute w-[30px] h-[15px] rounded-full"
              style={{
                bottom: '35%',
                left: '5%',
                backgroundColor: actualColor
              }}></div>
            {/* ครีบหู */}
            <div className="absolute w-[20px] h-[10px] rounded-full"
              style={{
                top: '20%',
                left: '15%',
                backgroundColor: actualColor,
                transform: 'rotate(-30deg)'
              }}></div>
          </div>
        );
      case FishType.MEDIUM_FISH:
        return (
          <div className={`absolute ${animationClass} ${className} ${addWiggleEffect()} will-change-transform`} style={{
            ...style,
            borderRadius: '50% 30% 30% 50%',
            position: 'relative'
          }}>
            {/* ตาปลา */}
            <div className="absolute w-[6px] h-[6px] bg-white/70 rounded-full"
              style={{ top: '30%', left: '15%' }}></div>
            {/* หางปลา */}
            <div className="absolute"
              style={{
                right: '-10px',
                top: '25%',
                width: '0',
                height: '0',
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: '15px solid ' + actualColor
              }}></div>
            {/* ครีบบน */}
            <div className="absolute"
              style={{
                top: '-8px',
                left: '50%',
                width: '0',
                height: '0',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '12px solid ' + actualColor
              }}></div>
            {/* ครีบล่าง */}
            <div className="absolute"
              style={{
                bottom: '-8px',
                left: '50%',
                width: '0',
                height: '0',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '12px solid ' + actualColor
              }}></div>
            {/* ครีบหู */}
            <div className="absolute w-[12px] h-[6px] rounded-full"
              style={{
                top: '20%',
                left: '20%',
                backgroundColor: actualColor,
                transform: 'rotate(-30deg)'
              }}></div>
          </div>
        );
      case FishType.SMALL_FISH:
        return (
          <div className={`absolute ${animationClass} ${className} ${addWiggleEffect()} will-change-transform`} style={{
            ...style,
            borderRadius: '50% 30% 30% 50%',
            position: 'relative'
          }}>
            {/* ตาปลาเล็ก */}
            <div className="absolute w-[3px] h-[3px] bg-white/70 rounded-full"
              style={{ top: '30%', left: '20%' }}></div>
            {/* หางปลาเล็ก */}
            <div className="absolute"
              style={{
                right: '-6px',
                top: '30%',
                width: '0',
                height: '0',
                borderTop: '4px solid transparent',
                borderBottom: '4px solid transparent',
                borderLeft: '10px solid ' + actualColor
              }}></div>
            {/* ครีบหูเล็ก */}
            <div className="absolute w-[8px] h-[4px] rounded-full"
              style={{
                top: '25%',
                left: '25%',
                backgroundColor: actualColor,
                transform: 'rotate(-30deg)'
              }}></div>
          </div>
        );
      case FishType.STARFISH:
        return (
          <div className={`absolute ${animationClass} ${className}`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              backgroundColor: actualColor,
              position: 'relative'
            }}>
            {/* ตาดาวทะเล */}
            <div className="absolute w-[10px] h-[10px] bg-white/30 rounded-full"
              style={{ top: '45%', left: '45%' }}></div>
            {/* ลายบนตัวดาวทะเล */}
            <div className="absolute w-[30%] h-[30%] rounded-full bg-white/10"
              style={{ top: '35%', left: '35%' }}></div>
          </div>
        );
      case FishType.JELLYFISH:
        return (
          <div className={`absolute ${animationClass} ${className}`} style={{
            ...style,
            borderRadius: '50% 50% 0 0',
            overflow: 'visible',
            position: 'relative'
          }}>
            {/* หนวดแมงกะพรุน */}
            <div className="absolute w-full" style={{ bottom: '-30px', left: '0' }}>
              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute w-[2px] bg-opacity-40 animate-pulse"
                  style={{
                    left: `${5 + (i * 8)}%`,
                    height: `${20 + Math.random() * 30}px`,
                    backgroundColor: actualColor,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}></div>
              ))}
            </div>
            {/* ลายบนตัวแมงกะพรุน */}
            <div className="absolute w-[70%] h-[40%] rounded-full bg-white/10"
              style={{ top: '30%', left: '15%' }}></div>
            {/* ลายด้านข้าง */}
            <div className="absolute w-[40%] h-[30%] rounded-full bg-white/10"
              style={{ top: '40%', left: '30%' }}></div>
          </div>
        );
      default:
        return <div className={`absolute ${animationClass} ${className} ${addWiggleEffect()} will-change-transform`} style={style}></div>;
    }
  };

  return renderFish();
}; 