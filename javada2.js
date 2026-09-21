function caucularaura() {

var base = parseFloat(document.getElementById("base").value) || 0;
var altura = parseFloat(document.getElementById("altura").value) || 0;

var cauculo = base*altura;
document.getElementById("resultado").innerText = cauculo
}
