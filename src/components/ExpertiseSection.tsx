import React from 'react';
import { Icons } from './icons';
import { ExpertiseCard } from './ui/ExpertiseCard';

const expertiseAreas = [
  {
    icon: Icons.Cpu,
    title: 'Embedded Systems',
    description: 'Specialized in real-time operating systems and bare-metal programming'
  },
  {
    icon: Icons.Microchip,
    title: 'Hardware Integration',
    description: 'Expert in interfacing with various microcontrollers and sensors'
  },
  {
    icon: Icons.Shield,
    title: 'Security',
    description: 'Implementation of secure bootloaders and encrypted firmware updates'
  },
  {
    icon: Icons.Server,
    title: 'IoT Solutions',
    description: 'Development of connected device ecosystems and protocols'
  },
  {
    icon: Icons.Wrench,
    title: 'System Optimization',
    description: 'Performance tuning and power consumption optimization'
  }
];

export default function ExpertiseSection() {
  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Technical Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} {...area} />
          ))}
        </div>
      </div>
    </div>
  );
}