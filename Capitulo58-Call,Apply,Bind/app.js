console.log(this)
this.lugar = "Contexto Global"

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}
saludar()

const obj = {
  lugar: "Contexto Objeto",
}
saludar()

// El metodo call llama a un objeto
saludar.call(obj, "Hola", "Camilo")
//El metodo apply aplica elementos
saludar.apply(obj, ["adios", "camilo"])
// Bind enlaza
const persona = {
  nombre: "Camilo",
  saludar: function () {
    console.log(`Hola ${this.nombre}`)
  },
}

persona.saludar()

const otraPersona = {
  saludar: persona.saludar.bind(persona),
}

otraPersona.saludar()
