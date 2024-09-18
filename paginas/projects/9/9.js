//Declaro mis variables
var Toral = parseFloat(prompt("Ingrese el monto total de la compra:"));
var descuento = 0;

// Determinar el descuento
switch (true) {
    case (Toral >= 1000 && Toral < 2000):
        descuento = 0.07 * Toral; 
        break;
    case (Toral >= 2000 && Toral < 2500):
        descuento = 0.17 * Toral; 
        break;
    case (Toral >= 2500):
        descuento = 0.20 * Toral; 
        break;
    default:
        descuento = 0;
        break;
}

// Mostrar el descuento aplicable
if (descuento > 0) {
    document.write("Usted tiene un descuento de L.",descuento.toFixed(2)," a la compra.");
} else {
    document.write("No se aplicó ningún descuento a la compra.");
}
