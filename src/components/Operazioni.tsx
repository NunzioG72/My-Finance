import React, { useState } from 'react';
import { Search, Filter, Plus, Download, MoreHorizontal, Edit2, Trash2, Tag as TagIcon } from 'lucide-react';

const operations = [
  { id: 1, date: '01/03/2026', type: 'Uscita', category: 'Spese Fisse', subcategory: 'Affitto', causal: 'Bonifico Affitto Marzo', from: 'CC Unicredit', to: 'Mario Rossi', amount: -850.00, tags: ['casa', 'fissi'] },
  { id: 2, date: '28/02/2026', type: 'Entrata', category: 'Stipendio', subcategory: 'Principale', causal: 'Stipendio Febbraio', from: 'Azienda SpA', to: 'CC Unicredit', amount: 2450.00, tags: ['lavoro'] },
  { id: 3, date: '25/02/2026', type: 'Uscita', category: 'Alimentari', subcategory: 'Spesa', causal: 'Spesa Esselunga', from: 'Carta di Credito', to: 'Esselunga', amount: -124.50, tags: ['spesa'] },
  { id: 4, date: '20/02/2026', type: 'Giroconto', category: 'Risparmio', subcategory: 'Versamento', causal: 'Giroconto Risparmio', from: 'CC Unicredit', to: 'CD Santander', amount: -500.00, tags: ['risparmio'] },
  { id: 5, date: '15/02/2026', type: 'Uscita', category: 'Trasporti', subcategory: 'Carburante', causal: 'Benzina', from: 'Carta di Credito', to: 'Eni Station', amount: -50.00, tags: ['auto'] },
];

export default function Operazioni() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto pb-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Operazioni</h2>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#2A2A2A] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            <Download size={16} /> Export CSV
          </button>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
            <Plus size={16} /> Nuova Operazione
          </button>
        </div>
      </div>

      <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-white/5 flex flex-wrap gap-4 justify-between items-center bg-[#141414]">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="Ricerca globale (causale, note, controparte...)" 
                className="bg-[#1A1A1A] border border-white/10 text-sm text-white rounded-lg pl-9 pr-4 py-2 w-full focus:outline-none focus:border-white/20"
              />
            </div>
            
            <div className="relative">
              <select className="bg-[#1A1A1A] border border-white/10 text-sm text-white rounded-lg pl-4 pr-8 py-2 appearance-none focus:outline-none focus:border-white/20">
                <option>Mese in corso</option>
                <option>Mese precedente</option>
                <option>Trimestre in corso</option>
                <option>Anno in corso</option>
                <option>Range personalizzato...</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium border ${
              showFilters ? 'bg-white/10 border-white/20 text-white' : 'bg-[#1A1A1A] border-white/10 text-gray-300 hover:bg-[#2A2A2A]'
            }`}
          >
            <Filter size={16} /> Filtri Avanzati
          </button>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="p-4 border-b border-white/5 bg-[#1A1A1A] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Tipo Movimento</label>
              <select className="w-full bg-[#141414] border border-white/10 text-sm text-white rounded-lg px-3 py-2 focus:outline-none focus:border-white/20">
                <option value="">Tutti</option>
                <option value="entrata">Entrata</option>
                <option value="uscita">Uscita</option>
                <option value="giroconto">Giroconto</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Categoria</label>
              <select className="w-full bg-[#141414] border border-white/10 text-sm text-white rounded-lg px-3 py-2 focus:outline-none focus:border-white/20">
                <option value="">Tutte</option>
                <option value="spese_fisse">Spese Fisse</option>
                <option value="alimentari">Alimentari</option>
                <option value="trasporti">Trasporti</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Conto (Da/A)</label>
              <select className="w-full bg-[#141414] border border-white/10 text-sm text-white rounded-lg px-3 py-2 focus:outline-none focus:border-white/20">
                <option value="">Tutti</option>
                <option value="1">CC Unicredit</option>
                <option value="2">Carta di Credito</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">Tag</label>
              <div className="relative">
                <TagIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                <input 
                  type="text" 
                  placeholder="Cerca tag..." 
                  className="w-full bg-[#141414] border border-white/10 text-sm text-white rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:border-white/20"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium border border-white/10">
                Applica Filtri
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-[#141414]">
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Categoria</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Causale</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Da / A</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Importo</th>
                <th className="py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Azioni</th>
              </tr>
            </thead>
            <tbody>
              {operations.map((op) => (
                <tr key={op.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-3 px-4 text-sm text-gray-300">{op.date}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      op.type === 'Entrata' ? 'bg-green-500/10 text-green-500' : 
                      op.type === 'Uscita' ? 'bg-red-500/10 text-red-500' : 
                      'bg-blue-500/10 text-blue-500'
                    }`}>
                      {op.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm font-medium text-white">{op.category}</div>
                    <div className="text-xs text-gray-500">{op.subcategory}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-sm text-gray-300">{op.causal}</div>
                    <div className="flex gap-1 mt-1">
                      {op.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-1.5 py-0.5 rounded bg-white/5 text-gray-400 text-[10px]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-xs text-gray-500">Da: <span className="text-gray-300">{op.from}</span></div>
                    <div className="text-xs text-gray-500">A: <span className="text-gray-300">{op.to}</span></div>
                  </td>
                  <td className={`py-3 px-4 text-sm font-bold text-right ${op.amount > 0 ? 'text-green-500' : 'text-white'}`}>
                    {op.amount > 0 ? '+' : ''}€ {op.amount.toLocaleString('it-IT', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-400">
          <div>Mostrando 1-5 di 3514 operazioni</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded hover:bg-white/10 disabled:opacity-50" disabled>Precedente</button>
            <button className="px-3 py-1 rounded bg-white/10 text-white">1</button>
            <button className="px-3 py-1 rounded hover:bg-white/10">2</button>
            <button className="px-3 py-1 rounded hover:bg-white/10">3</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 rounded hover:bg-white/10">703</button>
            <button className="px-3 py-1 rounded hover:bg-white/10">Successiva</button>
          </div>
        </div>
      </div>
    </div>
  );
}
