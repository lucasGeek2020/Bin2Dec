

//variaveis dos inputs
var binario = document.querySelector("#binario");
var decimal = document.querySelector("#decimal")


//funcao quando musar o valor input
binario.oninput = function(){

    document.addEventListener('keyup', logKey);
    function logKey(e) {
        console.log(e.code)
       if(e.code !== "Digit1" && e.code !== "Numpad0" && e.code !== "Digit0" && e.code !== "Numpad1"){
            console.log("náo é binario");
        }
      }
    //validar binario
    /*
    if(binario.value == 1){
        console.log("náo é binario")
    }
    */
}




