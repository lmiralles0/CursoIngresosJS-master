function mostrar()
{
var edad;
var civil;

edad = txtIdEdad.value;
edad = parseInt(edad);
civil = estadoCivil.value;

if (edad > 17 && civil == "Soltero"){
	alert("Es soltero y no es menor.")

 }

}//FIN DE LA FUNCIÓN