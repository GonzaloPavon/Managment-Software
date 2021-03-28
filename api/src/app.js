//Dependecias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app  = express();

//Configuracion
app.set('port', process.env.PORT  ||  8080);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//Rutas
app.use('/api/users/',  require('./Routes/userRoutes'));
app.use('/api/products/',  require('./Routes/productRoutes'));

//Exportacion
module.exports  = app;
