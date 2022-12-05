let carne = 0;
let pollo = 0;
let cerdo = 0;
let alimento_seleccionado= 0;
let decision_usuario = 0
alert("Bienvenido cliente que alimento va a llevar hoy ?")


while (alimento_seleccionado = "salir") {
    alimento_seleccionado = parseInt(prompt("Presione 1. Carne 2.Pollo o presione 3.Cerdo 4.Para terminar"));
    if (alimento_seleccionado == 1) {
        carne = carne + 700
        console.log("carne $", carne);
    }
    else if (alimento_seleccionado == 2) {
        pollo = pollo + 300
        console.log("pollo $", pollo);
    }
    else if (alimento_seleccionado == 3) {
        cerdo = cerdo + 400
        console.log("cerdo $", cerdo);
    }
    else (alimento_seleccionado == 4)
    
    }
alert("Ahora De que manera desea abonar por caja")
let decision_pago = parseInt(prompt("Presione 1. Efectivo - 2.Debito"))


// while (segunda_decision = 2) {
//     if (alimento_seleccionado = 1) {
//         pollo = pollo + 500;
//         console.log(pollo);
//     }
//     if (decision_usuario = 1) {
//         let segunda_deci = parseInt(prompt("Quieres agregar mas pollo? 1.Si - 2.No"))
//         pollo = pollo + 500
//         console.log(pollo);
//     } else if (segunda_deci = 2) {
//         parseInt(prompt("Presione 1. Carne 2.Pollo o presione 3.Cerdo"))
//  }}
