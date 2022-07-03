require('colors');

// * Desestructurando en el archivo guardarArchivo es decir importamos las funciones guardarDb, leerDb
const { guardarDb,
        leerDb 
      } = require('./helpers/guardarArchivo');

// * Desestructurando en el archivo inquirer es decir importamos las funciones inquirerMenu, pausa y leerInput 
const { inquirerMenu, 
        pausa,
        leerInput
      } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');

const main = async() => {

  let opt = '';
  const tareas = new Tareas();

  const tareasDb = leerDb();

  if ( tareasDb ) {
    
  }

  do {
    // * Imprimir el Menú
    opt = await inquirerMenu();

    switch ( opt ) {
      
      case '1': 
        const desc = await leerInput('Descripción:');
        tareas.crearTarea( desc );
      break;

      case '2':
        console.log( tareas.listadoArr );
      break;
    }

    guardarDb( tareas.listadoArr );

    await pausa();

  } while( opt !== '0' );

}

// * Llamando a la funcion main() es a dir la executamos
main();