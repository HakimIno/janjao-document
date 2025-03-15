import React from 'react';

interface JanJaoLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const JanJaoLogo: React.FC<JanJaoLogoProps> = () => {
  return (
    <div className="relative">
      <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 font-logo">
        JanJao
      </span>
    </div>
  );
};

export default JanJaoLogo; 