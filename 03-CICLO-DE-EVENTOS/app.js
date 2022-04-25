console.log('Inicio de programa'); // 1 -> Pila de procesos (Call Stack) main() -> executa el console.log i es borra

setTimeout( () => {
  console.log('Primer Timeout'); // 5 -> Pila de processos (Call Stack) main() -> Node Apis i espera 3 segons -> Cola de callbacks[2] -> Pila de processos per executar el console.log
}, 3000);

setTimeout( () => {
  console.log('Segundo Timeout'); // 3 -> Pila de processos (Call Stack) main() -> Node Apis -> Cola de callbacks[0] -> Pila de processos per executar el console.log
}, 0);

setTimeout( () => {
  console.log('Tercero Timeout'); // 4 -> Pila de processos (Call Stack) main() -> Node Apis -> Cola de callbacks[1] -> Pila de processos per executar el console.log
}, 0);

console.log('Fin de programa'); // 2 -> PIla de procesos (Call Stack) main() -> executar console.log i es borra

