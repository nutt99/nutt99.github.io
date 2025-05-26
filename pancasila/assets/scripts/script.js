function showContent(section) {
            // Hide all content sections
            const sections = document.querySelectorAll('.content-section, .about-section');
            sections.forEach(sec => sec.classList.remove('active'));
            
            // Hide hero section
            const hero = document.getElementById('home');
            
            if (section === 'home') {
                hero.style.display = 'flex';
                window.scrollTo(0, 0);
            } else {
                hero.style.display = 'none';
                // Show selected section
                document.getElementById(section).classList.add('active');
                // Scroll to top
                window.scrollTo(0, 0);
            }
        }

        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }

        // Initialize - show home by default
        document.addEventListener('DOMContentLoaded', function() {
            showContent('home');
        });

        // Add smooth scrolling animation
        document.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });

        // Add interactive elements
        document.querySelectorAll('.sila-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function(e) {
                e.target.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            icon.addEventListener('mouseleave', function(e) {
                e.target.style.transform = 'scale(1) rotate(0deg)';
            });
        });