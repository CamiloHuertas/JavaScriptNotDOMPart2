//La asincronia es uno de los pilares fundamentales de JS | JS solo puede ejecutar una sola cosa a la vez (Single thread)
//JS trbaja bajo la filosofia LIFO = Last in, First out, el ultimo en entrar es el primero en salir

/* 
Procesamiento Single Thread:  JS es un lenguaje single thread porque solo ejecuta 1 hilo de ejecucion
 Multi thread:

Operaciones de CPU: Son aquellas que van a pasar el mayor tiempo consumiendo los procesos del CPU, (Ejemplo: for infinito)
 Operaciones de I / O: Operaciones que van a pasar la mayor parte del tiempo esperando la peticion del recurso que han solicitado (Ejemplo: pago en linea)

Operaciones concurrentes: Cuando varias tareas van progresando al mismo tiempo
 paralelas: Cuando esas tareas se ejecutan al unirse

Operaciones bloqueantes: Es aquella que no devuelve el control a la aplicacion hasta terminar su tarea
 No bloqueantes: Las tareas se ejecutan y devuelven inmediatamente el control al hilo principal

Operaciones Sincronas: La respuesta sucede en tiempo presente
 Asincronas:  La respuesta sucede en un futuro

*/

//Codigo sincrono bloqueante
(() => {
  console.log(`Codigo Sincrono`);
  console.log(`Inicio`);

  function dos(){
    console.log(`Dos`);
  }

  function uno (){
    console.log(`Uno`);
    dos();
    console.log(`Tres`);
  }

  uno();
  console.log(`Fin`);
})();

console.log(`**************************`);

//Codigo Asincrono no bloqueante

(() => {
  console.log(`Codigo Asincrono`);
  console.log(`Inicio`);

  function dos (){
    setTimeout(() => {
      console.log(`Dos`); 
    }, 1000);
  }

  function uno (){
    setTimeout(() => {
      console.log(`Uno`);
    }, 0);
    dos();
    console.log(`Tres`);
  }

  uno();
  console.log(`Fin`);
})();








