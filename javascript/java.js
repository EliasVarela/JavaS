let num_uno
let num_dos
let regularidad = parseInt(prompt("Necesito saber si sos alumno regular , 1.Si o 2.No"))

if (regularidad == 1) {
   alert("esperamos mucho de vos , segui estudiando asi !")
   num_uno = parseInt(prompt("ingresa tu primera nota!"));
   num_dos = parseInt(prompt("ingresa la segunda nota!"));
} else if(regularidad == 2){
   alert("es bueno que retomes tus estudios no bajes los brazos regularizate!")
   num_uno = parseInt(prompt("ingresa tu primera nota!"));
   num_dos = parseInt(prompt("ingresa la segunda nota!"));
   
}
if (num_uno + num_dos <= 3) {
   alert("No llegas a la nota papu!, tenes que recursar")
} if (num_uno + num_dos >= 4) {
   alert("cumplis con la nota necesaria ! aprobaste")
}