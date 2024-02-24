let numeros = [1,2,3,4,5];

let cuadrados = numeros.map(numero => numero**2)
 
console.log(numeros.reduce((acc, numero)=>{
   return acc + numero
}, 0))





let numero = 10;
let cuadrado = Math.pow(numero,2);
console.log(cuadrado);
cuadrado = 10**2
console.log(cuadrado)

// Includes

let nombres = ["Martin", "Javier", "German", "Paula", "Ana"];
console.log(nombres.includes("Ana"));

// Metodo EVERY

console.log(numeros.every(numero=> numero > 3));
console.log(numeros.every(numero=> numero < 100));

// Recorre todos los elementos y devolvera true si TODOS los elementos del array cumplen la condicion, caso contrario retornara false.

let propiedadesValidasUsuario = ["nombre", "apellido", "edad", "email"];
const modificaUsuario = (idUsuario, datos={})=>{
    let propiedadesQueQuieroModificar = Object.keys(datos);
    let ok = propiedadesQueQuieroModificar.every(prop=> propiedadesValidasUsuario.includes(prop));
    if(!ok){
        console.log("Datos a modificarse no son validos");
        return
    }else{
        console.log("Datos modificados con exito")
    }

    let valores = Object.values(datos)
    let entradas = Object.entries(datos)
    console.log(propiedadesQueQuieroModificar, valores, entradas);
}

modificaUsuario(100, {nombre: "Juan", colorDePelo: "negro", peso:90});
modificaUsuario(100, {nombre: "Juan", apellido:"Gutierrez"});