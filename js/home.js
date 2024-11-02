// Frases
// Los carceleros de la humanidad no me atraparán. Dos veces con la misma red
// Nace una flor, todos los días sale el Sol. De vez en cuando, escuchas aquella voz
// Cada cual tiene un trip en el bocho. Difícil que lleguemos a ponernos de acuerdo
// No voy a dejar ni un camino sin andar
// Yo tuve el mundo a mis pies y no era nada sin ti
// Estas buscando un símbolo de paz
// Los amigos del barrio pueden desaparecer Pero los dinosaurios van a desaparecer
// Y curé mis heridas Y me encendí de amor Y quemé las cortinas
// Cerca de la revolución El pueblo pide sangre
// No elegí este mundo, pero aprendí a querer


const frases = [
    '"No voy a dejar ni un camino sin andar<br> hasta que encuentre el final"',
    '"Nace una flor,<br> todos los días sale el sol"',
    '"Y curé mis heridas<br> y me encendí de amor"',
    '"No elegí este mundo,<br> pero aprendí a querer"'
];

let fraseElement = document.querySelector('#frase');

function cambiarFrase() {
    let fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    // Añade las clases de animación
    fraseElement.classList.add("animate__animated", "animate__fadeIn","animate__slow" );
    
    // Cambia el contenido del elemento
    fraseElement.innerHTML = fraseAleatoria;

    // Elimina las clases de animación para que puedan reiniciarse en el próximo cambio
    setTimeout(function() {
        fraseElement.classList.remove("animate__animated", "animate__fadeIn","animate__slow");
    }, 6000); // Ajusta el tiempo para que la animación se complete antes de remover clases
}

// Cambia la frase cada 7 segundos
setInterval(cambiarFrase, 6000);
