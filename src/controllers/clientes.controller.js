import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerClientes = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM clientes');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};


// Obtener una cliente por su ID
export const obtenerCliente = async (req, res) => {
  try {
    const id_cliente = req.params.id_cliente;
    const [result] = await pool.query('SELECT * FROM clientes WHERE id_cliente= ?', [req.params.id_cliente])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_cliente} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las clientes.'
    });
  }
};