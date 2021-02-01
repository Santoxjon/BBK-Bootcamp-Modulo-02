// Escribe un módulo con una función que reciba un array de números y lo
// muestre en pantalla desde la primera posición hasta la última. 
// Después escribe otro módulo conuna función que reciba un array de números 
// y lo muestre en pantalla desde la última posición a la primera.
// Crea un array y pásalo a cada una de las funciones.

let functions = require("./functions.js");
let more_functions = require("./morefunctions.js");

let array = Array.from({ length: 20 }, (_, i) => i + 1);
functions.showArray(array);
more_functions.showArrayBackwards(array);