const datosCuriosos = [
    "En el año 2000, Charly se lanzó desde un noveno piso hacia una piscina en Mendoza. A pesar de los rumores de locura, él explicó que practicaba estos saltos, controlando el riesgo y disfrutando la sensación del “vacío” antes de llegar al agua.",
    "Charly interpretó el Himno en su disco Filosofía barata y zapatos de goma, lo que le valió un juicio por ofensa a los símbolos patrios. Finalmente ganó el juicio, y la versión se convirtió en un clásico del rock argentino​.",
    "En los años 70 y 80, Charly admiraba profundamente a Bowie, tanto por su música como por su actitud rebelde, y adoptó estilos y sonidos inspirados en él.​",
    "Aunque muchos lo interpretan como una decisión artística, en realidad este look se debe a una condición de vitíligo que afecta la pigmentación de su piel​.",
    "En los años 90, Charly empezó a firmar sus obras y escenarios con la frase “Say No More”, que reflejaba su filosofía de no tener que explicar o justificar sus acciones.​",
    "Colaboró y fue amigo cercano de Luis Alberto Spinetta. Juntos crearon Rezo por vos, que se ha convertido en uno de los temas más emblemáticos del rock argentino.",
    "En 1988, Charly fue parte de un concierto para Amnesty International en Buenos Aires, ante más de 80,000 personas, junto a grandes como Sting y Bruce Springsteen.",
    "Charly experimentó fuertes adicciones y conflictos públicos en los 90 y 2000, incluyendo incidentes en el escenario y polémicas declaraciones, pero sus seguidores siguieron apoyándolo.",
    "Durante el servicio militar, Charly García sufrió una sobredosis que lo inspiró a escribir 'Canción para mi muerte' en solo diez minutos, describiendo luego que “la música lo salvó” en ese momento.​",
    "Charly fue pionero en incorporar el sonido de sintetizadores en el rock argentino, especialmente en discos como Clics Modernos.​",  ];  //array con los datos curiosos

document.querySelector('#botonDato').addEventListener('click', function() {
    const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
    document.querySelector('.resultadoDato').innerText = datosCuriosos[indiceAleatorio];  });  //se genera un numero al azar menor a la cantidad total de posiciones del array
