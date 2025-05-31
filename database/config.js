const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_CNN)
            .then(() => console.log('DB Connected!'));

    } catch (error) {
        console.log(error)
        throw new Error('Error para inicializar base de datos')
    }
}


module.exports = {dbConnection}







