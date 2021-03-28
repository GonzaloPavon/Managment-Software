//Importaciones
require('dotenv').config();
require('./dbConnection');

const app = require('./app');


//Escucha del servidor
async function  server(){
  await app.listen(app.get('port'));
  console.log('Servidor corriendo en el puerto: '+app.get('port'));
}

//Inicializacion
server();
