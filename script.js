/* ═══════════════════════════════════════════════════════════════
   CRITERIO DE LA RAÍZ — UTP
   script.js · Vanilla JS · Tab switching + Quiz interactivo
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────────────────────
   1. CAMBIO DE PESTAÑAS
───────────────────────────────────────────────────────────── */

/**
 * switchTab(tabId)
 * Muestra la sección con id=tabId y activa el botón correspondiente.
 * @param {string} tabId - 'inicio' | 'teoria' | 'leyes' | 'taller'
 */
function switchTab(tabId) {
  // 1. Desactivar todas las secciones
  document.querySelectorAll('.tab-section').forEach(section => {
    section.classList.remove('active');
  });

  // 2. Desactivar todos los botones
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });

  // 3. Activar sección objetivo
  const targetSection = document.getElementById(tabId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // 4. Activar botón correspondiente
  const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
  if (targetBtn) {
    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-selected', 'true');
  }

  // 5. Scroll suave al inicio del contenido
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enlazar botones de la barra de navegación al evento click
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    switchTab(btn.dataset.tab);
  });
});


/* ─────────────────────────────────────────────────────────────
   2. CONFIGURACIÓN DE EJERCICIOS
   Aquí definimos las respuestas correctas y las explicaciones
   matemáticas detalladas para cada ejercicio.
───────────────────────────────────────────────────────────── */

const EJERCICIOS = {

  /* ──────────────────────────────────────────────────────────
     Ejercicio 1:  ∑ ((4n+1)/(2n+5))^n
     aₙ = ((4n+1)/(2n+5))^n
     Respuesta correcta: B  →  Diverge, L = 2
  ────────────────────────────────────────────────────────── */
  1: {
    correct: 'B',
    feedbackCorrect: {
      title: '¡Correcto! La serie Diverge con L = 2',
      steps: [
        {
          label: 'Paso 1 — Identificar aₙ',
          text: 'El término general de la serie es <code>aₙ = ((4n + 1) / (2n + 5))ⁿ</code>. ' +
                'Como el exponente es precisamente <em>n</em>, el Criterio de la Raíz es la herramienta ideal.'
        },
        {
          label: 'Paso 2 — Aplicar el criterio',
          text: 'Extraemos la raíz enésima del valor absoluto: ' +
                '<code>L = lim(n→∞) |aₙ|^(1/n) = lim(n→∞) ((4n + 1) / (2n + 5))^(n · 1/n)</code>. ' +
                'Los exponentes se cancelan: <code>L = lim(n→∞) (4n + 1) / (2n + 5)</code>.'
        },
        {
          label: 'Paso 3 — Evaluar el límite',
          text: 'Dividimos numerador y denominador entre <em>n</em>: ' +
                '<code>L = lim(n→∞) (4 + 1/n) / (2 + 5/n)</code>. ' +
                'Cuando n → ∞, los términos <code>1/n</code> y <code>5/n</code> tienden a cero, por tanto: ' +
                '<code>L = (4 + 0) / (2 + 0) = 4/2 = <strong>2</strong></code>.'
        },
        {
          label: 'Paso 4 — Aplicar la Ley de Decisión',
          text: 'Dado que <strong>L = 2 > 1</strong>, por el <em>Caso II</em> del Criterio de la Raíz, ' +
                'los términos generales no tienden a cero (condición necesaria de convergencia violada), ' +
                'y por lo tanto la serie <strong>Diverge</strong>.'
        }
      ],
      result: '✓ Conclusión: ∑ ((4n+1)/(2n+5))ⁿ  DIVERGE  (L = 2 > 1)'
    },
    feedbackIncorrect: {
      title: 'Respuesta incorrecta — Revisa el límite',
      hint: 'Al extraer la raíz enésima de <code>((4n+1)/(2n+5))ⁿ</code>, los exponentes <em>n</em> ' +
            'y <em>1/n</em> se cancelan, dejando simplemente el límite de la fracción racional. ' +
            '¿Cuánto vale <code>lim(n→∞) (4n + 1) / (2n + 5)</code>? Recuerda dividir por el ' +
            'grado más alto y revisar la <strong>Ley de Decisión para L > 1</strong>.',
      result: '✗ La respuesta correcta es B: Diverge con L = 2'
    }
  },

  /* ──────────────────────────────────────────────────────────
     Ejercicio 2:  ∑ (3/n)^n
     aₙ = (3/n)^n
     Respuesta correcta: B  →  Converge, L = 0
  ────────────────────────────────────────────────────────── */
  2: {
    correct: 'B',
    feedbackCorrect: {
      title: '¡Excelente! La serie Converge con L = 0',
      steps: [
        {
          label: 'Paso 1 — Identificar aₙ',
          text: 'El término general es <code>aₙ = (3/n)ⁿ</code>. La presencia del exponente <em>n</em> ' +
                'hace que el Criterio de la Raíz sea la elección óptima; otros criterios pueden ser más engorrosos.'
        },
        {
          label: 'Paso 2 — Aplicar el criterio',
          text: 'Calculamos <code>L = lim(n→∞) |aₙ|^(1/n) = lim(n→∞) |(3/n)ⁿ|^(1/n)</code>. ' +
                'Los exponentes <em>n</em> y <em>1/n</em> se cancelan: ' +
                '<code>L = lim(n→∞) |3/n| = lim(n→∞) 3/n</code>.'
        },
        {
          label: 'Paso 3 — Evaluar el límite',
          text: 'La expresión <code>3/n</code> tiene en el denominador una variable que crece sin cota, ' +
                'mientras el numerador es una constante. Por tanto: ' +
                '<code>L = lim(n→∞) 3/n = <strong>0</strong></code>.'
        },
        {
          label: 'Paso 4 — Aplicar la Ley de Decisión',
          text: 'Dado que <strong>L = 0 < 1</strong>, por el <em>Caso I</em> del Criterio de la Raíz, ' +
                'la serie <strong>converge absolutamente</strong>. El valor L = 0 indica que ' +
                'los términos decaen más rápido que cualquier progresión geométrica de razón < 1.'
        }
      ],
      result: '✓ Conclusión: ∑ (3/n)ⁿ  CONVERGE ABSOLUTAMENTE  (L = 0 < 1)'
    },
    feedbackIncorrect: {
      title: 'Respuesta incorrecta — Revisa el límite',
      hint: 'Al aplicar la raíz enésima a <code>(3/n)ⁿ</code>, los exponentes se eliminan y obtienes ' +
            '<code>lim(n→∞) (3/n)</code>. Pregúntate: ¿qué le ocurre a una fracción cuando el denominador ' +
            'crece indefinidamente hacia infinito? Revisa la <strong>Ley de Decisión para L < 1</strong>.',
      result: '✗ La respuesta correcta es B: Converge con L = 0'
    }
  },

  /* ──────────────────────────────────────────────────────────
     Ejercicio 3:  ∑ (n/(2n+1))^{3n}
     aₙ = (n/(2n+1))^{3n}
     Respuesta correcta: A  →  Converge, L = 1/8
  ────────────────────────────────────────────────────────── */
  3: {
    correct: 'A',
    feedbackCorrect: {
      title: '¡Brillante! La serie Converge con L = 1/8',
      steps: [
        {
          label: 'Paso 1 — Identificar aₙ',
          text: 'El término general es <code>aₙ = (n / (2n+1))^{3n}</code>. El exponente es <em>3n</em>, ' +
                'una función lineal de <em>n</em>, lo que lo hace perfectamente compatible con el Criterio de la Raíz.'
        },
        {
          label: 'Paso 2 — Aplicar el criterio',
          text: 'Calculamos <code>L = lim(n→∞) |aₙ|^(1/n) = lim(n→∞) [(n/(2n+1))^{3n}]^(1/n)</code>. ' +
                'Los exponentes se combinan: <code>(3n) · (1/n) = 3</code>, así: ' +
                '<code>L = lim(n→∞) (n / (2n + 1))³</code>.'
        },
        {
          label: 'Paso 3 — Evaluar el límite interno',
          text: 'Primero evaluamos el límite de la base: dividimos por <em>n</em>: ' +
                '<code>lim(n→∞) n / (2n + 1) = lim(n→∞) 1 / (2 + 1/n) = 1/2</code>. ' +
                'Luego elevamos al cubo: <code>L = (1/2)³ = <strong>1/8</strong></code>.'
        },
        {
          label: 'Paso 4 — Aplicar la Ley de Decisión',
          text: 'Dado que <strong>L = 1/8 < 1</strong>, por el <em>Caso I</em> del Criterio de la Raíz, ' +
                'la serie <strong>converge absolutamente</strong>. Notar que sin el exponente cúbico, ' +
                'el límite de la base sería 1/2, que también daría convergencia, pero el exponente <em>3n</em> ' +
                'lo comprime aún más, dando L = 1/8, un valor considerablemente menor que 1.'
        }
      ],
      result: '✓ Conclusión: ∑ (n/(2n+1))^{3n}  CONVERGE ABSOLUTAMENTE  (L = 1/8 < 1)'
    },
    feedbackIncorrect: {
      title: 'Respuesta incorrecta — Revisa el exponente',
      hint: 'Cuidado: el exponente es <em>3n</em>, no simplemente <em>n</em>. Al aplicar la raíz enésima ' +
            '<code>(aₙ)^(1/n)</code>, los exponentes se combinan así: <code>(3n) · (1/n) = 3</code>. ' +
            'Entonces debes evaluar el cubo del límite de la fracción base. ' +
            'Calcula <code>lim(n→∞) (n/(2n+1))</code> y luego <strong>elévalo a la 3</strong>.',
      result: '✗ La respuesta correcta es A: Converge con L = 1/8'
    }
  }
};


/* ─────────────────────────────────────────────────────────────
   3. ESTADO DEL TALLER
───────────────────────────────────────────────────────────── */

const tallerState = {
  answered: { 1: false, 2: false, 3: false },
  score: 0
};


/* ─────────────────────────────────────────────────────────────
   4. VERIFICAR QUIZ
   checkQuiz(exerciseNum, selectedOption)
───────────────────────────────────────────────────────────── */

/**
 * Evalúa la respuesta del usuario para un ejercicio dado.
 * @param {number} exerciseNum - Número del ejercicio (1, 2 o 3)
 * @param {string} selectedOption - Opción seleccionada ('A' o 'B')
 */
function checkQuiz(exerciseNum, selectedOption) {
  // Evitar respuesta múltiple
  if (tallerState.answered[exerciseNum]) return;

  const config    = EJERCICIOS[exerciseNum];
  const isCorrect = (selectedOption === config.correct);
  const feedbackEl = document.getElementById(`feedback-${exerciseNum}`);
  const card       = document.getElementById(`ej${exerciseNum}`);

  // Marcar como respondido
  tallerState.answered[exerciseNum] = true;
  if (isCorrect) tallerState.score++;
  updateScoreDisplay();

  // Deshabilitar todos los botones del ejercicio
  card.querySelectorAll('.quiz-btn').forEach(btn => {
    btn.classList.add('disabled');
  });

  // Resaltar botón seleccionado
  const btnIndex = selectedOption === 'A' ? 0 : 1;
  const selectedBtn = card.querySelectorAll('.quiz-btn')[btnIndex];
  selectedBtn.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');

  // Construir HTML del feedback
  if (isCorrect) {
    const fb = config.feedbackCorrect;
    const stepsHTML = fb.steps.map(step => `
      <div class="step">
        <strong>${step.label}:</strong> ${step.text}
      </div>
    `).join('');

    feedbackEl.innerHTML = `
      <div class="feedback__title">
        <i class="fa-solid fa-circle-check"></i>
        ${fb.title}
      </div>
      <div class="feedback__body">
        ${stepsHTML}
        <div class="feedback__result">
          <i class="fa-solid fa-check"></i>
          ${fb.result}
        </div>
      </div>
    `;
    feedbackEl.classList.add('correct');
  } else {
    const fb = config.feedbackIncorrect;
    feedbackEl.innerHTML = `
      <div class="feedback__title">
        <i class="fa-solid fa-circle-xmark"></i>
        ${fb.title}
      </div>
      <div class="feedback__body">
        <p>${fb.hint}</p>
        <div class="feedback__result">
          <i class="fa-solid fa-xmark"></i>
          ${fb.result}
        </div>
      </div>
    `;
    feedbackEl.classList.add('incorrect');
  }

  // Animar la aparición del feedback (ligero delay para efecto visual)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      feedbackEl.classList.add('show');
      // Scroll suave hacia el feedback
      setTimeout(() => {
        feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 150);
    });
  });
}


/* ─────────────────────────────────────────────────────────────
   5. ACTUALIZAR MARCADOR
───────────────────────────────────────────────────────────── */

function updateScoreDisplay() {
  const el = document.getElementById('score-display');
  if (el) el.textContent = `${tallerState.score} / 3`;
}


/* ─────────────────────────────────────────────────────────────
   6. REINICIAR TALLER
───────────────────────────────────────────────────────────── */

function resetTaller() {
  // Restablecer estado
  tallerState.answered = { 1: false, 2: false, 3: false };
  tallerState.score    = 0;
  updateScoreDisplay();

  // Limpiar cada ejercicio
  [1, 2, 3].forEach(num => {
    const card       = document.getElementById(`ej${num}`);
    const feedbackEl = document.getElementById(`feedback-${num}`);

    // Re-habilitar botones y quitar clases visuales
    card.querySelectorAll('.quiz-btn').forEach(btn => {
      btn.classList.remove('disabled', 'selected-correct', 'selected-wrong');
    });

    // Ocultar feedback
    feedbackEl.classList.remove('show', 'correct', 'incorrect');
    feedbackEl.innerHTML = '';
  });
}


/* ─────────────────────────────────────────────────────────────
   7. INICIALIZACIÓN
───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Asegurar que la pestaña Inicio esté activa al cargar
  switchTab('inicio');
  updateScoreDisplay();
});


/* ─────────────────────────────────────────────────────────────
   8. BOTÓN COMPARTIR
───────────────────────────────────────────────────────────── */

(function initShareBtn() {
  const btn   = document.getElementById('shareBtn');
  const toast = document.getElementById('shareToast');
  if (!btn) return;

  function showToast(msg) {
    toast.innerHTML = `<i class="fa-solid fa-check"></i> ${msg}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }

  btn.addEventListener('click', async () => {
    const shareData = {
      title: 'Criterio de la Raíz — UTP Cálculo Integral',
      text:  'Plataforma educativa sobre el Criterio de la Raíz (Test de Cauchy) para series infinitas.',
      url:   window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled — no action needed
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copiado al portapapeles');
      } catch (_) {
        showToast('Copia el link desde la barra del navegador');
      }
    }
  });
})();


/* ─────────────────────────────────────────────────────────────
   9. MODAL DE VIDEO
───────────────────────────────────────────────────────────── */

(function initVideoModal() {
  const modal    = document.getElementById('videoModal');
  const iframe   = document.getElementById('videoIframe');
  const closeBtn = document.getElementById('videoModalClose');
  const backdrop = document.getElementById('videoModalBackdrop');
  if (!modal) return;

  function openVideo(videoId) {
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    modal.classList.remove('open');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  // Attach click on thumbnails
  document.querySelectorAll('.video-card__thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const videoId = thumb.dataset.videoid;
      if (videoId) openVideo(videoId);
    });
  });

  closeBtn.addEventListener('click', closeVideo);
  backdrop.addEventListener('click', closeVideo);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeVideo();
  });
})();


/* ─────────────────────────────────────────────────────────────
   10. SCROLL REVEAL
───────────────────────────────────────────────────────────── */

(function initScrollReveal() {
  // Apply reveal class to target elements
  const selectors = [
    '.ley-card',
    '.ejercicio-card',
    '.video-card',
    '.teoria__historia',
    '.teoria__criterio'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 80}ms`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
