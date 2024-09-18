//declaro mis variables
var anio = parseFloat(prompt("Ingrese el anio"));

//utilizo if para dar un criterio y si es pues es, sino continua al otro
if( anio=anio%4 ===0 ){
    document.write("Es un anio bisiesto");
}else{
    document.write("No es un anio bisiesto");
}