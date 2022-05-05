
var szavaz = []

szavaz[1]="Fidesz:; listavezető: Orbán Viktor 135 / 199 (68%)"
szavaz[2]="DK–Jobbik–Momentum–MSZP–LMP–Párbeszéd:;  listavezető: Márki-Zay Péter; 57 / 199 (29%)"
szavaz[3]="Mi Hazánk:; listavezető: Toroczkai László ;6 / 199 (3%)",


function ered(){
    var hely = document.getElementById('szavaz').value
document.getElementById('eredmenygomb').innerHTML = hely[szavaz].split(";");
}