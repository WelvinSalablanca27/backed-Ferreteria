import { Router } from 'express';
import { obtenerClientes } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', obtenerClientes);

// Rutas
export default router;