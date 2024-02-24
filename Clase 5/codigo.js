// ASYNC / AWAIT

const suma = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Solo se aceptan argumentos numericos"));
      return;
    }
    resolve(a + b);
  });
};

const multiplica = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Solo se aceptan argumentos numericos"));
      return;
    }
    resolve(a * b);
  });
};

// ((3x4) + (5x3)) = 27

const entorno = async () => {
  let resultado = await multiplica(3, 4);
  let res2 = await multiplica(5, 3);
  let resultadoFinal = await suma(resultado, res2);
  console.log(resultadoFinal);
};

const entorno2 = async function () {
  let resultado = await multiplica(3, 4);
  let res2 = await multiplica(5, 3);
  let resultadoFinal = await suma(resultado, res2);
  console.log(resultadoFinal);
};

async function entorno3() {
  try {
    let resultado = await multiplica(3, "4");
    let res2 = await multiplica(5, 3);
    let resultadoFinal = await suma(resultado, res2);
    console.log(resultadoFinal);
  } catch (error) {
    console.log(error.message);
  }
}

entorno();
entorno2();
entorno3();

// FS PROMISES

const fs = require("fs");


let rutaArchivo = "./archivos/archivos.json";
let texto =
  "Yo ofrezco desnudas, vírgenes, intactas y sencillas, para mis delicias y el placer de mis amigos, estas noches árabes vividas, soñadas y traducidas sobre su tierra natal y sobre el agua Ellas me fueron dulces durante los ocios en remotos mares, bajo un cielo ahora lejano. Por eso las doy.";

// fs.promises.writeFile(rutaArchivo, texto).then(() => {
//   console.log("Archivo cargado con exito");
//   fs.promises.readFile(rutaArchivo, { encoding: "utf-8" }).then((res) => {
//     console.log(res);
//   });
// });

const app = async () => {
  await fs.promises.writeFile(rutaArchivo, texto);
  let datosArchivo = await fs.promises.readFile(rutaArchivo, {
    encoding: "utf-8",
  });
  console.log(datosArchivo);
  await fs.promises.appendFile(rutaArchivo, "Agregado de texto");
  console.log(datosArchivo);
   setTimeout(async () => {
    await  fs.promises.unlink(rutaArchivo);
    console.log("Archivo eliminado");
  }, 2000);
};

app();
