import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-60 bg-slate-100 border-r border-slate-300 flex flex-col justify-between shrink-0">
      <div>
        <div className="p-4 border-b border-slate-300">
          <h1 className="text-purple-700 font-bold text-lg tracking-wide flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-purple-600 rounded-full"></span>
            SST
          </h1>
        </div>

        <div className="p-3">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">
            Menu
          </p>
          <nav className="space-y-1.5">
            <button className="w-full text-left px-3 py-2 rounded-md bg-purple-100 text-purple-950 border-l-2 border-purple-600 font-medium flex justify-between items-center text-xs shadow-xs">
              <span>Nursing</span>
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md text-slate-700 hover:bg-slate-200/60 hover:text-slate-900 text-xs transition">
              Onboarding Exams (RH)
            </button>
          </nav>
        </div>
      </div>

      <div className="p-3 border-t border-slate-300 flex justify-between text-[10px] text-slate-500">
        <span className="w-full text-center px-3 py-2 text-slate-700 font-medium flex justify-center items-center text-xs hover:bg-slate-200/60 rounded-md transition cursor-pointer">
          Settings
        </span>
      </div>
    </aside>
  );
}