import React from 'react';

export default function PatientDetails() {
  return (
    <div className="col-span-6 space-y-4">
      {/* Datos del Paciente */}
      <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 space-y-3 shadow-sm">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-sm">
              CM
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-sm">Carlos Mendoza Vega</h2>
              <p className="text-[10px] text-slate-600 font-semibold">
                34 años - Operaciones - Grupo sanguíneo: <span className="font-bold text-slate-900">O Rh(+)</span>
              </p>
              <p className="text-[9px] text-slate-400 font-mono">OTD-SST-PAC-0047</p>
            </div>
          </div>
          <span className="text-[10px] bg-sky-100 text-sky-900 font-bold px-2 py-0.5 rounded-md border border-sky-200">
            EN CURSO
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg text-[10px]">
          <div>
            <span className="text-slate-500 font-semibold">Contacto emergencia: </span>
            <span className="font-bold text-slate-800">Mariana Mendoza</span> <span className="text-slate-500">(Hermana)</span>
          </div>
          <div className="text-right">
            <span className="text-slate-500 font-semibold">Ingreso: </span>
            <span className="font-bold text-slate-800">10:42 AM (14 Oct, 2024)</span>
          </div>
        </div>
      </div>

      {/* Alerta Médica */}
      <div className="bg-sky-50 border border-sky-300 rounded-xl p-3 flex items-start gap-3 shadow-xs">
        <span className="text-sky-600 text-base font-bold">⚠️</span>
        <div className="text-[10px]">
          <p className="font-extrabold text-sky-950 uppercase tracking-wider">ALERTA: ALERGIAS DOCUMENTADAS</p>
          <p className="text-sky-900 font-medium mt-0.5">
            Colaborador presenta hipersensibilidad severa a Penicilina y AINES (Metamizol / Ketorolaco). Prohibida administración sin autorización médica formal.
          </p>
        </div>
      </div>

      {/* Signos Vitales */}
      <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 space-y-3 shadow-sm">
        <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase">SIGNOS VITALES</h3>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg">
            <p className="text-[9px] font-bold text-slate-500 uppercase">P. ARTERIAL</p>
            <p className="text-xs font-extrabold text-slate-900 my-0.5">135/85 <span className="text-[9px] font-normal text-slate-500">mmHg</span></p>
            <span className="text-[8px] bg-amber-200 text-amber-950 font-black px-1.5 py-0.5 rounded-md border border-amber-300">Pre-HTA leve</span>
          </div>

          <div className="bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg">
            <p className="text-[9px] font-bold text-slate-500 uppercase">TEMPERATURA</p>
            <p className="text-xs font-extrabold text-slate-900 my-0.5">36.8 <span className="text-[9px] font-normal text-slate-500">°C</span></p>
            <span className="text-[8px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-md border border-emerald-200">Normal</span>
          </div>

          <div className="bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg">
            <p className="text-[9px] font-bold text-slate-500 uppercase">FREC. CARDÍACA</p>
            <p className="text-xs font-extrabold text-slate-900 my-0.5">78 <span className="text-[9px] font-normal text-slate-500">lpm</span></p>
            <span className="text-[8px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-md border border-emerald-200">Normal</span>
          </div>

          <div className="bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg">
            <p className="text-[9px] font-bold text-slate-500 uppercase">SAT. OXÍGENO</p>
            <p className="text-xs font-extrabold text-slate-900 my-0.5">98 <span className="text-[9px] font-normal text-slate-500">%</span></p>
            <span className="text-[8px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-md border border-emerald-200">Normal</span>
          </div>
        </div>
      </div>

      {/* Escala de Dolor */}
      <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 space-y-3 shadow-sm">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase">NIVEL DE DOLOR REPORTADO</h3>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-purple-600 text-white font-extrabold px-2 py-0.5 rounded-md">6 / 10</span>
            <span className="text-xs font-bold text-purple-600">Dolor Moderado</span>
          </div>
        </div>

        <div className="space-y-1.5 py-2">
          <input type="range" min="1" max="10" defaultValue="6" className="w-full accent-purple-500 h-2 bg-slate-300 rounded-lg cursor-pointer" />
          <div className="flex justify-between text-[9px] font-bold text-slate-500 px-1">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span className="text-purple-600 font-black">6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          </div>
        </div>

        <div className="bg-slate-200/60 border border-slate-300 p-2.5 rounded-lg text-[10px] text-slate-700 italic font-medium">
          "Dolor Moderado: Interfiere con tareas manuales pesadas, cefalea opresiva-temporal, tras golpe accidental."
        </div>
      </div>

      {/* Nota de Enfermería */}
      <div className="bg-slate-100 border border-slate-300 rounded-xl p-4 space-y-2 shadow-sm">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-slate-900 text-xs tracking-wider uppercase">NOTA DE ENFERMERÍA</h3>
          <span className="text-[10px] text-slate-500 font-semibold">Lic. Marly</span>
        </div>
        <textarea 
          rows="3" 
          defaultValue="Colaborador refiere golpe accidental en región temporal izquierda tras impacto leve en cafetería, sin pérdida de conciencia ni signos de alarma..."
          className="w-full bg-slate-200/60 border border-slate-300 rounded-lg p-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-500 font-medium resize-none"
        ></textarea>
      </div>
    </div>
  );
}