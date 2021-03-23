///modal del carrito///
$( document ).ready(function(){
    console.log("JQuery loaded");

    // var buttons = document.getElementsByTagName('button')
    // buttons era una lista
    // for o foreach 
    // element.addEventListeenr('click', funciont(){})

    // Acceso con tag element
    $("button").click(function(){
        console.log("Buttone pressed")
    });
     // Acceso con class name
    $(".btn-sm").click(function (){ 
        console.log("elimino un item");
        $("#cartModal").hide(); // acceso con ID
        
    });



});

function botonPresionado(){
    console.log("Buttone pressed");
}
function sumar(){

    var num1 = 5;
    var num2 = 8;
   suma = num1 + num2;
 }
