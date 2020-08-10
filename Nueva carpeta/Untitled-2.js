/*Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven*/


{
    var ingreseNombre;
    var edad;
    var altura;
    var sexo;
    var dinero;
    var cantidadDeHijos;
    var contador = 0;
    var edadMasvieja = 0;
    var nombreMasVieja;
    var acumuladorAlturaMujeres = 0;
    var promedioAlturaMujeres = 0;
    var edadMujerMasJoven
    var nombreMujerMasJoven;
    var contadorMujeres = 0;

    

    while(contador < 5){
        
        ingreseNombre = prompt("Ingrese nombre.");

        while(!(isNaN(ingreseNombre))){
            ingreseNombre = prompt("ERROR! Ingrese un nombre valido.");
        }
        
        edad = prompt("Ingrese una edad de 0 a 115.");
        edad = parseInt(edad);

        while(edad <0 || edad >115){
            edad = prompt("ERROR! Ingrese una edad valida de 0 a 115.");
        }

        altura = prompt("Ingrese su altura de 30 a 230.");
        altura = parseInt(altura);

        while(altura < 30 || altura > 230){
            altura = prompt("ERROR! Ingrese una altura valida de 30 a 230.");
        }

        sexo = prompt("Ingrese su sexo 'f' para femenino y 'm' para masculino.");

        while(sexo != "f" && sexo != "m"){
            sexo = prompt("ERROR! Ingrese su sexo 'f' para femenino y 'm' para masculino.");
        }

        dinero = prompt("Ingrese su dinero.");
        dinero = parseInt(dinero);

        while(isNaN(dinero)){
            dinero = prompt("ERROR! Ingrese su dinero.");
        }

        cantidadDeHijos = prompt("Ingrese la cantidad de hijos.");
        cantidadDeHijos = parseInt(cantidadDeHijos);

        while((cantidadDeHijos < 0) || (isNaN(cantidadDeHijos))){
            cantidadDeHijos = prompt("ERROR! Ingrese la cantidad de hijos.");
        }
        
        
        
        if((contador == 0) || (edad > edadMasvieja)){
            edadMasvieja = edad;
            nombreMasVieja = ingreseNombre;
        }
        
        if (sexo == "f"){
            contadorMujeres ++;
            acumuladorAlturaMujeres = (acumuladorAlturaMujeres + altura);
            edadMujerMasJoven = edad;
            nombreMujerMasJoven = ingreseNombre;
        } 
        
        if (edad < edadMujerMasJoven){
            edadMujerMasVieja = edad;
            nombreMujerMasJoven = ingreseNombre;
        }
        
        contador ++;
    }
    
    promedioAlturaMujeres = (acumuladorAlturaMujeres / contadorMujeres);

    if(contador > 0){
        alert("la persona mas vieja se llama: " + nombreMasVieja + ".");
    }
    if(contadorMujeres > 0){
        alert("El promedio de altura de las mujeres es: " + promedioAlturaMujeres + ".");
        alert("El nombre de la mujer mas joven es: " + nombreMujerMasJoven + "." );
    }

    
}

        

