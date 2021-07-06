//Ejercicio 1
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const aleatorio = () => console.log(Math.round(Math.random()* 100) + 500);

aleatorio()

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = '') => {
  if (numero === undefined){return console.warn(`No ingresaste el numero a evaluar`);}

  if (typeof numero !== 'number'){return console.error(`No puedes poner valores que no sean un numero`)}

  if (Math.sign(numero) === -1){return console.warn(`No puedes ingresar valores negativos`)}

  let numString = numero.toString();
  let alRevez = numString.split('').reverse('').join('')

  return (numero === alRevez)
  ? console.log(`El numero es capicua, numero original ${numero}, numero al revez: ${alRevez}`)
  : console.log(`El numero no es capicua, numero original ${numero}, numero al revez: ${alRevez}`)
}

capicua(2020)
capicua(2020)



//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num = '') => {
  if (num === undefined){return console.warn(`No ingresaste el numero a evaluar`);}

  if (typeof num !== 'number'){return console.error(`No puedes poner valores que no sean un numero`)}

  if (Math.sign(num) === -1){return console.warn(`No puedes ingresar valores negativos`)}

  let factorial = 1; 

  for (let i = num; i > 1; i--){
    factorial *= i;
  }

  return console.log(`El factorial de ${num} es ${factorial}`)
}

factorial(5)















