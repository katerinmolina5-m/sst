import React from 'react';

export default function ActionPanel() {
  return (
    <div className="col-span-3 space-y-4">
      {/* Dispensación */}
      <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 space-y-3 shadow-sm">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase">DISPENSACIÓN</h3>
          <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded-md border border-slate-300">
            2 Indicaciones
          </span>
        </div>

        <div className="space-y-2">
          <div className="bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg space-y-1">
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 font-bold text-slate-900 text-xs cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-purple-500 rounded" />
                Crioterapia Local
              </label>
              <span className="text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded-md font-bold">Ejecutado</span>
            </div>
            <p className="text-[10px] text-slate-600 pl-5 font-medium">Compresa fría en la zona de dolor por 15 min</p>
          </div>

          <div className="bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg space-y-1">
            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 font-bold text-slate-900 text-xs cursor-pointer">
                <input type="checkbox" defaultChecked className="accent-purple-500 rounded" />
                Reposo Monitorizado
              </label>
              <span className="text-[9px] bg-sky-100 text-sky-800 border border-sky-200 px-1.5 py-0.5 rounded-md font-bold">En Curso</span>
            </div>
            <p className="text-[10px] text-slate-600 pl-5 font-medium">Reposo en camilla por 20 min</p>
          </div>
        </div>
      </div>

      {/* MEDIDA A TOMAR */}
      <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 space-y-3 shadow-sm">
        <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase">MEDIDA A TOMAR</h3>

        <div className="space-y-2">
          <label className="flex items-start gap-2.5 bg-purple-50 border-2 border-purple-500 p-3 rounded-xl cursor-pointer">
            <input type="radio" name="medida" defaultChecked className="accent-purple-500 mt-0.5" />
            <div>
              <p className="font-bold text-slate-900 text-xs">Alta con Retorno a Labor</p>
              <p className="text-[10px] text-slate-600 font-medium">Con restricción temporal de carga pesada</p>
            </div>
          </label>

          <label className="flex items-start gap-2.5 bg-slate-200/50 border border-slate-300 p-3 rounded-xl cursor-pointer hover:border-slate-400 transition">
            <input type="radio" name="medida" className="accent-purple-500 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800 text-xs">Reposo en casa</p>
              <p className="text-[10px] text-slate-600 font-medium">Descanso de 24 horas sugerido</p>
            </div>
          </label>

          <label className="flex items-start gap-2.5 bg-slate-200/50 border border-slate-300 p-3 rounded-xl cursor-pointer hover:border-slate-400 transition">
            <input type="radio" name="medida" className="accent-purple-500 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800 text-xs">Derivación EPS / Servicio de urgencias</p>
              <p className="text-[10px] text-slate-600 font-medium">Traslado a centro médico</p>
            </div>
          </label>
        </div>
      </div>

      {/* Botones de Acción */}
      <div className="space-y-2">
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl text-xs tracking-wider shadow-sm transition-all">
          GUARDAR Y CERRAR TICKET
        </button>
      </div>
    </div>
  );
}