const products = [
    {
    id: 1,
    name: "Rápido y Furioso 10",
    category: "Acción",
    price: 15,
    image:
        "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VW6GWH7SPFG67A4SJP3E7KVBTI.jpeg",
    },
    {
    id: 2,
    name: "Guardianes de la Galaxia Vol. 3",
    category: "Ciencia ficción",
    price: 20,
    image: "guardianes_galaxia.jpg",
    },
    {
    id: 3,
    name: "Super Mario Bros: La Pelicula",
    category: "Animación",
    price: 10,
    image: "super_mario_bros.jpg",
    },
];

function mostrarProductos() {
    console.log("Lista de productos disponibles:");
    for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(
        product.id +
        " - " +
        product.name +
        " - " +
        product.category +
        " - $" +
        product.price
    );
    }
}

function buscarProductoPorId(id) {
    return products.find((product) => product.id === id);
}

function carritoDeCompra() {
    const carrito = [];

    while (true) {
    const opcion = prompt(
        "Seleccione una opción:\n1. Agregar producto\n2. Mostrar carrito\n3. Salir"
    );

    if (opcion === "1") {
        mostrarProductos();
        const seleccion = parseInt(prompt("Seleccione el ID del producto: \n1.Rápido y Furioso 10 \n2.Guardianes de la Galaxia Vol. 3 \n3.Super Mario Bros: La Pelicula"));
        const productoSeleccionado = buscarProductoPorId(seleccion);

        if (productoSeleccionado) {
        const cantidad = parseInt(
            prompt("Ingrese la cantidad deseada para " + productoSeleccionado.name + ":")
        );

        const producto = {
            id: productoSeleccionado.id,
            name: productoSeleccionado.name,
            category: productoSeleccionado.category,
            price: productoSeleccionado.price,
            cantidad: cantidad,
        };

        carrito.push(producto);
        console.log("Producto agregado al carrito.");
        } else {
        console.log("ID de producto inválido.");
        }
    } else if (opcion === "2") {
        mostrarCarrito(carrito);
    } else if (opcion === "3") {
        console.log("¡Gracias por utilizar el carrito de compra!");
        break;
    } else {
        console.log("Opción inválida. Intente nuevamente.");
    }
    }
}

function mostrarCarrito(carrito) {
    console.log("Carrito de compra:");
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        for (let i = 0; i < carrito.length; i++) {
            const producto = carrito[i];
            console.log(
                producto.id +
                " - " +
                producto.name +
                " - " +
                producto.category +
                " - $" +
                producto.price +
                " - Cantidad: " +
                producto.cantidad
            );
        }
    }
}


carritoDeCompra();


