const introCard = document.getElementById('introCard');
const gameCard = document.getElementById('gameCard');
const resultCard = document.getElementById('resultCard');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const secondaryBtn = document.getElementById('secondaryBtn');
const messageBox = document.getElementById('messageBox');
const options = document.getElementById('options');
const character = document.getElementById('character');
const resultEmoji = document.getElementById('resultEmoji');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const sparklesContainer = document.getElementById('sparkles');
const progressFill = document.getElementById('progressFill');
const stageLabel = document.getElementById('stageLabel');
const moodBadge = document.getElementById('moodBadge');
const miniHint = document.getElementById('miniHint');

const rounds = [
  {
    title: '1-qadam',
    prompt: 'Men bilan birga vaqt o\'tkazishdan zavqlanasanmi?',
    buttons: [
      { label: 'Ha', value: 'yes', className: 'yes' },
      { label: 'Yo\'q', value: 'no', className: 'no' },
    ],
  },
  {
    title: '2-qadam',
    prompt: 'Agar men biror muammoni bo\'lsa, sen menga mehribon bo\'lasanmi?',
    buttons: [
      { label: 'Albatta', value: 'yes', className: 'yes' },
      { label: 'Balki', value: 'no', className: 'no' },
    ],
  },
  {
    title: '3-qadam',
    prompt: 'Sening qalbingda joy bo\'lsa, men ham bo\'lishim mumkinmi?',
    buttons: [
      { label: 'Ha, mumkin', value: 'yes', className: 'yes' },
      { label: 'Hozircha yo\'q', value: 'no', className: 'no' },
    ],
  },
  {
    title: '4-qadam',
    prompt: 'Men bilan biron joyga aylanishga borasanmi?',
    buttons: [
      { label: 'Ha', value: 'yes', className: 'yes' },
      { label: 'Yo\'q', value: 'no', className: 'no' },
    ],
  },
  {
    title: '5-qadam',
    prompt: 'Mening yaqinligimni his qilganingda, qalbingda biror sevgi hisi uyg\'un bo\'ladimi?',
    buttons: [
      { label: 'Ha, bo\'ladi', value: 'yes', className: 'yes' },
      { label: 'Yo\'q, bo\'lmaydi', value: 'no', className: 'no' },
    ],
  },
  {
    title: '6-qadam',
    prompt: 'Agar menga biron narsa bo\'lsa sen mening oldimda qolasanmi?',
    buttons: [
      { label: 'Ha', value: 'yes', className: 'yes' },
      { label: 'Yo\'q', value: 'no', className: 'no' },
    ],
  },
];

let currentRound = 0;
let noCount = 0;
let moodScore = 0;

function showCard(card) {
  [introCard, gameCard, resultCard].forEach((item) => item.classList.add('hidden'));
  card.classList.remove('hidden');
}

function updateHud() {
  const percent = ((Math.min(currentRound + 1, rounds.length)) / rounds.length) * 100;
  progressFill.style.width = `${percent}%`;
  stageLabel.textContent = `${Math.min(currentRound + 1, rounds.length)}/${rounds.length}`;
  moodBadge.textContent = `💖 ${moodScore}`;
}

function burstSparkles() {
  for (let i = 0; i < 10; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'spark';
    const size = 6 + Math.random() * 8;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = '50%';
    spark.style.top = '50%';
    const dx = (Math.random() - 0.5) * 140;
    const dy = (Math.random() - 0.5) * 140;
    spark.style.setProperty('--dx', `${dx}px`);
    spark.style.setProperty('--dy', `${dy}px`);
    sparklesContainer.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
  }
}

function renderRound() {
  const round = rounds[Math.min(currentRound, rounds.length - 1)];
  character.textContent = '😊';
  character.classList.remove('run-away', 'bounce');
  miniHint.textContent = noCount >= 2 ? 'Bu safar javobingizni oylab bering.' : 'Yana bir urinish — va sahna yanada qiziydi.';

  messageBox.innerHTML = `
    <div>
      <strong>${round.title}</strong>
      <div>${round.prompt}</div>
    </div>
  `;

  options.innerHTML = '';
  round.buttons.forEach((button) => {
    const btn = document.createElement('button');
    btn.className = `option-btn ${button.className}`;
    btn.textContent = button.label;
    btn.addEventListener('click', () => handleChoice(button.value));
    options.appendChild(btn);
  });

  updateHud();
}

function handleChoice(value) {
  if (value === 'yes') {
    moodScore += 1;
    character.textContent = '🥰';
    character.classList.add('bounce');
    burstSparkles();
    messageBox.innerHTML = '<div>Yahshi tanlov! 🎉<br>Bu safar sahna yanada yorqinroq bo\'ldi.</div>';
    options.innerHTML = '';

    setTimeout(() => {
      if (currentRound < rounds.length - 1) {
        currentRound += 1;
        renderRound();
      } else {
        showResult('💘', 'Sizning javobingiz juda yaxshi!', 'Endi yana bir marotaba boshlash mumkin.');
      }
    }, 800);
    return;
  }

  noCount += 1;
  moodScore = Math.max(0, moodScore - 1);

  if (noCount < 3) {
    character.textContent = '🏃';
    character.classList.add('run-away');
    messageBox.innerHTML = '<div>U qochib ketdi 😅<br>Ammo sahna hali ham o\'ynamoqda.</div>';
    options.innerHTML = '';

    setTimeout(() => {
      currentRound = Math.min(currentRound + 1, rounds.length - 1);
      renderRound();
    }, 800);
    return;
  }

  // 3 marta "yo'q" bosilgandan keyin: faqat "ha" tugmasi qoladi
  character.textContent = '😟';
  messageBox.innerHTML = '<div>Oxirgi imkoniyat...<br>Iltimos "Ha" tugmasini bosing!</div>';
  options.innerHTML = '';

  const btn = document.createElement('button');
  btn.className = 'option-btn yes';
  btn.textContent = 'Ha';
  btn.addEventListener('click', () => handleChoice('yes'));
  options.appendChild(btn);
}

function showResult(emoji, title, text, showSecondary = false) {
  resultEmoji.textContent = emoji;
  resultTitle.textContent = title;
  resultText.textContent = text;
  secondaryBtn.classList.toggle('hidden', !showSecondary);
  showCard(resultCard);
}

startBtn.addEventListener('click', () => {
  showCard(gameCard);
  currentRound = 0;
  noCount = 0;
  moodScore = 0;
  renderRound();
});

resetBtn.addEventListener('click', () => {
  showCard(introCard);
  currentRound = 0;
  noCount = 0;
  moodScore = 0;
  secondaryBtn.classList.add('hidden');
});

secondaryBtn.addEventListener('click', () => {
  currentRound = 0;
  noCount = 0;
  moodScore = 0;
  secondaryBtn.classList.add('hidden');
  showCard(gameCard);
  renderRound();
});
