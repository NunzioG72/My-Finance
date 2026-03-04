import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const tickers = [
  { symbol: 'GOLD', price: '2,125.25', change: '+7.43', percent: '0.56%', isPositive: true },
  { symbol: 'DOW32', price: '32,053.74', change: '+7.43', percent: '0.56%', isPositive: true },
  { symbol: 'SSQ', price: '2,125.25', change: '+7.43', percent: '0.56%', isPositive: true },
  { symbol: 'NASDAQ', price: '2,125.25', change: '+7.43', percent: '0.56%', isPositive: true },
  { symbol: 'DOW 32', price: '2,125.25', change: '+7.43', percent: '0.56%', isPositive: true },
];

export default function TickerTape() {
  return (
    <div className="flex justify-between items-center py-4 border-b border-white/5 overflow-x-auto gap-8">
      {tickers.map((ticker, index) => (
        <div key={index} className="flex flex-col min-w-[120px]">
          <span className="text-xs text-gray-400 font-medium mb-1">{ticker.symbol}</span>
          <span className="text-lg font-bold text-white mb-1">{ticker.price}</span>
          <div className={`flex items-center text-xs font-medium ${ticker.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {ticker.isPositive ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
            {ticker.change} {ticker.percent}
          </div>
        </div>
      ))}
    </div>
  );
}
