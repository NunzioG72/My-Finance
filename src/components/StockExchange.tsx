import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: '11:00', value: 424 },
  { name: '11:30', value: 500 },
  { name: '12:00', value: 620 },
  { name: '12:30', value: 580 },
  { name: '13:00', value: 520 },
  { name: '13:30', value: 480 },
  { name: '14:00', value: 450 },
];

export default function StockExchange() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-lg font-medium text-white mb-2">Stock exchange</h3>
          <div className="flex items-end gap-4">
            <span className="text-4xl font-bold text-white">8,148.77</span>
            <div className="flex flex-col items-end">
              <span className="text-green-500 flex items-center text-sm font-medium">
                <ArrowUpRight size={16} className="mr-1" /> 32.13 (-1.52%)
              </span>
              <span className="text-gray-500 text-xs">Movement</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-2">04:45 pm 11/06</p>
        </div>
        
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded">DSEX</button>
          <button className="px-3 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded hover:bg-[#333]">DSES</button>
          <button className="px-3 py-1 bg-[#2A2A2A] text-gray-400 text-xs font-medium rounded hover:bg-[#333]">DS30</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        {/* Left Column - Stats & Bar Chart */}
        <div className="flex flex-col justify-between">
          <div className="flex justify-between mb-8">
            <div>
              <div className="text-green-500 text-sm font-medium mb-1">8180.90</div>
              <div className="text-gray-400 text-xs">Day open</div>
            </div>
            <div>
              <div className="text-green-500 text-sm font-medium mb-1">8180.90</div>
              <div className="text-gray-400 text-xs">Day open</div>
            </div>
            <div>
              <div className="text-green-500 text-sm font-medium mb-1">8180.90</div>
              <div className="text-gray-400 text-xs">Day open</div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>52 week range</span>
            </div>
            <div className="h-4 flex gap-1 mb-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-sm ${
                    i < 15 ? 'bg-red-500' : 
                    i < 25 ? 'bg-yellow-500' : 
                    i < 30 ? 'bg-green-500' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-gray-400 text-xs mb-1">8 Month Return</div>
                <div className="text-green-500 text-sm font-medium flex items-center">
                  <ArrowUpRight size={14} className="mr-1" /> -12.96%
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-xs mb-1">8 Month Return</div>
                <div className="text-green-500 text-sm font-medium flex items-center justify-end">
                  <ArrowDownRight size={14} className="mr-1" /> -12.96%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Line Chart & Table */}
        <div className="flex flex-col">
          <div className="h-40 w-full mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 10 }} dx={-10} domain={['dataMin - 50', 'dataMax + 50']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#22C55E" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-auto border-t border-white/5 pt-4">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-sm text-gray-400">Total trade</span>
              <span className="text-sm text-white font-medium">4,124.77</span>
              <span className="text-sm text-white font-medium">1,14,448</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-sm text-gray-400">Total volume</span>
              <span className="text-sm text-white font-medium">16,02,478</span>
              <span className="text-sm text-white font-medium">-4214</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
