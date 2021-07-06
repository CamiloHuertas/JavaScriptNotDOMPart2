//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

let devolverCuadrado = (arr = undefined) => {
  if(arr === undefined){return console.warn(`No ingresaste un arreglo de numeros`)}

  if(!arr instanceof Array){return console.error(`El valor que ingresaste no es un arreglo`)}

  if(arr.length === 0){return console.warn(`El arreglo esta vacio`)}

  for (const num of arr) {
      if (typeof num !== 'number') return console.warn(`El valor ingresado '${num}' no es un numero`)
  }

  const newArr = arr.map(el => el * el);

  console.info(`Arreglo normal: ${arr}, arreglo al cuadrado: ${newArr}`);
}

devolverCuadrado([1,2,3])
devolverCuadrado([1,2,3])


//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]

let maxMin = (array = undefined) => {
  if(array === undefined){return console.warn(`No ingresaste un arreglo de numeros`)}

  if(!array instanceof Array){return console.error(`El valor que ingresaste no es un arreglo`)}

  if(array.length === 0){return console.warn(`El arreglo esta vacio`)}

  for (const number of array) {
    if (typeof number !== 'number') return console.warn(`El valor ingresado '${num}' no es un numero`)
}

  return console.log(`El valor mas grande es ${Math.max(array)}, El valor mas pequeno es: ${Math.min(array)}`);

}

maxMin([1,2,5,8,10,4])

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const parImpar = (num = undefined) => {
  if (!num) return console.warn(`No Ingresaste ningun numero`);

  if (!num instanceof Array) return console.error(`No puedes ingresar valores que no sean arreglos`)

  if (num.length === 0) return console.warn(`No puedes ingresar arreglos vacios`);

  for (const numero of num) {
    if (typeof numero !== 'number') return console.error(`El valor '${numero}' no es un numero`)
  }

  return console.info({
    ArregloOriginal: num,
    pares: num.filter(el => el % 2 === 0),
    Impares: num.filter(el => el % 2 === 1)
  })
}

parImpar([1,2,3,4,5,6,7,8,9])

