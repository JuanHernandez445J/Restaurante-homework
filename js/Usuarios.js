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
let hoy = new Date();

if(nombre.trim() === "" || apellido.trim() === "" || tipoDocumento.trim() === "" || numeroDocumento.trim() === "" || telefono.trim() === "" || correo.trim() === "" || genero.trim() === "" || cargo.trim() === "" || fechaNacimiento.trim() === "" || contraseña.trim() === "")
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

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre tiene que ser Texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Nombre tiene que ser Texto");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(apellido)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Apellido tiene que ser Texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Apellido tiene que ser Texto");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(tipoDocumento)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Tipo de Documento tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Tipo de Documento tiene que ser texto");
}

else if(!/^\d+$/.test(numeroDocumento)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Numero de Documento tiene que ser Numeros",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Numero de Documento tiene que ser Numeros");
}

else if(!/^\d+$/.test(telefono)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Telefono tiene que ser Numeros",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Telefono tiene que ser Numeros");
}

else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Correo electrónico no válido",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Correo electrónico no válido");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(genero)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Genero tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Genero tiene que ser texto");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(cargo)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Cargo tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Cargo tiene que ser texto");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(genero)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Genero tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Genero tiene que ser texto");
}

else if (fechaNacimiento > hoy) {
    Swal.fire({
        icon: "error",
        title: "La fecha de nacimiento no puede ser futura",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("La fecha de nacimiento no puede ser futura");
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