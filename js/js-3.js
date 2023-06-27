function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }
  
  window.onload = function() {
    var resultado = "";
    for (var i = 1; i <= 100; i++) {
      if (esPrimo(i)) {
        resultado += i + ", ";
      }
    }
    document.getElementById("numeros-primos").innerHTML = resultado.slice(0, -2);
  }