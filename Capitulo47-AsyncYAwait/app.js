function cuadradoPromise(value){
  if (typeof value !== 'number'){return Promise.reject(`Error, el valor ${value} no es un numero`);}

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value*value
      })
    }, 0 | Math.random() * 100);

  });
}

//Palabra reservada async para volver una funcion a funcion asincrona
//await le dice a una funcion asincrona que espere el resultado antes de seguir ejecutando la siguiente linea
async function funcionAsincronaDeclarada (){
  try {
    console.log(`Inicio de Async function`)
    let obj = await cuadradoPromise(0);
    console.log(`Async function: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(1);
    console.log(`Async function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(2);
    console.log(`Async function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(3);
    console.log(`Async function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(4);
    console.log(`Async function: ${obj.value}, ${obj.result}`)
  } catch (err) {
    console.error(err)
  }
}


funcionAsincronaDeclarada();

//Palabra async antes de declarar la arrow function
const funcionAsincrodaExpresada = async() => {
  try {
    console.log(`Inicio de Async function`)
    let obj = await cuadradoPromise(5);
    console.log(`Async function: ${obj.value}, ${obj.result}`)
    
    obj = await cuadradoPromise(6);
    console.log(`Async function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(7);
    console.log(`Async function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(8);
    console.log(`Async function: ${obj.value}, ${obj.result}`)

    obj = await cuadradoPromise(9);
    console.log(`Async function: ${obj.value}, ${obj.result}`)
  } catch (err) {
    console.error(err)
  }
}

funcionAsincrodaExpresada();































