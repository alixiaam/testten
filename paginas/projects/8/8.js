//declaro variables
var dia = parseFloat(prompt("Ingrese un numero"));

//utilizo switch para que si la respuesta es x pues va viendo los case a ver cual es igual
switch(dia){
    case 1:
        document.write("Domingo");
        break;
    case 2:
        document.write("Lunes");
        break;
    case 3:
        document.write("Martes");
        break;
    case 4:
        document.write("Miercoles");
        break;
    case 5:
        document.write("Jueves");
        break;
    case 6:
        document.write("Viernes");
        break;
    case 7:
        document.write("Sabado");
        break;
}
