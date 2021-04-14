
//13/04/2021 - 22:03 Auto Cpf Formater to uses with my react front end app. This a basic implementation of a cpf formater,or whatever type of schema word


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length)
}
function formatCPf(texto,format){
var palavra = format
var word 
console.log('format',format,format.length)
  console.log('cpf',texto,texto.length)
var ff = texto.length -1
     for(var p = format.length;p >= 0;p--){
       if(format[p] == 'x'){
        if(texto[ff]){
        palavra = palavra.replaceAt(p,texto[ff])    
        }
     if(ff >= 0){
    ff--     
     }
  }
  }
  const CheckIsNumeric = () => {
var checkNumber = [0,1,2,3,4,5,6,7,8,9]
for(var i =0;i < checkNumber.length;i++){
  if(palavra.includes(checkNumber[i])){
   return true
  }
}
    return false
}
  if(CheckIsNumeric()){
palavra  = palavra.replace(/x/g,'0')    
  }
  return palavra
}
  
  
console.log(formatCPf('8089790','xxx.xxx.xxx-xx'))




