//Declarando 3 numeros que el usuario ingrese
let n1 = parseFloat(prompt("A continuacion se le pedira ingresar 3 numeros y se imprimira el numero mas alto. Ingrese su primero numero"));
let n2 = prompt("Ingrese su segundo numero");
let n3 = parseFloat(prompt("Ingrese su tercer numero"));

//escribiendo primer criterio
if(n1>n2 && n1>n3){
    document.write("El primer numero ingresado ",n1," es el numero mayor")
    //declarando el segundo si no es el primero
}else if (n2>n1 && n2>n3){
    document.write("El segundo numero ingresado ",n2," es el numero mayor")
    //declarando el tercero si no combina con los demas
}else if(n3>n1 && n3>n2){
    document.write("El tercer numero ingresado ",n3," es el numero mayor")
}