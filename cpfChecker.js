//Validador de cpf 17/04/2021 - cálculo baseado nas informações contidas em http://clubes.obmep.org.br/blog/a-matematica-nos-documentos-cpf/
function checkCpf(cpf) {
    var chCheck = false
    for (var d = 0; d < cpf.length; d++) {
        if (cpf[d + 1] && cpf[d] == cpf[d + 1]) {
            chCheck = true
        } else if (cpf[d + 1] && cpf[d] != cpf[d + 1]) {
            chCheck = false
        }
    }
    if (chCheck) {
        return false
    }
    var digitodois = cpf[cpf.length - 1]
    var digitoum = cpf[cpf.length - 2]
    const verifyNumber = (multiple, digit = 2) => {
        var soma = 0
        for (var d = 0; d < cpf.length - digit; d++) {
            soma += parseInt(cpf[d]) * multiple
            multiple--
        }
        return (soma * 10) % 11
    }
    var resto = verifyNumber(10)
    if (resto == 10) {
        resto = 0
    }
    if (resto != digitoum) {
        return false
    }
    resto = verifyNumber(11, 1)
    if (resto == 10) {
        resto = 0
    }
    if (resto != digitodois) {
        return false
    }
    return true
}
console.log(checkCpf('000000000'))
