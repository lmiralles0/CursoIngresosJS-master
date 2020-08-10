function probarEjercicio()
{
	var respuesta;
	var nombreAlumno;
	var carrera;
	var estadoCursada;
	var sexo;
	var contadorBinarios = 0;
	var edad;
	var nota;
	var contadorAlumnos = 0;
	var contadorProgramacion = 0;
	var contadorPsicologia = 0;
	var contadorDiseñoGrafico = 0; 
	var contadorProgramacionSexoF = 0;
	var promedioNotaAlumnosFinalizados = 0;
	var contadorAlumnosFinalizados = 0;
	var acumuladorNotas = 0;
	var flagAlumnoMasViejoDePsicologia = 0;
	var alumnoMasViejoDePsicologia;
	var nombreAlumnoMasViejoPsicologia;
	var sexoAlumnoMasViejoPsicologia;
	var carreraConMasAlumnos = 0;
	var flagAlumnoNoBinarioPsicologia = 0;
	var notaMasAltaAlumnoNoBinario;
	var nombreAlumnoNoBinarioMasNota;
	var estadoCursadaMejorAlumboNoBinario;


	respuesta = "si";
	
	
	while(respuesta == "si"){
		
	
	nombreAlumno = prompt ("Ingrese su nombre.");
 
	while(nombreAlumno >= 0 || nombreAlumno < 0){
		nombreAlumno = prompt("Error!. Por favor ingrese su nombre.");
	}
	acumuladorNombres = nombreAlumno;
	carrera = prompt ("Ingrese su carrera: 'Programacion', 'Psicologia' y 'Diseño Grafico'.")
	
	while(carrera != "Programacion" && carrera != "Psicologia" && carrera != "Diseño Grafico"){
		carrera = prompt ("Error! Ingrese su carrera: 'Programacion', 'Psicologia' y 'Diseño Grafico'.")
	}
	estadoCursada = prompt("Ingrese el estado de su cursada, 'en curso', 'abandono' o 'finalizado'.");
	while (estadoCursada != "en curso" && estadoCursada != "abandono" && estadoCursada != "finalizado"){
		estadoCursada = prompt("Error! Ingrese el estado de su cursada, 'en curso', 'abandono' o 'finalizado'.");
	}
	sexo = prompt("Ingrese sexo: utilice 'f' para femenino,'m' para masculino o 'b' para no binario.");
	while(sexo != "f" && sexo != "m" && sexo != "b"){
		sexo = prompt("Error! Ingrese sexo: utilice 'f' para femenino,'m' para masculino o 'b' para no binario.");
	}
	edad = prompt("Ingrese edad.");
    edad = parseInt(edad);
	while (isNaN(edad) || edad < 18){
		edad = prompt("Error!.Ingrese una edad.");
	}
	nota = prompt("Ingrese una nota (rango del 1 al 10).");
	nota = parseInt(nota);
	while(nota < 1 || nota > 10 || isNaN(nota)){
		nota = prompt("Error! Ingrese una nota (rango del 1 al 10).");
	}//1//2
	contadorAlumnos ++;
	contadorBinarios ++;//4.C
	
    switch(carrera){//4.A
	   case "Programacion":
		   contadorProgramacion ++;
		   if (sexo == "f"){//4.B
			contadorProgramacionSexoF ++;
        }
		   break;
	   case "Psicologia":
		   contadorPsicologia ++;
		   if(flagAlumnoMasViejoDePsicologia == 0){
			   alumnoMasViejoDePsicologia = edad;
			   nombreAlumnoMasViejoPsicologia = nombreAlumno;
			   sexoAlumnoMasViejoPsicologia = sexo
			   flagAlumnoMasViejoDePsicologia = 1;
		   }
		   else
		        if(flagAlumnoMasViejoDePsicologia != 0 || edad > alumnoMasViejoDePsicologia){
				   alumnoMasViejoDePsicologia = edad;
				   nombreAlumnoMasViejoPsicologia = nombreAlumno;
			       sexoAlumnoMasViejoPsicologia = sexo;
				}//4.E
		   if(sexo == "b" && flagAlumnoNoBinarioPsicologia == 0){
			   notaMasAltaAlumnoNoBinario = nota;
			   nombreAlumnoNoBinarioMasNota = nombreAlumno;
			   estadoCursadaMejorAlumboNoBinario = estadoCursada;
			   flagAlumnoNoBinarioPsicologia = 1;
			}
			else 
			    if(nota > notaMasAltaAlumnoNoBinario){
					notaMasAltaAlumnoNoBinario = nota;
					nombreAlumnoNoBinarioMasNota = nombreAlumno;
					estadoCursadaMejorAlumboNoBinario = estadoCursada;
				}//4.F	
		   break;
	   case "Diseño Grafico":
		   contadorDiseñoGrafico ++;
		   break;
	}
	if(estadoCursada == "finalizado"){
		contadorAlumnosFinalizados ++;
		acumuladorNotas = (acumuladorNotas + nota);
	}

   respuesta = prompt("Desea continuar? 'si' para continuar.")
   
  }
  if((contadorProgramacion > contadorPsicologia) && (contadorProgramacion > contadorDiseñoGrafico)){
	carreraConMasAlumnos = contadorProgramacion;
    } else
	      if((contadorPsicologia > contadorProgramacion) && (contadorPsicologia > contadorDiseñoGrafico)){
		   carreraConMasAlumnos = contadorPsicologia;
		}else 
		     if((contadorDiseñoGrafico > contadorProgramacion) && (contadorDiseñoGrafico > contadorPsicologia)){
				 carreraConMasAlumnos = contadorDiseñoGrafico;
			 }//4.G	

  
  promedioNotaAlumnosFinalizados = (acumuladorNotas/contadorAlumnosFinalizados);
  promedioNotaAlumnosFinalizados = parseFloat(promedioNotaAlumnosFinalizados);// 4.D

  document.writeln("4)A. La cantidad de alumnos ingresados es de " + contadorAlumnos + " siendo " + contadorProgramacion + " para Programacion, " + contadorPsicologia + " para Psicologia y " + contadorDiseñoGrafico + " para Diseño Grafico.");
  document.writeln("4)B. La cantidad de alumnos femeninos que cursa programacion es de " + contadorProgramacionSexoF + "." );
  document.writeln("4)C. La cantidad de alumnos no binarios es de " + contadorBinarios + ".")
  document.writeln("4)D. El promedio de nota de los alumnos que finalizaron sus carreras es de " + promedioNotaAlumnosFinalizados + ".");
  document.writeln("4)E. EL nombre del estudiante mas viejo de Piscologia es: " + nombreAlumnoMasViejoPsicologia + ". Su sexo es: " + sexoAlumnoMasViejoPsicologia + ". La edad es de: " + alumnoMasViejoDePsicologia + ".");
  document.writeln("4)F. El alumno con mas nota que es no binario es: " + nombreAlumnoNoBinarioMasNota + ", la nota es de: " + notaMasAltaAlumnoNoBinario + " y el estado de la carrera es: " + estadoCursadaMejorAlumboNoBinario);
  document.writeln("4)G. La carrera con mas alumnos es: " + carreraConMasAlumnos + ".");
}
		