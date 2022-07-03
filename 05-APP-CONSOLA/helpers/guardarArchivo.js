const fs = require('fs');

const archivo = './db/data.json';

const guardarDb = ( data ) => {
    // * Directorio y archivo donde guardamos las tareas 
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerDb = () => {
    // * Lectura del archivo Json para ver las tareas guardadas
    if ( !fs.existsSync(archivo) ){
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info );

    return null;

}

module.exports = {
    guardarDb,
    leerDb
}