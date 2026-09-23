import React from 'react';

export default function Header() {
  return (
    <header className="h-14 bg-slate-100 border-b border-slate-300 flex items-center justify-between px-6 shrink-0">
      <div className="relative w-80">
        <input 
          type="text" 
          placeholder="Buscar por ID, Nombre..." 
          className="w-full bg-slate-200/60 border border-slate-300 rounded-md px-3 py-1.5 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-purple-600"
        />
        <span className="absolute right-2 top-1.5 text-[10px] bg-slate-200 border border-slate-300 px-1 rounded text-slate-600 font-mono font-bold">⌘</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3 border-l border-slate-300 pl-4">
          <div className="text-right">
            <p className="text-xs font-semibold text-slate-900">Lic. Marly</p>
            <p className="text-[10px] text-slate-600 font-medium">Coord. Salud Ocupacional</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-200 border border-purple-300 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-bold text-purple-800">MR</span>
          </div>
        </div>
      </div>
    </header>
  );
}