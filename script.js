/**
 * ==========================================================================
 * PREMIUM ROMANTIC QUIZ SYSTEM - COMPLETE LOGIC
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // 30 Completely Unique Premium Romantic Love Questions Matrix
    const loveQuestions = [
        { id: 1, emoji: "❤️", text: "Do you really love me with all your heart?", response: "I knew your heart belonged to me! 😍" },
        { id: 2, emoji: "♾️", text: "Would you stay with me through eternity?", response: "Forever isn't even long enough! ♾️" },
        { id: 3, emoji: "🤝", text: "Will you hold my hand tightly in public places?", response: "Proudly holding hands, walking through life! 👫" },
        { id: 4, emoji: "🫂", text: "Would you hug me tight when I feel completely lost?", response: "Your arms are my absolute safest haven! 🥺" },
        { id: 5, emoji: "🌧️", text: "Would you dance with me under a beautiful midnight rain?", response: "Splashing through drops of pure romantic magic! 💃" },
        { id: 6, emoji: "🍕", text: "Would you willingly share your very last slice of pizza with me?", response: "Now THAT is true deeper level connection! 🍕" },
        { id: 7, emoji: "🌇", text: "Will you commit to watching the sunset with me every week?", response: "Painting memories into the beautiful evening sky! 🌅" },
        { id: 8, emoji: "🧓", text: "Would you love to grow old and wrinkled right next to me?", response: "Rocking chairs, silver hair, and infinite devotion! 👵" },
        { id: 9, emoji: "🌍", text: "Would you travel to the ends of the world by my side?", response: "Every corner of Earth is better with you! 🗺️" },
        { id: 10, emoji: "🥰", text: "Am I truly your absolute favorite person in existence?", response: "And you are my entire beautiful universe! ✨" },
        { id: 11, emoji: "🍳", text: "Would you surprise cook for me when I come home exhausted?", response: "Breakfast, dinner, and love served daily! 🥞" },
        { id: 12, emoji: "💓", text: "Do I still make your heart race like crazy every single day?", response: "Thump-thump! That's the rhythm of pure romance! 🥁" },
        { id: 13, emoji: "🌌", text: "Would you stay up to stargaze on a cold winter night with me?", response: "Counting constellations while warm in your love! 🔭" },
        { id: 14, emoji: "✉️", text: "Would you write me old-fashioned poetic love letters?", response: "Ink on paper, parsing out my soul for you! ✍️" },
        { id: 15, emoji: "☀️", text: "Would you wake up early just to kiss my forehead softly?", response: "The absolute brightest way to greet any morning! ☀️" },
        { id: 16, emoji: "🔮", text: "Do you clearly see me present in all your future plans?", response: "Destiny has woven our lives into one fabric! 🧵" },
        { id: 17, emoji: "💋", text: "Would you kiss me right in the middle of a sentence?", response: "Action speaks louder than any beautiful words! 🤫" },
        { id: 18, emoji: "💐", text: "Would you bring me flowers for absolutely no specific reason?", response: "Blossoming romance without any calendar rules! 🌹" },
        { id: 19, emoji: "💭", text: "Am I the sweetest dream you think of before sleeping?", response: "Drifting to sleep wrapped inside thoughts of you! 🛌" },
        { id: 20, emoji: "🛡️", text: "Would you stand and defend me against the entire world?", response: "Unbreakable armor, standing strong together! ⚔️" },
        { id: 21, emoji: "🎤", text: "Would you sing a horribly cheesy love song explicitly to me?", response: "Serenading with absolute beautiful affection! 🎶" },
        { id: 22, emoji: "😊", text: "Do you unconsciously smile whenever your phone lights up from me?", response: "A tiny notification that instantly brightens my life! 📱" },
        { id: 23, emoji: "🍰", text: "Would you give me the larger piece of a delicious cake?", response: "Sweet desserts for the sweetest love of mine! 🍰" },
        { id: 24, emoji: "🎬", text: "Will you hold me extra tight during intense scary movies?", response: "No monsters can touch us while we are entangled! 🧟" },
        { id: 25, emoji: "✨", text: "Do you genuinely believe we were written in the stars?", response: "Cosmic alignment brought us right here today! ☄️" },
        { id: 26, emoji: "🏰", text: "Would you build an epic secret blanket fort with me?", response: "A cozy secret kingdom for just the two of us! 🏰" },
        { id: 27, emoji: "🦋", text: "Do you still get fluttery stomach butterflies when we meet?", response: "A beautiful wild zoo inside every single time! 🦋" },
        { id: 28, emoji: "🗣️", text: "Would you patiently listen to my random endless daily rants?", response: "Your voice is my absolute favorite symphony! 🎹" },
        { id: 29, emoji: "🌹", text: "Will you promise to be my forever and ever Valentine?", response: "Every single day is Feb 14th from now on! 💝" },
        { id: 30, emoji: "💍", text: "Will you lock your hand in mine and promise eternal love?", response: "An ironclad promise of complete infinite devotion! 🔒" }
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
        "Oops! Try again! 😉",
        "Access Denied by Cupid! 🏹",
        "Error: Heart does not compute this option! ❌",
        "Nice try, swift clicker! 🏎️",
        "That button is just decoration! 🎀",
        "Your cursor missed the mark! 🎯",
        "Love doesn't know NO! 💖"
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
                showToast("Please interact with the page first to allow music! 🎵");
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
        counterDisplay.innerText = `Question ${activeData.id} of ${totalQuestions}`;
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
       ========================================================================== */

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