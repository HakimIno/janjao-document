import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface JanJaoLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const JanJaoLogo: React.FC<JanJaoLogoProps> = ({ size = 'md', className = '' }) => {
  // กำหนดขนาดตาม prop ที่ได้รับ
  const logoSize = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  }[size];

  const textSize = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }[size];

  return (
    <div className=" relative">
      <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 font-logo">
        JanJao
      </span>
    </div>
  );
};

export default JanJaoLogo; 