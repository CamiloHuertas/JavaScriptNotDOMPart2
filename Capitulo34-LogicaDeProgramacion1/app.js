//Ejercicio 1
/*1 Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

const contarCaracteres = (texto = '') => {
  if (!texto){return console.warn(`No ingresaste ninguna cadena a evaluar`);}

  if (typeof texto !== 'string'){return console.error(`No puedes ingresar valores que no sean cadenas de texto`)}

  return console.log(`La palabra ${texto} tiene ${texto.length} caracteres`)
}


contarCaracteres('Hola mundo')

//Ejercicio 2
/* Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

const recortar = (text = '', longitud='') => {
  if (!text){return console.warn(`No ingresaste ninguna cadena a recortar`)}

  if (typeof text !== 'string'){return console.error(`No puedes ingresar valores que no sean cadenas de texto`);}

  if (!longitud){return console.warn(`No ingresaste ninguna longitud para el recorte`)}

  if (typeof longitud !== 'number'){return console.error(`la longitud del recorte no puede ser otro valor que no sea un numero`)}

  return console.log(`${text.slice(0, longitud)}`)
}

recortar('hola mundo', 4)

//Ejercicio 3
/*
3 Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
const partirCadena = (cadena='', separador = undefined) => {
  if (!cadena){return console.warn(`No ingresaste ninguna cadena`)}

  if (typeof cadena !== 'string'){return console.error(`No puedes ingresar un texto a partir que no sea una cadena de texto`)}

  if (!separador){return console.warn(`No ingresaste el caracter separador`)}
  
  return console.log(cadena.split(separador))
}

partirCadena('Hola que tal',' ')


//Ejercicio 4
/*4 Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repetirTexto = (cad = '', veces = undefined) => {
  if (!cad){return console.warn(`No ingresaste ninguna cadena`)}

  if (typeof cad !== 'string'){return console.error(`No puedes poner texto que no sean cadenas de texto`)}

  if (veces === undefined){return console.warn(`No ingresaste las veces que quieres repetir el texto`)}

  for (let i = 1; i <= veces; i++){
    console.info(`${cad}, ${i}`)
  }
}

repetirTexto('Hola mundo', 3)










