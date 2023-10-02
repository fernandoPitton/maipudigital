const pintarCarrito = () => {
    ventanaCarrito.style.display = "flex";
    ventanaCarrito.innerHTML = "";
    let headerCarrito = document.createElement("div");
    headerCarrito.className = "headerCarrito"
    headerCarrito.innerHTML = `
    <h2 class="headerCarritoTitulo">Carrito</h2>
    `;
    ventanaCarrito.append(headerCarrito);

    let cerrarCarrito = document.createElement("h3")
    cerrarCarrito.innerText = "❌";
    cerrarCarrito.className = "botonCerrarCarrito";

    cerrarCarrito.addEventListener("click", () => {
        ventanaCarrito.style.display = "none";
    })

    headerCarrito.append(cerrarCarrito)

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carritoContent";
        carritoContent.innerHTML = `
        <img src="${producto.img} ">
        <h3>${producto.nombre} </h3>
        <p>${producto.precio}$ </p>
        <p>cantidad= ${producto.cantidad} </p>
        <p>sub total= ${producto.precio * producto.cantidad}$</p>
        `;
        ventanaCarrito.append(carritoContent);
        
        let eliminarProd = document.createElement("span")
        eliminarProd.className= "botonEliminarProducto";
        eliminarProd.innerText = "❌";
        carritoContent.append(eliminarProd)
        eliminarProd.addEventListener("click",()=>{
            const aEliminar = carrito.indexOf(producto);
            carrito.splice(aEliminar,1);
            pintarCarrito();
            pintarContadorCarrito();
            guardarCarrito();
        })

    })

    const total = carrito.reduce((acc, elem) => acc + (elem.precio * elem.cantidad), 0);

    let totalCarrito = document.createElement("div")
    totalCarrito.className = "totalCarrito";
    totalCarrito.innerHTML = `<h3>Total= ${total}$</h3>`
    ventanaCarrito.append(totalCarrito);
}




verCarrito.addEventListener("click", pintarCarrito)

const pintarContadorCarrito = ()=>{
    contadorCarrito.style.display = "flex";
    contadorCarrito.innerText = carrito.length;
}

pintarContadorCarrito();