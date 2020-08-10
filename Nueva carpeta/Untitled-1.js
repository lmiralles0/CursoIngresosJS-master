/*Enunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)*/
function probarEjercicio(){


    var sexo;
    var altura;
    var edad;
    var ingreseNombre;
    var respuesta;
    var flagMasAltaaMujeres = 0;
    var mujerMasAlta = 0;
    var nombreMujerMasAlta;
    var flagHombreMasViejo = 0;
    var edadHombreMasViejo = 0;
    var nombreHombreMasViejo = 0;
    var flagAdolecente = 0;
    var nombrePrimerAdolecente =0;

    respuesta = "si";

    while (respuesta == "si"){
        ingreseNombre = prompt("Ingrese el nombre del espectador.");
        while (!(isNaN(ingreseNombre))){
        ingreseNombre = prompt("ERROR! Ingrese el nombre del espectador.");
     }
        edad = prompt("Ingrese la edad.")
        edad = parseInt(edad);
        
        while(isNaN(edad) || (edad < 0 || edad >110)){
          edad = prompt("ERROR! Ingrese una edad valida.");
     }
        sexo = prompt("Por favor ingrese su sexo 'f' para femenino y 'm' para masculino.");
        
        while(sexo != "f" && sexo != "m"){
          sexo = prompt("ERROR! Por favor ingrese su sexo 'f' para femenino y 'm' para masculino.");
     }
        altura = prompt("Ingrese su altura.");
        altura = parseFloat(altura);
        while(isNaN(altura) || (altura > 2.5 || altura < 1.0)){
           altura = prompt("Ingrese su altura.");
     }
        
        switch(sexo){
        case "f":
            if(flagMasAltaaMujeres == 0){
              mujerMasAlta = altura;
              nombreMujerMasAlta = ingreseNombre;
              flagMasAltaaMujeres = 1;
            } else
                  if(altura > mujerMasAlta){
                    mujerMasAlta = altura;
                    nombreMujerMasAlta = ingreseNombre;
                }
        break; 
        case "m":
             if(flagHombreMasViejo ==0){
               edadHombreMasViejo = edad;
               nombreHombreMasViejo= ingreseNombre;
               flagHombreMasViejo = 1;
            }else
                  if(edad > edadHombreMasViejo){
                    edadHombreMasViejo = edad;
                    nombreHombreMasViejo = ingreseNombre;
                }
        break;
     }
 
        if((edad > 12 && edad < 18) && (flagAdolecente == 0)){
          nombrePrimerAdolecente = ingreseNombre;
          flagAdolecente = 1;
     
     }
   
        respuesta = prompt("Desea continuar? Escriba 'si'.");
   }
    
   
    alert("1) El nombre de la mujer mas alta es: " + nombreMujerMasAlta + ".");
    alert("2) El nombre del hombre mas viejo es: " + nombreHombreMasViejo + ".");
     if (nombrePrimerAdolecente != 0){
     alert("3)El nombre del primer adolecente ingresado es: " + nombrePrimerAdolecente + ".");
    }
}//Luciano MIRALLES
