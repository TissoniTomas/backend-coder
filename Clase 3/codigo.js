// // Registrador de ticket y eventos

// class TicketManager {
//   static ganancia = 0.15;
//   // Variable estatica que me permite acceder a ella sin tener que pasar por el constructor
//   constructor() {
//     this.eventos = [];
//   }

//   getEventos() {
//     return this.eventos;
//   }

//   addEventos(nombre, lugar, fecha = new Date(), capacidad = 50, costo = 0) {
//     // Validaciones - Formateo de datos - etc

//     if (nombre === "" || lugar === "") {
//       console.log("Complete nombre y lugar");
//       return;
//     }

//     let existe = this.eventos.find(
//       (evento) => evento.nombre === nombre && evento.lugar === lugar
//     );

//     if (existe) {
//       console.log(`El evento con nombre ${nombre} ya existe`);
//       return;
//     }

//     let id = 1;
//     if (this.eventos.length > 0) {
//       id = this.eventos[this.eventos.length - 1].id + 1;
//     }

//     let nuevoEvento = {
//       id,
//       nombre,
//       lugar,
//       fecha,
//       capacidad,
//       costo: costo + costo * TicketManager.ganancia,
//       asistentes: [],
//     };
//     this.eventos.push(nuevoEvento);
//   }

//   addUsuario(id, nombre, email) {
//     let indiceEvento = this.eventos.findIndex((ev) => ev.id === id);

//     if (indiceEvento === -1) {
//       console.log("El evento no existe");
//       return;
//     }

//     let existe = this.eventos[indiceEvento].asistentes.find(
//       (asistente) => asistente.email === email
//     );
//     if (existe) {
//       console.log("El usuario ya es asistente del evento");
//       return;
//     }
//     this.eventos[indiceEvento].asistentes.push(nombre, email);
//   }

//   ponerEnGira(){

//     let indiceEvento = this.eventos.findIndex((ev) => ev.id === id);

//     if (indiceEvento === -1) {
//       console.log("El evento no existe");
//       return;
//     }

//     let nuevoEvento= {
//         ...this.eventos[indiceEvento],
//         lugar,
//         fecha,
//         asistentes:[]

//     }

//     this.eventos.push(nuevoEvento)
//   }
// }

// let tm01 = new TicketManager();

// tm01.addEventos(
//   "velez-independiente",
//   "Jose Amalfitani",
//   new Date(2024, 1, 14),
//   100,
//   500
// );
// tm01.addEventos(
//   "velez-gimnasia",
//   "Jose Amalfitani",
//   new Date(2024, 1, 14),
//   100,
//   500
// );
// tm01.addEventos(
//   "velez-river",
//   "Jose Amalfitani",
//   new Date(2024, 1, 14),
//   100,
//   500
// );
// tm01.addEventos(
//   "velez-independiente",
//   "Jose Amalfitani",
//   new Date(2024, 1, 14),
//   100,
//   500
// );
// console.log(tm01.getEventos());

// // CLASE 03

// const fs = require('fs') // Carga de la libreria filesystem, exclusiva de el entorno Node

// console.log("inicio");

// fs.writeFile("archivo1.txt", "Generacion de nuevo archivo", ()=>{
//   console.log("Archivo cargado con exito");
// })
// // Se ejecuta ultimo, puesto que es una funcion asincrona
// console.log("fin");

// // CALLBACKS

// let numeros = [1,2,3,4,5];

// let cuadrados = numeros.map((numero)=>{
//   return numero**2 // Operador **x = numero elevado a la x
// })

// console.log(cuadrados);
// // Otra manera

// function calculaCuadrados(a){
//   return a*a;

// }

// let cuadradosFunction = numeros.map(calculaCuadrados);
// console.log(cuadradosFunction);

// Ejemplo

// const operar = (a,b,fnCallback) =>{
//   if(typeof a !== "number" || typeof b !== "number" ){
//     return fnCallback( new Error("Solo argumentos numericos"))
//   }
//   return fnCallback(null, a, b);
// }

// console.log(operar(10,5,(err,a,b)=>{
//   if(err){
//     return(err)
//   }
//   return a*b

// }));

// console.log(operar(10,"5",(err,a,b)=>{
//   if(err){
//     return(err)
//   }
//   return a*b

// }));

// // CALLBACK HELL

const operar = (a, b, fnCallback) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return fnCallback(new Error("Solo argumentos numericos"));
  }
  return fnCallback(null, a, b);
};

// (3x2 + 5x5) / 10  + 100 = 103.1

let resultado = operar(100, 0, (e, a, b) => {
  return (
    operar(10, 0, (e, a, b) => {
      return (
        operar(5, 5, (e, a, b) => {
          return (
            operar(3, 2, (e, a, b) => {
              return a * b;
            }) +
            a * b
          );
        }) / a
      );
    }) + a
  );
});



console.log(resultado);