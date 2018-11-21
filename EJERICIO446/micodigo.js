document.addEventListener("DOMContentLoaded", function () {

    var checkSegundoNombre = document.getElementById("tiene-segundo");
    var inputSegundoNombre = document.getElementById("segundo-nombre");
    var radioEstudiante = document.getElementById("estudiante");
    var radioTerciarioCompleto = document.getElementById("terciario");
    var inputEdad = document.getElementById("edad");
    var tituloWrapper = document.getElementById("titulo-wrapper");


    checkSegundoNombre.addEventListener("change", function () {

        if (checkSegundoNombre.checked) {

            inputSegundoNombre.removeAttribute("disabled");
            // alert("El check se encuentra seleccionado ") 
        } else {
            // alert("el check se encuntra No seleccionado")
            inputSegundoNombre.setAttribute("disabled", true);
            inputSegundoNombre.value = "";
        }
    });

    inputEdad.addEventListener("change", function () {
        var edadStr = inputEdad.value;
        var edadNum = parseInt(edadStr);
    });

    radioEstudiante.addEventListener("change", function () {

        if (radioEstudiante.checked) {
            tituloWrapper.style.display = "none";
        }

    });

    radioTerciarioCompleto.addEventListener("change",function(){
        if (radioTerciarioCompleto.checked){
            tituloWrapper.style.display="block";
        }

    });



});
