var arreglo = [];
var numero = 0;
var promedio = 0;

//for (var i arreglo.length; i >= 0; i++) {
//	arreglo[i] = numero;
//	numero += 2;
//}

for (var i = 0; i <= 50; i++) {
	arreglo.push(i * 2);
}

for (var i = arreglo.length - 1; i >= 0; i--) {
	promedio += arreglo[i];
}

promedio /= 50;

alert("el promedio es: " + promedio);