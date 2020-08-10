/*Ejercicio 2:
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Marca,Tipo validad("arena";"cal";"cemento") ,cantidad de bolsas, precio por bolsa (más de cero ),
 al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
c)Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
f)El tipo mas caro*/

function probarEjercicio(){
    var respuesta;
    var marca;
    var tipo;
    var cantidadDeBolsas;
    var precioXBolsa;
    var precioTotalDeLaCompra;
    var descuentoXDiez;
    var descuentoXTreinta;
    var precioTotalDeLaCompraBruto = 0;
    var acumuladorBolsaArena = 0;
    var acumuladorBolsaCal = 0;
    var acumuladorBolsaCemento = 0;
    var flagArenaMasCara = 0;
    var precioArenaMasCaraXUnidad = 0;
    var flagCalMasCara= 0;
    var precioCalMasCaraXUnidad = 0;
    var flagCementoMasCaro = 0;
    var precioCementoMasCaroXUnidad = 0;

    respuesta = "si";


    do {
        marca = prompt("Ingrese marca del producto.");


        while(!(isNaN(marca))){
            marca = prompt("ERROR! por favor ingrese una marca del producto.");
        }


        tipo = prompt("Ingrese el tipo de producto: 'arena', 'cal' o 'cemento'.");


        while((tipo != "arena") && (tipo != "cal") && (tipo != "cemento")){
            tipo = prompt("ERROR! por favor ngrese el tipo de producto: 'arena', 'cal' o 'cemento'.");
        }


        cantidadDeBolsas = prompt("Ingrese cantidad de bolsas a vender.");
        cantidadDeBolsas = parseInt(cantidadDeBolsas);


        while(isNaN(cantidadDeBolsas) || (cantidadDeBolsas < 0)){
            cantidadDeBolsas = prompt("ERROR! ingrese cantidad de bolsas a vender.");
        }


        precioXBolsa = prompt("Ingrese el precio en unitario de la bolsa a vender.");
        precioXBolsa = parseInt(precioXBolsa);

        
        while((isNaN(precioXBolsa)) || (precioXBolsa < 0)){
            precioXBolsa = prompt("ERROR! por favor inrgese un precio valido.");
        }

        
        precioTotalDeLaCompra = (cantidadDeBolsas * precioXBolsa);
        precioTotalDeLaCompra = parseInt(precioTotalDeLaCompra);
        precioTotalDeLaCompraBruto = (precioTotalDeLaCompraBruto + precioTotalDeLaCompra);///A
        precioTotalDeLaCompraBruto = parseInt( precioTotalDeLaCompraBruto);


        if(cantidadDeBolsas> 9 && cantidadDeBolsas < 30){///B
            descuentoXDiez = (precioTotalDeLaCompra - ((precioTotalDeLaCompra * 10) / 100));
                
        }
        else if (cantidadDeBolsas > 29){
            descuentoXTreinta = (precioTotalDeLaCompra - ((precioTotalDeLaCompra * 30) / 100));
            
        } 
             
        switch(tipo){
            case "arena":
                acumuladorBolsaArena = (acumuladorBolsaArena + cantidadDeBolsas);//////C
                if(flagArenaMasCara == "0"){///////F
                    precioArenaMasCaraXUnidad = precioXBolsa;
                    flagArenaMasCara = 1;
                }
                else if(precioXBolsa > precioArenaMasCaraXUnidad){
                    precioArenaMasCaraXUnidad = precioXBolsa;
                }
                break;
            case "cal":
                acumuladorBolsaCal = (acumuladorBolsaCal + cantidadDeBolsas);
                if(flagCalMasCara == "0"){
                    precioCalMasCaraXUnidad = precioXBolsa;
                    flagCalMasCara = 1;
                }
                else if(precioXBolsa > precioCalMasCaraXUnidad){
                    precioCalMasCaraXUnidad = precioXBolsa;
                }
                break;
            case "cemento":
                acumuladorBolsaCemento = (acumuladorBolsaCemento + cantidadDeBolsas);
                if(flagCementoMasCaro == "0"){
                    precioCementoMasCaroXUnidad = precioXBolsa;
                    flagCementoMasCaro = 1;
                }
                else if(precioXBolsa > precioCementoMasCaroXUnidad){
                    precioCementoMasCaroXUnidad = precioXBolsa;
                }
                break;

        }
      respuesta = prompt("Desea continuar?");  
    } while(respuesta == "si"){
       
    }




    ///////SALIDA A Y B
    if (cantidadDeBolsas < 10){
        document.writeln("El precio total a abonar es de " + precioTotalDeLaCompraBruto + " y no accedio al descuento.");
       
    } else
          if(cantidadDeBolsas > 9 || cantidadDeBolsas < 30){
              document.writeln("El precio neto a abonar es de  " + precioTotalDeLaCompraBruto + " pero accedio al descuento del 10% y el saldo final es de " + descuentoXDiez + "." );
          }
          else {
              document.writeln("El precio neto a abonar es de " + precioTotalDeLaCompraBruto + " pero accedio al descuento del 30% y el saldo final es de " + descuentoXTreinta + ".")
          }
    




    /////SALIDA C
    if((acumuladorBolsaArena > acumuladorBolsaCal) && (acumuladorBolsaArena > acumuladorBolsaCemento)){
        document.writeln("El prodructo con mas cantidad de bolsas es la ARENA con " + acumuladorBolsaArena + ".");
    } 
      else if ((acumuladorBolsaCal > acumuladorBolsaArena) && (acumuladorBolsaCal > acumuladorBolsaCemento)){
        document.writeln("El prodructo con mas cantidad de bolsas es la CAL con " + acumuladorBolsaCal + ".");
    } 
      else if ((acumuladorBolsaCemento > acumuladorBolsaArena) && (acumuladorBolsaCemento > acumuladorBolsaCal)){
        document.writeln("El prodructo con mas cantidad de bolsas es la CEMENTO con " + acumuladorBolsaCemento + ".");
    }




    ///SALIDA F
    if((precioArenaMasCaraXUnidad > precioCalMasCaraXUnidad) && (precioArenaMasCaraXUnidad > precioCementoMasCaroXUnidad)){
        document.writeln("El producto mas caro es la ARENA con " + precioArenaMasCaraXUnidad + ".");
    }
    else if ((precioCalMasCaraXUnidad > precioArenaMasCaraXUnidad) && (precioCalMasCaraXUnidad > precioCementoMasCaroXUnidad)){
        document.writeln("El producto mas caro es la CAL con " + precioCalMasCaraXUnidad + ".");
    }
    else if ((precioCementoMasCaroXUnidad > precioArenaMasCaraXUnidad ) && (precioCementoMasCaroXUnidad > precioCalMasCaraXUnidad)){
        document.writeln("El producto mas caro es la CEMENTO con " + precioCalMasCementoaXUnidad + ".");
    }
}





