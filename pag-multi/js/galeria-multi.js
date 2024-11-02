
$(document).ready(function(){
    $('#fotos').slick({
        slidesToShow: 3,   // Muestra 3 imágenes en pantallas grandes
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Pantallas hasta 1024px (ej. netbooks)
                settings: {
                    slidesToShow: 2,  // Muestra 2 imágenes en pantalla
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600, // Pantallas hasta 600px (ej. móviles)
                settings: {
                    slidesToShow: 1,  // Muestra 1 imagen en pantalla
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('#ilust').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Pantallas hasta 1024px (ej. netbooks)
                settings: {
                    slidesToShow: 2,  // Muestra 2 imágenes en pantalla
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600, // Pantallas hasta 600px (ej. móviles)
                settings: {
                    slidesToShow: 1,  // Muestra 1 imagen en pantalla
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('#fondos').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024, // Pantallas hasta 1024px (ej. netbooks)
                settings: {
                    slidesToShow: 2,  // Muestra 2 imágenes en pantalla
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600, // Pantallas hasta 600px (ej. móviles)
                settings: {
                    slidesToShow: 1,  // Muestra 1 imagen en pantalla
                    slidesToScroll: 1
                }
            }
        ]
    });
});

