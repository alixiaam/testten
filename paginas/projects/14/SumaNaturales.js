//ingrese hasta que numero desea sumar los numeros naturales
let num = parseFloat(prompt("Ingrese hasta qué número desea sumar los numeros naturales:"));

// Verificar si el numero ingresado es mayor o igual a 1
if (num >= 1) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        // Sumar cada número al total de la suma
        suma += i;
    }  // Mostrar en pantalla la suma de los primeros 'num' numeros naturales
    document.write("La suma de los primeros ", num, " numeros naturales es: ", suma);
}