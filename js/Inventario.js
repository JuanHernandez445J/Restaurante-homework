const botonGuardar = document.getElementById("buttoninventory");

botonGuardar.addEventListener("click", function(event){
let categoria = document.getElementById("categoria").value;
let codigo = document.getElementById("codigo").value;
let nombre = document.getElementById("nombre").value;
let descripcion = document.getElementById("descripcion").value;
let cantidad = document.getElementById("cantidad").value;
let precio = document.getElementById("precio").value;
let proveedor = document.getElementById("proveedor").value;

if(categoria == "" || codigo == "" || nombre == "" || descripcion == "" || cantidad == "" || precio == "" || proveedor == ""){
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
    console.log("Producto agregado\n" + "Categoria: " + categoria + "\n" + "Código: " + codigo + "\n" + "Nombre: " + nombre + "\n" + "Descripción: " + descripcion + "\n" + "Cantidad: " + cantidad + "\n" + "Precio: " + precio + "\n" + "Proveedor: " + proveedor);
}
});