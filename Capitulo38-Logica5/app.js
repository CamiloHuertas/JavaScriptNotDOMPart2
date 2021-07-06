//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) {
    return console.warn(`No ingresaste el numero a convertir`)
  }

  if (typeof numero !== "number") {
    return console.error(`El valor ${numero} ingresado, NO es un numero`)
  }

  if (base === undefined) {
    return console.warn("No ingresaste la base a convertir")
  }

  if (typeof base !== "number") {
    return console.error(`El valor ${base} ingresado, NO es un numero`)
  }

  if (base === 2) {
    return console.info(
      `${numero} bas ${base} = ${parseInt(numero, base)} base 10`
    )
  }
}

convertirBinarioDecimal()
convertirBinarioDecimal(100)
convertirBinarioDecimal(100, "2")
convertirBinarioDecimal(100, 2)

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const restarPorcentage = (monto = undefined, descuento = undefined) => {
  if (typeof monto !== "number") {
    return console.warn("No ingresaste un numero")
  }

  if (monto === 0) {
    return console.warn("No puedes ingresar el valor 0")
  }

  if (Math.sign(monto) === -1) {
    return console.error("No puedes ingresar valores negativos")
  }

  if (monto === undefined) {
    return console.error("No ingresaste ningun valor")
  }

  if (typeof descuento !== "number") {
    return console.warn("No ingresaste un numero")
  }

  if (descuento === 0) {
    return console.warn("No puedes ingresar el valor 0")
  }

  if (Math.sign(descuento) === -1) {
    return console.error("No puedes ingresar valores negativos")
  }

  if (descuento === undefined) {
    return console.error("No ingresaste ningun valor")
  }

  console.log(monto - (monto * descuento) / 100)
}

restarPorcentage(60, 20)
restarPorcentage(2, "hola")
restarPorcentage()

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) {
    return console.warn(`No ingresaste la fecha`)
  }

  if (!fecha instanceof Date) {
    return console.error(`El valor que ingresaste no es una fecha valida`)
  }

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS)

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} anios para el ${fecha.getFullYear()}.`
      )
    : Math.sign.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el anio actual ${fecha.getFullYear}`)
}
