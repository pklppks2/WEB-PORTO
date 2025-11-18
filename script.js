// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Typing Animation (tanpa reset untuk menghindari blink)
    const typingElement = document.querySelector('.typing-animation');
    // Hapus bagian reset animation yang bisa menyebabkan blink

    // Count Up Animation
    const countUpElements = document.querySelectorAll('.count-up h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const countElement = entry.target;
                const target = parseInt(countElement.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        countElement.textContent = target;
                        clearInterval(timer);
                    } else {
                        countElement.textContent = Math.floor(current);
                    }
                }, 16);
                
                observer.unobserve(countElement);
            }
        });
    }, { threshold: 0.5 });
    
    countUpElements.forEach(element => {
        observer.observe(element);
    });

    // Floating Action Button
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Card hover effects
    const cards = document.querySelectorAll('.student-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    console.log('Portfolio PKL PPKS TI loaded successfully! 🚀');
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.profile-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .profile-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);