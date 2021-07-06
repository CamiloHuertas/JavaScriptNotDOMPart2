//JSON se traduce como JavaScript Object Notation
//Es un formato ligero de intercambio de datos

const json = {
  cadena: "Camilo",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "caminar", "trotar"],
  objeto: {
    twitter: "No hay",
    email: "camiloandreshuertas26@gmail.com",
  },
  nulo: null,
}

console.log(json)

console.log(JSON)

//JSON.parse lo que hace es convertir un valor de JSON a un valor valido de JavaScript

console.log("{}")
console.log(JSON.parse("{}"))

console.log("[1,2,3]")
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("14"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))

//JSON.tostringify convierte un valor de JS en una cadena de texto siempre

console.log(JSON.stringify({}))
console.log(JSON.stringify([1, 2, 3]))
console.log(JSON.stringify("[1,2,3]"))
console.log(JSON.stringify("14"))
console.log(JSON.stringify("true"))
console.log(JSON.stringify("false"))
console.log(JSON.stringify({ x: 2, y: 3 }))

console.log(JSON.stringify(json))
