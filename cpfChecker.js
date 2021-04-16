//now os working
function checkCpf(cpf){
  var soma = 0
  var chCheck = false
    for(var d = 0;d < cpf.length;d++){
  if(cpf[d+1] && cpf[d] == cpf[d +1]){
  chCheck = true
  }else if ( cpf[d+1] && cpf[d] != cpf[d+1]){
  	chCheck = false
  }
  }
  console.log(chCheck)
  if(chCheck){
  	return false
  }
  console.log(chCheck)
  var verificardois = cpf[cpf.length - 1]
    var verificarum = cpf[cpf.length - 2]
console.log(verificardois,verificarum)
  
  var multiple = 10
  for(var d = 0;d < cpf.length - 2;d++){
   soma += parseInt(cpf[d]) * multiple
    multiple--
  }
  
  var resto = (soma * 10) % 11
  if(resto == 10){
  	resto = 0
  }
  if(resto != verificarum){
  	return false 
  }
 if(resto == 0 || resto == 1){
   primeirodigito = 0
 }else{
   primeirodigito = 11 - resto
 }
     multiple = 11
     soma = 0
      for(var d = 0;d < cpf.length - 1;d++){
   soma += parseInt(cpf[d]) * multiple
    multiple--
  }
   
resto = (soma * 10) % 11
    if( resto == 10){
    	resto = 0
    }
    if(resto != verificardois){
    	return false 
    }  
    
    return true
}
    
console.log(checkCpf('11111111111'))
