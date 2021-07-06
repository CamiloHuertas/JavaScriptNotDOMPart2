// Nuevo tipo de dato 'Set'
//Es una estructura similar a un array pero de datos unicos
//Es como un arreglo mejorado de JS que solo acepta valores unicos hablando de valores primitivos, pero el set como tal es un valor compuesto
//Para declararlo si se utiliza el new
//Para saber cuantos elementos tiene el set, no se utiliza .length como en los arreglos, se utiliza .size

const set = new Set([1,2,3,3,4,5,5,'x','hola','z','z',9, 10])
console.log(set)
console.log(set.size)

console.log('Recorriendo Set1 *************************');
//Para recorrer cada elemento
for (const item of set) {
  console.log(item)
}
//Otra manera de añadir elementos a un set es utilizando el .add
const set2 = new Set();
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add({})

console.log(set2)
console.log(set2.size)

console.log('Recorriendo Set2 *******************');
//Recorrer cada elemento con metodo forEach
set2.forEach(item => console.log(item))

//Este codigo no funciona ya que los sets no son arreglos por completo
console.log(set[0]);

//Aqui se convierte al set en un arreglo para poder utilizar todos los metodos que tiene un arreglo
let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);
console.log(arr[8]);

//Set tiene un metodo especial para eliminar valores

set2.delete(3)
console.log(set2)

//Otro metodo especial es el has, es como un condicional dentro de un set apra revisar si tiene cierto valor

console.log(set2.has(1));

//para limpiar un set
set2.clear()
console.log(set2);