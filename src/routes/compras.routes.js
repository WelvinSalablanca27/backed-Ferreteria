import { Router } from 'express';
import { obtenerCompras } from '../controllers/compras.controller.js';

const router = Router();

router.get('/compras', obtenerCompras);

// Rutas
export default router;