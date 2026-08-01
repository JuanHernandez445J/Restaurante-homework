const botonGuardar = document.getElementById("buttonlogin");

botonGuardar.addEventListener("click", function(event){

let tipodocumento = document.getElementById("tipoDocumento").value;
let numerodocumento = document.getElementById("numeroDocumento").value;
let contraseña = document.getElementById("contraseña").value;

if(tipodocumento.trim() == "" || numerodocumento.trim() == "" || contraseña.trim() == ""){
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Campos incompletos",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Campos incompletos");
}


else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(tipodocumento)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Tipo de Documento tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Tipo de Documento tiene que ser texto");
}

else if(!/^\d+$/.test(numerodocumento)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Numero de Documento tiene que ser Numeros",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Numero de Documento tiene que ser Numeros");
}

else{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Campos completos",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Inicio de sesión exitoso\n" + "Tipo de Documento: " + tipodocumento + "\n" + "Número de Documento: " + numerodocumento + "\n" + "Contraseña: " + contraseña);
}
});