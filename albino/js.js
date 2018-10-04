document.addEventListener("DOMContentLoaded", function(event){
	var objetoPersona = { nombre:"Nicolás", apellido: "Buela", edad: "17" };

	var spanNombre = document.getElementById("nombre");
	spanNombre.innerText = objetoPersona.nombre;

	var spanApellido = document.getElementById("apellido");
	spanApellido.innerText = objetoPersona.apellido;

	var spanEdad = document.getElementById("edad");
	spanEdad.innerText = objetoPersona.edad;

	var conjuntoPersonas = [
		{ nombre:"Nicolás", apellido: "Buela", edad: "17" },
		{ nombre:"Pedro", apellido: "Peerez", edad: "22" },
		{ nombre:"Eliana", apellido: "Gutierrez", edad: "23" }
	];
});