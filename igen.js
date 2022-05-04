
var szavaz = []

szavaz[1]="Fidesz:; listavezető: Orbán Viktor 135 / 199 (68%)"
szavaz[2]="DK–Jobbik–Momentum–MSZP–LMP–Párbeszéd:;  listavezető: Márki-Zay Péter; 57 / 199 (29%)"
szavaz[3]="Mi Hazánk:; listavezető: Toroczkai László ;6 / 199 (3%)"


function info(){
document.getElementById('eredmenygomb').innerHTML = szavaz[1].split(";");
document.getElementById('eredmenygomb').innerHTML = szavaz[2].split(";");
document.getElementById('eredmenygomb').innerHTML = szavaz[3].split(";");
}