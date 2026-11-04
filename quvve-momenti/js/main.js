// Əsas İnteraktiv Skriptlər və Kalkulyator
document.addEventListener('DOMContentLoaded', () => {
  // 1. Qüvvə Momenti Kalkulyatoru
  const calcForce = document.getElementById('calc-f');
  const calcArm = document.getElementById('calc-d');
  const calcAngle = document.getElementById('calc-angle');
  const calcBtn = document.getElementById('calculate-btn');
  const resultDisplay = document.getElementById('calc-result');
  const resultFormula = document.getElementById('calc-formula-step');

  function calculateTorque() {
    const f = parseFloat(calcForce.value);
    const d = parseFloat(calcArm.value);
    const angleDeg = parseFloat(calcAngle.value) || 90;

    if (isNaN(f) || isNaN(d) || f < 0 || d < 0) {
      alert("Zəhmət olmasa düzgün müsbət ədədlər daxil edin.");
      return;
    }

    const angleRad = (angleDeg * Math.PI) / 180;
    const sinVal = Math.sin(angleRad);
    const torque = f * d * sinVal;

    resultDisplay.textContent = `${torque.toFixed(2)} N·m`;
    
    if (angleDeg === 90) {
      resultFormula.innerHTML = `M = F · d = ${f} N · ${d} m = <strong>${torque.toFixed(2)} N·m</strong>`;
    } else {
      resultFormula.innerHTML = `M = F · d · sin(${angleDeg}°) = ${f} · ${d} · ${sinVal.toFixed(3)} = <strong>${torque.toFixed(2)} N·m</strong>`;
    }
  }

  if (calcBtn) {
    calcBtn.addEventListener('click', calculateTorque);
  }

  // Mobil Menyu İdarəetməsi
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Hamar sürüşmə (Smooth scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
