import React from 'react';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Autonomous Drone Controller',
    description: 'Developed firmware for precision flight control and navigation systems',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800',
    tags: ['RTOS', 'C++', 'Sensor Fusion']
  },
  {
    title: 'Smart Energy Monitor',
    description: 'Created an efficient power monitoring system for industrial applications',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    tags: ['ARM', 'IoT', 'Power Management']
  },
  {
    title: 'Medical Device Firmware',
    description: 'Led development of FDA-compliant firmware for critical care equipment',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    tags: ['Safety Critical', 'C', 'FDA Compliance']
  }
];

export default function ProjectsSection() {
  return (
    <div className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}