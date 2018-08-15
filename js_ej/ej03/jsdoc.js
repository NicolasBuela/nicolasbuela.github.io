var numeroAleatorio = Math.ceil(Math.random() * 10);
var oportunidades = 3;
var acierto = false;

while(oportunidades > 0){
	alert("Ingresa un número, tienes " + oportunidades + " intentos");
	var numero = prompt("");
	if (numero == numeroAleatorio) {
		alert("Ganaste el número es " + numero);
		oportunidades == 0;
	}
	else {
		alert("El número no es " + numero);
	}
	oportunidades--;
	if (oportunidades <= 0 && acierto == false){
		alert("Perdiste el número era " + numeroAleatorio);
	}
}