document.addEventListener("DOMContentLoaded", function(){
    crearGaleria()
})

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imgenes")

    for(let i = 1; i <=16; i++){
        const imagen = document.createElement("IMG")
        imagen.src = `src/img/img/full/${i}.jpg`
        imagen.alt = "Imagen Galería"
        
        galeria.appendChild(imagen);
    }
}