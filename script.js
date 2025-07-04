    // Mobile menu toggleMore actions
    document.getElementById('menu-btn').addEventListener('click', function() {
        this.classList.toggle('active');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.add('hidden');
            document.getElementById('menu-btn').classList.remove('active');
        });
    });
           document.addEventListener('DOMContentLoaded', () => {
            const typewriterElement = document.getElementById('myTypewriterText');
            const textContent = typewriterElement.textContent;
            const numberOfCharacters = textContent.length;

            // Set the CSS variable
            typewriterElement.style.setProperty('--characters', numberOfCharacters);

            // You might want to adjust the animation duration based on character count
            // For instance, 0.15s per character:
            // typewriterElement.style.animationDuration = `${numberOfCharacters * 0.15}s`;
            // If you do this, remove the 3.5s from the CSS
        });


    // Highlight active navigation link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');

    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('#skills').forEach(section => {
        observer.observe(section);
    });
    document.addEventListener('DOMContentLoaded', function() {
        const sendMessageButton = document.getElementById('sendMessageButton');

        sendMessageButton.addEventListener('click', function() {
            const recipient = 'mostafaraadkamal9@gmail.com';
            const subject = encodeURIComponent('Inquiry for an Interview');
            const body = encodeURIComponent('Hello, I am contacting you...');
            const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

// Create a temporary <a> element
            const tempLink = document.createElement('a');
            tempLink.href = mailtoLink;
            tempLink.style.display = 'none'; // Hide it from the user
            document.body.appendChild(tempLink);

// Programmatically click the link
            tempLink.click();

// Remove the temporary link
            document.body.removeChild(tempLink);
        });
    });



    document.addEventListener('DOMContentLoaded', () => {
        const iconContainer = document.querySelector('.icon-container-js');
        const icons = document.querySelectorAll('.icon-container-js .icon-item-js');
        const staggerDelay = 600;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
// The icon container is now in the viewport
                    icons.forEach((icon, index) => {
                        setTimeout(() => {
                            icon.classList.add('visible');
                        }, index * staggerDelay);
                    });

// REMOVED: observer.unobserve(iconContainer);
                } else {
// The icon container is no longer in the viewport
// Optionally, you might want to reset the state of the icons here
                    icons.forEach(icon => {
                        icon.classList.remove('visible');
                    });
                }
            });
        }, {
            threshold: 0.1 // Trigger when at least 10% of the container is visible
        });

// Start observing the icon container
        if (iconContainer) {
            observer.observe(iconContainer);
        }
    });

    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 1000,
        easing: 'ease-in-out',
        mobile: true
    });

    ScrollReveal().reveal('.reveal-top', {
        origin: 'top',
        distance: '40px'


    });
    ScrollReveal().reveal('.reveal-left', {
        origin: 'left',
        distance: '80px'

    });
    ScrollReveal().reveal('.reveal-right', {
        origin: 'right',
        distance: '80px'

    });
    ScrollReveal().reveal('.reveal-bottom', {
        origin: 'bottom',
        distance: '40px'

    });

    // You can also override default settings for specific elements using data attributes
    // like 'data-sr-delay' and 'data-sr-duration' in the HTML.
    const pdfToggleButton = document.getElementById('pdfToggleButton');
    const pdfWrapper = document.getElementById('pdfWrapper');
    const pdfViewer = document.querySelector('.pdf-viewer'); // Get the iframe/embed element

    let isPdfVisible = false; // Track the state of the PDF

    // Set initial height for collapsed state (if you want a small preview)
    // If you want it completely hidden, set height: 0 in CSS and remove this.
    // pdfWrapper.style.height = '50px'; // Example: show a 50px high preview

    pdfToggleButton.addEventListener('click', () => {
        if (isPdfVisible) {
// Collapse the PDF
            pdfWrapper.classList.add('collapsed');
            pdfWrapper.style.height = '0'; // Explicitly set height to 0 for collapsing
            pdfToggleButton.textContent = 'Expand PDF';
        } else {
// Expand the PDF
            pdfWrapper.classList.remove('collapsed');
// Set the height back to its expanded height (or auto, but fixed height is often smoother for transitions)
            pdfWrapper.style.height = 90vh ; // Use default viewer height or 800px
            pdfToggleButton.textContent = 'Collapse';
        }
        isPdfVisible = !isPdfVisible; // Toggle the state
    });

    // Optional: If you want to load the PDF only when expanded (for performance)
    // pdfViewer.src = ''; // Initially empty
    // pdfToggleButton.addEventListener('click', () => {
    //     if (!isPdfVisible && pdfViewer.src === '') {
    //         pdfViewer.src = 'your-document.pdf#toolbar=0&navpanes=0';
    //     }
    //     // ... rest of the toggle logic ...
    // });
