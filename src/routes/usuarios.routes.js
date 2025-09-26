import { Router } from 'express';
import { obtenerUsuarios, obtenerUsuario, registrarUsuario, eliminarUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

router.get('/usuarios', obtenerUsuarios);

// Rutas
router.get('/usuarios/:id_usuario', obtenerUsuario);

// Ruta para registrar una nueva Empleado
router.post('/registrarUsuario', registrarUsuario);

//Rutas
router.delete('/eliminarUsuario/:id_usuario', eliminarUsuario);

export default router;