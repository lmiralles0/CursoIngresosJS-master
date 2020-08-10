/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
    var ingreseNumero;
	
	
	contador = 0;
	acumulador = 0;
	respuesta = "si";
	
	while(respuesta == "si"){
		
		ingreseNumero = parseInt(prompt("Ingrese numero."));
		acumulador = (ingreseNumero + acumulador);
		contador ++;
		respuesta = prompt("Escriba 'si', si desea continuar.");
    

	}


	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/contador;

}//FIN DE LA FUNCIÓN