// Crea un módulo con el siguiente objeto:
// {
//  "array": [1,2,3],
//  "boolean": true,
//  "number": 123,
//  "object": {"a": "b","c": "d","e": "f"  },
//  "string": "Hello World"
// }
// Importa el módulo y muestra por consola el valor de la propiedad “boolean” y el atributo “c” del “object”

let objects = require("./functions.js");

let resultado = objects.whatever;
console.log(resultado.boolean + " " + resultado.object["c"]);