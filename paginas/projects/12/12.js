function suma(){
    var numero1 = parseFloat(document.getElementById(
        'numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value)
        var resultado = numero1 + numero2

        document.getElementById('resultado').value = resultado
}

function resta(){
    var numero1 = parseFloat(document.getElementById(
        'numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value)
        var resultado = numero1 - numero2

        document.getElementById('resultado').value = resultado
}
function mult(){
    var numero1 = parseFloat(document.getElementById(
        'numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value)
        var resultado = numero1 * numero2

        document.getElementById('resultado').value = resultado
}
function divi(){
    var numero1 = parseFloat(document.getElementById(
        'numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value)
        var resultado = numero1 / numero2

        document.getElementById('resultado').value = resultado
}
function resi(){
    var numero1 = parseFloat(document.getElementById(
        'numero1').value);
        var numero2 = parseFloat(document.getElementById('numero2').value)
        var resultado = numero1 % numero2

        document.getElementById('resultado').value = resultado
}