const {response} = require('express')

const crearEvento = (req, res = response) =>{

    //verificar que tenga el evento
    console.log(req.body)

    return res.status(201).json({
        ok:true,
        msg:'crear Event'
    })
}

const getEvento = (req, res = response) => {

    res.json({
        ok:true,
        msg:'get events'
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

