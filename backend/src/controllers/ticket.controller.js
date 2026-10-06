import { supabase } from '../config/supabase.js';

/**
 * Obtener la lista de espera activa de la tabla tickets
 */
export const getTicketsEspera = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('tickets')
      .select('*')
      .neq('estado', 'FINALIZADO')
      .order('created_at', { ascending: true });

    if (error) throw error;

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error al obtener lista de espera:', error.message);
    return res.status(500).json({ error: 'Error interno del servidor al consultar tickets' });
  }
};


/**
 * Creacion de un nuevo ticket (PAC o ING)
 */
export const createTicket = async (req, res) => {
  try {
    const { tipoAtencion, documento, nombre, area, motivo } = req.body;

    // Validación básica de campos requeridos
    if (!tipoAtencion || !documento || !nombre) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const { data, error } = await supabase
      .from('tickets')
      .insert([
        {
          tipo_atencion: tipoAtencion, // 'PAC' o 'ING'
          documento_identidad: documento,
          nombre_persona: nombre,
          area_o_cargo: area,
          motivo_consulta: motivo,
        },
      ])
      .select();

    if (error) throw error;

    // Retorna el registro recién insertado con el código generado por el trigger 
    return res.status(201).json(data[0]);
  } catch (error) {
    console.error('Error al crear ticket:', error.message);
    return res.status(500).json({ error: 'Error al registrar el ticket en la base de datos' });
  }
};