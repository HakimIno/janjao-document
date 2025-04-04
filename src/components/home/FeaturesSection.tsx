import React from 'react';
import { motion } from 'framer-motion';
import { Feature } from './types';

interface FeaturesSectionProps {
  features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <>
      {/* Section Header */}
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-500 rounded-lg blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          <h2 className="relative text-4xl md:text-6xl font-sf-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-400">
            Everything you need
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              to build beautiful apps
            </span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-100/90 max-w-2xl mx-auto text-lg font-medium"
        >
          Create React Native apps faster with our comprehensive UI component library.
          Designed for performance, accessibility, and cross-platform consistency.
        </motion.p>
      </div>

      {/* Features Grid - Ocean Themed Cards */}
      <div className="relative mx-auto mb-32">
        {/* Ocean-themed Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.div 
            className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/40 to-transparent rounded-full filter blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.35, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-teal-500/40 to-transparent rounded-full filter blur-3xl opacity-30"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full filter blur-3xl opacity-20"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.25, 0.2]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        {/* Layered Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1.5 relative">
          {/* Featured Card (Large) */}
          <motion.div 
            className="lg:col-span-6 lg:row-span-2" 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeaturePrimaryCard feature={features[0]} />
          </motion.div>
          
          {/* Secondary Cards (Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {features.slice(1, 5).map((feature, index) => (
              <FeatureSecondaryCard key={index} feature={feature} index={index} />
            ))}
          </div>
          
          {/* Bottom Wide Card */}
          <motion.div 
            className="lg:col-span-12" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FeatureWideCard feature={features[5]} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

// Primary Feature Card Component
const FeaturePrimaryCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <motion.div 
    className="relative group h-full"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div 
      className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-gradient-flow"
    ></motion.div>
    <motion.div 
      className="relative h-full flex flex-col p-8 bg-blue-950/80 backdrop-blur-xl rounded-2xl border border-teal-500/20 overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ 
        rotateX: [-0.5, 0.5], 
        rotateY: [-0.5, 0.5],
        transition: { 
          rotateX: { repeat: Infinity, repeatType: "mirror", duration: 2 },
          rotateY: { repeat: Infinity, repeatType: "mirror", duration: 3 }
        }
      }}
    >
      <motion.div 
        className="text-5xl mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-800/50 to-teal-900/50 border border-teal-500/30"
        whileHover={{ rotate: 5, scale: 1.1 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-2xl font-sf-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
        {feature.title}
      </h3>
      <p className="text-blue-100/80 group-hover:text-blue-100 transition-colors text-lg leading-relaxed flex-grow">
        {feature.description}
      </p>
      
      
      {/* Underwater particle effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Ocean-themed decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-600/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 -right-6 w-12 h-24 bg-cyan-600/20 rounded-full blur-xl"></div>
    </motion.div>
  </motion.div>
);

// Secondary Feature Card Component
const FeatureSecondaryCard: React.FC<FeatureCardProps> = ({ feature, index = 0 }) => (
  <motion.div
    className="group"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.5, 
      delay: 0.1 * (index + 1)
    }}
    whileHover={{ scale: 1.03, zIndex: 10 }}
    whileTap={{ scale: 0.97 }}
  >
    <motion.div className="relative h-full">
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-gradient-flow"
        style={{ backgroundSize: "200% 200%" }}
      ></motion.div>
      <motion.div 
        className="relative h-full bg-blue-950/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ 
          rotateX: [-1, 1], 
          rotateY: [-1, 1],
          transition: { 
            rotateX: { repeat: Infinity, repeatType: "mirror", duration: 2 },
            rotateY: { repeat: Infinity, repeatType: "mirror", duration: 3 }
          }
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <motion.div 
            className="text-3xl p-3 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-800/50 to-cyan-900/50 border border-cyan-500/30"
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              boxShadow: "0 0 15px rgba(8, 145, 178, 0.5)"
            }}
          >
            {feature.icon}
          </motion.div>
          <motion.div 
            className="text-cyan-400"
            whileHover={{ scale: 1.2, rotate: 90 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
        <motion.h3 
          className="text-xl font-sf-bold text-white mb-2 group-hover:text-cyan-300 transition-colors"
          whileHover={{ x: 3 }}
        >
          {feature.title}
        </motion.h3>
        <p className="text-blue-100/80 text-sm leading-relaxed">
          {feature.description}
        </p>
        
        {/* Shine effect on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
            backgroundSize: "200% 200%"
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5
            }
          }}
        />
        
        {/* Ocean-themed decorative glow */}
        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
      </motion.div>
    </motion.div>
  </motion.div>
);

// Wide Feature Card Component
const FeatureWideCard: React.FC<FeatureCardProps> = ({ feature }) => (
  <motion.div 
    className="relative group"
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
  >
    <motion.div 
      className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-gradient-flow"
      style={{ backgroundSize: "200% 200%" }}
    ></motion.div>
    <motion.div 
      className="relative bg-blue-950/80 backdrop-blur-xl p-8 rounded-2xl border border-emerald-500/20 overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
      whileHover={{ 
        rotateX: [-0.3, 0.3], 
        rotateY: [-0.3, 0.3],
        transition: { 
          rotateX: { repeat: Infinity, repeatType: "mirror", duration: 3 },
          rotateY: { repeat: Infinity, repeatType: "mirror", duration: 4 }
        }
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <motion.div 
          className="text-4xl mb-6 md:mb-0 md:mr-8 flex items-center justify-center w-20 h-16 rounded-xl bg-gradient-to-br from-emerald-800/50 to-blue-900/50 border border-emerald-500/30"
          whileHover={{ 
            scale: 1, 
            rotate: 5,
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)"
          }}
        >
          {feature.icon}
        </motion.div>
        <div className={"max-w-3xl"}>
          <motion.h3 
            className="text-xl font-sf-bold text-white mb-2 group-hover:text-emerald-300 transition-colors"
            whileHover={{ x: 3 }}
          >
            {feature.title}
          </motion.h3>
          <p className="text-blue-100/80 group-hover:text-blue-100 transition-colors leading-relaxed">
            {feature.description}
          </p>
        </div>
        <div className="md:ml-auto mt-4 md:mt-0">
          <motion.button 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-medium text-sm"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
      
      {/* Shine effect */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
          backgroundSize: "200% 200%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.5
          }
        }}
      />
      
      {/* Underwater particle effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: [0, -40],
              x: [0, Math.random() * 10 - 5],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Ocean-themed Decorative Elements */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 -left-6 w-12 h-24 bg-cyan-600/20 rounded-full blur-xl"></div>
    </motion.div>
  </motion.div>
); 