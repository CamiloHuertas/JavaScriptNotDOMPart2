//Temporizadores -  nos sirven para lanzar acciones en cierta cantidad de tiempo

//Hay 2 temporizadores - SetTimeout y SetInterval


//SetTimeout - Hace que algo se ejecute despues de un tiempo, solo se ejecuta 1 vez

console.log(`Inicio`)
setTimeout(() => {
  console.log(`Ejecutando un setTimeout, se ejecutara solo una vez`)
}, 1000);


//SetInterval - Se ejecuta cada cierto tiempo que le especifiques 

console.log(`Inicio`);
setInterval(() => {
  console.log(`Ejecutando un setInterval, se ejecutara indefinidamente cada cierto intervalo de tiempo`)
  
}, 20000);

setInterval(() => {
console.log(new Date().toLocaleTimeString());
}, 1000)


//Para limpiar un setTimeout este debe estar dentro de una variable

let temp = setTimeout(() => {
  console.log(`Limpiar timeout`);
}, 1000)


clearTimeout(temp);
console.log(`Despues del clear`);

//Para limpiar un setInterval este debe estar dentro de una variable

let temp2 = setInterval(() => {
  console.log(`Limpiar interval`);
}, 1000);

clearInterval(temp2)
console.log(`Despues del clearInterval`);


