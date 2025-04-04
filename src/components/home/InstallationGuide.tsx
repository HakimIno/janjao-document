import React, { useState } from 'react';

export const InstallationGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('npm');
    
    // คำสั่งสำหรับการติดตั้งต่างๆ
    const installCommands = [
        {
            manager: 'npm',
            command: 'npm install janjao-ui',
            icon: '/images/npm-logo.svg'
        },
        {
            manager: 'yarn',
            command: 'yarn add janjao-ui',
            icon: '/images/yarn-logo.svg'
        },
        {
            manager: 'expo',
            command: 'expo install janjao-ui',
            icon: '/images/expo-logo.svg'
        }
    ];

    return (
        <div className="mb-32 relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-teal-900/40 backdrop-blur-sm border border-blue-400/20 rounded-3xl" />
            
            <div className="relative z-10 p-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-sf-bold text-white mb-6">
                        Get Started in
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 ml-2">
                            Minutes
                        </span>
                    </h2>
                    <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
                        Installing JanjaoUI is simple. Just use your favorite package manager
                        and you'll be up and running in no time.
                    </p>
                </div>

                {/* Installation Tabs */}
                <div className="max-w-3xl mx-auto">
                    {/* Tab Selector */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex bg-blue-900/30 rounded-full p-1.5">
                            {installCommands.map((item) => (
                                <button
                                    key={item.manager}
                                    className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                                        activeTab === item.manager
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                                            : 'text-blue-100/80 hover:text-white'
                                    }`}
                                    onClick={() => setActiveTab(item.manager)}
                                >
                                    {item.manager.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Command Display */}
                    <div className="bg-blue-950/60 rounded-xl p-5 mb-8">
                        {installCommands.map((item) => (
                            <div
                                key={item.manager}
                                className={`${
                                    activeTab === item.manager ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="flex items-center">
                                    <div className="flex-grow font-mono text-blue-100 bg-blue-900/40 p-4 rounded-lg overflow-x-auto">
                                        {item.command}
                                    </div>
                                    <button 
                                        className="ml-3 p-2 hover:bg-blue-800/40 rounded-lg transition-colors flex-shrink-0"
                                        onClick={() => {
                                            navigator.clipboard.writeText(item.command);
                                            // อาจจะมี notification แจ้งเตือนว่าคัดลอกแล้ว
                                        }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V17M8 5C8 3.89543 8.89543 3 10 3H18C19.1046 3 20 3.89543 20 5V15C20 16.1046 19.1046 17 18 17H10C8.89543 17 8 16.1046 8 15V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Start */}
                    <div className="mt-8 bg-blue-900/30 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-sf-bold text-white mb-4">Quick Start Example</h3>
                        <div className="bg-blue-950/70 rounded-lg p-4 overflow-x-auto font-mono text-sm text-blue-100/90">
                            <pre>{`import React from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'janjao-ui';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Card variant="elevated">
        <Card.Header>
          <Text category="h5">Welcome to JanjaoUI</Text>
        </Card.Header>
        <Card.Content>
          <Text>
            This is a simple example showing JanjaoUI components.
          </Text>
        </Card.Content>
        <Card.Footer>
          <Button variant="gradient">Get Started</Button>
        </Card.Footer>
      </Card>
    </View>
  );
}`}</pre>
                        </div>
                    </div>

                    {/* Documentation Link */}
                    <div className="text-center mt-10">
                        <a 
                            href="/docs" 
                            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600/40 to-cyan-600/40 rounded-full text-white font-medium border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 inline-flex items-center gap-2 overflow-hidden"
                        >
                            <span className="relative z-10">Read Documentation</span>
                            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}; 