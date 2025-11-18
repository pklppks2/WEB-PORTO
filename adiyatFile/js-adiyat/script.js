// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle for Mobile
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    
    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('open');
        });
    });
    
    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    
    // Header background on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(31, 31, 33, 0.95)';
            header.style.padding = '15px 15%';
        } else {
            header.style.background = 'rgba(31, 31, 33, 0.9)';
            header.style.padding = '20px 15%';
        }
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    
    function highlightNavLink() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Initialize animations
    animateSkillBars();
});