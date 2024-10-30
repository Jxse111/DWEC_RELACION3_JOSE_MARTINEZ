    // Función para eliminar un carácter específico de una cadena
    function eliminarCaracter(cadena, caracter) {
        let resultado = '';
        for (let i = 0; i < cadena.length; i++) {
            if (cadena.charAt(i) !== caracter) {
                resultado += cadena.charAt(i);
            }
        }
        return resultado;
    }
    
    // Función para invertir mayúsculas y minúsculas en posiciones múltiplos de un número
    function invertirMayusculas(cadena, multiplo) {
        let resultado = '';
        for (let i = 0; i < cadena.length; i++) {
            // La posición que estamos considerando es i + 1 (para contar desde 1)
            if ((i + 1) % multiplo === 0) {
                // Invertir el caso
                if (cadena.charAt(i) === cadena.charAt(i).toUpperCase()) {
                    resultado += cadena.charAt(i).toLowerCase();
                } else {
                    resultado += cadena.charAt(i).toUpperCase();
                }
            } else {
                resultado += cadena.charAt(i);
            }
        }
        return resultado;
    }
    
    // Ejemplo de uso
    /*const cadena1 = "Miguel";
    const caracter1 = "g";
    document.write("Ejemplo de funcionamiento 1: "+eliminarCaracter(cadena1, caracter1)+"<br><br>"); // "Miuel"
    
    const cadena2 = "El gato pardo";
    const caracter2 = "o";
    document.write("Ejemplo de funcionamiento 2: "+eliminarCaracter(cadena2, caracter2)+"<br><br>"); // "El gat pard"
    
    const cadena3 = "Horror";
    const multiplo1 = 1;
    document.write("Ejemplo de funcionamiento 3: "+invertirMayusculas(cadena3, multiplo1)+"<br><br>"); // "hORROR"
    
    const cadena4 = "El pollo es azul";
    const multiplo2 = 2;
    document.write("Ejemplo de funcionamiento 4: "+invertirMayusculas(cadena4, multiplo2)+"<br><br>"); // "EL PoLlO Es aZuL"
    
    const cadena5 = "12345A";
    const multiplo3 = 3;
    document.write("Ejemplo de funcionamiento 5: "+invertirMayusculas(cadena5, multiplo3)+"<br><br>"); // "12345a"*/
    
    //Funcionamiento principal(Aplicado al ejercicio) 
    palabra=prompt("Introduce una cadena de palabras o numeros: ");
    caracter= prompt("Introduce el caracter a eliminar: ");
    multiplo= parseInt(prompt("Introduce un número para el múltiplo: "));
    document.write("Resultado del funcionamiento: "+eliminarCaracter(palabra,caracter)+"<br><br>");
    document.write("Resultado del funcionamiento: "+invertirMayusculas(palabra,multiplo)+"<br><br>");