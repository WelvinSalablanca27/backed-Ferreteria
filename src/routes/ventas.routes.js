import { Router } from 'express';
import { obtenerVentas, obtenerventa, registrarVenta, eliminarUsuario } from '../controllers/ventas.controller.js';

const router = Router();

router.get('/ventas', obtenerVentas);

// Rutas
router.get('/ventas/:id_venta', obtenerventa);

// Ruta para registrar una nueva venta
router.post('/registrarVenta', registrarVenta);

//Rutas
router.delete('/eliminarUsuario/:id_venta', eliminarUsuario);

export default router;