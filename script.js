/**
 * LÓGICA DE INTERACTIVIDAD & SISTEMA DE ANIMACIONES - PLATAFORMA DE CÁLCULO
 * Maneja el comportamiento dinámico del taller y la revelación al scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
    inicializarRevealAlScroll();
    inicializarAnimacionesEntrada();
});

/**
 * 1. Sistema de Revelación al Scroll (anim-reveal)
 * Activa las tarjetas conforme el usuario desliza.
 */
function inicializarRevealAlScroll() {
    const cards = document.querySelectorAll('.anim-reveal');
    
    // Configuración del Observador de Intersección
    const observerOptions = {
        root: null, // viewport
        threshold: 0.15, // Porcentaje visible para activar
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revelado');
                observer.unobserve(entry.target); // Detener observación tras activar
            }
        });
    }, observerOptions);

    // Iniciar observación de cada tarjeta
    cards.forEach(card => observer.observe(card));
}

/**
 * 2. Animaciones de Entrada (Core)
 * Controla la secuencia de animación inicial del Hero y Footer.
 */
function inicializarAnimacionesEntrada() {
    // Estas animaciones se activan secuencialmente mediante CSS y clases de utilidad
    const hero = document.querySelector('.hero-tech');
    const h1 = hero.querySelector('h1');
    const subtitle = hero.querySelector('.hero-subtitle');
    const team = hero.querySelector('.team-dashboard');
    const scrollBtn = hero.querySelector('.scroll-btn');
    const utpTag = hero.querySelector('.utp-tag');
    const footer = document.querySelector('.tech-footer');

    // Añadir clases de animación con retraso controlado (CSS handles the delay classes)
    h1.classList.add('anim-slide-up');
    subtitle.classList.add('anim-slide-up', 'anim-delay-0-3s');
    utpTag.classList.add('anim-fade-in', 'anim-delay-0-5s');
    team.classList.add('anim-scale-in', 'anim-delay-0-8s');
    scrollBtn.classList.add('anim-bounce', 'anim-infinite');
    scrollBtn.classList.add('anim-fade-in', 'anim-delay-1s');

    // Footer fadeIn simple
    footer.classList.add('anim-fade-in');
}


/**
 * 3. Sistema de Taller Interactiva (Quiz)
 * Maneja la validación y la animación de retroalimentación de las trivia.
 */
function evaluateQuiz(idEx, option, isCorrect) {
    // Apuntamos al contenedor de texto específico del ejercicio pulsado
    const feedbackArea = document.getElementById('ans-' + idEx);
    
    // Reseteamos las clases anteriores y estado de visibilidad
    feedbackArea.className = "quiz-feedback anim-pop-in";
    feedbackArea.style.display = 'none'; // Ocultar para activar la anim

    // Activar animación y feedback
    setTimeout(() => {
        if (isCorrect) {
            feedbackArea.classList.add('show-ok');
            
            if (idEx === 1) {
                feedbackArea.innerHTML = `<strong><i class="fas fa-check-circle"></i> ¡Cálculo Correcto! (Opción ${option})</strong><br>La raíz enésima cancela la potencia general. Al evaluar el límite al infinito de la base (4n+1)/(2n+5) obtenemos L = 2. Como L = 2 > 1, la serie diverge sin duda alguna.`;
            } else if (idEx === 2) {
                feedbackArea.innerHTML = `<strong><i class="fas fa-check-circle"></i> ¡Excelente Deducción! (Opción ${option})</strong><br>Al anular el exponente variable con la raíz, nos queda el límite de (3/n) cuando n tiende a infinito, lo cual da L = 0. Como L < 1, confirmamos convergencia absoluta.`;
            } else if (idEx === 3) {
                feedbackArea.innerHTML = `<strong><i class="fas fa-star"></i> ¡Brillante! Superaste el reto de la UTP (Opción ${option})</strong><br>La potencia original es 3n, por ende queda un exponente cúbico tras aplicar la raíz: (lim(n/(2n+1)))³. El límite de la base es 1/2, elevado al cubo nos da L = 1/8. Al ser menor a 1, la serie converge absolutamente.`;
            }
        } else {
            feedbackArea.classList.add('show-no');
            feedbackArea.innerHTML = `<strong><i class="fas fa-times-circle"></i> Respuesta Incorrecta (Opción ${option})</strong><br>El análisis matemático o la ley de decisión aplicada falla. Cancela la potencia exterior con la raíz, resuelve el límite de la base y compáralo estrictamente con el 1.`;
            
            // Efecto de shake al ícono de la alerta principal si se equivoca
            const alertIcon = document.querySelector('.alert-icon');
            alertIcon.className = "alert-icon anim-shake anim-infinite";
            setTimeout(() => {
                alertIcon.className = "alert-icon";
            }, 1000);
        }
        
        feedbackArea.style.display = 'block'; // Mostrar con animación animPopIn
    }, 50); // Pequeño delay para asegurar el reset de display
}
