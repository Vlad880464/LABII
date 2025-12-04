// Matrix Rain Effect
function createMatrixRain() {
    const matrix = document.getElementById('matrixRain');
    const characters = '01010101010101010101010101010101ЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯЯ';
    
    for (let i = 0; i < 80; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.top = '-50px';
        drop.style.color = '#00ff00';
        drop.style.fontSize = (Math.random() * 8 + 12) + 'px';
        drop.style.opacity = Math.random() * 0.4 + 0.1;
        drop.style.animation = `matrixRain ${Math.random() * 4 + 3}s linear infinite`;
        drop.style.animationDelay = Math.random() * 8 + 's';
        drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        matrix.appendChild(drop);
    }
}

// Transition function
function showTransition(title, description) {
    const transitionScreen = document.getElementById('transitionScreen');
    const transitionText = document.getElementById('transitionText');
    
    transitionText.innerHTML = `ПЕРЕХОД В РАЗДЕЛ: ${title}<br><br><span style="font-size: 16px; opacity: 0.8;">${description}</span>`;
    transitionScreen.style.display = 'flex';
    
    setTimeout(() => {
        transitionScreen.style.display = 'none';
        // Здесь можно добавить реальный переход на другую страницу
        alert(`Переход в раздел: ${title}\n\n${description}`);
    }, 3000);
}

// Boot sequence
document.addEventListener('DOMContentLoaded', function() {
    createMatrixRain();
    
    // Добавляем обработчики кликов для карточек
    document.querySelectorAll('.benefit-card, .info-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const desc = this.getAttribute('data-desc');
            showTransition(title, desc);
        });
    });
    
    setTimeout(() => {
        document.getElementById('bootScreen').style.opacity = '0';
        document.getElementById('bootScreen').style.transition = 'opacity 1s ease';
        
        setTimeout(() => {
            document.getElementById('bootScreen').style.display = 'none';
            
            // Show main content
            const mainContent = document.getElementById('mainContent');
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
            mainContent.style.transition = 'all 1s ease';
            
            // Animate benefit cards
            const benefitCards = document.querySelectorAll('.benefit-card');
            benefitCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                    card.style.animation = 'fadeInUp 0.8s ease forwards';
                }, index * 150 + 500);
            });
            
            // Animate registration section
            setTimeout(() => {
                const regSection = document.querySelector('.registration-section');
                regSection.style.opacity = '1';
                regSection.style.transform = 'translateY(0)';
                regSection.style.animation = 'fadeInUp 1s ease forwards';
            }, 1200);

            // Animate info cards
            setTimeout(() => {
                const infoCards = document.querySelectorAll('.info-card');
                infoCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.animation = 'fadeInUp 0.8s ease forwards';
                    }, index * 200);
                });
            }, 1500);

            // Animate footer
            setTimeout(() => {
                document.querySelector('.footer').style.opacity = '1';
                document.querySelector('.footer').style.transition = 'opacity 1s ease';
            }, 2000);
            
        }, 1000);
    }, 5000);
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const terminal = document.querySelector('.terminal-text');
    
    // Clear existing responses
    const existingResponses = terminal.querySelectorAll('.command-line');
    if (existingResponses.length > 4) {
        for (let i = 4; i < existingResponses.length; i++) {
            terminal.removeChild(existingResponses[i]);
        }
    }
    
    // Add new responses
    const processing = document.createElement('div');
    processing.className = 'command-line';
    processing.innerHTML = `<span class="prompt">></span> ОБРАБОТКА ЗАПРОСА РЕГИСТРАЦИИ...`;
    terminal.appendChild(processing);
    
    setTimeout(() => {
        const verifying = document.createElement('div');
        verifying.className = 'command-line';
        verifying.innerHTML = `<span class="prompt">></span> ПРОВЕРКА ДАННЫХ...`;
        terminal.appendChild(verifying);
    }, 800);
    
    setTimeout(() => {
        const success = document.createElement('div');
        success.className = 'command-line';
        success.innerHTML = `<span class="prompt">></span> <span style="color: #00ff00">РЕГИСТРАЦИЯ УСПЕШНА! ДОСТУП ПРЕДОСТАВЛЕН.</span>`;
        terminal.appendChild(success);
        
        // Update user count
        document.querySelector('.header-stats span:nth-child(2)').textContent = 'ПОЛЬЗОВАТЕЛИ: 1';
    }, 1600);
    
    this.reset();
});