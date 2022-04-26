// Importaciosn llibreries o arxius
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, max = 10 ) => {

  try {
    
      let salida = '';

      for ( let i = 1; i<= max; i++ ) {
        salida +=`${base} x ${i} = ${base * i}\n`;
      };
  
      if (listar) {
          console.log('============================'.rainbow);
          console.log('    Table del:'.rainbow, colors.blue(base) );
          console.log('============================'.rainbow);
          console.log(colors.rainbow(salida));
      }
      
      // Guardem la sortida de sortida en un txt
      fs.writeFileSync(`./output/Tabla-${base}.txt`, salida );

      return `Tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
}

// Exportacions
module.exports = {
  crearArchivo
}