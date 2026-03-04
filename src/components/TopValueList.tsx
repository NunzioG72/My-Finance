import React from 'react';

const data = [
  { instrument: 'BEXIMCO', ltp: '130.4', percent: '130.4', value: '130.4', volume: [3, 5, 2, 7, 4, 8, 3] },
  { instrument: 'FORTUNE', ltp: '80.8', percent: '80.8', value: '80.8', volume: [6, 4, 8, 2, 5, 3, 6] },
  { instrument: 'LHBL', ltp: '72.10', percent: '72.10', value: '72.10', volume: [2, 7, 3, 5, 8, 4, 2] },
  { instrument: 'MALEKSPIN', ltp: '40.8', percent: '40.8', value: '40.8', volume: [8, 2, 5, 3, 6, 4, 8] },
  { instrument: 'IPDC', ltp: '62.8', percent: '62.8', value: '62.8', volume: [4, 6, 2, 8, 3, 5, 4] },
  { instrument: 'BSC', ltp: '120.4', percent: '120.4', value: '120.4', volume: [5, 3, 8, 4, 2, 7, 5] },
  { instrument: 'KDSALTD', ltp: '88.4', percent: '88.4', value: '88.4', volume: [3, 8, 4, 2, 6, 5, 3] },
  { instrument: 'KDSALTD', ltp: '88.4', percent: '88.4', value: '88.4', volume: [7, 2, 5, 8, 3, 4, 7] },
  { instrument: 'BATBC', ltp: '480.8', percent: '480.8', value: '480.8', volume: [2, 5, 8, 3, 7, 4, 2] },
];

export default function TopValueList() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/5">
            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">INSTRUMENT</th>
            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">LTP</th>
            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">%</th>
            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">VALUE</th>
            <th className="py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">VOLUME</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
              <td className="py-4 px-4 text-sm font-medium text-white">{row.instrument}</td>
              <td className="py-4 px-4 text-sm text-gray-300 group-hover:text-white transition-colors">{row.ltp}</td>
              <td className="py-4 px-4 text-sm text-gray-300 group-hover:text-white transition-colors">{row.percent}</td>
              <td className="py-4 px-4 text-sm text-gray-300 group-hover:text-white transition-colors">{row.value}</td>
              <td className="py-4 px-4 text-right">
                <div className="flex items-end justify-end gap-1 h-6">
                  {row.volume.map((v, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-yellow-500 rounded-t-sm" 
                      style={{ height: `${(v / 10) * 100}%` }}
                    />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
