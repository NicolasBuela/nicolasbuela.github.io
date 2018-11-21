document.addEventListener("DOMContentLoaded", function(){
	var checkSegundoNombre = document.getElementById('tiene-segundo');
	var radioEstudiante = document.getElementById('estudiante');
	var	radioTerciario = document.getElementById('terciario');
	var inputSegundoNombre = document.getElementById('segundo-nombre');
	var	inputEdad = document.getElementById('edad');
	var divTituloWrapper = document.getElementById('titulo-wrapper');

	checkSegundoNombre.addEventListener("change", function(){
		if (checkSegundoNombre.checked) {
			inputSegundoNombre.removeAttribute("disabled");
		}
		else {
			inputSegundoNombre.setAttribute("disabled", true);
			inputSegundoNombre.value = "";
		}
	});

	radioEstudiante.addEventListener("change", function(){
		if (radioEstudiante.checked) {
			divTituloWrapper.style.display = "none";
		}
	});

	radioTerciario.addEventListener("change", function(){
		if (radioTerciario.checked) {
			divTituloWrapper.style.display = "block";
		}
	});

});