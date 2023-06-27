function calificar() {
    let nota = Number (document.getElementById("nota").value);

    if (nota >= 0 && nota <= 3) {
        document.getElementById("resultado").innerHTML = "Muy deficiente";
    } else if (nota > 3 && nota <= 5) {
        document.getElementById("resultado").innerHTML = "Insuficiente";
    } else if (nota > 5 && nota <= 6) {
        document.getElementById("resultado").innerHTML = "Suficiente";
    } else if (nota > 6 && nota <= 7) {
        document.getElementById("resultado").innerHTML = "Bien";
    } else if (nota > 7 && nota <= 9) {
        document.getElementById("resultado").innerHTML = "Notable";
    } else if (nota > 9 && nota <= 10) {
        document.getElementById("resultado").innerHTML = "Sobresaliente";
    } else {
        document.getElementById("resultado").innerHTML = "Introduce una nota válida del 1 al 10";
    }
}