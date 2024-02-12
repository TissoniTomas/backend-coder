// // FS SINCRONO

// const fs = require("fs");
// // Sync en el metodo de fs significa que los procesos seran sincronos
// let ruta = "../Clase 4/archivos/archivoSincrono.txt"
// let texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper justo vel velit fermentum, ut tincidunt magna dapibus. Sed nec turpis ut libero rhoncus pharetra nec nec quam. Vivamus euismod nunc at ultrices suscipit. Nam commodo, tortor vel faucibus lobortis, enim mi pretium lectus, nec fermentum eros ligula ut est. Integer condimentum diam et commodo posuere. Nullam ac lorem eu augue efficitur dapibus. Cras dapibus mauris nec orci bibendum, sed eleifend odio venenatis. Sed eget nulla in odio dictum efficitur.

// Vestibulum sit amet tortor quis quam tincidunt gravida sit amet vitae risus. In hac habitasse platea dictumst. Ut sit amet bibendum nisi, nec rhoncus risus. Aliquam erat volutpat. Morbi malesuada sem ut nisl sollicitudin rutrum. Maecenas at nisl consequat, consequat ipsum eget, molestie ipsum. Pellentesque non mi in nisi eleifend fermentum. Maecenas id dapibus justo. Vivamus vitae vehicula dui. Nam nec efficitur orci. Sed at lorem eget lacus blandit tempus. Vivamus ultrices lectus et lacinia vestibulum. Etiam efficitur ex a tortor gravida malesuada. Suspendisse potenti. Sed feugiat, eros et lobortis aliquet, augue nisi bibendum lacus, id aliquam ex orci sed purus. Curabitur elementum nisl nisi, eu fermentum nunc varius ac.`

// fs.writeFileSync(ruta,texto,{encoding: "utf-8"}); // encoding: Tipo de codificacion del texto trabajado

// let leerArchivo = fs.readFileSync(ruta, {encoding:"utf-8"}); // Ruta de archivo + codificacion necesaria
// console.log(leerArchivo);

// if(!fs.existsSync(ruta)){ // Buscara si el archivo espeficado como argumento exista
//     console.log("Error: Not found");
//     return
// }
// console.log("Archivo cargado con exito");

// fs.appendFileSync(ruta,"\n\n\n Lorem ipsum"); // Agrega texto al archivo especificado en el primer parametro

// fs.unlinkSync(ruta); // Elimina el archivo especifico de la ruta

// // FS CALLBACKS

// const fs = require("fs");
// const { text } = require("stream/consumers");

// let rutaArchivo = "../Clase 4/archivos/archivo.txt";
// let texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper justo vel velit fermentum, ut tincidunt magna dapibus. Sed nec turpis ut libero rhoncus pharetra nec nec quam. Vivamus euismod nunc at ultrices suscipit. Nam commodo, tortor vel faucibus lobortis, enim mi pretium lectus, nec fermentum eros ligula ut est. Integer condimentum diam et commodo posuere. Nullam ac lorem eu augue efficitur dapibus. Cras dapibus mauris nec orci bibendum, sed eleifend odio venenatis. Sed eget nulla in odio dictum efficitur. 

// Vestibulum sit amet tortor quis quam tincidunt gravida sit amet vitae risus. In hac habitasse platea dictumst. Ut sit amet bibendum nisi, nec rhoncus risus. Aliquam erat volutpat. Morbi malesuada sem ut nisl sollicitudin rutrum. Maecenas at nisl consequat, consequat ipsum eget, molestie ipsum. Pellentesque non mi in nisi eleifend fermentum. Maecenas id dapibus justo. Vivamus vitae vehicula dui. Nam nec efficitur orci. Sed at lorem eget lacus blandit tempus. Vivamus ultrices lectus et lacinia vestibulum. Etiam efficitur ex a tortor gravida malesuada. Suspendisse potenti. Sed feugiat, eros et lobortis aliquet, augue nisi bibendum lacus, id aliquam ex orci sed purus. Curabitur elementum nisl nisi, eu fermentum nunc varius ac.`;

// fs.writeFile(rutaArchivo, texto, (err) => {
//   // writeFile sobreescribe el archivo anterior si es que existiese.
//   if (err) {
//     console.log(`Error: ${err.message}`);
//     return;
//   }
//   console.log("Archivo generado con exito");

//   // Habria que asegurarse de que writeFile haya concluido para poder ejecutar el readFile, puesto que este podria terminar antes que el writeFile y asi leer el archivo de manera incompleta. Para eso se lo incluye dentro del writeFile puesto que las ordenes dentro del callback sera sincrono
//   fs.readFile(rutaArchivo, { encoding: "utf-8" }, (err, resultado) => {
//     if (err) {
//       console.log(`Error: ${err.message}`);
//       return;
//     }

//     console.log(resultado);

//     fs.appendFile(rutaArchivo, "\n\n Agregado de texto", (err) => {
//       if (err) {
//         console.log(`Error: ${err.message}`);
//       }
//       console.log(`Archivo agregado con exito`);
//     });
//     setTimeout(() => {
//       fs.unlink(rutaArchivo, (e) => {
//         if (e) {
//           console.log(`Error: ${e.message}`);
//         }

//         console.log(`Archivo borrado con exito`);
//       });
//     }, 3000);
//   });
// });
// // OBJETO JSON

// const fs = require ("fs");

// let rutaArchivo = "./archivos/archivo.json";
// let heroes = [
//     {
//       nombre: "Iron Man",
//       superpoderes: ["volar", "disparar rayos repulsores", "inteligencia sobrehumana"],
//       actor: "Robert Downey Jr."
//     },
//     {
//       nombre: "Spider-Man",
//       superpoderes: ["trepar paredes", "sentido arácnido", "agilidad sobrehumana"],
//       actor: "Tom Holland"
//     },
//     {
//       nombre: "Black Widow",
//       superpoderes: ["experta en combate cuerpo a cuerpo", "maestría en espionaje"],
//       actor: "Scarlett Johansson"
//     },
//     {
//       nombre: "Captain America",
//       superpoderes: ["fuerza sobrehumana", "agilidad", "resistencia"],
//       actor: "Chris Evans"
//     },
//     {
//       nombre: "Thor",
//       superpoderes: ["control sobre el trueno", "fuerza sobrehumana", "longevidad"],
//       actor: "Chris Hemsworth"
//     }
//   ];

  
//  fs.writeFileSync(rutaArchivo, JSON.stringify(heroesMap, null, 5)); // stringify va de objeto javascript a texto plano
//   // Replacer : En este caso es null, de ponerle un array con el nombre de claves de los objetos, estos se filtraran por los valores que le indicase, por ej: ["nombre", "actor"]

//   let datos=  JSON.parse(fs.readFileSync(rutaArchivo, {encoding:"utf-8"}));

//   console.log(datos);

// // PROMESAS

const suma = (a,b)=>{

    new Promise((resolve,reject)=>{
        if(typeof a !== "number" || typeof b !== "number"){
            reject(new Error ("Solo se aceptan argumentos numericos"));
            return
            
        }
        resolve(a + b);
    })
    
    .then((res)=>{  console.log(res + 10)})
    .catch((err)=>{console.log(err)})
    .finally(()=>{console.log("Finalizacion de funcion")});
}

suma(5,5);