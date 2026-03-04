import React from 'react';
import { Search, Settings, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-[#141414] border-b border-white/5">
      <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-[#1A1A1A] border border-white/10 text-sm text-white rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-white/20 transition-colors"
          />
        </div>
        
        <button className="text-gray-400 hover:text-white transition-colors">
          <Settings size={20} />
        </button>
        
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#141414]"></span>
        </button>
        
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
          <img 
            src="https://picsum.photos/seed/user/100/100" 
            alt="User Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
