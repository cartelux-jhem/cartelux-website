(function () {
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('nav-toggle');

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('.hero-media video').forEach(function (video) {
      video.removeAttribute('autoplay');
      video.pause();
    });
  }

  var track = document.getElementById('testimonial-track');
  if (track) {
    var slides = track.querySelectorAll('.carousel-slide');
    var dots = document.querySelectorAll('.carousel-dot');
    var prevBtn = document.getElementById('carousel-prev');
    var nextBtn = document.getElementById('carousel-next');
    var scrollTimer;

    var goTo = function (index) {
      index = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({
        left: slides[index].offsetLeft,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    };

    var currentIndex = function () {
      return Math.round(track.scrollLeft / track.clientWidth);
    };

    var syncDots = function () {
      var index = currentIndex();
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    };

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(currentIndex() - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(currentIndex() + 1); });

    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex() + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex() - 1); }
    });

    track.addEventListener('scroll', function () {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(syncDots, 100);
    }, { passive: true });

    window.addEventListener('resize', syncDots);
  }

  document.querySelectorAll('.bio-toggle').forEach(function (button) {
    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      button.querySelector('.bio-toggle-label').textContent = expanded ? 'Read bio' : 'Hide bio';
    });
  });

  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var email = newsletterForm.email.value.trim();
      var subject = encodeURIComponent('Newsletter signup');
      var body = encodeURIComponent('Please add ' + email + ' to the Cartelux newsletter.');
      window.location.href = 'mailto:marketing@cartelux.ai?subject=' + subject + '&body=' + body;
    });
  }
})();
