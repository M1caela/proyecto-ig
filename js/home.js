
const frases = [
    '"No voy a dejar <br> ni un camino sin andar',
    '"Nace una flor,<br> todos los días sale el sol"',
    '"Y curé mis heridas<br> y me encendí de amor"',
    '"No elegí este mundo,<br> pero aprendí a querer"',
    '"Cada cual tiene <br> un trip en el bocho"',
    '"Estás buscando <br> un símbolo de paz"',
];

let fraseElement = document.querySelector('#frase');

function cambiarFrase() {
    let fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    // clases de animación
    fraseElement.classList.add("animate__animated", "animate__fadeIn","animate__slow" );
    
    // Cambia el contenido del elemento
    fraseElement.innerHTML = fraseAleatoria;

    // Elimina las clases de animación para que puedan reiniciarse en el próximo cambio
    setTimeout(function() {
        fraseElement.classList.remove("animate__animated", "animate__fadeIn","animate__slow");
    }, 6000); // Ajusta el tiempo para que la animación se complete antes de remover clases
}

// cambia la frase cada 7 segs
setInterval(cambiarFrase, 6000);
