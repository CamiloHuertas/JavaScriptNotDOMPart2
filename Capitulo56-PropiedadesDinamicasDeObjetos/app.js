const objUsuarios = {
  //Normal
  Propiedad: `valor`,
  //Dinamicamente
  [`id_${Math.round(Math.random() * 100 + 5)}`]: `Valor Aleatorio`,
}
console.log(objUsuarios)

const usuarios = ["camilo", "Tamue", "mitch", "copito"]

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario))
console.log(objUsuarios)
