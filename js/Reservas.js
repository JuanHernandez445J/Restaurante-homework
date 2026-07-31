const botonGuardar = document.getElementById("buttonReserva");

botonGuardar.addEventListener("click", function(event){

let tipoMesa = document.getElementById("tipoMesa").value;
let nombreCompleto = document.getElementById("nombreCompleto").value;
let fechaReserva = document.getElementById("fechaReserva").value;
let cantidadPersonas = document.getElementById("cantidadPersonas").value;
if(tipoMesa == "" || nombreCompleto == "" || fechaReserva == "" || cantidadPersonas == ""){
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
    console.log("Reserva realizada con éxito\n" + "Tipo de Mesa: " + tipoMesa + "\n" + "Nombre Completo: " + nombreCompleto + "\n" + "Fecha de Reserva: " + fechaReserva + "\n" + "Cantidad de Personas: " + cantidadPersonas);
}});