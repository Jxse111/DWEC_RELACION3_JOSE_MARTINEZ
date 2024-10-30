// Verificamos si el navegador está en pantalla completa
if (document.fullscreenElement) {
    alert("El navegador está en pantalla completa.");
} else {
    alert("El navegador NO está en pantalla completa.");
}

// Verificamos si estamos en un dispositivo móvil
// Accedemos al userAgent del navegador
const userAgent = navigator.userAgent;

// Comprobamos si la cadena 'Mobile' está presente en el userAgent
if (userAgent.includes("Mobile")) {
    alert("Estás usando un dispositivo móvil.");
} else {
    alert("No estás usando un dispositivo móvil.");
}
