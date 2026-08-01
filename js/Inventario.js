const botonGuardar = document.getElementById("buttoninventory");

botonGuardar.addEventListener("click", function(event){
let categoria = document.getElementById("categoria").value;
let codigo = document.getElementById("codigo").value;
let nombre = document.getElementById("nombre").value;
let descripcion = document.getElementById("descripcion").value;
let cantidad = document.getElementById("cantidad").value;
let precio = document.getElementById("precio").value;
let proveedor = document.getElementById("proveedor").value;

if(categoria.trim() === "" || codigo.trim() === "" || nombre.trim() === "" || descripcion.trim() === "" || cantidad.trim() === "" || precio.trim() === "" || proveedor.trim() === ""){
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Campos incompletos",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Campos incompletos");
}
else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(categoria)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Categoria tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Categoria tiene que ser texto")
}

else if (!/^\d+$/.test(codigo)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "El código debe contener solo números",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("El código debe contener solo números")
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Nombre tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Nombre tiene que ser texto")
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(descripcion)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Descripción tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Descripción tiene que ser texto")
}

else if (!/^\d+$/.test(cantidad)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Cantidad debe contener solo números",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Cantidad debe contener solo números")
}

else if (!/^\d+$/.test(precio)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Precio debe contener solo números",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Precio debe contener solo números")
}

else if(!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/.test(proveedor)) {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Descripción tiene que ser texto",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Descripción tiene que ser texto")
}
else {
    
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Campos completos",
        showConfirmButton: false,
        timer: 1500
    });
    console.log("Producto agregado\n" + "Categoria: " + categoria + "\n" + "Código: " + codigo + "\n" + "Nombre: " + nombre + "\n" + "Descripción: " + descripcion + "\n" + "Cantidad: " + cantidad + "\n" + "Precio: " + precio + "\n" + "Proveedor: " + proveedor);
}
});