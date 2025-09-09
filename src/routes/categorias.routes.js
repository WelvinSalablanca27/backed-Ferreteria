import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria} from '../controllers/categorias.controller.js';

const router = Router();

router.get('/categorias', obtenerCategorias);
// Rutas
router.get('/categoria/:id_categoria', obtenerCategoria);
export default router;