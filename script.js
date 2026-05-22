// Función para evaluar las respuestas de la trivia en tiempo real
function evaluarRespuesta(estado) {
    const contenedorResultado = document.getElementById('resultado-taller');
    
    // Quitamos clases previas
    contenedorResultado.className = "";
    
    if (estado === 'correcto') {
        contenedorResultado.innerText = "¡EXCELENTE! Como 2/3 es menor que 1, la serie converge absolutamente. ¡Punto positivo! 🎉";
        contenedorResultado.classList.add('success');
    } else {
        contenedorResultado.innerText = "❌ Incorrecto. Recuerda la regla: si el límite es MENOR que 1, la serie converge. ¡Inténtalo de nuevo!";
        contenedorResultado.classList.add('error');
    }
}