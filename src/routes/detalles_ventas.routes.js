import { Router } from 'express';
import { obtenerDetallesVentas } from '../controllers/detalles_ventas.controller.js';

const router = Router();

router.get('/detallesventas', obtenerDetallesVentas);

// Rutas
export default router;