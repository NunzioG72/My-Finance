import React from 'react';
import { ArrowUpRight, ArrowRight, ArrowDownRight } from 'lucide-react';

export default function GaugeChart() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-48 h-24 mb-8">
        {/* Background Arc */}
        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="#333"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Foreground Arc (Green) */}
          <path
            d="M 10 50 A 40 40 0 0 1 50 10"
            fill="none"
            stroke="#22C55E"
            strokeWidth="12"
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
          />
        </svg>
        
        {/* Center Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 text-center">
          <div className="text-sm font-medium text-gray-400">Desk</div>
          <div className="text-sm font-medium text-white">Strength</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-4 w-full mt-4 border-t border-white/5 pt-6">
        <div className="flex items-center text-green-500 text-sm font-medium">
          28 <ArrowUpRight size={14} className="ml-1" />
        </div>
        <div className="flex items-center text-red-500 text-sm font-medium justify-center">
          4.28 <ArrowDownRight size={14} className="ml-1" />
        </div>
        <div className="flex items-center text-gray-400 text-sm font-medium justify-end">
          74 <ArrowRight size={14} className="ml-1" />
        </div>
        
        <div className="flex items-center text-green-500 text-sm font-medium">
          2.74 <ArrowUpRight size={14} className="ml-1" />
        </div>
        <div className="flex items-center text-red-500 text-sm font-medium justify-center">
          78.4 <ArrowDownRight size={14} className="ml-1" />
        </div>
        <div className="flex items-center text-gray-400 text-sm font-medium justify-end">
          24.54 <ArrowRight size={14} className="ml-1" />
        </div>
      </div>
    </div>
  );
}
