var pregunta = prompt("Pregúntale algo a la BrujIA: ");
const numeroLimite = 0.499999;
let dado; // Inicializa la variable dado fuera del bucle

do {
    dado = Math.random() * 6; // Llama a Math.random() como una función
    if (dado > numeroLimite) {
        document.write("La pregunta que has realizado es: "+"\""+pregunta+"\""+"<br>");
        document.write("Si");
    } else if (pregunta.includes("DWEC")) {
        document.write("A esas preguntas no respondo. Adiós.");
    }
} while (dado < numeroLimite);