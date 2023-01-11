const producto = []
let carritoCompra = JSON.parse(localStorage.getItem("carrito")) || []

class Producto {
    constructor(id, tipo, precio, img, descrip = "") {
        this.id = id
        this.tipo = tipo
        this.precio = precio
        this.img = img
        this.descrip = descrip
    }
    mostrarAlimento() {
        const card = `
        <div class="card">
                <div>
                <img src=${this.img}  alt="producto">
                </div>
                <div class="card-body">
                    <p>${this.tipo}</p>
                    <div>
                        <p>$${this.precio}</p>
                    </div>
                    <div class="btn-container">
                        <button id=${this.id} class="btnAgregar">AGREGAR AL CARRITO</button>
                    </div>
                </div>
            </div>
        `
        const container = document.getElementById("container")
        container.innerHTML += card
    }
    agregarEvent() {
        let btnAgregar = document.getElementById(this.id);
        const prodDeseado = producto.find(product => product.id == this.id);
        btnAgregar.addEventListener("click", () => {agregarAlCarro(prodDeseado)
            //Haces una validación, si existe algo en el Storage con "", 
            if(localStorage.getItem("")){
                Swal.fire({
                    title: "Perfecto ",
                    text: "Que mas?",
                    icon: "success" ,
                })
            }else{
                Swal.fire({
                    title: "Perfecto ",
                    text: "Que mas ?",
                    icon: "success" ,
                })
            }
        })
}
}

let alimento1 = new Producto("001", "Carne Vacuna", 1450, "./imagenes/vacuna.jfif")
let alimento2 = new Producto("002", "Carne De Cerdo", 1010, "./imagenes/cerdo.jpe")
let alimento3 = new Producto("003", "Pollo", 500, "./imagenes/Pollo.jfif")
/* let alimento1 = new Producto(())
let alimento1 = new Producto(())
let alimento1 = new Producto(())
let alimento1 = new Producto(()) */

producto.push(alimento1, alimento2, alimento3)

producto.forEach(e => {
    e.mostrarAlimento()
})

producto.forEach(e => {
    e.agregarEvent()
})

function agregarAlCarro(alimento) {
    let alimCarrito = carritoCompra.find(prod => prod.id == alimento.id)
    console.log(alimento)
    if (!alimCarrito) {
        carritoCompra.push({ ...alimento, cantidad: 1 })
    } else {
        let filtroCarrito = carritoCompra.filter(prod => prod.id != alimento.id)
        carritoCompra = [
            ...filtroCarrito,
            { ...alimCarrito, cantidad: alimCarrito.cantidad + 1 }
        ]
    }
    localStorage.setItem("carrito",JSON.stringify(carritoCompra))
    contador.innerHTML = carritoCompra.reduce((acc, prod) => acc + prod.cantidad, 0)
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carritoCompra.reduce((acc, prod) => acc + prod.cantidad, 0)