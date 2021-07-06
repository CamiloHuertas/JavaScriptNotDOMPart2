//Se les dice weak ya que solo pueden almacenar referencias debiles, por lo cual las llaves deben ser de tipo objeto
//No se les puede medir el size

//Esto es un set normal, funciona perfectamente
const set = new Set([1,2,3,3,4,5,true,false,false,{},{},'Hola','HOla']);

//Aqui se declara como weakset, lo cual da un error, ya que hay que agregar cada uno de los valores con .add
//const ws = new WeakSet([1,2,3,3,4,5,true,false,false,{},{},'Hola','HOla']);


//Esto tampoco funciona ya que solo admite valores debiles, uno de estos serian los objetos
//ws.add(1);

const ws = new WeakSet();
let valor1 = {'valor1':1};
let valor2 = {'Valor2':2};
let valor3 = {'Valor3':3} ; 

ws.add(valor1)
ws.add(valor2)
console.log(ws);
//No tienen la propiedad size - da undefined
console.log(ws.size);
//Pero si tienen la propiedad has
console.log(ws.has(valor1))
console.log(ws.has(valor3))
//Tambien tiene la propiedad delete
ws.delete(valor2)
console.log(ws);

ws.add(valor2)
ws.add(valor3)
console.log(ws);

setInterval(() => {
  console.log(ws)
}, 10000);

setTimeout(() => {
  valor1 = null;
  valor2 = null;
  valor3 = null;
}, 5000);

/* ********************************WeakMaps*********************************/
//Esto si funcionaria ya que es un map normal
const map = new Map([
  ['nombre','Copito'],
  ['edad', 7],
  ['animal', 'gato'],
  [null, 'nulo'],
])

//Esto no funcionaria ya que al igual que con el weakSet, solo acepta valores debiles como objetos

// const wm = new WeakMap([
//   ['nombre','Copito'],
//   ['edad', 7],
//   ['animal', 'gato'],
//   [null, 'nulo'],
// ])
  
//Manera correcta de declarar un weakMap

const wm = new WeakMap();
let llave1 = {}
let llave2 = {}
let llave3 = {}

//Para añadir con set se pone el nombre de la variable seguido de una coma, despues de esta se pone el valor que quieras que tenga esa variable dentro del map
wm.set(llave1,1)
wm.set(llave2,2)
console.log(wm)

console.log(wm.has(llave1));
console.log(wm.has(llave3));


console.log(wm.get(llave1));
console.log(wm.get(llave2));

wm.delete(llave1)
console.log(wm);

wm.set(llave2,2)
wm.set(llave3,3)
console.log(wm);

setInterval(() => {console.log(wm)}, 1000);


setTimeout(() => {
llave1 = null;
llave2 = null;
llave3 = null;
}, 5000)














