function validate(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var error_mensaje = document.getElementById("error_mensaje");
    
    error_mensaje.style.padding = "14px 0";
    
    var texto;
    if(nombre.length < 5){
      texto = "Porfavor ingresa tu Nombre";
      error_mensaje.innerHTML = texto;
      return false;
    }

    if(apellido.length < 5){
      texto = "Porfavor ingresa tu Nombre";
      error_mensaje.innerHTML = texto;
      return false;
    }

    if(isNaN(numero) || numero.length != 10){
      texto = "Porfavor ingrese un numero valido";
      error_mensaje.innerHTML = texto;
      return false;
    }
    
    if(email.indexOf("@") == -1 || email.length < 6){
      texto = "Porfavor Ingrese su Email";
      error_mensaje.innerHTML = texto;
      return false;
    }
    
    if(mensaje.length <= 40){
      texto = "Porfavor ingrese su mensaje (minimo 40caracteres)";
      error_mensaje.innerHTML = texto;
      return false;
    }
    alert("Consulta enviada, Muchas gracias !");
    return true;
  }