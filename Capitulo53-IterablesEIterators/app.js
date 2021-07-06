//Iterable- El elemento al cual se le puede recorrer el contenido

//Iterators- El mecanismo que recorre los elementos

const Iterable = [1,2,3,4,5]
const Iterador = Iterable[Symbol.iterator](); 

console.log(Iterable);
console.log(Iterador);

//Next lo que hace es recorrer el siguiente valor del iterable, pero esto no es practico porque si tenemos 1000 usuarios en nuestra pagina por decir algo, no vamos a poner iterador.next 1000 veces
// console.log(Iterador.next());
// console.log(Iterador.next());
// console.log(Iterador.next());
// console.log(Iterador.next());
// console.log(Iterador.next());
// console.log(Iterador.next());

//La mejor manera para hacerlo es con un ciclo y que detecte que cuando done sea true, pare el ciclo
let next = Iterador.next();

while (!next.done) {
  console.log(next.value);
  next = Iterador.next()
}

































