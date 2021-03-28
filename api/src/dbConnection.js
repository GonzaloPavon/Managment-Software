//Dependencias
const mongoose = require('mongoose');

//Constantes
const URI = process.env.MONGODB_URI;
const connection  = mongoose.connection;

//Conexion
mongoose.connect(URI,{
  useNewUrlParser:  true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

connection.once('open', () =>  {
  console.log('Base de datos conectada');
});
