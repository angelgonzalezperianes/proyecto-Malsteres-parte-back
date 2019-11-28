const path = require('path');
const express = require('express');
const app = express();
const bodyPrser = require('body-parser');
const rutaMain = require('./routes/root.js');
const rtUsers=require('./routes/usuarios');
const rtEventos=require('./routes/eventos');
const rtCervezas=require('./routes/cervezas');
const rtBuscador=require('./routes/buscador');
const rtMcervezas=require('./routes/Mcervezas');
const rtMeventos=require('./routes/Meventos')
require('./database'); 
//JP: Esto inicializa la Base de datos, y la conecta, esta definido en el archivo database.js

// middlewares
app.use(require('cors')());
app.use(express.json());
//cadavez ke pase por el bodyparser
app.use(bodyPrser.urlencoded({ extended: false }));
app.use(bodyPrser.json());
/**StackO suggestion: app.use(bodyParser.json())
 * y usar Content-Type: application/x-www-form-urlencoded
*/
app.use(express.static(path.join(__dirname, 'public')));

//: Routas
app.use('/cervezas',rtCervezas);
app.use('/usuarios',rtUsers);
app.use('/eventos', rtEventos);
app.use('/buscador',rtBuscador);
app.use('/menosCervezas', rtMcervezas)
app.use('/menosEventos', rtMeventos)
//aki root para cervezas y eventos

app.post('/test', (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});
app.use(rutaMain);
//config 404+ init
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(4000, () => { console.log("ServerOn!!! Dame malta en 4000") });