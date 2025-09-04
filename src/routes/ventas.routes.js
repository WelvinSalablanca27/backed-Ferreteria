import { Router } from 'express';
import { obtenerVentas } from '../controllers/ventas.controller.js';

const router = Router();

router.get('/ventas', obtenerVentas);

// Rutas
export default router;