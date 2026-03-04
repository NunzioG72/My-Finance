import React from 'react';
import { ShieldCheck, TrendingUp, ArrowUpRight, Plus, Download, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: '2020', value: 12000 },
  { name: '2021', value: 18500 },
  { name: '2022', value: 24000 },
  { name: '2023', value: 31200 },
  { name: '2024', value: 38500 },
  { name: '2025', value: 46800 },
  { name: '2026', value: 52450 },
];

const versamenti = [
  { id: 1, date: '15/02/2026', type: 'Versamento Volontario', amount: 500.00, quote: 24.5, nav: 20.408 },
  { id: 2, date: '15/01/2026', type: 'TFR Aziendale', amount: 250.00, quote: 12.3, nav: 20.325 },
  { id: 3, date: '15/12/2025', type: 'Contributo Datoriale', amount: 150.00, quote: 7.5, nav: 20.000 },
  { id: 4, date: '15/12/2025', type: 'Versamento Volontario', amount: 500.00, quote: 25.0, nav: 20.000 },
];

export default function Pensione() {
  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-white">Pensione Integrativa</h2>
          <p className="text-gray-400 text-sm mt-1">SecondaPensione - Comparto Sviluppo</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#2A2A2A] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            <Plus size={16} /> Nuovo Versamento
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
              <ShieldCheck size={20} />
            </div>
            <div className="text-sm font-medium text-gray-400">Montante Lordo</div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">€ 52.450,00</div>
          <div className="text-xs text-gray-500">
            Versato: <span className="text-white">€ 45.000,00</span>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
              <TrendingUp size={20} />
            </div>
            <div className="text-sm font-medium text-gray-400">Rendimento Lordo</div>
          </div>
          <div className="text-3xl font-bold text-green-500 mb-2 flex items-center">
            <ArrowUpRight size={24} className="mr-1" /> +16,55%
          </div>
          <div className="text-xs text-gray-500">
            Plusvalenza: <span className="text-green-500">+€ 7.450,00</span>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
              <Calendar size={20} />
            </div>
            <div className="text-sm font-medium text-gray-400">Deducibilità {new Date().getFullYear()}</div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">€ 1.500,00</div>
          <div className="text-xs text-gray-500">
            Residuo: <span className="text-white">€ 3.664,57</span> (Max € 5.164,57)
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
              <ShieldCheck size={20} />
            </div>
            <div className="text-sm font-medium text-gray-400">Valore Quota (NAV)</div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">20,408</div>
          <div className="text-xs text-gray-500">
            Quote Totali: <span className="text-white">2.570,070</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="col-span-1 lg:col-span-2 bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <h3 className="text-lg font-medium text-white mb-6">Andamento Montante</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValuePens" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#666', fontSize: 12 }} dx={-10} tickFormatter={(value) => `€${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                  formatter={(value: number) => [`€ ${value.toLocaleString('it-IT')}`, 'Montante']}
                />
                <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorValuePens)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tassazione */}
        <div className="col-span-1 bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
          <h3 className="text-lg font-medium text-white mb-6">Stima Tassazione</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Anni di partecipazione</span>
                <span className="text-white font-medium">6 anni</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '17%' }} />
              </div>
              <div className="text-xs text-gray-500 mt-2 text-right">Mancano 9 anni per riduzione aliquota</div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Aliquota attuale</span>
                <span className="text-red-500 font-medium">15,00%</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Aliquota minima (dopo 35 anni)</span>
                <span className="text-green-500 font-medium">9,00%</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Montante Lordo</span>
                <span className="text-white font-medium">€ 52.450,00</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Tasse stimate (15%)</span>
                <span className="text-red-500 font-medium">-€ 7.867,50</span>
              </div>
              <div className="flex justify-between text-base mt-4 font-bold">
                <span className="text-white">Montante Netto</span>
                <span className="text-green-500">€ 44.582,50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Versamenti Table */}
      <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#141414]">
          <h3 className="text-lg font-medium text-white">Ultimi Versamenti</h3>
          <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">Vedi tutti</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-[#141414]">
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Valore Quota</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Quote Acquistate</th>
                <th className="py-3 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Importo</th>
              </tr>
            </thead>
            <tbody>
              {versamenti.map((v) => (
                <tr key={v.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-300">{v.date}</td>
                  <td className="py-4 px-6 text-sm font-medium text-white">{v.type}</td>
                  <td className="py-4 px-6 text-sm text-gray-400 text-right">{v.nav.toFixed(3)}</td>
                  <td className="py-4 px-6 text-sm text-gray-400 text-right">+{v.quote.toFixed(3)}</td>
                  <td className="py-4 px-6 text-sm font-bold text-green-500 text-right">
                    +€ {v.amount.toLocaleString('it-IT', { minimumFractionDigits: 2 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
