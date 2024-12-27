import React from 'react';
import { Icons } from './icons';

const headerIcons = [Icons.Cpu, Icons.Terminal, Icons.Database, Icons.Wifi];

export default function ProfileHeader() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="floating-circuit absolute opacity-20">
          <Icons.Circuit size={400} className="text-blue-500" />
        </div>
        
        <div className="text-center space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-2xl">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            John Anderson
          </h1>
          <p className="text-xl text-blue-200">Embedded Systems Software Engineer</p>
          
          <div className="flex gap-4 justify-center">
            {headerIcons.map((Icon, index) => (
              <div key={index} className="p-2 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-all">
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-white/50">
          <Icons.Layers className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}