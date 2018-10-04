function multiplicacion (param1, param2) {
	var resultado = param1 * param2;
	return resultado;
}
function divicion (param1, param2) {
	var resultado = param1 / param2;
	return resultado;
}
function suma (param1, param2) {
	var resultado = param1 + param2;
	return resultado;
}
function resta (param1, param2) {
	var resultado = param1 - param2;
	return resultado;
}

var calc = true, mul = true, div = true, sum = true, res = true, done = false;

alert ("Bienvenido a mi calculadora en js v1.0");

do {
	alert ("Ingrese un número");
	var num1 = prompt ("");
	alert ("Ingrese un segundo número");
	var num2 = prompt ("");
	done = false;
	alert ("Ingrese la acción a realizar con esos números, m para multiplicar, d para dividir, s para sumar, r para restar");
	var opc = prompt ("");
	switch (opc){
		case 'm':
			do {
				alert ("La multiplicación de estos úmeros es: " + multiplicacion (num1, num2));
				alert ("Desea hacer otra acción? y/n");
				var opc = prompt("");
				if (opc == "n") {
					mul == false;
				}
			} while (mul == true);
			done = true;
		break;
		case 'd':
			do {
				alert ("La divición de estos úmeros es: " + divicion (num1, num2));
				alert ("Desea hacer otra acción? y/n");
				var opc = prompt("");
				if (opc == "n") {
					div	== false;
				}
			} while (div == true);
			done = true;
		break;
		case 's':
			do {
				alert ("La suma de estos úmeros es: " + suma (num1, num2));
				alert ("Desea hacer otra acción? y/n");
				var opc = prompt("");
				if (opc == "n") {
					sum == false;
				}
			} while (sum == true);
			done = true;
		break;
		case 'r':
			do {
				alert ("La resta de estos úmeros es: " + resta (num1, num2));
				alert ("Desea hacer otra acción? y/n");
				var opc = prompt("");
				if (opc == "n") {
					res == false;
				}
			} while (res == true);
			done = true;
		break;
		default:
			alert ("Esa opción no existe, intente con otra");
		break;
	}
	if (done = true){
		alert ("Desea hacer otra acción? y/n");
		var opc = prompt("");
		if (opc == "n") {
			calc == false;
		}
	}
} while (calc == true);