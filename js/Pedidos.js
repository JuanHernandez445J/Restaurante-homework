const botonGuardar = document.getElementById("buttonPedido");

botonGuardar.addEventListener("click", function(event){
    
let nombreProducto = document.getElementById("nombreProducto").value;
let direccion = document.getElementById("direccion").value;
let nombreUsuario = document.getElementById("nombreUsuario").value;
let cantidad = document.getElementById("cantidad").value;
let metodoPago = document.getElementById("metodoPago").value;
let telefono = document.getElementById("telefono").value;

if(nombreProducto == "" || direccion == "" || nombreUsuario == "" || cantidad == "" || metodoPago == "" || telefono == ""){
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
    console.log("Pedido realizado con éxito\n" + "Nombre del Producto: " + nombreProducto + "\n" + "Dirección: " + direccion + "\n" + "Nombre del Usuario: " + nombreUsuario + "\n" + "Cantidad: " + cantidad + "\n" + "Método de Pago: " + metodoPago + "\n" + "Teléfono: " + telefono);
}});