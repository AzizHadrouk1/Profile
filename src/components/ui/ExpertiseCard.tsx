import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ExpertiseCard({ icon: Icon, title, description }: ExpertiseCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900 hover:to-blue-800 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
        {description}
      </p>
    </div>
  );
}