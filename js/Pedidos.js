const botonGuardar = document.getElementById("buttonPedido");

botonGuardar.addEventListener("click", function(event){
    
let nombreProducto = document.getElementById("nombreProducto").value;
let direccion = document.getElementById("direccion").value;
let nombreUsuario = document.getElementById("nombreUsuario").value;
let cantidad = document.getElementById("cantidad").value;
let metodoPago = document.getElementById("metodoPago").value;
let telefono = document.getElementById("telefono").value;

if(nombreProducto.trim() === "" || direccion.trim() === "" || nombreUsuario.trim() === "" || cantidad.trim() === "" || metodoPago.trim() === "" || telefono.trim() === ""){
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Campos incompletos",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Campos incompletos");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreProducto)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre del Producto tiene que ser Texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Nombre del Producto tiene que ser Texto");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombreUsuario)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre de usuario tiene que ser Texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Nombre de usuario tiene que ser Texto");
}

else if(!/^\d+$/.test(cantidad)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Cantidad tiene que ser Numeros",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Cantidad tiene que ser Numeros");
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(metodoPago)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Metodo de Pago tiene que ser Texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Metodo de Pago tiene que ser Texto");
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

else{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Campos completos",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Pedido realizado con éxito\n" + "Nombre del Producto: " + nombreProducto + "\n" + "Dirección: " + direccion + "\n" + "Nombre del Usuario: " + nombreUsuario + "\n" + "Cantidad: " + cantidad + "\n" + "Método de Pago: " + metodoPago + "\n" + "Teléfono: " + telefono);
}});