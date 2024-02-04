let saludo = "Hola";
console.log(saludo, typeof saludo);

console.log(10, typeof 10);

console.log(true, typeof true
    );
    console.log(10n, typeof 10n);
console.log(Number.MAX_SAFE_INTEGER, typeof Number.MAX_SAFE_INTEGER); // Consntante = Numero maximo admitido de tipo number
console.log(Number.MIN_SAFE_INTEGER);

console.log([1,2,3,4,5], typeof [1,2,3,4,5]);
console.log({id: 1, nombre: "Tomasito"}, typeof {id: 1, nombre: "Tomasito"} );

let user = {name: "John", edad: 27};
let admin = user;

// admin.name = "Pepito";

console.log(user);

let usuario2 = {...user}  // Operador spread rompe la referencia de los objetos
console.log(usuario2);
usuario2.name = "TomasTissoni"
console.log(usuario2);
console.log(user);

console.table({user, usuario2})

// Spread de arrays

let numeros = [1,2,3,4,5];
let numeros2 = [6,7,8,9,10];

let allNumbers = [...numeros, ...numeros2];
console.log(allNumbers);

let sumandos = [9,14];

const suma = (x,y)=> x + y;

console.log(suma(...sumandos));

// Resto operator

const suma1= (a,b, ...restoValores)=>{
    console.log(a,b,...restoValores);


}


suma1(1,2,3,4,5,6,7)