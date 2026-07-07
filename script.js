/**
 * ==========================================================================
 * PREMIUM ROMANTIC QUIZ SYSTEM - COMPLETE LOGIC (UZBEK EDITION)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // 30 Completely Unique Premium Romantic Love Questions Matrix in Uzbek
    const loveQuestions = [
        { id: 1, emoji: "❤️", text: "Meni butun qalbingiz bilan chin dildan sevasizmi?", response: "Qalbingiz faqat meniki ekanligini bilardim! 😍" },
        { id: 2, emoji: "♾️", text: "Men bilan abadiyatgacha birga bo'la olasizmi?", response: "Abadiyat ham bizning sevgimizga kamlik qiladi! ♾️" },
        { id: 3, emoji: "🤝", text: "Odamlar orasida ham qo'limdan mahkam tutib yurasizmi?", response: "Qo'llarimiz hayot yo'lida hamisha birga! 👫" },
        { id: 4, emoji: "🫂", text: "O'zimni yomon his qilganimda meni mahkam bag'ringizga bosasizmi?", response: "Sizning quchog'ingiz men uchun eng xavfsiz joy! 🥺" },
        { id: 5, emoji: "🌧️", text: "Tungi yomg'ir ostida men bilan raqsga tusharmidingiz?", response: "Yomg'ir tomchilari ostidagi eng sehrli lahzalar! 💃" },
        { id: 6, emoji: "🍕", text: "Pitsaning eng oxirgi shirin bo'lagini menga ilinasizmi?", response: "Mana buni haqiqiy olijanob sevgi desa bo'ladi! 🍕" },
        { id: 7, emoji: "🌇", text: "Har hafta men bilan quyosh botishini tomosha qilasizmi?", response: "Kechki osmon bag'rida shirin xotiralar chizamiz! 🌅" },
        { id: 8, emoji: "🧓", text: "Men bilan birga qarib, bir yostiqqa bosh qo'yishni xohlaysizmi?", response: "Baxtli keksalik va tuganmas cheksiz mehr! 👵" },
        { id: 9, emoji: "🌍", text: "Men bilan dunyoning chekkasiga bo'lsa ham sayohat qilasizmi?", response: "Siz bilan dunyoning har bir burchagi go'zal! 🗺️" },
        { id: 10, emoji: "🥰", text: "Rostini ayting, men siz uchun dunyodagi eng qadrli insonmanmi?", response: "Siz esa mening butun go'zal koinotimsiz! ✨" },
        { id: 11, emoji: "🍳", text: "Charchab kelganimda menga kutilmagan shirin taom tayyorlab berasizmi?", response: "Har kuni sevgi bilan pishirilgan lazzatli taomlar! 🥞" },
        { id: 12, emoji: "💓", text: "Meni ko'rganingizda yuragingiz hamon tez urib ketadimi?", response: "Turs-turs! Bu bizning sevgimiz ritmi! 🥁" },
        { id: 13, emoji: "🌌", text: "Sovuq qish tunida men bilan yulduzlarni tomosha qilarmidingiz?", response: "Sizning mehringiz bilan qishki tun ham issiq! 🔭" },
        { id: 14, emoji: "✉️", text: "Menga eski davrlardagidek romantik sevgi maktublari yozasizmi?", response: "Qog'ozdagi siyoh - qalbimning chin izhoridir! ✍️" },
        { id: 15, emoji: "☀️", text: "Ertalab shunchaki peshonamdan o'pish uchun vaqtli uyg'onarmidingiz?", response: "Yangi kunni qarshilashning eng go'zal usuli! ☀️" },
        { id: 16, emoji: "🔮", text: "Kelajakdagi barcha orzu va rejalaringizda meni ko'ryapsizmi?", response: "Taqdirimiz allaqachon bir butun bo'lib bog'langan! 🧵" },
        { id: 17, emoji: "💋", text: "Gapirayotganimda to'satdan so'zimni o'pich bilan bo'larmidingiz?", response: "Harakatlar so'zlardan ko'ra sehrliroq va shirinroq! 🤫" },
        { id: 18, emoji: "💐", text: "Menga hech qanday sababsiz, shunchaki gullar sovg'a qilasizmi?", response: "Kalendarsiz, shunchaki ko'ngil quvonchi uchun! 🌹" },
        { id: 19, emoji: "💭", text: "Uxlashdan oldin o'ylaydigan eng shirin tushingiz menmanmi?", response: "Siz haqingizdagi shirin xayollar bilan uyquga ketaman! 🛌" },
        { id: 20, emoji: "🛡️", text: "Butun dunyo bizga qarshi bo'lsa ham, meni himoya qilasizmi?", response: "Biz birga har qanday qiyinchilikni yenga olamiz! ⚔️" },
        { id: 21, emoji: "🎤", text: "Faqat men uchun eng quvnoq va kulgili sevgi qo'shig'ini aytasizmi?", response: "Sizga bo'lgan cheksiz muhabbatim taronasi! 🎶" },
        { id: 22, emoji: "😊", text: "Mendan xabar kelganda telefoningizga qarab beixtiyor jilmayasizmi?", response: "Ekrandagi mitti bildirishnoma ham kayfiyatni ko'taradi! 📱" },
        { id: 23, emoji: "🍰", text: "Shirin tortning eng katta va mazali bo'lagini menga berasizmi?", response: "Mening eng shirin insonim uchun eng zo'r bo'lak! 🍰" },
        { id: 24, emoji: "🎬", text: "Qo'rqinchli kino ko'rayotganda meni yanada mahkamroq ushlab turasizmi?", response: "Biz birga bo'lsak, hech qanday maxluq qo'rqinchli emas! 🧟" },
        { id: 25, emoji: "✨", text: "Bizning uchrashganimiz yulduzlarda bitilganiga ishonasizmi?", response: "Koinot bizni birlashtirgani aslo tasodif emas! ☄️" },
        { id: 26, emoji: "🏰", text: "Uyda adyollardan uycha yasab, ichida berkinib o'tirarmidik?", response: "Faqat ikkimizga tegishli bo'lgan sirli shirin qirollik! 🏰" },
        { id: 27, emoji: "🦋", text: "Uchrashganimizda yuragingizda hamon kapalaklar uchadimi?", response: "Har safar xuddi birinchi uchrashuvdek hayajon! 🦋" },
        { id: 28, emoji: "🗣️", text: "Mening tinimsiz va qiziq hayotiy gaplarimni charchamay tinglaysizmi?", response: "Sizning ovozingiz - men uchun eng go'zal simfoniya! 🎹" },
        { id: 29, emoji: "🌹", text: "Umringizning oxirigacha mening yagona sevgilim bo'lishga va'da berasizmi?", response: "Endi hayotimizning har bir kuni haqiqiy sevgi bayrami! 💝" },
        { id: 30, emoji: "💍", text: "Qo'llaringizni qo'llarimga qulflab, abadiy muhabbatga so'z berasizmi?", response: "Cheksiz sadoqat va abadiy baxt va'dasi! 🔒" }
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