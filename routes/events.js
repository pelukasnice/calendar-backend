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
const { validarCampos } = require('../middlewares/validar-campos')
const { check } = require('express-validator');
const { isDAte } = require('../helpers/isDate');

router.use( validarJWT )

//Obtener Eventos
router.get('/', getEvento);

//Crear un nuevo Evento
router.post('/',[
    check('title','El titulo es obligatorio',).not().isEmpty(),
    check('start','Fecha de inicio es obligatoria',).custom(isDAte),
    check('end','Fecha de finalizacion es obligatoria',).custom(isDAte),
    validarCampos
], crearEvento);

//Actualizar Evento
router.put('/:id',[
    check('title','El titulo es obligatorio',).not().isEmpty(),
    check('start','Fecha de inicio es obligatoria',).custom(isDAte),
    check('end','Fecha de finalizacion es obligatoria',).custom(isDAte),
    validarCampos
], actualizarEvento);

//Borrrar evento
router.delete('/:id', eliminarEvento)



module.exports = router;