

//variaveis dos inputs
var binario = document.querySelector("#binario");
var decimal = document.querySelector("#decimal")
var btn = document.querySelector("#btn");

//desabilita botao
btn.disabled = true;

//cia um evento listener que escuta as mudanças do input
binario.addEventListener("keypress",function(e){
    //conteudo
    var conteudo = binario.value;
    //valida se o conteudo do input esta vazio
    if(conteudo !== null && conteudo !== '' ){

        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
});

//funcao para converter 
function converter(bin){

  
    //variavel para receber o valor decimal
    var decimal = 0;
    //laco para percorrer a variavel 
    for(var index = bin.length; index >= 0; index--){
       
            //calculo da convercao 2^index*bin.index
         decimal += Math.pow(2,index) * bin.substr(index,1);
        
    }

   
        return decimal;
    
   

}
//func do botao para chamar a funcao converter
btn.onclick = function(){
    decimal.value = converter(binario.value); 
};




