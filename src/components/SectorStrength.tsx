import React from 'react';

const sectors = [
  { name: 'Textile', value: 15285, percent: '21.04%' },
  { name: 'Miscellaneous', value: 15285, percent: '21.04%' },
  { name: 'Engineering', value: 15285, percent: '21.04%' },
  { name: 'Fuel and power', value: 15285, percent: '21.04%' },
  { name: 'Bank', value: 15285, percent: '21.04%' },
  { name: 'life insurance', value: 15285, percent: '21.04%' },
  { name: 'it Sector', value: 15285, percent: '21.04%' },
  { name: 'Ceramics section', value: 15285, percent: '21.04%' },
  { name: 'Travel & printing', value: 15285, percent: '21.04%' },
  { name: 'Corporate bond', value: 15285, percent: '21.04%' },
];

export default function SectorStrength() {
  return (
    <div className="flex flex-col gap-4">
      {sectors.map((sector, index) => (
        <div key={index} className="flex items-center justify-between group">
          <span className="text-sm text-gray-400 w-32 truncate group-hover:text-white transition-colors">{sector.name}</span>
          
          <div className="flex-1 mx-4 h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 rounded-full" 
              style={{ width: `${(sector.value / 20000) * 100}%` }}
            />
          </div>
          
          <div className="flex items-center gap-2 w-24 justify-end">
            <span className="text-sm font-medium text-white">{sector.value}</span>
            <span className="text-xs text-gray-500">({sector.percent})</span>
          </div>
        </div>
      ))}
    </div>
  );
}
