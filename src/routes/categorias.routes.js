import { Router } from 'express';
import { obtenerCategorias } from '../controllers/categorias.controller.js';

const router = Router();

router.get('/categorias', obtenerCategorias);

// Rutas
export default router;