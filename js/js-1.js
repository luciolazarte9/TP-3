function conducir(){
    const edad = document.getElementById("edad").value;
    const mensaje = document.getElementById("mensaje").value;
    if (edad >= 18){
        const mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = 'Usted puede conducir.';
    }
    else{
        const mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = 'Usted no puede conducir.';
    }
    
}