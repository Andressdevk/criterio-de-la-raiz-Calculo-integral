/**
 * SISTEMA INTERACTIVO DE EVALUACIÓN EDITORIAL
 * Valida respuestas algebraicas de límites al infinito para la cátedra de Cálculo Integral.
 */
function checkEx(idEjercicio, opcion, esCorrecto) {
    // Apuntar dinámicamente al bloque de respuesta del ejercicio actual
    const feedbackBlock = document.getElementById('feed-' + idEjercicio);
    
    // Resetear las clases de visibilidad
    feedbackBlock.className = "feedback-editorial";
    
    if (esCorrecto) {
        feedbackBlock.classList.add('show-success');
        
        // Retroalimentación detallada y formal según el ejercicio seleccionado
        if (idEjercicio === 1) {
            feedbackBlock.innerHTML = `<b>¡Análisis Correcto! (Opción ${opcion})</b><br>Al aplicar la raíz enésima se anula la potencia exterior, resultando en el lim((4n+1)/(2n+5)) = 4/2 = 2. Dado que el límite L = 2 es estrictamente mayor que 1 (L > 1), la serie diverge según el teorema de Cauchy.`;
        } else if (idEjercicio === 2) {
            feedbackBlock.innerHTML = `<b>¡Excelente Deducción! (Opción ${opcion})</b><br>La raíz enésima cancela la potencia n, dejándonos el lim(3/n) cuando n tiende a infinito. Al evaluar la división de una constante por un número infinitamente grande, el valor tiende a L = 0. Como 0 < 1, la serie converge absolutamente.`;
        } else if (idEjercicio === 3) {
            feedbackBlock.innerHTML = `<b>¡Magnífico! Logró superar el reto formal (Opción ${opcion})</b><br>La potencia original del término es 3n. Al aplicar la raíz enésima nos queda el límite interno afectado por el cubo remanente: (lim(n/(2n+1)))³. El límite de la base es igual a 1/2, y al elevarlo al cubo obtenemos L = 1/8. Como 1/8 < 1, la serie converge de forma absoluta.`;
        }
    } else {
        feedbackBlock.classList.add('show-danger');
        feedbackBlock.innerHTML = `<b>Respuesta Incorrecta (Opción ${opcion})</b><br>El valor analítico o la ley de decisión aplicada no corresponde al ejercicio. Recuerde resolver primero la simplificación de los exponentes y evaluar con rigor el límite resultante frente a la constante 1. ¡Inténtelo nuevamente!`;
    }
}
