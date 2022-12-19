let productos = []
/*let carrito = []*/


class Alimentos {
    constructor(nombre, stock, precio) {
        this.nombre = nombre
        this.stock =  stock
        this.precio = precio
    }

    resumen_compra() {
        console.log("Nombre", this.nombre);
        console.log("Cantidad", this.stock);
        console.log("Precio", this.precio);
        console.log("--------------");
    }
    get_stock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }


    update_stock( cantidad ){


        if( this.stock >= cantidad){

            this.stock = this.stock - cantidad;
        }
        else{
            console.log("No tenemos tanto stock");
        }
    }
}

for (let i = 0; i < 3; i = i + 1) {
    let nombre = prompt("Ingrese el Nombre del alimento")
    let tipo = prompt("Ingrese la cantidad en stock")
    let precio = prompt("Ingrese el precio")
    let alimento = new Alimentos(nombre, tipo, precio)
    productos.push(alimento)
}
for (let alimento of productos) {
    alimento.resumen_compra()
}

function buscar_producto( producto ){

    return producto.nombre == compra_usuario
}

let compra_usuario = prompt("Ingrese el nombre del producto que desea comprar");

let buscar_resultado = productos.find(buscar_producto);

if( buscar_resultado != undefined ){

    if( buscar_resultado.get_stock() ){

        let unidades = prompt("¿Cuantas unidades quiere?");
        buscar_resultado.update_stock(unidades);
        console.log("Gracias por su compra");
        
    }
    else{
        console.log("No tenemos stock del producto");
        alert("No tenemos stock del producto")
    }
}
else{
    console.log("Producto no encontrado")
    alert("Producto no encontrado")
}

buscar_resultado.resumen_compra();