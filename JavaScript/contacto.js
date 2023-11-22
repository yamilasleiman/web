var modal = document.getElementById("modalExito");
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var consulta = document.getElementById("consulta").value;
    
    var errores = [];

    // Validar nombre y apellido
    if (nombre.trim() === "") {
      errores.push("El nombre y apellido no puede estar vacío.");
    }
    
    // Validar correo electrónico con expresión regular
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      errores.push("Ingresa un correo electrónico válido.");
    }
    
    // Validar formato de teléfono si se ingresa
    if (telefono.trim() !== "") {
      var telefonoRegex = /^\d{4}-\d{4}$/;
      if (!telefonoRegex.test(telefono)) {
        errores.push("El formato del teléfono debe ser 1234-5678.");
      }
    }
    
    // Validar límite de caracteres en consulta
    if (consulta.length > 1000) {
      errores.push("La consulta no puede exceder los 1000 caracteres.");
    }

    if (errores.length > 0) {
      mostrarErrores(errores);
      return false;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    // Aquí puedes agregar la lógica para enviar el formulario a través de una solicitud AJAX o realizar alguna otra acción necesaria
  // Si todas las validaciones son correctas, mostrar el modal
    modal.style.display = "block";
    document.body.classList.add("modal-open");
    return false;
  }

  function mostrarErrores(errores) {
    var erroresDiv = document.getElementById("errores");
    erroresDiv.innerHTML = "";

    errores.forEach(function(error) {
      var errorP = document.createElement("p");
      errorP.classList.add("error");
      errorP.textContent = error;
      erroresDiv.appendChild(errorP);
    });
  }

  function contarCaracteres() {
    var consulta = document.getElementById("consulta");
    var conteoCaracteres = document.getElementById("conteo-caracteres");
    var caracteresIngresados = consulta.value.length;
    var caracteresRestantes = 1000 - caracteresIngresados;

    conteoCaracteres.textContent = caracteresIngresados + " caracteres ingresados/ " + caracteresRestantes + " restantes";
  }
  enlaceCerrar.addEventListener("click", function() {
    modal.style.display = "none";
  });
