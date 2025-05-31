const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');

//console.log(process.env)

//  crear server

const app = express();

//base de datos
dbConnection()

//CORS
app.use(cors())
// directorio publico

app.use( express.static('public'));

//lectura y parseo del body
app.use(express.json());

//rutas
app.use('/api/auth', require('./routes/auth') )


//escuchar peticiones

app.listen(process.env.PORT, () => {
    console.log(`Server corriendo en el puerto ${process.env.PORT}`);
})















