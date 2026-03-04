import React, { useState } from 'react';
import { Landmark, CreditCard, PiggyBank, ArrowUpRight, ArrowDownRight, Plus, Search, Filter } from 'lucide-react';

const accounts = [
  { id: 1, name: 'CC Unicredit', type: 'Conto Corrente', balance: 12450.00, income: 45000.00, expense: 32550.00, interest: 0, stampDuty: 34.20, opsCount: 145, lastOp: '01/03/2026', icon: Landmark, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: 2, name: 'Carta di Credito', type: 'Carta di Credito', balance: -1250.00, income: 0, expense: 15000.00, interest: 0, stampDuty: 0, opsCount: 89, lastOp: '28/02/2026', icon: CreditCard, color: 'text-red-500', bg: 'bg-red-500/10' },
  { id: 3, name: 'CD Santander', type: 'Conto Deposito', balance: 25000.00, income: 25000.00, expense: 0, interest: 450.00, stampDuty: 50.00, opsCount: 12, lastOp: '15/01/2026', icon: PiggyBank, color: 'text-green-500', bg: 'bg-green-500/10' },
  { id: 4, name: 'CD Rendimax', type: 'Conto Deposito', balance: 2418.88, income: 2000.00, expense: 0, interest: 420.88, stampDuty: 2.00, opsCount: 8, lastOp: '10/02/2026', icon: PiggyBank, color: 'text-green-500', bg: 'bg-green-500/10' },
];

export default function Conti() {
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto pb-12">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Gestione Conti</h2>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
          <Plus size={16} /> Nuovo Conto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {accounts.map(account => (
          <div 
            key={account.id} 
            className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-colors cursor-pointer"
            onClick={() => setSelectedAccount(account.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${account.bg}`}>
                <account.icon className={account.color} size={24} />
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400 font-medium">{account.type}</div>
                <div className="text-sm font-semibold text-white mt-1">{account.name}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-xs text-gray-500 mb-1">Saldo Attuale</div>
              <div className={`text-2xl font-bold ${account.balance >= 0 ? 'text-white' : 'text-red-500'}`}>
                € {account.balance.toLocaleString('it-IT', { minimumFractionDigits: 2 })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-white/5">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Entrate Totali</div>
                <div className="text-sm font-medium text-green-500 flex items-center">
                  <ArrowUpRight size={12} className="mr-1" /> € {account.income.toLocaleString('it-IT')}
                </div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Uscite Totali</div>
                <div className="text-sm font-medium text-red-500 flex items-center">
                  <ArrowDownRight size={12} className="mr-1" /> € {account.expense.toLocaleString('it-IT')}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Interessi / Bollo</div>
                <div className="text-xs font-medium text-gray-300">
                  <span className="text-green-500">+€{account.interest}</span> / <span className="text-red-500">-€{account.stampDuty}</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Operazioni</div>
                <div className="text-xs font-medium text-gray-300">
                  {account.opsCount} (Ultima: {account.lastOp})
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedAccount && (
        <div className="mt-8 bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#141414]">
            <h3 className="text-lg font-medium text-white">
              Dettaglio {accounts.find(a => a.id === selectedAccount)?.name}
            </h3>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input 
                  type="text" 
                  placeholder="Cerca operazioni..." 
                  className="bg-[#1A1A1A] border border-white/10 text-sm text-white rounded-lg pl-9 pr-4 py-2 w-64 focus:outline-none focus:border-white/20"
                />
              </div>
              <button className="flex items-center gap-2 bg-[#2A2A2A] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                <Filter size={16} /> Filtri Avanzati
              </button>
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                <Plus size={16} /> Nuova Operazione
              </button>
            </div>
          </div>
          
          <div className="p-6 text-center text-gray-500 py-12">
            Seleziona i filtri o aggiungi una nuova operazione inline.
            <br/>
            (Tabella operazioni da implementare)
          </div>
        </div>
      )}
    </div>
  );
}
