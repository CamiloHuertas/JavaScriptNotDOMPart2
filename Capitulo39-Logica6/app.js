//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const vocalConsonante= (cadena = '') => {
  if (!cadena) return console.warn(`No ingresaste ninguna cadena`)

  if (typeof cadena !== 'string') return console.error(`No puedes poner valores que no sean cadenas de texto`)

  let vocales = 0;
  let consonantes = 0;

 for (const letra of cadena) {
   if (/[AEIOUaeiou]/.test(letra)){
    vocales++;
   }

   if (/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/.test(letra)){
     consonantes++;
   }
 }
 return console.info({
   cadena,
   vocales,
   consonantes,
 })
}

vocalConsonante(3)
vocalConsonante('Hola mundo')

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const validarNombre = (nombre = '') => {
  if (!nombre) {return console.warn(`No ingresaste un nombre`);}

  if (typeof nombre !== 'string') {return console.error(`El valor ${nombre} ingresado, NO es una cadena de texto`);}

  let expReg = /^[A-Za-z]+$/g.test(nombre);

  return(expReg)
  ? console.info(`${nombre}, es un nombre valido`)
  : console.warn(`${nombre}, No es un nombre valido`)
}
validarNombre();
validarNombre('Ostia');



//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = '') => {
  if (!email) {return console.warn(`No ingresaste un email`);}

  if (typeof email !== 'string') {return console.error(`El valor ${email} ingresado, NO es una cadena de texto`);}

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

  return(expReg)
  ? console.info(`${email}, es un email valido`)
  : console.warn(`${email}, No es un email valido`)
}

validarEmail();
validarEmail('camiloandreshuertas26@gmail.com');













