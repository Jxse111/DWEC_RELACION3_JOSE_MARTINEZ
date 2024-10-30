// Función para calcular la diferencia entre fechas
function calcularDiferencia(fechaIntroducida) {
    const fechaActual = new Date();
    const fechaDestino = new Date(fechaIntroducida);

    // Calcular la diferencia en milisegundos
    const diferenciaMilisegundos = fechaDestino  -   fechaActual;

    // Convertir milisegundos a días
    const dias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    
    // Calcular semanas y años
    const semanas = Math.floor(dias / 7);
    const años = Math.floor(dias / 365);

    return { dias, semanas, años };
}

// Función para solicitar la fecha al usuario
function solicitarFecha() {
    const fechaIntroducida = prompt("Introduce una fecha en formato YYYY-MM-DD:");
    const resultado = calcularDiferencia(fechaIntroducida);
    
    // Mostrar el resultado
    document.write(`Días: ${resultado.dias}<br>`);
    document.write(`Semanas: ${resultado.semanas}<br>`);
    document.write(`Años: ${resultado.años}<br>`);
}

// Llamar a la función para iniciar
solicitarFecha();
