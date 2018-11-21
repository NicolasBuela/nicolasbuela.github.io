document.addEventListener("DOMContentLoaded", function(){

	var titulo = document.getElementById("titulo");
	titulo.innerHTML = juego.nombre;

	var imagenPrincipal = document.getElementById("img");
	imagenPrincipal.innerHTML = "<img src='" + juego.imagenes[0] + "' id='imagenGrande'>";
	var imagenGrande = document.getElementById("imagenGrande");

	var galeriaImg = document.getElementById("listaImagenes");

	for (var i = 0; i < juego.imagenes.length; i++) {
		galeriaImg.innerHTML = galeriaImg.innerHTML + "<li><img src='" + juego.imagenes[i] + "' class='imagenJuego'></li>";
	}

	var imagenSlideShow = document.getElementsByClassName("imagenJuego");
	for (var i = 0; i < imagenSlideShow.length; i++) {
		imagenSlideShow[i].addEventListener("click", function(event){
			var imagen = event.target;
			var ruta = imagen.getAttribute("src");
			imagenGrande.setAttribute("src", ruta);
		});
	}

	if (screen.width < screen.height) {
		var div = document.getElementById("info-portrait");
		div.innerHTML = juego.descripcion;
	}
	else {
		var div = document.getElementById("info-landscape");
		div.innerHTML = juego.descripcion;
	}

	document.getElementById("precio").innerHTML = juego.precio;
	document.getElementById("genero").innerHTML = juego.genero;
	document.getElementById("lenguages").innerHTML = juego.lenguages;
	document.getElementById("nombreCreador").innerHTML = juego.creador;
	document.getElementById("fechaSalida").innerHTML = juego.diaDeSalida;
});