var szakok = new Array(5);
szakok[1]="Jerzsabek Károly (HUN),22:10:36;Ladányi Gedeon (HUN),+6 p 5 mp;Bouska II. József (HUN),+20 p 33 mp";
szakok[2]="Vida László (HUN),20:05:25;Hölczl Károly (HUN),+13 p 25 mp;Bouska I. (HUN),+13 p 54 mp";
szakok[3]="Vida László (HUN),30:36:17;Huszka Dezső (HUN),+19 p 3 mp;Hugyecz Károly (HUN),+28 p 7 mp";
szakok[4]="Oskar Thierbach (GER),21:31:33;Jálics Béla (HUN),+14 p 20 mp;Istenes János (HUN),+15 p 40 mp";
szakok[5]="Kecske, Medve, Kuki";
function listaelem(eredmeny){
  if (eredmeny.includes("(HUN)")) {
    return "<em>"+eredmeny.replace(",","<br>")+"</em>";
  } 
  else
  {
    return eredmeny.replace(",","<br>");
  }
}

function frissit(){
    var sorsz = document.getElementById('szakok').value;
    document.getElementById('sorszam').innerText = sorsz;
    document.getElementById('hely1').innerHTML = listaelem(szakok[sorsz].split(";")[1]); 
    document.getElementById('hely2').innerHTML = listaelem(szakok[sorsz].split(";")[2]); 
    document.getElementById('hely3').innerHTML = listaelem(szakok[sorsz].split(";")[3]); 
}
