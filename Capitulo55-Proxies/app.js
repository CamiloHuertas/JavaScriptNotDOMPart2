//Los proxies son un nuevo mecanismo de JS que permite crear un objeto basadao en un objeto literal inicial
//Para crear un proxy se usa el constructor new
//Es un nuevo tipo de dato, especificamente un objeto que se basa en otro
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
}

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad en cuestion "${prop}", no existe en el objeto persona`
      )
    }

    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-za-z\s]+$/g.test(valor)
    ) {
      return console.error(
        `La propiedad ${prop} solo acepta letras y espacios en blanco`
      )
    }
  },
}

//Los proxies reciben 2 valores, el objeto en el que te estas basando y en el handler o manejador
const cam = new Proxy(persona, manejador)

cam.nombre = "Camilo"
cam.apellido = "Huertas"
cam.edad = 14
cam.twitter = "No hay"
cam.instagram = "No hay"
console.log(cam)

console.log(persona)
