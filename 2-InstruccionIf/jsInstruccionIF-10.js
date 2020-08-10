function mostrar()
{
	var nota;

	nota = Math.floor(Math.random ()*10) + 1;

	if (nota < 4){
		alert("Vamos, la proxima se puede");
	} 	
	if (nota > 8 ){
		alert ("EXCELENTE");		
	}
	else if (nota > 3 && nota < 9){
	    alert("APROBÓ");
	}
    console.log(nota);

}//FIN DE LA FUNCIÓN