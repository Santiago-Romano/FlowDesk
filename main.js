// ── FlowDesk · main.js ────────────────────────────────────────────────────

// ── Tabs del header ──────────────────────────────────────────────────────
function initHeaderTabs() {
  document.querySelectorAll('.header-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.header-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// ── Chips del subheader ──────────────────────────────────────────────────
function initChips() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      // Solo el chip "Kanban" actúa como toggle de vista
      if (chip.textContent.trim() === 'Kanban') return;
      chip.classList.toggle('active');
    });
  });
}

// ── Barra de progreso animada al cargar ──────────────────────────────────
function initProgressBar() {
  const fill = document.querySelector('.progress-fill');
  if (!fill) return;
  const target = 62; // %
  fill.style.width = '0%';
  setTimeout(() => { fill.style.width = target + '%'; }, 300);
}

// ── Contador de tareas por columna ──────────────────────────────────────
function updateColumnCounts() {
  document.querySelectorAll('.column').forEach(col => {
    const cards = col.querySelectorAll('.card').length;
    const badge = col.querySelector('.col-count');
    if (badge) badge.textContent = cards;
  });
}

// ── Botón "Nueva tarea" — agrega tarjeta demo ────────────────────────────
function initNewTaskButton() {
  const btn = document.querySelector('.btn-new');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const firstCol = document.querySelector('.column');
    if (!firstCol) return;

    const titles = [
      'Revisar documentación de API externa',
      'Implementar dark mode en el dashboard',
      'Optimizar consultas lentas en la DB',
      'Crear tests E2E para el módulo de pagos',
      'Refactorizar componente de autenticación',
    ];

    const tags = [
      '<span class="tag tag-blue">Backend</span>',
      '<span class="tag tag-purple">Frontend</span>',
      '<span class="tag tag-green">QA</span>',
      '<span class="tag tag-orange">DevOps</span>',
    ];

    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomTag   = tags[Math.floor(Math.random() * tags.length)];
    const id = '#FD-0' + (Math.floor(Math.random() * 90) + 10);

    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = '0s';
    card.innerHTML = `
      <div class="card-top">
        <span class="card-id">${id}</span>
        <span class="priority-badge priority-med">Media</span>
      </div>
      <div class="card-title">${randomTitle}</div>
      <div class="card-tags">${randomTag}</div>
      <div class="card-footer">
        <div class="card-footer-left">
          <div class="card-meta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            0
          </div>
        </div>
        <div class="avatar-sm" style="background:#5b4fcf">YO</div>
      </div>
    `;

    // Insertar después del col-header
    const colHeader = firstCol.querySelector('.col-header');
    colHeader.insertAdjacentElement('afterend', card);

    updateColumnCounts();
    updateBottomStats();
  });
}

// ── Botón "+" de cada columna ────────────────────────────────────────────
function initColumnAddButtons() {
  document.querySelectorAll('.col-add').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = '✓';
      btn.style.color = 'var(--green)';
      btn.style.borderColor = 'var(--green)';
      setTimeout(() => {
        btn.textContent = '+';
        btn.style.color = '';
        btn.style.borderColor = '';
      }, 1200);
    });
  });
}

// ── Actualizar panel de stats inferior ──────────────────────────────────
function updateBottomStats() {
  const allCards   = document.querySelectorAll('.board-wrap .card').length;
  const inProgress = document.querySelectorAll('.column:nth-child(2) .card').length;
  const done       = document.querySelectorAll('.column:nth-child(5) .card').length;

  const stats = document.querySelectorAll('.panel-stat strong');
  if (stats[0]) stats[0].textContent = allCards;
  if (stats[1]) stats[1].textContent = inProgress;
  if (stats[3]) stats[3].textContent = done;
}

// ── Hover en cards: tooltip de ID ───────────────────────────────────────
function initCardTooltips() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.title = card.querySelector('.card-id')?.textContent + ' — Click para abrir';
    });
  });
}

// ── Botón "Agregar columna" ──────────────────────────────────────────────
function initAddColumn() {
  const btn = document.querySelector('.add-column');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const board = document.querySelector('.board-wrap');
    const newCol = document.createElement('div');
    newCol.className = 'column';
    newCol.innerHTML = `
      <div class="col-header">
        <div class="col-title">
          <div class="col-dot" style="background:#a78bfa"></div>
          Nueva columna
          <span class="col-count">0</span>
        </div>
        <div class="col-add">+</div>
      </div>
    `;

    // Insertar antes del botón "agregar columna"
    board.insertBefore(newCol, btn);

    // Re-init el botón "+" de la nueva columna
    newCol.querySelector('.col-add').addEventListener('click', () => {
      const plusBtn = newCol.querySelector('.col-add');
      plusBtn.textContent = '✓';
      setTimeout(() => { plusBtn.textContent = '+'; }, 1200);
    });
  });
}

// ── Init ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeaderTabs();
  initChips();
  initProgressBar();
  initNewTaskButton();
  initColumnAddButtons();
  initCardTooltips();
  initAddColumn();
  updateBottomStats();
});