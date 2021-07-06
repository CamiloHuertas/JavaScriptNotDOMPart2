//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarArreglo = (arr = undefined) => {
  if(arr === undefined){return console.warn(`No ingresaste un arreglo de numeros`)}

  if(!arr instanceof Array){return console.error(`El valor que ingresaste no es un arreglo`)}

  if(arr.length === 0){return console.warn(`El arreglo esta vacio`)}

  for (let num of arr) {
    if(typeof num !== 'number'){return console.error(`El valor ${num} ingresado, NO es un numero`);}
  }

  return console.info({
    arr,
    asc: arr.map(el => el).sort(),     
    desc: arr.map(el => el).sort().reverse(),  
  });
}

ordenarArreglo();
ordenarArreglo('hola');
ordenarArreglo([]);
ordenarArreglo([1,3,'4']);
ordenarArreglo([7,5,7,6,8,9]);






//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const quitarDuplicados = (Arr = undefined) => {
  if (Arr === undefined){return console.warn(`No ingresaste un arreglo de numeros`);}

  if (!Arr instanceof Array){return console.error(`El arreglo esta vacio`)}
  
  if (Arr.length === 0){return console.warn(`El arreglo esta vacio`)}
  
  if (Arr.length === 1){return console.warn(`El arreglo debe tener al menos 2 elementos`)}

  //Primera forma
  // return console.info({
  //   original: Arr,
  //   sinDuplicados: Arr.filter((value, index, self) => self.indexOf(value) === index)
  // });

  //Segunda forma
  return console.info({
    original: Arr,
    sinDuplicados: [ ...  new Set(Arr)]
  });
    
}

quitarDuplicados();
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados([2, 10, '10', 10, 'x', 'x',8,true, '10']);







//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr2 = undefined) => {
  if (arr2 === undefined){return console.warn(`No ingresaste un valor de numeros`)}

  if (!arr2 instanceof Array){return console.error(`El valor que ingresaste no es un arreglo`)}

  if (arr2.length === 0){return console.error(`El arreglo esta vacio`)}

  for (let num2 of arr2) {
    if (typeof num2 !== 'number'){return console.error(`${num2} ingresado, NO es un numero`);}
  }

  return console.info(
    arr2.reduce((total, num2, index, arr2) => {
      total += num2;
      if (index === arr2.length-1){
        return `El promedio de ${arr2.join(' + ')} es ${total / arr2.length}`
      } else {
        return total;
      }
    })
  )
}


promedio();
promedio([]);
promedio('2', 2);
promedio([1,2,3,4,5,6,7,8,9]);






