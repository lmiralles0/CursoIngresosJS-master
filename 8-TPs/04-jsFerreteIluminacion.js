/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  var cLampara;
  var marcas;
  var precio;
  var descuento;
  var importeF;
  var importeBr;

  
  cLampara = parseInt(cLampara)
  cLampara = txtIdCantidad.value;
  marcas = Marca.value;
  descuento = parseInt(descuento);
  importeF = parseInt(importeF);
  txtIdprecioDescuento = descuento;

  if (cLampara > 5)
  {
      precio = (cLampara * 35);
      descuento = ((precio * 50) / 100);
      importeF = (precio - descuento);
  } 
  else if (cLampara == 5 && marcas == "ArgentinaLuz")
  {
      precio = (cLampara *5);
      descuento = ((precio  * 40) / 100);
      importeF = (precio - descuento);
     
      if (cLampara == 5 && marcas != "ArgentinaLuz")
      {
       precio = (cLampara * 5);
       descuento = ((precio * 30) / 100);
       importeF = (precio - descuento);
     
      } 

  }
  else if (cLampara == 4 && marca == ("ArgentinaLuz" || "FelipeLamparas"))
  {
      precio = (cLampara * 4);
      descuento =((precio * 25) / 100);
      importeF = (precio - descuento);
      if (precio == 4 && marca != ("ArgentinaLuz" || "FelipeLamaparas"))
      {
        precio = (cLampara * 4);
        descuento  = ((precio * 20) / 100);
        importeF = (precio - descuento);
      }
  }
  else if (cLampara == 3 && marca == "ArgetinaLuz"){
      precio = (cLampara * 3);
      descuento =((precio * 15) / 100);
      importeF = (precio - descuento);
      if (precio == 3 && marca == "FelipeLamparas")
      {
        precio = (cLampara * 3);
        descuento = ((precio * 10) / 100);
        importeF = (precio - descuento);
      }
       else 
       {
          precio = (cLampara * 3);
          descuento = ((precio * 5) / 100);
          importeF = (precio - descuento); 
       }
  }  
  if (importeF > 119)
  {
      importeBr = importeF * 10; 
      alert("Usted pago " + importeBr +" de IBB.");
  }



}
