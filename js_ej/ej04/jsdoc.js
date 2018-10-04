var terminar = false;
while (terminar == false) {
	alert("Ingrese una palabra");
	var palabra = prompt("");
	var cut = palabra.substr(palabra.length - 3);
	if (palabra.lenght <= 3) {
		alert("La palabra no es válida, desea ingresar otra? y/n");
		var opc = prompt("");
		if (opc = n) {
			terminar = true;
		}
	}
	else {
		alert("Su palabra es: " + cut + palabra + cut);
	}
}