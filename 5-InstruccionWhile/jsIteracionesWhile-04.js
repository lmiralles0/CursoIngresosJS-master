/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	
	while(numeroIngresado < -1){
		numeroIngresado = parseInt(prompt("Error. Ingrese un número entre 0 y 9."));
	}

}//FIN DE LA FUNCIÓN