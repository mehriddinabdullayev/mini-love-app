/**
 * ==========================================================================
 * PREMIUM ROMANTIC QUIZ SYSTEM - COMPLETE LOGIC (UZBEK EDITION)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // 30 Completely Unique Premium Romantic Love Questions Matrix in Uzbek
const loveQuestions = [
    { id: 1, emoji: "❤️", text: "Meni chin dildan yaxshi ko'rasizmi?", response: "Buni eshitish men uchun dunyodagi eng katta baxt, go'zalim! 😍" },
    { id: 2, emoji: "📱", text: "Har kuni men bilan gaplashishni xohlaysizmi?", response: "Sizdan kelgan har bir xabar yuzimga tabassum yugurtiradi! 💬" },
    { id: 3, emoji: "🤝", text: "Har qanday vaziyatda ham menga ishonasizmi?", response: "Ishonchingizni har doim oqlayman, va'da beraman! 🫂" },
    { id: 4, emoji: "😊", text: "Xafa bo'lganingizda kayfiyatingizni ko'tarishimga ruxsat berasizmi?", response: "Siz faqat jilmayib yuring, tabassumingiz juda go'zal! 🎉" },
    { id: 5, emoji: "🌳", text: "Men bilan bog'da sayr qilishni yoqtirasizmi?", response: "Siz bilan o'tgan har bir daqiqa men uchun qadrli! 🚶‍♀️" },
    { id: 6, emoji: "🌹", text: "Sizga kutilmaganda eng sevimli gullaringizni sovg'a qilsam xursand bo'lasizmi?", response: "Siz o'zingiz o'sha gullardan ham go'zalsiz! 🌸" },
    { id: 7, emoji: "♾️", text: "Bizning sevgimiz abadiy bo'lishini xohlaysizmi?", response: "Sevgimiz abadiy va eng go'zal bo'lib qoladi! ✨" },
    { id: 8, emoji: "🎮", text: "Men bilan birga qiziqarli o'yinlar o'ynab turasizmi?", response: "Siz bilan o'yin o'ynash ham bir olam zavq! 🎮" },
    { id: 9, emoji: "🗺️", text: "Men bilan dunyoning istalgan chekkasiga sayohatga borarmidingiz?", response: "Siz bilan har qanday yo'l eng go'zal manzilga yetaklaydi! 🏔️" },
    { id: 10, emoji: "💎", text: "Sizni dunyodagi eng baxtli qiz qilishimga ishonasizmi?", response: "Siz mening hayotimdagi eng qadrli insonimsiz! 👑" },
    { id: 11, emoji: "🥞", text: "Siz uchun o'zim shirinlik yoki taom tayyorlasam, tatib ko'rasizmi?", response: "Siz uchun eng lazzatli narsalarni tayyorlashga tayyorman! 🍰" },
    { id: 12, emoji: "📞", text: "Qo'ng'iroq qilganimda ovozimni eshitishdan xursand bo'lasizmi?", response: "Sizning ovozingiz ham men uchun eng shirin musiqadir! 🎵" },
    { id: 13, emoji: "🍿", text: "Birgalikda biz yoqtirgan eng qiziqarli kinolarni tomosha qilamizmi?", response: "Kino seansi boshlandi, mening malikam! 🎬" },
    { id: 14, emoji: "🌸", text: "Mening g'amxo'rligim va e'tiborim sizga yoqadimi?", response: "Sizni har doim ardoqlab, asrab o'taman! 💖" },
    { id: 15, emoji: "🎧", text: "Yaxshi ko'rgan qo'shig'ingizni menga ham baham ko'rasizmi?", response: "Bu tarona endi faqat biz haqimizda bo'ladi! 🎶" },
    { id: 16, emoji: "🌌", text: "Kelajakda ham xuddi hozirgidek doim birga bo'lishimizni xohlaysizmi?", response: "Kelajagimiz birgalikda yanada yorqin va baxtli bo'ladi! 💎" },
    { id: 17, emoji: "🎈", text: "Kutilmagan mitti sovg'alar bilan sizni xursand qilib turishimni xohlaysizmi?", response: "Siz uchun hamma narsaga tayyorman! 🎁" },
    { id: 18, emoji: "🚀", text: "Maqsadlaringizga erishishingizda sizni har doim qo'llab-quvvatlashimni xohlaysizmi?", response: "Siz juda aqlli va iqtidorlisiz, men sizga ishonaman! 🌟" },
    { id: 19, emoji: "😄", text: "Mening hazillarim va gaplarim sizni kuldiradimi?", response: "Sizning kulgingiz mening eng sevimli quvonchim! ☀️" },
    { id: 20, emoji: "🔒", text: "Bir-birimizga doim sodiq va rostgo'y bo'lishimizga va'da berasizmi?", response: "Va'damiz — sevgimizning eng mustahkam poydevoridir! 🤝" },
    { id: 21, emoji: "☔", text: "Yomg'ir yoqqanda bitta soyabon ostida men bilan yurarmidingiz?", response: "Yomg'irli kunlar ham siz bilan go'zal bahorga aylanadi! 🌧️" },
    { id: 22, emoji: "🎨", text: "Siz uchun maxsus dizaynlar yoki chiroyli narsalar tayyorlasam yoqadimi?", response: "Siz eng go'zal ijod namunalariga loyiqsiz! 🖼️" },
    { id: 23, emoji: "☀️", text: "Har tongda mendan 'Xayrli tong, malikam' degan xabar kutasizmi?", response: "Kuningiz xuddi o'zingizdek go'zal o'tsin! 🍀" },
    { id: 24, emoji: "🛡️", text: "Sizni har qanday yomon ko'zlar va xavflardan himoya qilishimni xohlaysizmi?", response: "Siz mening himoyamdasiz va hamisha xavfsizsiz! 🔐" },
    { id: 25, emoji: "⏳", text: "Vaqtingizni men bilan o'tkazish sizga baxt beradimi?", response: "Siz bilan o'tgan har bir soniya men uchun g'animat! ⏰" },
    { id: 26, emoji: "🗺️", text: "Siz bilan yangi va qiziqarli joylarni birga kashf qilishimizni xohlaysizmi?", response: "Yangi go'zal xotiralar sari olg'a! 🏰" },
    { id: 27, emoji: "🍫", text: "Charchaganingizda kayfiyatingizni ko'tarish uchun shokolad olib kelaymi?", response: "Shokoladdan ham shirinroq tabassumingiz bor! 🍩" },
    { id: 28, emoji: "🎉", text: "Muvaffaqiyatlaringizdan mendan ko'proq quvonishimni bilasizmi?", response: "Sizning har bir yutug'ingiz — mening g'alabam! 🥇" },
    { id: 29, emoji: "💪", text: "Qiyin vaziyatlarda tushkunlikka tushmay, menga suyanishingiz mumkinligini bilasizmi?", response: "Men doim yoningizdaman va sizni qo'llayman! ✊" },
    { id: 30, emoji: "💝", text: "Sizga har doim quvonch va baxt ulashishimga ruxsat berasizmi?", response: "Hayotimiz oxirigacha birga baxtli bo'lamiz! 👑" }
];
    let currentQuestionIndex = 0;
    let typingTimer = null;
    let noBtnScale = 1.0;
    const totalQuestions = loveQuestions.length;

    // DOM Nodes Extraction
    const preloader = document.getElementById('preloader');
    const appCard = document.getElementById('appCard');
    const quizSection = document.getElementById('quizSection');
    const finalSection = document.getElementById('finalSection');
    
    const progressBar = document.getElementById('progressBar');
    const counterDisplay = document.getElementById('counterDisplay');
    const emojiWrapper = document.getElementById('emojiWrapper');
    const questionText = document.getElementById('questionText');
    
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const quizFooter = document.getElementById('quizFooter');
    
    const muteBtn = document.getElementById('muteBtn');
    const bgMusic = document.getElementById('bgMusic');
    const musicOnIcon = document.getElementById('musicOnIcon');
    const musicMutedIcon = document.getElementById('musicMutedIcon');
    
    const particleContainer = document.getElementById('particleContainer');
    const toastContainer = document.getElementById('toastContainer');
    const cursorTrail = document.getElementById('cursorTrail');

    // Funny/Sweet Escape Messages for NO action attempts
    const noClickResponses = [
        "Voy! Yana bir bor urinib ko'ring! 😉",
        "Kupidon bu javobga ruxsat bermadi! 🏹",
        "Xatolik: Yurak bu variantni qabul qilmaydi! ❌",
        "Yaxshi urinish, lekin chaqqonroq bo'lish kerak! 🏎️",
        "Bu tugma shunchaki chiroy uchun qo'yilgan! 🎀",
        "Sizning kursor nishonga aniq tegmadi! 🎯",
        "Chin sevgida 'YO'Q' degan javob bo'lmaydi! 💖"
    ];

    /* ==========================================================================
       INITIALIZATION & BACKGROUND SYSTEMS
       ========================================================================= */

    // Deactivate Preloader smoothly
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 1500);

    // Continuous background ambient heart generation
    function spawnAmbientHearts() {
        const heartCount = 15;
        const emojis = ['❤️', '💖', '💝', '💕', '💗'];
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 6 + 6) + 's';
                heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
                particleContainer.appendChild(heart);

                // Housekeeping element removal
                heart.addEventListener('animationend', () => heart.remove());
            }, i * 600);
        }
    }
    spawnAmbientHearts();
    setInterval(spawnAmbientHearts, 9000);

    // Modern Intermittent Sparkle Particles on Mouse Movement
    window.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.85) { 
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            cursorTrail.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
    });

    /* ==========================================================================
       UX SOUND ENGINE SUPPORT
       ========================================================================== */

    function toggleMusic() {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicOnIcon.classList.remove('hidden');
                musicMutedIcon.classList.add('hidden');
            }).catch(() => {
                showToast("Musiqa chalinishi uchun ekran ustiga bosing! 🎵");
            });
        } else {
            bgMusic.pause();
            musicOnIcon.classList.add('hidden');
            musicMutedIcon.classList.remove('hidden');
        }
    }
    muteBtn.addEventListener('click', toggleMusic);

    // Force automatic audio capture attempts upon the very first real viewport tap
    document.body.addEventListener('click', () => {
        if (bgMusic.paused && !musicMutedIcon.classList.contains('hidden') === false) {
            bgMusic.play().catch(() => {});
        }
    }, { once: true });

    /* ==========================================================================
       QUIZ RENDER & TYPING ENGINE
       ========================================================================== */

    function renderQuestion() {
        if (currentQuestionIndex >= totalQuestions) {
            showFinalScreen();
            return;
        }

        const activeData = loveQuestions[currentQuestionIndex];
        
        // Update Metadata displays
        counterDisplay.innerText = `${activeData.id}-savol, jami ${totalQuestions} tadan`;
        progressBar.style.width = `${(activeData.id / totalQuestions) * 100}%`;
        
        // Emoji bounce animation trigger
        emojiWrapper.innerText = activeData.emoji;
        emojiWrapper.style.animation = 'none';
        void emojiWrapper.offsetWidth; // Trigger DOM Reflow
        emojiWrapper.style.animation = 'heartBeat 1.4s infinite ease-in-out';

        // Initialize Typing Script Sequence safely
        if (typingTimer) clearInterval(typingTimer);
        questionText.innerText = '';
        questionText.classList.add('typing-cursor');

        let charIndex = 0;
        const fullString = activeData.text;

        typingTimer = setInterval(() => {
            if (charIndex < fullString.length) {
                questionText.innerText += fullString.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingTimer);
                questionText.classList.remove('typing-cursor');
            }
        }, 35);

        // Standardize dynamic NO button footprint reset safely back within footer borders
        resetNoButtonState();
    }

    function createRipple(event, button) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        
        const x = (event.clientX || event.touches[0].clientX) - rect.left - size / 2;
        const y = (event.clientY || event.touches[0].clientY) - rect.top - size / 2;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    /* ==========================================================================
       THE ABSOLUTE EVASIVE "NO" BUTTON PROTOCOL
       ========================================================================== */

    function teleportNoButton() {
        // Calculate dynamic layout bounds relative to the glass container boundaries
        const padding = 15;
        const footerRect = quizFooter.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();
        const cardRect = appCard.getBoundingClientRect();

        // Calculate available horizontal and vertical slots within the limits of the card body frame
        const minX = padding;
        const maxX = cardRect.width - noBtnRect.width - padding;
        const minY = -120; // Allow upward scaling within the card interior spaces
        const maxY = footerRect.height + padding;

        const randomX = Math.random() * (maxX - minX) + minX;
        const randomY = Math.random() * (maxY - minY) + minY;

        // Apply progressive shrinking metrics to increase difficulty factor
        if (noBtnScale > 0.4) {
            noBtnScale -= 0.05;
        }
        
        const randomRotation = (Math.random() * 30) - 15; // -15deg to +15deg

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        noBtn.style.transform = `scale(${noBtnScale}) rotate(${randomRotation}deg)`;

        // Trigger micro emoji float upon running
        spawnFloatingExplosionEmoji('💨', noBtnRect.left + noBtnRect.width/2, noBtnRect.top + noBtnRect.height/2);
    }

    function resetNoButtonState() {
        noBtnScale = 1.0;
        noBtn.style.position = 'static';
        noBtn.style.transform = 'scale(1) rotate(0deg)';
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
    }

    // Attach dual action avoidance tracking
    noBtn.addEventListener('mouseenter', teleportNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Intercept mobile touch execution sequences
        teleportNoButton();
    });

    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Fallback catch execution logic block in case of hyper-fast tap macro clicks
        createRipple(e, noBtn);
        appCard.classList.add('shake');
        showToast(noClickResponses[Math.floor(Math.random() * noClickResponses.length)]);
        teleportNoButton();
        setTimeout(() => appCard.classList.remove('shake'), 500);
    });

    /* ==========================================================================
       VALENTINE CELEBRATION EXPLOSION & TOASTS
       ========================================================================== */

    function spawnFloatingExplosionEmoji(emoji, clientX, clientY) {
        const fragmentCount = 6;
        for (let i = 0; i < fragmentCount; i++) {
            const frag = document.createElement('div');
            frag.className = 'emoji-fly';
            frag.innerText = emoji;
            
            // Layout circular vectors
            const angle = (i / fragmentCount) * Math.PI * 2 + (Math.random() * 0.5);
            const distance = Math.random() * 80 + 60;
            const targetX = Math.cos(angle) * distance;
            const targetY = Math.sin(angle) * distance;
            const targetRot = Math.random() * 720 - 360;

            frag.style.left = `${clientX}px`;
            frag.style.top = `${clientY}px`;
            frag.style.setProperty('--tw-x', `${targetX}px`);
            frag.style.setProperty('--tw-y', `${targetY}px`);
            frag.style.setProperty('--tw-r', `${targetRot}deg`);

            document.body.appendChild(frag);
            setTimeout(() => frag.remove(), 800);
        }
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('fade-out');
            toast.addEventListener('animationend', () => toast.remove());
        }, 2200);
    }

    /* ==========================================================================
       CORE TRANSACTION LOGIC: YES PROCEED ENGINE
       ========================================================================== */

    yesBtn.addEventListener('click', (e) => {
        createRipple(e, yesBtn);
        
        const activeData = loveQuestions[currentQuestionIndex];
        const rect = yesBtn.getBoundingClientRect();
        
        // Trigger localized heart bursts
        spawnFloatingExplosionEmoji('❤️', rect.left + rect.width / 2, rect.top + rect.height / 2);
        showToast(activeData.response);

        // Smoothly sequence page swap animations
        quizSection.classList.add('fade-out-content');
        
        setTimeout(() => {
            currentQuestionIndex++;
            quizSection.classList.remove('fade-out-content');
            renderQuestion();
        }, 300);
    });

    /* ==========================================================================
       FINAL SUCCESS CELEBRATION FIREWORKS GENERATOR
       ========================================================================== */

    let finalCelebrationInterval = null;

    function triggerFinalScreenCelebration() {
        const emojis = ['❤️', '💖', '✨', '🥳', '👑', '🎉', '💕'];
        
        finalCelebrationInterval = setInterval(() => {
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * (window.innerHeight * 0.6) + (window.innerHeight * 0.2);
            const chosenEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            spawnFloatingExplosionEmoji(chosenEmoji, randomX, randomY);
        }, 350);
    }

    function showFinalScreen() {
        quizSection.classList.add('hidden');
        finalSection.classList.remove('hidden');
        triggerFinalScreenCelebration();
    }

    /* ==========================================================================
       RESET APPLICATION STATE
       ========================================================================= */

    playAgainBtn.addEventListener('click', (e) => {
        createRipple(e, playAgainBtn);
        if (finalCelebrationInterval) clearInterval(finalCelebrationInterval);
        
        currentQuestionIndex = 0;
        finalSection.classList.add('hidden');
        quizSection.classList.remove('hidden');
        renderQuestion();
    });

    // Fire application engine initialization
    renderQuestion();
});