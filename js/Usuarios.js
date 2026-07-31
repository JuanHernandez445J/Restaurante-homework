const botonGuardar = document.getElementById("buttonUsuario");

botonGuardar.addEventListener("click", function(event){

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let tipoDocumento = document.getElementById("tipoDocumento").value;
let numeroDocumento = document.getElementById("numeroDocumento").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let genero = document.getElementById("genero").value;
let cargo = document.getElementById("cargo").value;
let fechaNacimiento = document.getElementById("fechaNacimiento").value;
let contraseña = document.getElementById("contraseña").value;

if(nombre == "" || apellido == "" || tipoDocumento == "" || numeroDocumento == "" || telefono == "" || correo == "" || genero == "" || cargo == "" || fechaNacimiento == "" || contraseña == "")
{
     Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Campos incompletos",
        showConfirmButton: false,
        timer: 1500
        });
    console.log("Campos incompletos");
}
else{
   Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Campos completos",
        showConfirmButton: false,
        timer: 1500
   });
    console.log("Usuario registrado con éxito\n" + "Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Tipo de Documento: " + tipoDocumento + "\n" + "Número de Documento: " + numeroDocumento + "\n" + "Teléfono: " + telefono + "\n" + "Correo: " + correo + "\n" + "Género: " + genero + "\n" + "Cargo: " + cargo + "\n" + "Fecha de Nacimiento: " + fechaNacimiento);
}});