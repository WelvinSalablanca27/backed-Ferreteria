import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarClientes, eliminarCliente } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', obtenerClientes);
router.get('/cliente/:id_cliente', obtenerCliente);

// Ruta para registrar una nueva Categoría
router.post('/registrarClientes', registrarClientes);

//Rutas
router.delete('/eliminarCliente/:id_cliente', eliminarCliente);

export default router;