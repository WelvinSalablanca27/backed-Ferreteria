import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerCompras = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM compras');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una compra por su ID
export const obtenercompra = async (req, res) => {
  try {
    const id_compra = req.params.id_compra;
    const [result] = await pool.query('SELECT * FROM compras WHERE id_compra= ?', [req.params.id_compra])
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_compra} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las compra.'
    });
  }
};


// Registrar una nueva Compra
export const registrarCompra = async (req, res) => {
  try {
    const { nombre_Compras, id_producto_Compras, cantidad_Compras, precio_unitario_Compras } = req.body;
    const [result] = await pool.query(
      'INSERT INTO Compra (nombre_Compras, id_producto_Compras, cantidad_Compras, precio_unitario_Compras) VALUES (?, ?, ?, ?)',
      [nombre_Compras, id_producto_Compras, cantidad_Compras, precio_unitario_Compras ]
    );
    res.status(201).json({ id_compra: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la Compras.',
      error: error
    });
  }
};