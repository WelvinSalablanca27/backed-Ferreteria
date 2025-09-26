import { Router } from 'express';
import { obtenerCompras, obtenercompra, registrarCompra, eliminarCompra } from '../controllers/compras.controller.js';

const router = Router();

router.get('/compras', obtenerCompras);

// Rutas
router.get('/compras/:id_compra', obtenercompra);

// Ruta para registrar una nueva Compras
router.post('/registrarCompra', registrarCompra);

//Rutas
router.delete('/eliminarCompra/:id_compra', eliminarCompra);

export default router;