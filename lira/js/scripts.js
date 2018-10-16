document.addEventListener("DOMContentLoaded", function(){
	
	var juego = {
		nombre : " The Binnding of Isaac: Rebirth ",
		precio : " $329 ",
		creador : " Edmun Mc Millen ",
		genero : " Roguelike ",
		diaDeSalida : " 4 de noviembre de 2014 ",
		lenguajes : " Español e Ingles",
		descripcion : " The Binnding of Isaac: Rebirth es un roguelike de mazmorras generadas aleatoriamente en las cuales Isaac debera matar enemigos con sus lágrimas haciendoce más poderoso en el proceso "
	};

	var conjunto = [
		{imagen : "../media/game1.jpg"}
		{imagen : "../media/isaac1.jpg"},
		{imagen : "../media/isaac2.jpg"},
		{imagen : "../media/isaac3.jpg"},
		{imagen : "../media/isaac4.jpg"},
		{imagen : "../media/isaac5.jpg"},
		{imagen : "../media/isaac6.jpg"},
		{imagen : "../media/isaac7.jpg"},
		{imagen : "../media/isaac8.jpg"},
		{imagen : "../media/isaac9.jpg"},
		{imagen : "../media/isaac10.jpg"},
		{imagen : "../media/isaac11.jpg"},
		{imagen : "../media/isaac12.jpg"}
	];

	var titulo = document.getElementById("titulo");
	titulo.innerHTML = juego.nombre;

	var imagenPrincipal = document.getElementById("img");
	imagenPrincipal.innerHTML = "<img src='" + juego.imagenPrincipal + "'>";

	var galeriaImg = document.getElementById("listaImagenes");

	for (var i = 0; i < conjunto.length; i++) {
		galeriaImg.innerHTML = galeriaImg.innerHTML + "<li><img src='" + conjunto[i].imagen + "'></li>";
	}

});