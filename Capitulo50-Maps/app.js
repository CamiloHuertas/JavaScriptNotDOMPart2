//Los map son objetos que nos sirven para almacenar conjuntos de valores asociados a manera de objeto, es un elemento compuesto
//Si se utiliza el new para crear un nuevo mapa
//Aqui es como un set, se utiliza .size para saber su longitud
//A diferencia de los objetos normales, las llaves siempre son strings, pero en los maps, las keys pueden ser boolean, number, null, undefined y NaN

let mapa = new Map();

//Para agregar valores hay 2 maneras
//Primera manera, usando puros .set

mapa.set('Nombre','Camilo')
mapa.set('Apellido','Huertas')
mapa.set('Edad',14)

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has('correo'));
console.log(mapa.has('Nombre'));
console.log(mapa.get('Nombre'));
console.log(mapa.set('Nombre', 'Camilo Huertas'));
console.log(mapa.get('Nombre'));
mapa.delete('Apellido')

mapa.set(19, 'diecinueve')
mapa.set(false, 'falso')
mapa.set({}, {})

console.log(mapa);


for (let [key, value] of mapa){
  console.log(`LLave:${key}, Valor: ${value}`)
}

//Segunda manera (mas facil), poner corchetes, y dentro de esos corchetes poner entre mas corchetes las keys y sus values 
const mapa2 = new Map([
  ['name','Mitch'],
  ['age', '6'],
  ['animal', 'Cat'],
  [null, 'nulo']
])

//Para obtener las llaves
const llavesMapa2 = [...mapa2.keys()]
//Para obtener los valores de las llaves
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2);
console.log(valoresMapa2);

console.log('******************Recorriendo el Map******************');

//Pasar a array
console.log(`Pasando a array`);

let arr = Array.from(mapa2)
console.log(arr);


//Recorrer con for of
console.log(`Recorriendo con for of`);

for (const item of mapa2) {
  console.log(item);
}


//Recorrer con foreach
console.log(`Recorriendo con for each`);

//Almacenando en let

let arr2 = mapa2.forEach(item => console.log(item))
console.log(arr2);

//Sin almacenar en let

mapa2.forEach(item => console.log(item))