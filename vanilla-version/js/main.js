// Main JavaScript functionality for MadaTrips website

// Global variables
let currentCarouselSlide = 0;
let carouselInterval;
let isScrolled = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCarousel();
    initializeThemeToggle();
    initializeScrollButtons();
    initializeAnimations();
    initializeMobileMenu();
});

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 20 && !isScrolled) {
            nav.classList.add('nav-scrolled');
            isScrolled = true;
        } else if (scrollY <= 20 && isScrolled) {
            nav.classList.remove('nav-scrolled');
            isScrolled = false;
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('open')) {
                icon.innerHTML = '<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            } else {
                icon.innerHTML = '<path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('.nav-item');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('open');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
            });
        });
    }
}

// Carousel functionality
function initializeCarousel() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    
    if (slides.length === 0) return;
    
    // Show first slide
    showSlide(0);
    
    // Auto-play carousel
    startCarousel();
    
    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopCarousel();
            currentCarouselSlide = (currentCarouselSlide - 1 + slides.length) % slides.length;
            showSlide(currentCarouselSlide);
            startCarousel();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopCarousel();
            currentCarouselSlide = (currentCarouselSlide + 1) % slides.length;
            showSlide(currentCarouselSlide);
            startCarousel();
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopCarousel();
            currentCarouselSlide = index;
            showSlide(currentCarouselSlide);
            startCarousel();
        });
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function startCarousel() {
    stopCarousel();
    carouselInterval = setInterval(function() {
        const slides = document.querySelectorAll('.carousel-slide');
        currentCarouselSlide = (currentCarouselSlide + 1) % slides.length;
        showSlide(currentCarouselSlide);
    }, 5000);
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

// Theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        // Check for saved theme preference or default to 'light'
        const currentTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            updateThemeIcon(newTheme);
        });
        
        // Set initial icon
        updateThemeIcon(currentTheme);
    }
}

function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('svg');
    if (icon) {
        if (theme === 'dark') {
            icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        } else {
            icon.innerHTML = '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        }
    }
}

// Scroll buttons functionality
function initializeScrollButtons() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const scrollToBottomBtn = document.querySelector('.scroll-to-bottom');
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    if (scrollToBottomBtn) {
        scrollToBottomBtn.addEventListener('click', function() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Show/hide scroll buttons based on scroll position
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        
        if (scrollToTopBtn) {
            scrollToTopBtn.style.display = scrollY > 300 ? 'flex' : 'none';
        }
        
        if (scrollToBottomBtn) {
            scrollToBottomBtn.style.display = scrollY < documentHeight - windowHeight - 300 ? 'flex' : 'none';
        }
    });
}

// Animation on scroll
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el, index) => {
        el.dataset.delay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form handling
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (validateForm(data)) {
                // Here you would typically send the data to a server
                console.log('Form submitted:', data);
                showNotification('Mesajul a fost trimis cu succes!', 'success');
                this.reset();
            }
        });
    });
}

function validateForm(data) {
    // Basic email validation
    if (data.email && !isValidEmail(data.email)) {
        showNotification('Vă rugăm să introduceți o adresă de email validă.', 'error');
        return false;
    }
    
    // Check required fields
    const requiredFields = ['name', 'email', 'message'];
    for (let field of requiredFields) {
        if (data[field] && data[field].trim() === '') {
            showNotification('Vă rugăm să completați toate câmpurile obligatorii.', 'error');
            return false;
        }
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (searchInput && searchResults) {
        const debouncedSearch = debounce(function(query) {
            if (query.length > 2) {
                // Here you would typically search through your destinations
                const results = searchDestinations(query);
                displaySearchResults(results);
            } else {
                searchResults.style.display = 'none';
            }
        }, 300);
        
        searchInput.addEventListener('input', function() {
            debouncedSearch(this.value);
        });
    }
}

function searchDestinations(query) {
    // Mock search results - in a real app, this would search through actual data
    const destinations = [
        { id: 'carpati-romania', title: 'Carpații Românești', location: 'România' },
        { id: 'bucuresti-cultural', title: 'București Cultural', location: 'România' },
        { id: 'delta-dunarii', title: 'Delta Dunării', location: 'România' },
        { id: 'sahara-desert', title: 'Sahara Magică', location: 'Maroc' },
        { id: 'litoral-romanesc', title: 'Litoralul Românesc', location: 'România' },
        { id: 'alpi-swiss', title: 'Alpii Elvețieni', location: 'Elveția' },
        { id: 'praga-istoric', title: 'Praga Istorică', location: 'Republica Cehă' },
        { id: 'coasta-amalfi', title: 'Coasta Amalfi', location: 'Italia' }
    ];
    
    return destinations.filter(dest => 
        dest.title.toLowerCase().includes(query.toLowerCase()) ||
        dest.location.toLowerCase().includes(query.toLowerCase())
    );
}

function displaySearchResults(results) {
    const searchResults = document.querySelector('.search-results');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-no-results">Nu s-au găsit rezultate.</div>';
    } else {
        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="goToDestination('${result.id}')">
                <h4>${result.title}</h4>
                <p>${result.location}</p>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
}

function goToDestination(destinationId) {
    // Navigate to destination page
    window.location.href = `pages/destination-detail.html?id=${destinationId}`;
}

// Initialize additional functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeForms();
    initializeLazyLoading();
    initializeSearch();
});

// Export functions for global access
window.MadaTrips = {
    showNotification,
    goToDestination,
    searchDestinations
};


