// Importacions llibreries o arxius o destrcturem un arxiu per treure una funció
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

// Netejem la terminal amb un clear
console.clear();

// // // Cridem la funció que importem per fer la taula de multiplicar i genera un arxiu amb aquesta
crearArchivo( argv.b, argv.l, argv.m )
      .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
      .catch( err => console.log(err));

