//Ejercicio 1
/* Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const revertir = (texto = '') => {
  if (!texto){return console.warn(`No ingresaste ningun texto`);}

  if (typeof texto !== 'string'){return console.error(`No pudes ingresar un texto que no sea una cadena de texto`);}
  
  console.info(texto.split('').reverse('').join(''))
  
}

revertir('Hola mundo')

//Ejercicio 2
/*Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const contarPalabra = (text = '', palabra='') => {
  if (!text){return console.warn(`No ingresaste ninguna cadena`)}

  if (typeof text !== 'string'){return console.error(`No pudes ingresar un texto que no sea una cadena de texto`);}
  
  if (!palabra){return console.warn(`No ingresaste la palabra a contar`)}
  
  if (typeof palabra !== 'string'){return console.error(`No pudes ingresar una palabra a contar que no sea una cadena de texto`);}

  let i = 0,
      contador = 0;

  while(i !== -1){
    i = text.indexOf(palabra, i);
  if (i !== -1){
    i++;
    contador++;
  }
}
  return console.log(`La palabra '${palabra}' se repite ${contador} veces`)
}
contarPalabra('Hola mundo que tal mundo como estan mundo','mundo')


//Ejercicio 4
//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (cadena = '') => {
  if (!cadena){return console.warn(`NO ingresaste ninguna cadena`);}

  if (typeof cadena !== 'string'){return console.error(`No puedes ingresar texto que no sean cadenas de texto`);}

  let alRevez = cadena.split('').reverse('').join('');

 return (cadena === alRevez)
 ? console.log(`La palabra ${cadena} es un palindromo, Palabra original: ${cadena}, Palabra al revez: ${alRevez}`)
 : console.log(`La palabra ${cadena} no es un palindromo, Palabra original: ${cadena}, Palabra al revez: ${alRevez}`)
}

palindromo('hola')
palindromo('anna')

//Ejercicio 4
/*
 Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const quitarCaracteres = (cad = '', patron = undefined) => {
  if (!cad){return console.warn(`No ingresaste ninguna cadena de texto`);}

  if (typeof cad !== 'string'){return console.error(`No puedes ingresar una cadena que no sea una cadena de texto`);}

  if (patron === undefined){return console.warn(`No ingresaste el patron a eliminar`);}

  return console.log(cad.replace(new RegExp(patron, 'ig'), ''));
}

quitarCaracteres('xyz1 xyz2 xyz3 xyz4 xyz5', 'xyz')











