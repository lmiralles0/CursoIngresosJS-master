function mostrar()
{
  var edad;
  var civil;
  
  edad = txtIdEdad.value;
  edad = parseInt(edad);
  civil = estadoCivil.value;
  
  if (edad < 19 && civil != 'Soltero') {
	  alert("Es muy pequeño para NO ser soltero.");

  }

}//FIN DE LA FUNCIÓN