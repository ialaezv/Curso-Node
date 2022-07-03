/**
 *  _listado: 
 *      { 'uuid-1234131131: { id:12, desc: Hola Mundo, completadoEn: 02/08/2012 }' },
 *      
 */

const Tarea = require("./tarea");

class Tareas {

  _listado = {};

  get listadoArr() {

    const listado = [];
    // * Retorna todas las llaves del objeto _listado
    Object.keys(this._listado).forEach( key => {
      const tarea = this._listado[key];
      listado.push( tarea );
    });

    return listado;
  }
  
  constructor() {
    this._listado = {}; 
  }

  crearTarea( desc = '' ) {

    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;

  }

}

module.exports = Tareas;