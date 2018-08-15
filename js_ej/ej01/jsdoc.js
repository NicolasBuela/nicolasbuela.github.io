var arreglo 	= [23, 2, 30, 45, 13];
var menorNumero = arreglo[0];

for (var i = arreglo.length - 1; i >= 0; i--) {
 if (menorNumero > arreglo[i]) {
 	menorNumero = arreglo[i];
 }
}

alert("el menor numero es: " + menorNumero);