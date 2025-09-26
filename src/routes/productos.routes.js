import { Router } from 'express';
import { obtenerProductos, obtenerProducto, registrarCompra, eliminarProducto } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', obtenerProductos);


// Rutas
router.get('/productos/:id_producto', obtenerProducto);

// Ruta para registrar una nueva Empleado
router.post('/registrarCompra', registrarCompra);

//Rutas
router.delete('/eliminarProducto/:id_producto', eliminarProducto);


export default router;