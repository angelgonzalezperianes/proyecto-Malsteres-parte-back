/* Contiene la conexion con la base de datos */

const mongoose = require('mongoose')
const urldb = 'mongodb://localhost/malsterstest'; //Si no existe la BBDD 'malsters-test' la crea. 

mongoose.connect(urldb, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const conexion = mongoose.connection;

//Cuando levantemos el npm start y se conecte la base de datos muestra el console.log
conexion.once('open', ()=>{
    console.log('DB malsters-test esta conectada')
})