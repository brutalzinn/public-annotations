//13/04/2021 - 22:03 Auto Cpf Formater to uses with my react front end app. This a basic implementation of a cpf formater,or whatever type of schema word
function formatFactory(texto, format, autoremov = true, tipo = true, optional = '0') {
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length)
    }
    var palavra = format
    if (autoremov) {
        texto = texto.replace(/[^\d]/g, "");
    }
    var ff = texto.length - 1
    for (var p = format.length; p >= 0; p--) {
        if (format[p] == 'x') {
            if (texto[ff]) {
                palavra = palavra.replaceAt(p, texto[ff])
            }
            if (ff >= 0) {
                ff--
            }
        }
    }
    if (tipo) {
        palavra = palavra.replace(/x/g, optional)
    }
    return palavra
}
console.log(formatFactory('8089790', 'xxx.xxx.xxx-xx'))
