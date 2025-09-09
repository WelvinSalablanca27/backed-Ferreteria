import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM categorias');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una categoría por su ID
export const obtenerCategoria = async (req, res) => {
try {
const id_categoria = req.params.id_categoria;
const [result] = await pool.query('SELECT * FROM categorias WHERE id_categoria= ?', [req.params.id_categoria])
if (result.length <= 0) {
return res.status(404).json({
mensaje: `Error al leer los datos. ID ${id_categoria} no encontrado.`
});
}
res.json(result[0]);
} catch (error) {
return res.status(500).json({
mensaje: 'Ha ocurrido un error al leer los datos de las categorias.'
});
}
};