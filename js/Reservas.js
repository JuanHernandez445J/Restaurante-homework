const botonGuardar = document.getElementById("buttonReserva");

botonGuardar.addEventListener("click", function(event){

let tipoMesa = document.getElementById("tipoMesa").value;
let nombreCompleto = document.getElementById("nombreCompleto").value;
let fechaReserva = document.getElementById("fechaReserva").value;
let fecha = new Date(fechaReserva);
let cantidadPersonas = document.getElementById("cantidadPersonas").value;
let hoy = new Date()
hoy.setHours(0, 0, 0, 0);
if(tipoMesa.trim() === "" || nombreCompleto.trim() === "" || fechaReserva.trim() === "" || cantidadPersonas.trim() === ""){
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Campos incompletos",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Campos incompletos");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(tipoMesa)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Tipo de Mesa tiene que ser Texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Tipo de Mesa tiene que ser Texto");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreCompleto)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre Completo tiene que ser Texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Nombre Completo tiene que ser Texto");
}

else if (fecha < hoy) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "La fecha de reserva no puede ser anterior a hoy",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("La fecha de reserva no puede ser anterior a hoy");
}

else if(!/^\d+$/.test(cantidadPersonas)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Cantidad de Personas tiene que ser Numeros",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Cantidad de Personas tiene que ser Numeros");
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