document.addEventListener("DOMContentLoaded", function(){

    navegacionfija()
    crearGaleria()
    resaltarEnlace()
})

function navegacionfija(){
    const header = document.querySelector(".header")
    const sobreFestival = document.querySelector(".video")

    window.addEventListener("scroll", function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add("fixed")
        }else{
            header.classList.remove("fixed")
        }
    })
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

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}
