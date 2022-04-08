var szakok = [];
szakok[1]="13.-14. F osztály; Oszlopásás; Kerítésállítás; Sprintfutás; Vetődés; Célbalövés";
szakok[2]="13.-14. I osztály; Gazdasági óra; Közpénzelbaszás; Tőzsde; Betörés; Adócsalás";
szakok[3]="13.-14. D osztály; Ereszcsúszás; M.Orgia; Angol; Wacyournémet; AntiSoros-terv ";
szakok[4]="13.-14. E osztály; Reklámkészítés; Anti-LMBTQ óra; Képzelőerő fejl.; Hibák megfogása; F.Eszme gyakorlás";
szakok[5]="13.-14. SZ osztály; Sikkasztás; Építészet; Kisvasút terv.; Tervrajz kész.; FDE.";

function listaelem(szaks){
  if (szaks.includes("(HUN)")) {
    return "<b>"+szaks.replace(",","<br>")+"</b>";
  } 
  else
  {
    return szaks.replace(",","<br>");
  }
}

function frissit(){
    var szak = document.getElementById('szakok').value;
    document.getElementById('osztaly').innerHTML = listaelem(szakok[szak].split(";")[0]); // osztály
    document.getElementById('h5').innerHTML = listaelem(szakok[szak].split(";")[1]); 
    document.getElementById('k4').innerHTML = listaelem(szakok[szak].split(";")[1]); 
    document.getElementById('sz6').innerHTML = listaelem(szakok[szak].split(";")[1]); 
    document.getElementById('cs3').innerHTML = listaelem(szakok[szak].split(";")[1]); 
    document.getElementById('p2').innerHTML = listaelem(szakok[szak].split(";")[1]); //1. óra
    document.getElementById('h6').innerHTML = listaelem(szakok[szak].split(";")[2]); 
    document.getElementById('k2').innerHTML = listaelem(szakok[szak].split(";")[2]); 
    document.getElementById('sz3').innerHTML = listaelem(szakok[szak].split(";")[2]); 
    document.getElementById('cs5').innerHTML = listaelem(szakok[szak].split(";")[2]); 
    document.getElementById('p3').innerHTML = listaelem(szakok[szak].split(";")[2]); //2. óra
    document.getElementById('h2').innerHTML = listaelem(szakok[szak].split(";")[3]); 
    document.getElementById('k5').innerHTML = listaelem(szakok[szak].split(";")[3]); 
    document.getElementById('sz4').innerHTML = listaelem(szakok[szak].split(";")[3]); 
    document.getElementById('cs6').innerHTML = listaelem(szakok[szak].split(";")[3]); 
    document.getElementById('p4').innerHTML = listaelem(szakok[szak].split(";")[3]); //3. óra
    document.getElementById('h3').innerHTML = listaelem(szakok[szak].split(";")[4]);
    document.getElementById('k6').innerHTML = listaelem(szakok[szak].split(";")[4]);
    document.getElementById('sz5').innerHTML = listaelem(szakok[szak].split(";")[4]);
    document.getElementById('cs2').innerHTML = listaelem(szakok[szak].split(";")[4]);
    document.getElementById('p5').innerHTML = listaelem(szakok[szak].split(";")[4]); //4.óra
    document.getElementById('h4').innerHTML = listaelem(szakok[szak].split(";")[5]);
    document.getElementById('k3').innerHTML = listaelem(szakok[szak].split(";")[5]);
    document.getElementById('sz2').innerHTML = listaelem(szakok[szak].split(";")[5]);
    document.getElementById('cs4').innerHTML = listaelem(szakok[szak].split(";")[5]);
    document.getElementById('p6').innerHTML = listaelem(szakok[szak].split(";")[5]); //5.óra
}
