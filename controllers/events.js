const {response} = require('express')


const getEvento = (req, res = response) => {

    res.json({
        ok:true,
        msg:'get events'
    })
}

const crearEvento = (req, res = response) =>{


    return res.status(201).json({
        ok:true,
        msg:'crear Event'
    })
}

const actualizarEvento = (req, res = response) => {


    return res.status(201).json({
        ok:true,
        msg:'actualizarEvento'
    })
}


const eliminarEvento = (req, res = response) => {
    return res.status(201).json({
        ok:true,
        msg:'borrarEvento'
    })
}



module.exports ={
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}

