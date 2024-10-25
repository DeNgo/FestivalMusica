document.addEventListener("DOMContentLoaded", function(){

    navegacionfija()
    crearGaleria()
})

function navegacionfija(){

}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <=16; i++){
        const imagen = document.createElement("IMG")
        imagen.src = `src/img/img/full/${i}.jpg`
        imagen.alt = "Imagen Galería"

        // Event Handler
        imagen.onclick = function(){
            zoomImagen(i)
        }
        
        galeria.appendChild(imagen);
    }
}

function zoomImagen(i){
    const imagen = document.createElement("IMG")
    imagen.src = `src/img/img/full/${i}.jpg`
    imagen.alt = "Imagen Galería"
    
    // Generar Modal 
    const modal = document.createElement("DIV")
    modal.classList.add("modal")
    modal.onclick = cerrarModal
    modal.appendChild(imagen)

    //Botón cerrar modal 
    const cerrarModalBtn = document.createElement("BUTTON")
    cerrarModalBtn.textContent = "X"
    cerrarModalBtn.classList.add("btn-cerrar")
    cerrarModalBtn.onclick = cerrarModal
    modal.appendChild(cerrarModalBtn)

    // agregar al modal al html
    const body = document.querySelector("body")
    body.classList.add("overflow-hidden")
    body.appendChild(modal)
}

function cerrarModal(){
    const modal = document.querySelector(".modal")
    modal.classList.add("fadeOut")

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector("body")
        body.classList.remove("overflow-hidden")
    },500);
}