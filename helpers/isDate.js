const moment = require('moment')

const isDAte = ( value ) => {

    if ( !value) {
        return false;
    }

    const fecha = moment( value );
    if ( fecha.isValid()){
        return true;
    }else{
        return false;
    }
}



module.exports = {
    isDAte,
}













