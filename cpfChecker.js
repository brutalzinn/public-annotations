//this is not working now. I'm developing at now.

function checkCpf(cpf){
  var soma = 0
  var verificardois = cpf[cpf.length - 1]
    var verificarum = cpf[cpf.length - 2]

  console.log(verificarum)
  var multiple = 10
  for(var d = 0;d < cpf.length - 2;d++){
   soma += parseInt(cpf[d]) * multiple
    multiple--
  }
  var resto = soma - (11* (Math.floor(soma / 11)))
console.log(resto)
 if(resto == 0 || resto == 1){
   primeirodigito = 0
 }else{
   primeirodigito = 11 - resto
 }
     multiple = 11
      for(var d = 0;d < cpf.length - 2;d++){
   soma += parseInt(cpf[d]) * multiple
    multiple--
  }
    
    
 console.log('primeirodigito verificador',primeirodigito)
}
    
 checkCpf('34485861023')
