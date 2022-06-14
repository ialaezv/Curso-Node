/**
 *  _listado: 
 *      { 'uuid-1234131131: { id:12, desc: Hola Mundo, completadoEn: 02/08/2012 }' },
 *      { 'uuid-1234131131: { id:12, desc: Hola Pol, completadoEn: 09/03/2019 }' },
 *      { 'uuid-1234131131: { id:12, desc: Hola Paz, completadoEn: 03/01/2015 }' },
 *      
 */

const Tarea = require("./tarea");

class Tareas {

  _listado = {};

  constructor() {
    this._listado = {}; 
  }

  crearTarea( desc = '' ) {

    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;

  }


}

module.exports = Tareas;