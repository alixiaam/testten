    //Declaro dos variables uno para peso y otro para altura
    var altura = parseFloat(prompt("Ingrese su estatura en metros"))
    var peso = parseFloat(prompt("Ingrese su peso en kilogramos"))
    //utilizo if pero en el resultado de la formula, y digo si el resultado es mayor o menor q x usted es xyz
    if( peso/(altura*altura) < 18.5){
        document.write("Usted esta bajo peso")
    }else if( peso/(altura*altura) >= 18.5 && peso/(altura*altura) <= 24.9){
        document.write("Usted esta a peso normal")
    }else if( peso/(altura*altura) >= 25 && peso/(altura*altura) <= 29.9){
        document.write("Usted esta sobre peso")
    }else if( peso/(altura*altura) >= 30 ){
        document.write("Usted esta obeso")
    }else{
        document.write("Error")
    }