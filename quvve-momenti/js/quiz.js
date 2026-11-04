// 8-ci Sinif Fizika: Qüvvə Momenti və Sadə Mexanizmlər üzrə 25 Sual
const quizData = [
  {
    id: 1,
    question: "Qüvvə momenti hansı düsturla hesablanır?",
    options: [
      "M = F · d",
      "M = F / d",
      "M = m · g",
      "M = A / t",
      "M = F · v"
    ],
    correct: 0,
    explanation: "Qüvvə momenti qüvvənin qiyməti ilə onun qolunun hasilinə bərabərdir: M = F · d."
  },
  {
    id: 2,
    question: "Beynəlxalq Sistemdə (BS) qüvvə momentinin əsas ölçü vahidi hansıdır?",
    options: [
      "N / m",
      "N · m",
      "C (Coul)",
      "Pa (Paskal)",
      "kq · m"
    ],
    correct: 1,
    explanation: "Qüvvə vahidi Nyuton (N), məsafə vahidi metr (m) olduğuna görə qüvvə momenti N·m (Nyuton-metr) ilə ölçülür."
  },
  {
    id: 3,
    question: "Qüvvənin təsir xəttindən fırlanma oxuna qədər olan ən qısa (perpendikulyar) məsafə necə adlanır?",
    options: [
      "Yerdəyişmə",
      "Qüvvə qolu",
      "Trayektoriya",
      "Lingin uzunluğu",
      "Rəqs amplitudu"
    ],
    correct: 1,
    explanation: "Fırlanma oxundan qüvvənin təsir xəttinə çəkilmiş perpendikulyarın uzunluğu qüvvə qolu adlanır və 'd' ilə işarə edilir."
  },
  {
    id: 4,
    question: "Əgər qüvvənin təsir xətti birbaşa fırlanma oxundan keçərsə, bu qüvvənin momenti nəyə bərabər olar?",
    options: [
      "Maksimum olar",
      "0-a bərabər olar",
      "Qüvvənin qiymətinə bərabər olar",
      "Sonsuz olar",
      "Təyin etmək mümkün deyil"
    ],
    correct: 1,
    explanation: "Qüvvənin təsir xətti fırlanma oxundan keçdikdə qüvvə qolu d = 0 olur, ona görə də moment M = F · 0 = 0 olur."
  },
  {
    id: 5,
    question: "Qolunun uzunluğu 0.5 m olan 40 N qüvvənin momentini hesablayın:",
    options: [
      "80 N·m",
      "20 N·m",
      "200 N·m",
      "10 N·m",
      "40 N·m"
    ],
    correct: 1,
    explanation: "M = F · d = 40 N · 0.5 m = 20 N·m."
  },
  {
    id: 6,
    question: "Lingin tarazlıq şərti (momentlər qaydası) hansı bərabərliklə ifadə olunur?",
    options: [
      "F₁ · d₂ = F₂ · d₁",
      "F₁ · d₁ = F₂ · d₂",
      "F₁ + d₁ = F₂ + d₂",
      "F₁ / d₁ = F₂ / d₂",
      "F₁ · F₂ = d₁ · d₂"
    ],
    correct: 1,
    explanation: "Lingin tarazlıqda olması üçün saat əqrəbi istiqamətindəki moment saat əqrəbinin əksi istiqamətindəki momentə bərabər olmalıdır: F₁ · d₁ = F₂ · d₂."
  },
  {
    id: 7,
    question: "Qüvvə momenti 60 N·m olan qüvvənin qolu 3 m-dir. Tətbiq edilən qüvvəni tapın:",
    options: [
      "180 N",
      "20 N",
      "63 N",
      "57 N",
      "30 N"
    ],
    correct: 1,
    explanation: "M = F · d düsturundan F = M / d = 60 / 3 = 20 N."
  },
  {
    id: 8,
    question: "Qüvvə momenti necə kəmiyyətdir?",
    options: [
      "Yalnız skalyar",
      "Vektorial",
      "Ölçüsüz kəmiyyət",
      "Əsas vahid",
      "Periodik kəmiyyət"
    ],
    correct: 1,
    explanation: "Qüvvə momenti həm ədədi qiymətə, həm də fırlanma oxu boyunca istiqamətə malik vektorial kəmiyyətdir."
  },
  {
    id: 9,
    question: "Mexanikanın 'Qızıl qaydası'na əsasən, sadə mexanizmlərdən istifadə etdikdə:",
    options: [
      "İşdə həmişə 2 dəfə qazanılır",
      "Qüvvədə qazandığımız qədər məsafədə qazanırıq",
      "Heç bir sadə mexanizm işdə qazanc vermir",
      "Sürtünmə nəzərə alınmadıqda iş 10 dəfə artır",
      "Yalnız ling işdə qazanc verir"
    ],
    correct: 2,
    explanation: "Mexanikanın qızıl qaydası: Sadə mexanizmlər qüvvədə neçə dəfə qazanc verirsə, yolda bir o qədər itirir. İşdə isə heç vaxt qazanc əldə edilmir."
  },
  {
    id: 10,
    question: "Lingin qolları d₁ = 20 sm və d₂ = 80 sm-dir. Bu ling qüvvədə neçə dəfə qazanc verir?",
    options: [
      "2 dəfə",
      "4 dəfə",
      "16 dəfə",
      "Qazanc vermir",
      "8 dəfə"
    ],
    correct: 1,
    explanation: "Qüvvədə qazanc qolların nisbəti kimidir: Qazanc = d₂ / d₁ = 80 sm / 20 sm = 4 dəfə."
  },
  {
    id: 11,
    question: "Cismi saat əqrəbinin hərəkətinin əksi istiqamətində fırladan qüvvə momenti adətən hansı işarə ilə qəbul edilir?",
    options: [
      "Mənfi (-)",
      "Müsbət (+)",
      "Sıfır",
      "Həmişə dəyişən",
      "İşarəsiz"
    ],
    correct: 1,
    explanation: "Fizika qaydalarına görə cismi saat əqrəbinin əksinə fırladan qüvvə momenti müsbət (+), saat əqrəbi istiqamətində fırladan isə mənfi (-) qəbul olunur."
  },
  {
    id: 12,
    question: "Lingin bir qoluna 15 N qüvvə təsir edir və qolu 4 m-dir. Digər qolun uzunluğu 2 m olarsa, lingi tarazlıqda saxlamaq üçün ona nə qədər qüvvə tətbiq edilməlidir?",
    options: [
      "7.5 N",
      "30 N",
      "60 N",
      "15 N",
      "120 N"
    ],
    correct: 1,
    explanation: "Tarazlıq şərtinə görə: F₁ · d₁ = F₂ · d₂ ⇒ 15 · 4 = F₂ · 2 ⇒ 60 = 2 · F₂ ⇒ F₂ = 30 N."
  },
  {
    id: 13,
    question: "Qapını ən az qüvvə sərf edərək rahat açmaq üçün dəstəyi qapının harasına vurmaq lazımdır?",
    options: [
      "Fırlanma oxuna (mancanağa) ən yaxın hissəyə",
      "Qapının tam mərkəzinə",
      "Fırlanma oxundan (mancanaqdan) ən uzaq kənara",
      "Qapının ən yuxarı küncünə",
      "Dəstəyin yerinin heç bir fərqi yoxdur"
    ],
    correct: 2,
    explanation: "Fırlanma oxundan uzaqlaşdıqca qüvvə qolu (d) böyüyür. Qol böyük olduqda eyni momenti yaratmaq üçün daha az qüvvə (F) tələb olunur."
  },
  {
    id: 14,
    question: "Aşağıdakılardan hansı sadə mexanizm növü DEYİL?",
    options: [
      "Ling",
      "Tərpənməz blok",
      "Mail müstəvi",
      "Elektromühərrik",
      "Klin (paz)"
    ],
    correct: 3,
    explanation: "Elektromühərrik mürəkkəb elektrik maşınıdır. Ling, blok, mail müstəvi, çarx, vint və paz isə sadə mexanizmlərdir."
  },
  {
    id: 15,
    question: "Tərpənməz blok qüvvədə neçə dəfə qazanc təmin edir?",
    options: [
      "2 dəfə",
      "Qüvvədə qazanc vermir, yalnız qüvvənin istiqamətini dəyişir",
      "4 dəfə",
      "İpin uzunluğuna görə dəyişir",
      "0.5 dəfə"
    ],
    correct: 1,
    explanation: "Tərpənməz blokun fırlanma oxu bərkidilmişdir. Onun hər iki qolu radiusa bərabər olduğu üçün (d₁ = d₂ = R) qüvvədə qazanc vermir, yalnız tətbiq olunan qüvvənin istiqamətini dəyişməyə xidmət edir."
  },
  {
    id: 16,
    question: "Çəkisi və sürtünməsi nəzərə alınmayan tərpənən blok qüvvədə neçə dəfə qazanc verir?",
    options: [
      "Qazanc vermir",
      "2 dəfə",
      "3 dəfə",
      "4 dəfə",
      "10 dəfə"
    ],
    correct: 1,
    explanation: "Tərpənən blokda qüvvə qolu diametrə (2R), yükün qolu isə radiusa (R) bərabər olduğundan qüvvədə 2 dəfə qazanc əldə edilir."
  },
  {
    id: 17,
    question: "Qüvvənin qiyməti dəyişmədikdə, qüvvə qolunu 3 dəfə artırsaq qüvvə momenti necə dəyişər?",
    options: [
      "3 dəfə azalar",
      "3 dəfə artar",
      "Dəyişməz qalar",
      "9 dəfə artar",
      "Sıfıra bərabər olar"
    ],
    correct: 1,
    explanation: "M = F · d düsturundan görünür ki, qüvvə momenti qüvvə qolu ilə düz mütənasibdir. Qol 3 dəfə artdıqda moment də 3 dəfə artır."
  },
  {
    id: 18,
    question: "Ağırlığı 100 N olan yükü bir ədəd tərpənən blokla bərabərsürətlə qaldırmaq üçün ipin ucuna nə qədər qüvvə tətbiq olunmalıdır (blokun çəkisi və sürtünmə nəzərə alınmır)?",
    options: [
      "100 N",
      "50 N",
      "200 N",
      "25 N",
      "10 N"
    ],
    correct: 1,
    explanation: "Tərpənən blok qüvvədə 2 dəfə qazanc verir: F = P / 2 = 100 N / 2 = 50 N."
  },
  {
    id: 19,
    question: "Ling vasitəsilə qüvvədə 5 dəfə qazanılırsa, gedilən yolda (məsafədə) nə baş verər?",
    options: [
      "5 dəfə qazanarıq",
      "5 dəfə itirərik (5 dəfə çox yol gedilər)",
      "Yol dəyişməz qalar",
      "25 dəfə qazanarıq",
      "İş 5 dəfə azalar"
    ],
    correct: 1,
    explanation: "Mexanikanın qızıl qaydasına əsasən, qüvvədə 5 dəfə qazanırıqsa, yolda mütləq 5 dəfə itiririk (yük az hərəkət etdiyi halda qüvvə tətbiq olunan tərəf 5 dəfə çox hərəkət edir)."
  },
  {
    id: 20,
    question: "İngilis açarı (qayka açarı) ilə bərk sıxılmış boltu açarkən nə üçün açarın ucundan tutmaq daha əlverişlidir?",
    options: [
      "Sürtünmə azaldığı üçün",
      "Qüvvə qolu böyüyür və daha böyük qüvvə momenti yaranır",
      "Açarın kütləsi artdığı üçün",
      "Boltun çəkisi azaldığı üçün",
      "Yer cazibəsi zəiflədiyi üçün"
    ],
    correct: 1,
    explanation: "Açarın ucundan tutulduqda fırlanma mərkəzinə qədər olan məsafə (qüvvə qolu) maksimum olur. Nəticədə az qüvvə ilə böyük qüvvə momenti alırıq."
  },
  {
    id: 21,
    question: "Lingin sol qoluna 10 N qüvvə təsir edir və qolu 60 sm-dir. Sağ qolun uzunluğu 30 sm olarsa, lingi tarazlaşdıran qüvvəni tapın:",
    options: [
      "5 N",
      "10 N",
      "20 N",
      "30 N",
      "40 N"
    ],
    correct: 2,
    explanation: "F₁ · d₁ = F₂ · d₂ ⇒ 10 · 60 = F₂ · 30 ⇒ 600 = 30 · F₂ ⇒ F₂ = 20 N."
  },
  {
    id: 22,
    question: "Aşağıdakı məişət alətlərindən hansı I növ lingə (dayaq nöqtəsi təsir edən qüvvələrin arasında yerləşən) nümunədir?",
    options: [
      "Qayçı",
      "Əl arabası",
      "Qozsındıran",
      "Cımbız",
      "İnsan ayağının pəncəsi"
    ],
    correct: 0,
    explanation: "Qayçıda fırlanma oxu (dayaq vinti) tən ortadadır, bir tərəfdən əlimizlə qüvvə tətbiq edirik, digər tərəfdə isə material kəsilir. Bu I növ lingdir."
  },
  {
    id: 23,
    question: "Tətbiq edilən qüvvə 12 N, yaranan qüvvə momenti isə 4.8 N·m-dir. Bu qüvvənin qolunu tapın:",
    options: [
      "0.2 m",
      "0.4 m",
      "2.5 m",
      "57.6 m",
      "1.2 m"
    ],
    correct: 1,
    explanation: "M = F · d ⇒ d = M / F = 4.8 / 12 = 0.4 m."
  },
  {
    id: 24,
    question: "Bərabərqollu lingin sol ucundan dayaqdan 20 sm məsafədə 6 N ağırlığında yük asılıb. Sağ tərəfdə dayaqdan 40 sm məsafədə neçə Nyutonluq yük asılmalıdır ki, ling tarazlıqda qalsın?",
    options: [
      "6 N",
      "12 N",
      "3 N",
      "2 N",
      "1.5 N"
    ],
    correct: 2,
    explanation: "F₁ · d₁ = F₂ · d₂ ⇒ 6 N · 20 sm = F₂ · 40 sm ⇒ 120 = 40 · F₂ ⇒ F₂ = 3 N."
  },
  {
    id: 25,
    question: "Tərpənən blok vasitəsilə yükü 4 metr hündürlüyə qaldırdıqda, ipin sərbəst ucu nə qədər yol qət edər?",
    options: [
      "2 metr",
      "4 metr",
      "8 metr",
      "16 metr",
      "1 metr"
    ],
    correct: 2,
    explanation: "Tərpənən blok qüvvədə 2 dəfə qazanc verdiyinə görə, məsafədə 2 dəfə itiririk. Yük 4 metr qalxarsa, ipin ucu 4 · 2 = 8 metr çəkilməlidir."
  }
];

// Quiz Vəziyyəti
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let quizSubmitted = false;

document.addEventListener('DOMContentLoaded', () => {
  renderQuestionList();
  loadQuestion(0);

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  const restartBtn = document.getElementById('restart-btn');

  if (prevBtn) prevBtn.addEventListener('click', () => navigate(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigate(1));
  if (submitBtn) submitBtn.addEventListener('click', submitQuiz);
  if (restartBtn) restartBtn.addEventListener('click', restartQuiz);
});

// Sual nömrələri naviqasiya paneli
function renderQuestionList() {
  const listEl = document.getElementById('question-nav-list');
  if (!listEl) return;
  listEl.innerHTML = '';

  quizData.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = `q-num-btn ${idx === currentQuestionIndex ? 'active' : ''}`;
    btn.id = `q-nav-${idx}`;
    btn.textContent = idx + 1;
    btn.addEventListener('click', () => {
      loadQuestion(idx);
    });
    listEl.appendChild(btn);
  });
}

// Sualı yüklə
function loadQuestion(index) {
  currentQuestionIndex = index;
  const q = quizData[index];

  // Naviqasiya düymələrini yenilə
  document.querySelectorAll('.q-num-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
    if (userAnswers[idx] !== null) {
      btn.classList.add('answered');
    }
    if (quizSubmitted) {
      btn.classList.remove('answered');
      if (userAnswers[idx] === quizData[idx].correct) {
        btn.classList.add('correct-num');
      } else {
        btn.classList.add('wrong-num');
      }
    }
  });

  document.getElementById('current-q-num').textContent = `Sual ${index + 1} / ${quizData.length}`;
  document.getElementById('question-text').textContent = q.question;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  const optionLetters = ['A', 'B', 'C', 'D', 'E'];

  q.options.forEach((opt, optIdx) => {
    const optBtn = document.createElement('div');
    optBtn.className = 'quiz-option';
    
    if (userAnswers[index] === optIdx) {
      optBtn.classList.add('selected');
    }

    if (quizSubmitted) {
      if (optIdx === q.correct) {
        optBtn.classList.add('correct');
      } else if (userAnswers[index] === optIdx) {
        optBtn.classList.add('wrong');
      }
    }

    optBtn.innerHTML = `
      <span class="opt-letter">${optionLetters[optIdx]}</span>
      <span class="opt-text">${opt}</span>
    `;

    optBtn.addEventListener('click', () => {
      if (!quizSubmitted) {
        selectOption(optIdx);
      }
    });

    optionsContainer.appendChild(optBtn);
  });

  // İzah hissəsi
  const explEl = document.getElementById('question-explanation');
  if (quizSubmitted) {
    explEl.style.display = 'block';
    const isCorrect = userAnswers[index] === q.correct;
    explEl.className = `explanation-box ${isCorrect ? 'exp-correct' : 'exp-wrong'}`;
    explEl.innerHTML = `
      <strong>${isCorrect ? '✅ Doğru cavab!' : '❌ Səhv cavab!'}</strong>
      <p>${q.explanation}</p>
    `;
  } else {
    explEl.style.display = 'none';
  }

  // Prev / Next idarəetməsi
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === quizData.length - 1;
}

function selectOption(optIdx) {
  userAnswers[currentQuestionIndex] = optIdx;
  const navBtn = document.getElementById(`q-nav-${currentQuestionIndex}`);
  if (navBtn) navBtn.classList.add('answered');
  loadQuestion(currentQuestionIndex);
  updateAnsweredCount();
}

function updateAnsweredCount() {
  const answeredCount = userAnswers.filter(ans => ans !== null).length;
  const countEl = document.getElementById('answered-status');
  if (countEl) {
    countEl.textContent = `Cavablandırılıb: ${answeredCount} / ${quizData.length}`;
  }
}

function navigate(direction) {
  const newIndex = currentQuestionIndex + direction;
  if (newIndex >= 0 && newIndex < quizData.length) {
    loadQuestion(newIndex);
  }
}

function submitQuiz() {
  if (quizSubmitted) return;

  const answeredCount = userAnswers.filter(ans => ans !== null).length;
  if (answeredCount < quizData.length) {
    const confirmSubmit = confirm(`Siz hələ ${quizData.length - answeredCount} sualı cavablandırmamısınız. Nəticəni hesablamaq istəyirsiniz?`);
    if (!confirmSubmit) return;
  }

  quizSubmitted = true;

  let correctCount = 0;
  userAnswers.forEach((ans, idx) => {
    if (ans === quizData[idx].correct) {
      correctCount++;
    }
  });

  const percent = Math.round((correctCount / quizData.length) * 100);
  let grade = 2;
  let gradeText = "Qeyri-kafi";
  let badgeColor = "#ef4444";

  if (percent >= 80) {
    grade = 5;
    gradeText = "Əla (5)";
    badgeColor = "#10b981";
  } else if (percent >= 60) {
    grade = 4;
    gradeText = "Yaxşı (4)";
    badgeColor = "#3b82f6";
  } else if (percent >= 40) {
    grade = 3;
    gradeText = "Kafi (3)";
    badgeColor = "#f59e0b";
  }

  // Nəticə blokunu göstər
  const resultCard = document.getElementById('quiz-result-card');
  const quizBody = document.getElementById('quiz-card-body');
  const submitBtn = document.getElementById('submit-btn');
  
  if (submitBtn) submitBtn.style.display = 'none';
  if (resultCard) {
    resultCard.style.display = 'block';
    resultCard.innerHTML = `
      <div class="result-header">
        <div class="score-circle" style="border-color: ${badgeColor};">
          <span class="score-num">${correctCount} / ${quizData.length}</span>
          <span class="score-pct">${percent}%</span>
        </div>
        <div class="result-details">
          <h3>Sizin Qiymətiniz: <span style="color: ${badgeColor}">${gradeText}</span></h3>
          <p>Düzgün cavab: <strong>${correctCount}</strong> | Səhv / Boş: <strong>${quizData.length - correctCount}</strong></p>
          <p class="result-feedback">
            ${percent >= 80 
              ? 'Təbriklər! Siz 8-ci sinif qüvvə momenti və sadə mexanizmlər mövzusunu tam qavramısınız! 🎯' 
              : percent >= 60 
              ? 'Yaxşı nəticədir! Bəzi düsturları və tarazlıq şərtlərini bir daha təkrarlamaq faydalı olar.' 
              : 'Mövzunu yenidən oxumağınız və kalkulyator/simulyatorla məşq etməyiniz tövsiyə olunur.'}
          </p>
          <button id="view-answers-btn" class="btn btn-secondary">Cavabları və İzahları Yoxla</button>
          <button id="retry-btn" class="btn btn-primary">Testi Yenidən Başla</button>
        </div>
      </div>
    `;

    document.getElementById('retry-btn').addEventListener('click', restartQuiz);
    document.getElementById('view-answers-btn').addEventListener('click', () => {
      loadQuestion(0);
      resultCard.scrollIntoView({ behavior: 'smooth' });
    });
  }

  loadQuestion(currentQuestionIndex);
  renderQuestionList();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  userAnswers = new Array(quizData.length).fill(null);
  quizSubmitted = false;

  const resultCard = document.getElementById('quiz-result-card');
  const submitBtn = document.getElementById('submit-btn');

  if (resultCard) resultCard.style.display = 'none';
  if (submitBtn) submitBtn.style.display = 'inline-flex';

  renderQuestionList();
  loadQuestion(0);
  updateAnsweredCount();
}
