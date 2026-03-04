import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Conti from './components/Conti';
import Operazioni from './components/Operazioni';
import Pensione from './components/Pensione';
import Impostazioni from './components/Impostazioni';

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-[#141414] text-white font-sans overflow-hidden">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-[#141414]">
          {currentTab === 'dashboard' && <Dashboard />}
          {currentTab === 'conti' && <Conti />}
          {currentTab === 'operazioni' && <Operazioni />}
          {currentTab === 'investimenti' && <div className="text-white">Investimenti Page (To be implemented)</div>}
          {currentTab === 'pensione' && <Pensione />}
          {currentTab === 'report' && <div className="text-white">Report Page (To be implemented)</div>}
          {currentTab === 'impostazioni' && <Impostazioni />}
        </main>
      </div>
    </div>
  );
}
