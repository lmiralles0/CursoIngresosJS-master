/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero = 0;
	respuesta = "si";
	numeroMaximo = 0;
	numeroMinimo = 0;
	
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado);
		

		if (banderaDelPrimero == 0 || numeroIngresado < numeroMinimo){
			
			numeroMinimo = numeroIngresado;
		}
		 
		if (banderaDelPrimero == 0 ||numeroIngresado > numeroMaximo){
            numeroMaximo = numeroIngresado;
			banderaDelPrimero = 1;
		} 
		console.log(numeroMaximo);
		console.log(numeroMinimo);
		
         respuesta = prompt("desea continuar? Escriba 'si'.");
	}

}//FIN DE LA FUNCIÓN