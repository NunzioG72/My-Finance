import React, { useState } from 'react';
import { Settings, Layers, Globe, Monitor, Landmark, Tag, Users, Shield, Database } from 'lucide-react';

const tabs = [
  { id: 'pilastri', label: 'Pilastri', icon: Layers },
  { id: 'mercati', label: 'Mercati', icon: Globe },
  { id: 'piattaforme', label: 'Piattaforme', icon: Monitor },
  { id: 'categorie', label: 'Categorie', icon: Tag },
  { id: 'controparti', label: 'Controparti', icon: Users },
  { id: 'sicurezza', label: 'Sicurezza', icon: Shield },
  { id: 'database', label: 'Database', icon: Database },
];

export default function Impostazioni() {
  const [activeTab, setActiveTab] = useState('pilastri');

  return (
    <div className="flex flex-col gap-6 max-w-[1400px] mx-auto pb-12 h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Impostazioni di Sistema</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 h-[calc(100vh-180px)]">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 bg-[#1A1A1A] rounded-2xl border border-white/5 p-4 flex flex-col gap-2 overflow-y-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium w-full text-left ${
                activeTab === tab.id 
                  ? 'bg-white/10 text-white border border-white/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? 'text-green-500' : ''} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/5 bg-[#141414]">
            <h3 className="text-xl font-medium text-white flex items-center gap-2">
              {tabs.find(t => t.id === activeTab)?.icon({ size: 24, className: 'text-green-500' })}
              {tabs.find(t => t.id === activeTab)?.label}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Gestisci le configurazioni relative a {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}.
            </p>
          </div>

          <div className="p-6 overflow-y-auto flex-1">
            {activeTab === 'pilastri' && (
              <div className="space-y-6">
                <div className="flex justify-end">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                    + Nuovo Pilastro
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#141414] border border-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-medium">Liquidità</h4>
                      <div className="flex gap-2">
                        <button className="text-gray-500 hover:text-white"><Settings size={14} /></button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Conti correnti e carte per le spese quotidiane.</p>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400 flex items-center gap-2"><Landmark size={12}/> CC Unicredit</div>
                      <div className="text-xs text-gray-400 flex items-center gap-2"><Landmark size={12}/> Carta di Credito</div>
                    </div>
                  </div>

                  <div className="bg-[#141414] border border-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-medium">Risparmio</h4>
                      <div className="flex gap-2">
                        <button className="text-gray-500 hover:text-white"><Settings size={14} /></button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Conti deposito e fondi di emergenza.</p>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400 flex items-center gap-2"><Landmark size={12}/> CD Santander</div>
                      <div className="text-xs text-gray-400 flex items-center gap-2"><Landmark size={12}/> CD Rendimax</div>
                    </div>
                  </div>

                  <div className="bg-[#141414] border border-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-medium">Investimenti</h4>
                      <div className="flex gap-2">
                        <button className="text-gray-500 hover:text-white"><Settings size={14} /></button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Portafoglio titoli e ETF.</p>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400 flex items-center gap-2"><Landmark size={12}/> Directa SIM</div>
                    </div>
                  </div>

                  <div className="bg-[#141414] border border-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-white font-medium">Pensione</h4>
                      <div className="flex gap-2">
                        <button className="text-gray-500 hover:text-white"><Settings size={14} /></button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">Fondi pensione integrativi.</p>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-400 flex items-center gap-2"><Landmark size={12}/> SecondaPensione</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mercati' && (
              <div className="text-gray-500 text-center py-12">
                Gestione Mercati (Euronext, NYSE, NASDAQ, Borsa Italiana) da implementare.
              </div>
            )}

            {activeTab === 'piattaforme' && (
              <div className="text-gray-500 text-center py-12">
                Gestione Piattaforme (Directa, DeGiro, Moneyfarm) da implementare.
              </div>
            )}

            {activeTab === 'sicurezza' && (
              <div className="space-y-6">
                <div className="bg-[#141414] border border-white/5 rounded-xl p-6">
                  <h4 className="text-white font-medium mb-4">Opzioni di Sicurezza</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <div>
                        <div className="text-sm text-white font-medium">Protezione import.php</div>
                        <div className="text-xs text-gray-500">Richiedi password per l&apos;importazione Excel</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <div>
                        <div className="text-sm text-white font-medium">CSRF Token</div>
                        <div className="text-xs text-gray-500">Abilita protezione CSRF su tutti i form POST</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <div>
                        <div className="text-sm text-white font-medium">Rate Limiting Login</div>
                        <div className="text-xs text-gray-500">Blocca IP dopo 5 tentativi falliti</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {['categorie', 'controparti', 'database'].includes(activeTab) && (
              <div className="text-gray-500 text-center py-12">
                Sezione in fase di sviluppo.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
