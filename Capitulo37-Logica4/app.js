//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const nPrimo = (numero = '') => {
  if (!numero){return console.warn(`No ingresaste ningun valor`)}

  if (typeof numero !== 'number'){return console.error(`No puedes poner valores que no sean numeros`)}

  if (numero === 0){return console.warn(`No puede ingresar el valor 0`)}

  if (Math.sign(numero) === -1){return console.warn(`No puedes ingresar valores negativos`);}

  let divisible = false;

  for (let i = 2; i < numero; i++){
    if((numero % i) === 0){
      divisible = true;
      break;
    }
  }

  return (divisible === true)
  ? console.log(`El numero ${numero}, no es primo`)
  : console.log(`El numero ${numero}, es primo`)
}

nPrimo(4)
nPrimo(3)
nPrimo(10)
nPrimo(2)

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const imparPar = (num = '') => {
  if (!num){return console.warn(`No ingresaste ningun numero`)}

  if (typeof num !== 'number'){return console.error(`No puedes ingresar valores que no sean numeros`)}

  if ((num % 2) === 0){
    console.log(`El numero ${num} es primo`);
  } else if ((num % 2) === 1){
    console.log(`El numero ${num} no es primo`);
  }
}




//Impar modulo es 1, par modulo es 0


//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)return console.warn(`No ingresaste el numero de grados a convertir`);

  if (typeof grados !== 'number') return console.error(`No puedes ingresar grados que no sean numeros`)

  if (unidad === undefined) return console.warn(`No ingresaste la unidad a convertir`)

  if (typeof unidad !== 'string') return console.error(`No puedes ingresar valores que no sean cadenas de texto`);

  if (unidad.length !== 1 || !(/C|F/ig).test(unidad)) return console.warn(`Valor de unidad no reconocido`);

  if (unidad === 'C'){
    console.info(`${grados}C = ${(grados * 9/5) + 32}F`)
  } else if (unidad === "F"){
    console.info(`${grados}F = ${(grados - 32) * 5/9}C`)
  }
}

convertirGrados(0, 'C')
convertirGrados(0, 'F')






