document.addEventListener("DOMContentLoaded", function(){
	var costoUnitario = 329;
	var campoCantidad = document.getElementById("cantidad");
	var montoSubTotal = document.getElementById("subTotal");
	var montoImpuesto = document.getElementById("impuesto");
	var montoTotal = document.getElementById("total");
	var valorTotal;

	campoCantidad.addEventListener("change", function(){
		var cantidad = campoCantidad.value;
		cantidad = parseInt(cantidad);

		var valorSubTotal = costoUnitario * cantidad;
		var impuesto = (valorSubTotal * 22) / 100;
		valorTotal = valorSubTotal + impuesto;

		montoSubTotal.innerHTML = "$" + valorSubTotal.toFixed(2);
		montoImpuesto.innerHTML = "$" + impuesto.toFixed(2);
		montoTotal.innerHTML = "$" + valorTotal.toFixed(2);
	});

	var selectEnvio = document.getElementById("envio");
	var costoEnvio = document.getElementById("costoEnvio");

	selectEnvio.addEventListener("change", function(){
		var porComun = 0.5;
		var porEspecial = 2;
		var porPremium = 5;
		var totalidad;

		if (selectEnvio.value == "comun") {
			var valorDeEnvio = (valorTotal * porComun) / 100;
			costoEnvio.innerHTML = "$" + valorDeEnvio.toFixed(2);
			totalidad = valorTotal + valorDeEnvio;
			montoTotal.innerHTML = "$" + totalidad.toFixed(2);
		}
		else if (selectEnvio.value == "especial") {
			var valorDeEnvio = (valorTotal * porEspecial) / 100;
			costoEnvio.innerHTML = "$" + valorDeEnvio.toFixed(2);
			totalidad = valorTotal + valorDeEnvio;
			montoTotal.innerHTML = "$" + totalidad.toFixed(2);
		}
		else if (selectEnvio.value == "premium") {
			var valorDeEnvio = (valorTotal * porPremium) / 100;
			costoEnvio.innerHTML = "$" + valorDeEnvio.toFixed(2);
			totalidad = valorTotal + valorDeEnvio;
			montoTotal.innerHTML = "$" + totalidad.toFixed(2);
		}
		else {
			costoEnvio.innerHTML = "$0";
			montoTotal.innerHTML = "$" + valorTotal;
		}
	});

	var radioDigital = document.getElementById("digital");
	var	radioFisico = document.getElementById("fisico");
	var wrapEnvio = document.getElementById("wrap");
	var inputDireccion = document.getElementById("direccion");
	var selectEnvio = document.getElementById("envio");
	var costoEnvio = document.getElementById("costoEnvio");

	radioDigital.addEventListener("change", function(){
		if (radioDigital.checked) {
			wrapEnvio.style.display = "none";
			inputDireccion.value = "";
			selectEnvio.value = "default";
			costoEnvio.innerHTML = "$0";
			montoTotal.innerHTML = "$" + valorTotal.toFixed(2);
		}
	});

	radioFisico.addEventListener("change", function(){
		if (radioFisico.checked) {
			wrapEnvio.style.display = "block";
		}
	});

	var cancelar = document.getElementById("cancelar");
	var selectMetodo = document.getElementById("metodo");
	var campoNombre = document.getElementById("nombre");
	var campoEmail = document.getElementById("email");

	cancelar.addEventListener("click", function(){
		campoCantidad.innerHTML = "";
		selectMetodo.value = "default";
		campoNombre.innerHTML = "";
		campoEmail.innerHTML = "";
		radioFisico.checked;
		inputDireccion.innerHTML = "";
		selectEnvio.value = "default";
	});

	var compra = document.getElementById("btnCompra");
	var emailVerify = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	function validateEmail(mail){
		if (mail.value.match(emailVerify)) {
			return true;
		}
		else {
			return false;
		}
	}

	compra.addEventListener("click", function(){
		if (campoCantidad.value == campoCantidad.defaultValue) {
			alert("Ingrese una cantidad");
			event.preventDefault();
		}
		else if (selectMetodo.value == "default") {
			alert("Ingrese un método");
			event.preventDefault();
		}
		else if (campoNombre.value == campoNombre.defaultValue) {
			alert("Ingrese su nombre");
			event.preventDefault();
		}
		else if (campoEmail.value == campoEmail.defaultValue) {
			alert("Ingrese su e-mail");
			event.preventDefault();
		}
		else if (validateEmail(campoEmail) == false) {
			alert("Igrese un e-mail válido");
			event.preventDefault();
		}
		else if (radioFisico.checked) {
			if (inputDireccion.value == inputDireccion.defaultValue) {
				alert("Ingrese su dirección")
				event.preventDefault();
			}
			else if (selectEnvio.value == "default") {
				alert("Ingrese un método de envio")
				event.preventDefault();
			}
			else {
				alert("Gracias Por Su Compra!!!");
			}
		}
		else {
			alert("Gracias Por Su Compra!!!");
		}
	});
});