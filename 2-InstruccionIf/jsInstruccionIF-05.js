function mostrar()
{
 var edadNoAdolecente;
 
 edadNoAdolecente = txtIdEdad.value;
 edadNoAdolecente = parseInt(edadNoAdolecente);

 if (edadNoAdolecente < 13){
	 
	alert("Usted no es edolecente.");
	
 }
 if (edadNoAdolecente > 17){
    alert("Usted no es edolecente.");
 }

}//FIN DE LA FUNCIÓN