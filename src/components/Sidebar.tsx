import React from 'react';
import { 
  Activity, 
  PieChart, 
  TrendingUp, 
  Briefcase, 
  Settings, 
  Clock, 
  FileText, 
  MessageSquare,
  EyeOff,
  ShoppingBag,
  List,
  DollarSign,
  Landmark,
  PiggyBank,
  BarChart3,
  ShieldCheck
} from 'lucide-react';

export default function Sidebar({ currentTab, setCurrentTab }: { currentTab: string, setCurrentTab: (tab: string) => void }) {
  return (
    <div className="flex h-full bg-[#1A1A1A] border-r border-white/5 w-64 flex-shrink-0">
      {/* Icon Column */}
      <div className="w-16 flex flex-col items-center py-6 border-r border-white/5 bg-[#141414]">
        <div className="mb-8">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-gray-400">
          <button onClick={() => setCurrentTab('dashboard')} className={`p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${currentTab === 'dashboard' ? 'text-white bg-white/10' : ''}`}>
            <Activity size={20} />
          </button>
          <button onClick={() => setCurrentTab('conti')} className={`p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${currentTab === 'conti' ? 'text-white bg-white/10' : ''}`}>
            <Landmark size={20} />
          </button>
          <button onClick={() => setCurrentTab('operazioni')} className={`p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${currentTab === 'operazioni' ? 'text-white bg-white/10' : ''}`}>
            <List size={20} />
          </button>
          <button onClick={() => setCurrentTab('investimenti')} className={`p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${currentTab === 'investimenti' ? 'text-white bg-white/10' : ''}`}>
            <TrendingUp size={20} />
          </button>
          <button onClick={() => setCurrentTab('pensione')} className={`p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${currentTab === 'pensione' ? 'text-white bg-white/10' : ''}`}>
            <ShieldCheck size={20} />
          </button>
          
          <div className="mt-8 flex flex-col gap-6">
            <button onClick={() => setCurrentTab('report')} className={`p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${currentTab === 'report' ? 'text-white bg-white/10' : ''}`}>
              <PieChart size={20} />
            </button>
            <button onClick={() => setCurrentTab('impostazioni')} className={`p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${currentTab === 'impostazioni' ? 'text-white bg-white/10' : ''}`}>
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Text Column */}
      <div className="flex-1 py-6 px-4 flex flex-col bg-[#1A1A1A]">
        <h1 className="text-xl font-semibold mb-8 px-2">Patrimonio</h1>
        
        <div className="flex gap-4 mb-6 px-2 text-sm font-medium">
          <button className="text-white border-b-2 border-white pb-1">Manager</button>
        </div>

        <nav className="flex flex-col gap-1">
          <NavItem label="Dashboard" active={currentTab === 'dashboard'} onClick={() => setCurrentTab('dashboard')} />
          <NavItem label="Conti" active={currentTab === 'conti'} onClick={() => setCurrentTab('conti')} />
          <NavItem label="Operazioni" active={currentTab === 'operazioni'} onClick={() => setCurrentTab('operazioni')} />
        </nav>

        <div className="mt-8">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2 flex items-center gap-2">
            <Briefcase size={14} /> PORTAFOGLIO
          </div>
          <nav className="flex flex-col gap-1 pl-4 border-l border-white/10 ml-2">
            <NavItem label="Investimenti" active={currentTab === 'investimenti'} onClick={() => setCurrentTab('investimenti')} />
            <NavItem label="Pensione" badge="New" active={currentTab === 'pensione'} onClick={() => setCurrentTab('pensione')} />
          </nav>
        </div>

        <div className="mt-8">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2 flex items-center gap-2">
            <Settings size={14} /> SISTEMA
          </div>
          <nav className="flex flex-col gap-1 pl-4 border-l border-white/10 ml-2">
            <NavItem label="Report" active={currentTab === 'report'} onClick={() => setCurrentTab('report')} />
            <NavItem label="Impostazioni" active={currentTab === 'impostazioni'} onClick={() => setCurrentTab('impostazioni')} />
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavItem({ label, badge, active, onClick }: { label: string; badge?: string; active?: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-between w-full px-2 py-2 text-sm rounded-lg transition-colors text-left ${active ? 'text-white bg-white/10 font-medium' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
    >
      <span>{label}</span>
      {badge && (
        <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded">
          {badge}
        </span>
      )}
    </button>
  );
}
