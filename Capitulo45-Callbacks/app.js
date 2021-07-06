//Calback = llamada de vuelta: Es una funcion que se va a ejecutar despues de que otra lo haga

function cuadradoCallback(value, callback){
  setTimeout(() => {
    callback(value, value*value)
  }, 0 | Math.random() * 100);
}

cuadradoCallback(0,(value,resultado) => {
  console.log(`Inicia Callback`);
  console.log(`Callback: ${value}. ${resultado}`);
  cuadradoCallback(1,(value,resultado) => {
    console.log(`Callback: ${value}. ${resultado}`);
  })
  
})







