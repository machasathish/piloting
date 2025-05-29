// Main JavaScript functionality
$(document).ready(function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Navbar scroll behavior
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });

  // Smooth scrolling
  $('a[href*="#"]').not('[href="#"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
      }
    }
  });

  // Initialize Swiper for testimonials
  const testimonialSwiper = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });

  // Form validation
  $('.needs-validation').submit(function(event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    $(this).addClass('was-validated');
  });

  // Contact form handling
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = $(this).find('button[type="submit"]');
    const originalText = submitBtn.text();
    submitBtn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...');
    submitBtn.prop('disabled', true);

    // Simulate form submission
    setTimeout(() => {
      // Reset form
      this.reset();
      $(this).removeClass('was-validated');
      
      // Show success message
      $('#formSuccess').fadeIn().delay(3000).fadeOut();
      
      // Reset button
      submitBtn.html(originalText);
      submitBtn.prop('disabled', false);
    }, 2000);
  });

  // Initialize counters
  $('.counter').each(function() {
    const $this = $(this);
    const countTo = parseInt($this.attr('data-count'));
    
    $({ countNum: 0 }).animate({
      countNum: countTo
    }, {
      duration: 2000,
      easing: 'swing',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });

  // Program filter
  $('.program-filter').on('click', 'button', function() {
    const filter = $(this).attr('data-filter');
    
    $('.program-filter button').removeClass('active');
    $(this).addClass('active');
    
    if (filter === 'all') {
      $('.program-card').show();
    } else {
      $('.program-card').hide();
      $(`.program-card[data-category="${filter}"]`).show();
    }
  });

  // Initialize Leaflet map
  if ($('#contactMap').length) {
    const map = L.map('contactMap').setView([25.7617, -80.1918], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([25.7617, -80.1918]).addTo(map);
  }

  // Lazy loading images
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });

  // GSAP animations
  gsap.from('.hero-content', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
  });

  gsap.from('.timeline-item', {
    duration: 0.8,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top center'
    }
  });
});