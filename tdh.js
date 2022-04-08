var szakok = [];
szakok[1]="13.-14. F osztály; Oszlopásás; Kerítésállítás; Sprintfutás; Vetődés; Célbalövés";
szakok[2]="13.-14. I osztály; Gazdasági óra; Közpénzelbaszás; Tőzsde; Betörés; Adócsalás";
szakok[3]="13.-14. D osztály; Ereszcsúszás; M.Orgia; Angol; Wacyournémet; AntiSoros-terv ";
szakok[4]="13.-14. E osztály; Reklámkészítés; Videóvágás; Képzelőerő fejl.; Hibák megfogása; F.Eszme gyakorlás";
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
    document.getElementById('osztaly').innerHTML = listaelem(szakok[szak].split(";")[0]); 
    document.getElementById('h2').innerHTML = listaelem(szakok[szak].split(";")[1]); 
    document.getElementById('h3').innerHTML = listaelem(szakok[szak].split(";")[2]); 
    document.getElementById('h4').innerHTML = listaelem(szakok[szak].split(";")[3]); 
    document.getElementById('h5').innerHTML = listaelem(szakok[szak].split(";")[4]);
    document.getElementById('h6').innerHTML = listaelem(szakok[szak].split(";")[5]);
}
