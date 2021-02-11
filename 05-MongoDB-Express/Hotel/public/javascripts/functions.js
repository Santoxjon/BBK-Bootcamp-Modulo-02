module.exports = {
    dniL: function dniL(numeros) {
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        return letras.charAt(numeros % 23);
    }
}