// İnteraktiv Ling Simulyatoru
document.addEventListener('DOMContentLoaded', () => {
  const f1Input = document.getElementById('sim-f1');
  const d1Input = document.getElementById('sim-d1');
  const f2Input = document.getElementById('sim-f2');
  const d2Input = document.getElementById('sim-d2');

  const f1Val = document.getElementById('val-f1');
  const d1Val = document.getElementById('val-d1');
  const f2Val = document.getElementById('val-f2');
  const d2Val = document.getElementById('val-d2');

  const m1Display = document.getElementById('sim-m1');
  const m2Display = document.getElementById('sim-m2');
  const balanceStatus = document.getElementById('balance-status');
  const leverBeam = document.getElementById('lever-beam');
  const weightLeft = document.getElementById('weight-left');
  const weightRight = document.getElementById('weight-right');
  const autoBalanceBtn = document.getElementById('auto-balance-btn');

  function updateSimulation() {
    const f1 = parseFloat(f1Input.value);
    const d1 = parseFloat(d1Input.value);
    const f2 = parseFloat(f2Input.value);
    const d2 = parseFloat(d2Input.value);

    // Dəyərləri yenilə
    f1Val.textContent = `${f1} N`;
    d1Val.textContent = `${d1.toFixed(1)} m`;
    f2Val.textContent = `${f2} N`;
    d2Val.textContent = `${d2.toFixed(1)} m`;

    const m1 = f1 * d1;
    const m2 = f2 * d2;

    m1Display.textContent = `${m1.toFixed(1)} N·m`;
    m2Display.textContent = `${m2.toFixed(1)} N·m`;

    // Lingin mövqeyini hesabla (fərqə əsasən bucaq: max 15 dərəcə)
    const diff = m2 - m1; // Müsbətdirsə sağa əyilir, mənfidirsə sola
    let angle = 0;
    const maxDiff = 100;

    if (Math.abs(diff) < 0.1) {
      angle = 0;
      balanceStatus.innerHTML = `<span class="status-balanced">⚖️ TAM TARAZLIQDADIR! (M₁ = M₂)</span>`;
    } else if (diff > 0) {
      angle = Math.min(15, (diff / maxDiff) * 15);
      balanceStatus.innerHTML = `<span class="status-unbalanced">➡️ Sağa meyllənir (M₂ > M₁)</span>`;
    } else {
      angle = Math.max(-15, (diff / maxDiff) * 15);
      balanceStatus.innerHTML = `<span class="status-unbalanced">⬅️ Sola meyllənir (M₁ > M₂)</span>`;
    }

    if (leverBeam) {
      leverBeam.style.transform = `rotate(${angle}deg)`;
    }

    // Yüklərin yerini və ölçüsünü vizual yenilə
    // Dayaq mərkəzdədir (50%). Sol tərəf 0-dan 50%-ə qədər, sağ 50-dən 100%-ə qədər.
    // d1 max 3m -> 0 to 45% of half
    if (weightLeft && weightRight) {
      const leftPosPercent = 50 - (d1 / 3.0) * 45;
      const rightPosPercent = 50 + (d2 / 3.0) * 45;

      weightLeft.style.left = `${leftPosPercent}%`;
      weightRight.style.left = `${rightPosPercent}%`;

      // Yükün ölçüsü qüvvəyə görə
      const scaleLeft = 0.7 + (f1 / 100) * 0.7;
      const scaleRight = 0.7 + (f2 / 100) * 0.7;
      weightLeft.style.transform = `translate(-50%, 0) scale(${scaleLeft})`;
      weightRight.style.transform = `translate(-50%, 0) scale(${scaleRight})`;
      weightLeft.setAttribute('data-weight', `${f1}N`);
      weightRight.setAttribute('data-weight', `${f2}N`);
    }
  }

  // Avtomatik tarazlaşdırma (Sağ qüvvəni sol momentə uyğunlaşdırır)
  if (autoBalanceBtn) {
    autoBalanceBtn.addEventListener('click', () => {
      const f1 = parseFloat(f1Input.value);
      const d1 = parseFloat(d1Input.value);
      const d2 = parseFloat(d2Input.value);

      // F2 * d2 = F1 * d1 => F2 = (F1 * d1) / d2
      let neededF2 = (f1 * d1) / d2;
      neededF2 = Math.round(neededF2);
      if (neededF2 > 100) neededF2 = 100;
      if (neededF2 < 5) neededF2 = 5;

      f2Input.value = neededF2;
      updateSimulation();
    });
  }

  [f1Input, d1Input, f2Input, d2Input].forEach(input => {
    if (input) {
      input.addEventListener('input', updateSimulation);
    }
  });

  updateSimulation();
});
