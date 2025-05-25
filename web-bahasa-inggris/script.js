// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.color = '#333';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.color = 'white';
            }
        });

        // Interactive ROI Calculator
        function calculateROI() {
            const adSpend = prompt("Enter your advertising spend (Rp):");
            const revenue = prompt("Enter revenue generated (Rp):");
            
            if (adSpend && revenue && !isNaN(adSpend) && !isNaN(revenue)) {
                const roi = ((revenue - adSpend) / adSpend * 100).toFixed(2);
                document.getElementById('result').innerHTML = `
                    <strong>ROI: ${roi}%</strong><br>
                    <small>Revenue: Rp. ${revenue} | Spend: Rp. ${adSpend}</small>
                `;
            } else {
                document.getElementById('result').innerHTML = "Please enter valid numbers.";
            }
        }

        function showExample() {
            document.getElementById('result').innerHTML = `
                <strong>Example Campaign:</strong><br>
                Ad Spend: Rp. 1,000,000 | Revenue: Rp. 35,000,000<br>
                <strong>ROI: 250%</strong><br>
                <small>For every $1 spent, you earned $3.50</small>
            `;
        }

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Add click effects to cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px)';
                }, 150);
            });
        });