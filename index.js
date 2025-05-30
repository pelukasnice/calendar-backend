const express = require('express');
require('dotenv').config();

console.log(process.env)

//  crear server

const app = express();

// directorio publico

app.use( express.static('public'));

//rutas
app.use('/api/auth', require('./routes/auth') )


//escuchar peticiones

app.listen(process.env.PORT, () => {
    console.log(`Server corriendo en el puerto ${process.env.PORT}`);
})















