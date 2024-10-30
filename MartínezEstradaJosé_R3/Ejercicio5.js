// Solicitar el radio y la altura al usuario
var R = parseInt(prompt("Introduce el radio del casquete esférico:"));
var h = parseInt(prompt("Introduce la altura del casquete esférico:"));

alert("Calculando el área y el volumen del casquete esférico...");

function calcularCasqueteEsferico(R, h) {
    // Comprobar la entrada de datos
    if (R <= 0 || h <= 0) {
        return "El radio de la esfera y la altura del casquete deben ser mayores que cero.";
    }
    if (h > 2 * R) {
        return "La altura no puede ser mayor que el doble del radio de la esfera.";
    }

    const PI = Math.PI;

    // Cálculo del área superficial
    const area = 2 * PI * R * h;

    // Cálculo del volumen
    const volumen = (1 / 3) * PI * Math.pow(h,2) * (3 * R - h);

    return {
        area: area,
        volumen: volumen
    };
}

// Calcular resultados
const resultado = calcularCasqueteEsferico(R, h);

// Mostrar resultados en el documento
if (typeof resultado === 'string') {
    document.write(resultado); // Si hay un mensaje de error
} else {
    document.write("Área del casquete esférico: " + resultado.area + "<br>");
    document.write("Volumen del casquete esférico: " + resultado.volumen);
}

