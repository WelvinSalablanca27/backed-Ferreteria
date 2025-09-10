import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra } from '../controllers/compras.controller.js';

const router = Router();

router.get('/compras', obtenerCompras);

// Rutas
router.get('/compras/:id_compra', obtenerCompra);

// Ruta para registrar una nueva Categoría
router.post('/registrarCompra', registrarCompra);

// Rutas
export default router;