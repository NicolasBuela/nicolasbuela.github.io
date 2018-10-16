document.addEventListener("DOMContentLoaded", function(){
	var url = "https://www.scaggiano.com.uy/estudiantes.json";
	var pedido = new XMLHttpRequest();
	pedido.open("GET", url);
	pedido.responseType = "json";
	pedido.send();

	var personas = [];

	var cuerpoTabla = document.getElementById("cuerpoTabla");

	pedido.onload = function(){
		personas = pedido.response;
		for (var i = 0; i <= personas.length; i++) {
			cuerpoTabla.innerHTML = cuerpoTabla.innerHTML + "<tr><td>" + personas[i].nombre + "</td><td>" + personas[i].apellido + "</td><td>" + personas[i].edad + "</td><td>" + personas[i].email + "</td><td><img width='100px' height='90px' src='" + personas[i].foto + "'></td></tr>";
		}
	}
});