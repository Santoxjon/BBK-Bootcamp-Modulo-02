// Escribe un módulo propio con una función que recibe por parámetro dos números y muestra por consola el menor de los dos.
// Impórtalo en un archivo index.js y muestra el resultado.
let operacion = require("./lowernumber.js");

let resultado = operacion.lowerNumber(69, 420);
console.log(resultado);