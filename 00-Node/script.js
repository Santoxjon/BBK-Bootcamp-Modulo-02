let operacion = require("./sum.js");
let yodasay = require('yodasay');

let resultado = operacion.sumar(4, 2);
console.log(resultado);

console.log(yodasay.say(
    { text: "Do or not, but there is no try" }
));