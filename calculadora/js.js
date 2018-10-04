document.addEventListener("DOMContentLoaded", function() {
	var operando1 = 0;
	var operando2 = 0;
	var operacion = "";
	var display = document.getElementById("display");

	function manejarClick(event) {
		var botonPresionado = event.target.innerHTML;

		if(botonPresionado === "+") {
			operando1 = parseInt(display.value);
			display.value = "";
			operacion = "suma";
		}

		else if(botonPresionado === "-") {
			operando1 = parseInt(display.value);
			display.value = "";
			operacion = "resta";
		}

		else if(botonPresionado === "*") {
			operando1 = parseInt(display.value);
			display.value = "";
			operacion = "multi";
		}

		else if(botonPresionado === "=") {
			operando2 = parseInt(display.value);

			if(operacion === "suma") {
				display.value = operando1 + operando2;
			}

			else if(operacion === "resta") {
				display.value = operando1 - operando2;
			}

			else if(operacion === "multi") {
				display.value = operando1 - operando2;
			}

		}
		else {
			display.value = display.value + event.target.innerHTML;
		}
	}
	var botones = document.getElementsByTagName("button");
	for (var i = 0; i < botones.length; i++) {
		botones[i].addEventListener("click", manejarClick);
	}
});