document.addEventListener("DOMContentLoaded", function(){
	var compra = document.getElementById("btnCompra");
	var cerrar = document.getElementById("cerrar");
	compra.addEventListener("click", function(){
		var alert = document.getElementById("buyAlert");
		setTimeout(function(){
			alert.classList.add("visible");
		}, 3000);
	});
	cerrar.addEventListener("click", function(){
		var alert = document.getElementById("buyAlert");
		alert.classList.remove("visible");
	});
});