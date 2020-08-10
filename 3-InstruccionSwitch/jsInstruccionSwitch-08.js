/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destinoIngresado; 
	
	
	destinoIngresado = txtIdDestino.value;
	
	switch(destinoIngresado){
		case ("Cataratas"):
		case ("Mar del plata"):	
			alert("CALOR");
			break;
		default:
			alert("FRIO");
			break;		
		} 
			
		

}//FIN DE LA FUNCIÓN