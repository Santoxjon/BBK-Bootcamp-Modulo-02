// Escribe un módulo propio con una función que devuelva la longitud de un string que recibe como parámetro. Impórtalo en el
// archivo index.js y muestra por consola el resultado.
let stringFunctions = require("./stringlength.js");

let resultado = stringFunctions.stringlength("Jon");
console.log(resultado);