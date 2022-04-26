// Configuració del yargs
const argv = require('yargs')
    .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla multiplicar'
    })
    .option('m', {
      alias: 'max',
      type: 'number',
      default: 10,
      describe: 'Número max a multiplicar'
    })
    .option('l', {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => {
      if ( isNaN( argv.b ) ){
        throw 'La base tiene que ser un número'
      } else if ( isNaN( argv.m )) {
        throw 'El maximo tien que ser un número'
      }
      return true;
    })
    .argv;

module.exports = argv;