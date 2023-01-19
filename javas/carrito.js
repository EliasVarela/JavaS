let carritoCompra = JSON.parse(localStorage.getItem("carrito")) || []
const divCarrito = document.getElementById("carrito")

function renderizarCarrito(array) {
    divCarrito.innerHTML = ""
    array.forEach(producto => {
        let div = document.createElement("div")
        div.className = "card"
        div.innerHTML += `  
                        <div>
                        <img src=.${producto.img}  alt="producto">
                        </div>
                        <div class="card-body">
                        <p>${producto.tipo}</p>
                            <div>
                            <p>$${producto.precio}</p>
                            <p>x${producto.cantidad}</p>
                            </div>
                            <div class="btn-container">
                            <button onclick= "eliminarCarrito(${producto.id})" class"botonEliminar">Eliminar Del Carrito </button>
                            </div>
                        </div>
                        </div>`

        divCarrito.appendChild(div)
    })

}
renderizarCarrito(carritoCompra)


const eliminarCarrito = (producto) => {
    const item = carritoCompra.find(prod => prod.id == producto)
    const inicio = carritoCompra.indexOf(item)
    carritoCompra.splice(inicio, 1)
    renderizarCarrito(carritoCompra)
    localStorage.setItem("carrito", JSON.stringify(carritoCompra))
}


function carritoTotal() {
    let total = 0;
    const itemCarTotal = document.getElementsByClassName(".itemCarTotal");
    carritoCompra.forEach((producto) => {
        const precio = Number(producto.precio.replace("$", ""))
        total = total + precio * producto.cantidad
    })
    itemCarTotal.innerHTML = `Total $${total}`
}

// trate de buscar la meanera para eliminar de a un producto pero no me salio :S