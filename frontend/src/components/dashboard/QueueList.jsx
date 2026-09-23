import React from 'react';

export default function QueueList() {
  return (
    <div className="col-span-3 bg-slate-100 border border-slate-300 rounded-xl p-4 space-y-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-slate-900 text-xs tracking-wider uppercase">LISTA DE ESPERA</h2>
        <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full border border-purple-200">
          4 Pacientes
        </span>
      </div>

      <input 
        type="text" 
        placeholder="Buscar por Ticket..." 
        className="w-full bg-slate-200/60 border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900 placeholder-slate-500 focus:outline-none focus:border-purple-500 font-medium"
      />

      <div className="grid grid-cols-3 gap-1 bg-slate-200/80 p-1 rounded-lg text-[10px] text-center font-bold text-slate-600">
        <button className="bg-white text-purple-700 py-1 rounded-md shadow-xs">Todos (4)</button>
        <button className="hover:text-slate-900 py-1">Prioridad (1)</button>
        <button className="hover:text-slate-900 py-1">En Espera (3)</button>
      </div>

      <div className="space-y-2.5">
        {/* Ticket Activo */}
        <div className="bg-white border-2 border-purple-500 rounded-xl p-3 space-y-2 shadow-sm cursor-pointer">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-extrabold text-purple-600 tracking-wider">OTD-SST-PAC-0047</span>
            <span className="text-[9px] bg-purple-100 text-purple-700 font-bold px-1.5 py-0.5 rounded-md">EN CURSO</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-xs shrink-0">
              CM
            </div>
            <div>
              <p className="font-bold text-slate-900 text-xs">Carlos Mendoza Vega</p>
              <p className="text-[10px] text-slate-600 font-medium">Operaciones</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-slate-200 text-[10px]">
            <span className="text-slate-600 font-medium">Cefalea post-impacto</span>
            <span className="bg-purple-50 text-purple-600 font-bold px-1.5 py-0.5 rounded-md border border-purple-200">Moderado (T2)</span>
          </div>
        </div>

        {/* Ticket 2 */}
        <div className="bg-slate-200/50 border border-slate-300 rounded-xl p-3 space-y-2 hover:border-slate-400 transition cursor-pointer">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500">OTD-SST-PAC-0050</span>
            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-md border border-emerald-200">APTO</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-300 text-slate-700 rounded-lg flex items-center justify-center font-bold text-xs shrink-0">
              LV
            </div>
            <div>
              <p className="font-bold text-slate-800 text-xs">Lucia Valdivia</p>
              <p className="text-[10px] text-slate-500 font-medium">Operaciones</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-slate-300/60 text-[10px]">
            <span className="text-slate-500 font-medium">Ergonomía Lumbar</span>
            <span className="text-slate-600 font-bold">Leve (T3)</span>
          </div>
        </div>

        {/* Ticket 3 */}
        <div className="bg-slate-200/50 border border-slate-300 rounded-xl p-3 space-y-2 hover:border-slate-400 transition cursor-pointer">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500">OTD-SST-PAC-0052</span>
            <span className="text-[9px] bg-rose-100 text-rose-800 font-bold px-1.5 py-0.5 rounded-md border border-rose-200">NO APTO</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-slate-300 text-slate-700 rounded-lg flex items-center justify-center font-bold text-xs shrink-0">
              JA
            </div>
            <div>
              <p className="font-bold text-slate-800 text-xs">Jorge Arismendi</p>
              <p className="text-[10px] text-slate-500 font-medium">Mantenimiento</p>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-slate-300/60 text-[10px]">
            <span className="text-slate-500 font-medium">Laceración mano izq</span>
            <span className="text-rose-700 font-bold bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded-md">Urgente (T1)</span>
          </div>
        </div>
      </div>

      <div className="pt-2 text-center">
        <span className="text-[10px] text-slate-500 font-semibold flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Sincronización en tiempo real
        </span>
      </div>
    </div>
  );
}