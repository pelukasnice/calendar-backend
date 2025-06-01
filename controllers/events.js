const { response } = require('express')
const Evento = require('../models/Evento')

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body);

    try {

        evento.user = req.uid;
        const eventoGuardado = await evento.save()

        res.status(201).json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'hable con el admin'
        });
    }


}

const getEvento = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'get events'
    })
}


const actualizarEvento = (req, res = response) => {


    return res.status(201).json({
        ok: true,
        msg: 'actualizarEvento'
    })
}


const eliminarEvento = (req, res = response) => {
    return res.status(201).json({
        ok: true,
        msg: 'borrarEvento'
    })
}



module.exports = {
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}

