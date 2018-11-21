document.addEventListener("DOMContentLoaded", function(){
	var costoUnitario = 150;
	var campoCantidad = document.getElementById("cantidad");
	var montoSubTotal = document.getElementById("subTotal");
	var montoTotal = document.getElementById("total");

	campoCantidad.addEventListener("change", function(){
		var cantidad = campoCantidad.value;
		cantidad = parseInt(cantidad);

		var valorSubTotal = costoUnitario * cantidad;
		var valorTotal = valorSubTotal * 1.22;

		montoSubTotal.innerHTML = "$" + valorSubTotal;
		montoTotal.innerHTML = "$" + valorTotal;
	});
});