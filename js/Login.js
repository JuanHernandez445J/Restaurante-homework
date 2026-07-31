const botonGuardar = document.getElementById("buttonlogin");

botonGuardar.addEventListener("click", function(event){

let tipodocumento = document.getElementById("tipoDocumento").value;
let numerodocumento = document.getElementById("numeroDocumento").value;
let contraseña = document.getElementById("contraseña").value;

if(tipodocumento == "" || numerodocumento == "" || contraseña == ""){
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
    console.log("Inicio de sesión exitoso\n" + "Tipo de Documento: " + tipodocumento + "\n" + "Número de Documento: " + numerodocumento + "\n" + "Contraseña: " + contraseña);
}
});