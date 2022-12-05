let total_compra = 0
let producto_seleccionado = parseInt(prompt("Ingresa el numero del alimento que quieras comprar , 1. Carne - 2.Pollo - y 3. Cerdo"))
let seguir_comprando = true
let decision
 while (seguir_comprando === true) {
    if (producto_seleccionado === 1) {
        total_compra = total_compra + 900
    } else if (producto_seleccionado === 2) {
        total_compra = total_compra + 300
    } else if (producto_seleccionado === 3) {
        total_compra = total_compra + 500
    }else {
        producto_seleccionado = parseInt(prompt("Ingresa un producto en stock 1. Carne - 2.Pollo - y 3. Cerdo"))
    }

    decision = parseInt(prompt("Quieres seguir comprando alimentos? 1.Si - 2.No"))
    if (decision === 1) {
        producto_seleccionado = parseInt(prompt("Ingresa el numero del alimento que quieras comprar , 1. Carne - 2.Pollo - y 3. Cerdo"))
    } else if (decision === 2) {
        seguir_comprando = false
    }
console.log(producto_seleccionado);
console.log("Por el momento va gastando $", total_compra);
console.log(decision);
}

function pagar_Credito(dos_cuotas) {
    let credito_dos = total_compra * (20/100)
    return total_compra + credito_dos
}
let credito_en_dos_cuotas = pagar_Credito(total_compra)
let modo_pago = parseInt(prompt("Como desea abonar , 1. Efectivo o 2. Credito(Solo 2 cuotas)"))

if (modo_pago === 1) {
    alert ("El monto total es de $ "  + total_compra);
} else if(modo_pago === 2){
    alert("Su compra a dos cuotas es $" + credito_en_dos_cuotas)
}
alert("Gracias por su compra , Vuelva pronto!!!")
