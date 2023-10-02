const tarjetas = document.getElementById("tarjetas");
const verCarrito = document.getElementById("verCarrito");
const ventanaCarrito = document.getElementById("ventanaCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");

const productos = [
    {
        id: 1,
        nombre: "tetris",
        precio: 2000,
        img: "./multimedia/img/tetris.png"
    },
    {
        id: 2,
        nombre: "auricular",
        precio: 1000,
        img: "./multimedia/img/auricular.jpeg"
    },
    {
        id: 3,
        nombre: "cargadorEncendedor",
        precio: 500,
        img: "./multimedia/img/cargencendedor.jpeg"
    },
    {
        id: 4,
        nombre: "cargadorSolar",
        precio: 3000,
        img: "./multimedia/img/cargsolar.jpeg"
    },
    {
        id: 5,
        nombre: "mochila",
        precio: 2000,
        img: "./multimedia/img/mochila.jpeg"
    },
    {
        id: 6,
        nombre: "parlante",
        precio: 2000,
        img: "./multimedia/img/parlante.jpeg"
    },
    {
        id: 7,
        nombre: "tablet",
        precio: 5000,
        img: "./multimedia/img/tablet.jpeg"
    },
    {
        id: 8,
        nombre: "teclado",
        precio: 2000,
        img: "./multimedia/img/teclado.jpeg"
    },

];

let carrito = JSON.parse(localStorage.getItem("carrito"))|| [];


productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "tarjeta";
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}$</p>
    `;
    tarjetas.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    content.append(comprar);

   comprar.addEventListener("click", () => {
        const repetido = carrito.some((prodRepetido) => prodRepetido.id == producto.id)
        if (repetido) {
            carrito.map((prod)=>{
                if (prod.id == producto.id) {
                    prod.cantidad ++;
                }

            })
        }else {
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
        pintarContadorCarrito();
        }
        guardarCarrito();
    })
})

const guardarCarrito = ()=>{
    localStorage.clear;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
