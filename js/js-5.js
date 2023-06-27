function verificar() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;

    const genero = document.querySelector('input[name="sexo"]:checked').value;

    const edad = document.querySelector('input[name="edad"]:checked').value;
    
    let mensaje = "";

    if (genero === "hombre" && edad === ">65"){
        mensaje = "¡Sr. puede jubilarte!";
    } else if (genero === "mujer" && (edad === ">60" || edad === ">65") ){
        mensaje = "¡Sra. puede jubilarte!";
    } else{
        mensaje = "Lo siento, aún no puedes jubilarte.";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}