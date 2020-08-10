/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año
y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20%, cataratas y Cordoba tiene un descuento del 10%, Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20%, cataratas y Cordoba tiene un aumento del 10%, Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10%, cataratas tiene un aumento del 10%, Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estacionIngresada; 
	var destinoIngresado;
	var precioBase;
	var descuentoPasaje;
	var recargoPasaje;
	var precioFinal;

    precioBase = 15000;
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					recargoPasaje = ((15000 * 20) / 100);
                    precioFinal = (precioBase + recargoPasaje);
					break;
				case "Mar del plata":
					descuentoPasaje = ((15000 * 20) / 100);
					precioFinal = (precioBase - descuentoPasaje);
					break;
				default:
					descuentoPasaje = ((15000 * 10) / 100);
					precioFinal = (precioBase - descuentoPasaje);
					break;
				} 
		case "Verano":
			  
		case "Otoño":
		case "Primavera":
			break;		

	   }
	

	
    alert("Tu precio final " + precioFinal + " para tu viaje a " + destinoIngresado + " en la estacion de " + estacionIngresada);


}//FIN DE LA FUNCIÓN