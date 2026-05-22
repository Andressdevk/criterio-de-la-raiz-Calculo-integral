/**
 * LÓGICA DE VALIDACIÓN INTERACTIVA DEL TALLER
 * Diseñado para procesar respuestas de forma dinámica sin recargar la app.
 */
function verificarEjercicio(idEjercicio, opcionSeleccionada, dictamen) {
    // Apuntar al contenedor de texto de retroalimentación específico
    const feedbackBox = document.getElementById(`feedback-${idEjercicio}`);
    
    // Limpiar configuraciones y estilos visuales previos
    feedbackBox.className = "feedback-msg";
    
    if (dictamen === 'correcto') {
        feedbackBox.classList.add('success-ui');
        
        // Mensajes analíticos personalizados por ejercicio
        if (idEjercicio === 1) {
            feedbackBox.innerHTML = `<strong>¡EXCELENTE! (Opción ${opcionSeleccionada})</strong><br>Al simplificar la raíz enésima, evaluamos el límite al infinito de (4n+1)/(2n+5), lo cual da L = 4/2 = 2. Como L > 1, la serie diverge analíticamente de forma correcta.`;
        } else if (idEjercicio === 2) {
            feedbackBox.innerHTML = `<strong>¡RESPUESTA CORRECTA! (Opción ${opcionSeleccionada})</strong><br>Excelente análisis. Al aplicar la raíz, el límite resulta en lim(3/n) cuando n tiende a infinito, lo que es igual a 0. Como L = 0 < 1, la serie converge absolutamente.`;
        } else if (idEjercicio === 3) {
            feedbackBox.innerHTML = `<strong>¡BRILLANTE, LOGRASTE EL RETO! (Opción ${opcionSeleccionada})</strong><br>Nivel UTP. La potencia es 3n, así que al aplicar la raíz queda lim((n/(2n+1))³). Al resolver el límite interno da 1/2, y elevado al cubo da L = 1/8. Al ser menor que 1, la serie converge de forma absoluta.`;
        }
    } else {
        feedbackBox.classList.add('error-ui');
        feedbackBox.innerHTML = `<strong>RESPUESTA INCORRECTA (Opción ${opcionSeleccionada})</strong><br>El análisis matemático no coincide. Recuerda aplicar la raíz enésima para anular el exponente externo y compara el valor del límite final firmemente con el 1. ¡Vuelve a intentarlo!`;
    }
}
