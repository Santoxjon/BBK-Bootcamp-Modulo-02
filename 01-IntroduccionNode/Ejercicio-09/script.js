// Crea un módulo propio con una función. La función esPar() devuelve “true”
// en caso de que el número sea par y “false” en caso contrario. 
// En el archivo index.js, genera un número aleatorio, llama a la función 
// esPar() y muestra el resultado de la función. 

let functions = require("./functions.js");

let random_number = ~~(Math.random() * 20);
let resultado = functions.isEven(random_number);
console.log(`Is ${random_number} an even number? ${resultado}`);