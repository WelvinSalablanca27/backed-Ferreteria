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

// Registrar una nueva Clientes
export const registrarClientes = async (req, res) => {
  try {
    const { primer_nombre_Clientes , segundo_nombre_Clientes, primer_apellido_Clientes, segundo_apellido_Clientes, celular_Clientes, direccion_Clientes, cedula_Clientes } = req.body;
    const [result] = await pool.query(
      'INSERT INTO Clientes (primer_nombre_Clientes , segundo_nombre_Clientes, primer_apellido_Clientes, segundo_apellido_Clientes, celular_Clientes, direccion_Clientes, cedula_Clientes ) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [primer_nombre_Clientes , segundo_nombre_Clientes, primer_apellido_Clientes, segundo_apellido_Clientes, celular_Clientes, direccion_Clientes, cedula_Clientes]
    );
    res.status(201).json({ id_cliente: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar la Clientes.',
      error: error
    });
  }
  };

  
// Eliminar una cliente por su ID 
export const eliminarCliente = async (req, res) =>  {
  try {
    const id_cliente = req.params.id_cliente;
    const [result] = await pool.query('DELETE FROM cliente WHERE id_cliente= ?', [id_cliente]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la cliente. ID ${id_cliente} no fue encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `La cliente con ID ${id_cliente} fue eliminada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la cliente.',
      error: error
    });
  }
};