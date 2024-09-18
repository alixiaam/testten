//delcaro dos variables los dos son prompt pero uno es parseFloat porque es un numero

var grado = prompt("Estas ingresando Celsius o Fahrenheit?")
var num = parseFloat(prompt("Ingrese el monto de grado que deseas convertir"))
//aqui utilizo if para decir si el variable es igual a uno de esto criterios, haga esta formula
if(grado == 'f' || grado == 'F' || grado == 'fahrenheit' || grado == 'Fahrenheit'){
    var celsius=(num-32)*(5/9)
    document.write(num," grados Fahrenheit es igual a ",celsius," grado Celsius")
}else if(grado == 'c' || grado == 'C' || grado == 'celsius' || grado == 'Celsius'){
    var fahrenheit=num*(9/5) + 32
    document.write(num," grados celsius es igual a ",fahrenheit," grado fahrenheit")
}else{
    document.write("Error, porfavor escriba correctamente que se le pida")
}