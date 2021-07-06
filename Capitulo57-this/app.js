//this en los navegadores hace referencia al window
console.log(this)
console.log(window)
console.log(this === window)

this.nombre = "Contexto Global"

console.log(this.nombre)

//Esta imprime el texto 'Contexto Global' ya que se creo la funcion en un aspecto global
function imprimir() {
  console.log(this.nombre)
}

imprimir()

//Aqui imprime el texto 'Contexto Objeto' ya que esa funcion no se creo de manera global
const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre)
  },
}

obj.imprimir()

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir,
}

obj2.imprimir()

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre)
  },
}

obj3.imprimir()

//Con arrow function el resultado es el contexto global ya que este tipo de funciones no tienen un scope, encambio las funciones con su palabra reservada si lo tienen

function persona(nombre) {
  this.nombre = nombre
  // return console.log(this.nombre)

  //Retorna contexto global ya que esta funcion al ser declarada crea un nuevo scope, por lo que el paramtetro nombre de la funcion persona es ignoarada, asi que busca en contexto global el elemento persona
  return function () {
    console.log(this.nombre, 2)
  }
}

function persona(nombre) {
  this.nombre = nombre
  // return console.log(this.nombre)

  // encambio si se usa una arrow function si va a dar el nombre ya que estas funciones no crean su propio scope
  return function () {
    console.log(this.nombre, 2)
  }
}

let camilo = new persona("Camilo")
camilo()
