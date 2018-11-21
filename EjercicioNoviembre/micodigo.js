document.addEventListener("DOMContentLoaded", function () {
var costoUnitario =150;
var campoCantidad= document.getElementById("cantidad");
var montoSubtotal = document.getElementById("subtotal");
var montoTotal= document.getElementById("total");

campoCantidad.addEventListener("change",function(){
var cantidad =campoCantidad.value;
cantidad = parseInt(cantidad);

var valorSubtotal=costoUnitario * cantidad;
var valorTotal = valorSubtotal * 1.22;

montoSubtotal.innerHTML = "$" + valorSubtotal;
montoTotal.innerHTML= "$" + valorTotal;


})


});
