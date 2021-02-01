// Crea un módulo propio y declara una variable con tu nombre. Exporta esa variable, crea una carpeta llamada “app” y mete el
// archivo index.js ahí. Importa el módulo y muestra tu nombre por consola.
let name = require("../myname.js");

let resultado = name.myname;
console.log(resultado);