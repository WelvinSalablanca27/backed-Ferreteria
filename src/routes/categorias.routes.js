import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria} from '../controllers/categorias.controller.js';

const router = Router();

router.get('/categorias', obtenerCategorias);
// Rutas
router.get('/categoria/:id_categoria', obtenerCategoria);

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarCategoria);
//Rutas
export default router;