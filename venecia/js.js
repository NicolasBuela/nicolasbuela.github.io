document.addEventListener("DOMContentLoaded", function(event){
	var miForm = document.getElementById("miFormulario");
	miForm.addEventListener("submit", function(event) {
		var campoNombre = document.getElementById("nombre");
		var nombre = campoNombre.value;

		var apellido = document.getElementById("apellido").value;
		if (nombre === ""){
			campoNombre.style.borderWidth = "1px";
			campoNombre.style.borderColor = "red";
			campoNombre.style.borderStyle = "solid";

			var alertaNombre = document.getElementById("alertaNombre");
			alertaNombre.style.display = "inline";
			event.preventDefault();
		}else{
			campoNombre.style.border = "none";

			var alertaNombre = document.getElementById("alertaNombre");
			alertaNombre.style.display = "none";
		}
	});
});