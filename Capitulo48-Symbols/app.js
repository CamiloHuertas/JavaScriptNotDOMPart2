//No se puede usar el operador new para declarar un simbolo
//Los simbolos crean un identificador unico
//Los simbolos son datos primitivos
//Su uso es crear elementos privados dentro de un objeto

let id = 'hola';
let id2 = 'hola';

console.log(id === id2);

let id3 = Symbol('id');
let id4 = Symbol('id2');

console.log(id3 === id4);
console.log(id3, id4);
console.log(typeof id3, typeof id4);

const NAME = Symbol('Nombre');
const SALUDO = Symbol('Saludar');

//Para que un objeto detecte el valor de algo como un simbolo, el nombre de la constante debe tener como valor symbol, y en el objeto debe estar encerrado entre corchetes
const person = {
  [NAME]: 'Camilo',
  edad: 35
}

console.log(person)

person.NAME = 'Camilo Huertas'
console.log(person);
console.log(person.NAME);
console.log(person[NAME]);

person[SALUDO] = function(){
  console.log('Hola');
}

console.log(person);
person[SALUDO]();

for (let propiedad in person){
  console.log(propiedad);
  console.log(person[propiedad]);
}

console.log(Object.getOwnPropertySymbols(person));