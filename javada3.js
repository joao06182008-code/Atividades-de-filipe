function caucularperimetro() {

var lado = parseFloat(document.getElementById("lado").value) || 0;

var cauculo = lado*4
document.getElementById("resultado").innerText = cauculo.toFixed(2)
}