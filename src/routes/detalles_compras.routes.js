import { Router } from 'express';
import { obtenerDetallesCompras } from '../controllers/detalles_compras.controller.js';

const router = Router();

router.get('/detallescompras', obtenerDetallesCompras);

// Rutas
export default router;