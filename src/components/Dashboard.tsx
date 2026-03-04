import React from 'react';
import TickerTape from './TickerTape';
import GaugeChart from './GaugeChart';
import StockExchange from './StockExchange';
import SectorStrength from './SectorStrength';
import TopValueList from './TopValueList';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto pb-12">
      <TickerTape />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <h3 className="text-lg font-medium text-white mb-6">Strength meter</h3>
          <GaugeChart />
        </div>
        
        <div className="col-span-1 lg:col-span-2 bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <StockExchange />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-white">Strength meter</h3>
            <button className="text-gray-500 hover:text-white">...</button>
          </div>
          <SectorStrength />
        </div>
        
        <div className="col-span-1 lg:col-span-2 bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-white">Top value list</h3>
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filters
            </button>
          </div>
          <TopValueList />
        </div>
      </div>
    </div>
  );
}
