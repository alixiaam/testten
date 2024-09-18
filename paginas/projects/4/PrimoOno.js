//declarar variables, el numero que el usuario ingrese
let numero = parseFloat(prompt("Ingrese un numero para verificar si es primo o no:"));

if (numero > 1) {
    let esPrimo = true;
     // Recorrer los numeros desde 2 hasta la raiz cuadrada del numero ingresado
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Verificar si el numero es divisible por i y si es divisible, cambiar esPrimo a falso y salir del bucle
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
     // Verificar si esPrimo sigue siendo verdadero
    if (esPrimo) {
        // Si es verdadero, escribir que el numero es primo o vice versa
        document.write(numero, " es un numero primo.");
    } else {
        document.write(numero, " no es un numero primo.");
    }
} else {
    document.write("Error");
}
