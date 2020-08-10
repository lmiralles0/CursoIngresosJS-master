function mostrar()
{
 var mayorEdad;

 mayorEdad = txtIdEdad.value;
 mayorEdad = parseInt(mayorEdad);

 if (mayorEdad >= 18) {
	 alert("Usted es mayor de edad.");
 }
 if (mayorEdad < 18) {
	 alert("Usted es menor de edad.");
 }
 

}//FIN DE LA FUNCIÓN