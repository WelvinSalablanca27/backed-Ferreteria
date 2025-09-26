import { Router } from 'express';
import { obtenerDetallesCompras, obtenerDetallesCompra, registrarDetalles_compra, eliminarDetalles_compras } from '../controllers/detalles_compras.controller.js';

const router = Router();

router.get('/detallescompras', obtenerDetallesCompras);


// Rutas
router.get('/detallescompras/:id_detalle_compra', obtenerDetallesCompra);

// Ruta para registrar una nueva oDetallesCompras
router.post('/registrarDetalles_compra', registrarDetalles_compra);

//Rutas
router.delete('/eliminarDetalles_compras/:id_detalle_compra', eliminarDetalles_compras);

export default router;