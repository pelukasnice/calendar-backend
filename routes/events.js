/*
Events Routes
/api/events

*/
const { Router } = require('express')
const router = Router();
const {validarJWT} = require('../middlewares/validar-jwt')
const {
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events')

router.use( validarJWT )

//Obtener Eventos
router.get('/', getEvento);

//Crear un nuevo Evento
router.post('/', crearEvento);

//Actualizar Evento
router.put('/:id', actualizarEvento);

//Borrrar evento
router.delete('/:id', eliminarEvento)



module.exports = router;