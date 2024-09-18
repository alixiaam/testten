// Solicitar al usuario que ingrese un numero
let numero = parseInt(prompt("Ingrese un numero para generar su tabla de multiplicar del 1 al 10:"));

if (numero) {
    //declarando 1 al 10 para generar la tabla de multiplicar
    for (let i = 1; i <= 10; i++) {
        //imprimacion de tabla
        document.write(" ",numero + " x " + i + " = " + numero * i);
    }
} else {
    document.write("Debe ingresar un numero valido.");
}
