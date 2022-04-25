const { getUsuario } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');

// Temps en executar aquesta funció 3s
getUsuario(1, ( usuario ) => {
  console.log('Usuario 1:', usuario);
});

// Temps en executar aquesta funció 3s
getUsuario(2, ( usuario ) => {
  console.log('Usuario 2:', usuario);
  console.timeEnd('inicio');
});

console.log('Fin de programa');