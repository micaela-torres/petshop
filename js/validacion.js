function validarFormulario() {
  // Obtener los valores ingresados por el usuario y .trim()
  let dueño = document.getElementById("nombre").value.trim();
  let tipo = document.getElementById("tipodemascota").value.trim();
  let mascota = document.getElementById("nombremascota");
  let razadelamascota = document.getElementById("raza").value.trim();
  let servivio = document.getElementById("servicio").value.trim();
  let telefono = document.getElementById("tel").value.trim();

  // Verificar si algún campo está en blanco
  if (dueño === "" || mascota === "" || tipo === "" || telefono === "" || razadelamascota === "" || servivio === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
  }

  // Verificar si el nombre contiene solo caracteres alfabéticos y espacios

  for (var i = 0; i < dueño.length; i++) {
    var charCode = dueño.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'Nombre del dueño' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }
  for (var i = 0; i < razadelamascota.length; i++) {
    var charCode = razadelamascota.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'Raza' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }
  for (var i = 0; i < mascota.length; i++) {
    var charCode = mascota.charCodeAt(i);
    if (
      !(
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 97 && charCode <= 122) ||
        charCode === 32
      )
    ) {
      alert(
        "El campo 'Nombre de la mascota' solo puede contener caracteres alfabéticos y espacios."
      );
      return false;
    }
  }

  // Verificar el telefono
  if (telefono.length !== 10) {
    alert(
      "El campo 'telefono' debe contener exactamente 10 dígitos numéricos."
    );
    return false;
  }
  for (var j = 0; j < telefono.length; j++) {
    var digit = telefono.charAt(j);
    if (digit < "0" || digit > "9") {
      alert("El campo 'telefono' solo puede contener dígitos numéricos.");
      return false;
    }
  }

  // Si todas las validaciones son exitosas, enviar el formulario
  alert("Formulario enviado correctamente.");
  return true;
}
