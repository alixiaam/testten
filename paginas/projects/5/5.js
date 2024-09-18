//declaro mis variables
var num = parseFloat(prompt("Ingrese un valor que deseas encontrar en factorial de"))
var fac = 1
var val = 1

//se utiliza do while para hacer algo si esta condicion es valida
do{
    fac *= val;
    val++;
}while(val<=num);

//Se imprima el resultado
document.write("El factorial de ",num," es igual a ",fac);