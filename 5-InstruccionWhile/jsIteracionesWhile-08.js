/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var ingreseNumero;
	
	contador = 0;
	
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta='si';

	while(respuesta == "si"){
		
		ingreseNumero = (prompt("Ingrese un numero."));
		ingreseNumero = parseInt(ingreseNumero);
		contador ++;
		if (ingreseNumero > 0)
		{
			sumaPositivos = (sumaPositivos + ingreseNumero);
		} 
		else  
		{
			multiplicacionNegativos = (multiplicacionNegativos * ingreseNumero);

		}
		respuesta = prompt("Si desea continuar ingrese 'si'.");
	}

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN