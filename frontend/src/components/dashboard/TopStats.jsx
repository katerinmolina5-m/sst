import React from 'react';

export default function TopStats() {
  return (
    <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
        <h1 className="font-bold text-slate-900 text-sm tracking-wide">
          Enfermería & Primeros Auxilios
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-slate-200/70 border border-slate-300 px-3 py-1.5 rounded-lg text-center">
          <p className="text-[9px] font-bold text-slate-600 uppercase tracking-wider">En Observación</p>
          <p className="text-xs font-extrabold text-slate-900">2</p>
        </div>

        <div className="bg-slate-200/70 border border-slate-300 px-3 py-1.5 rounded-lg text-center">
          <p className="text-[9px] font-bold text-slate-600 uppercase tracking-wider">Derivados EPS</p>
          <p className="text-xs font-extrabold text-slate-900">1</p>
        </div>

        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-4 py-2 rounded-lg text-xs tracking-wide shadow-sm transition-all">
          + Nuevo Registro
        </button>
      </div>
    </div>
  );
}