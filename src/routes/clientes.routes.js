import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarClientes } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', obtenerClientes);
router.get('/categoria/:id_cliente', obtenerCliente);

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarClientes);
// Rutas
export default router;