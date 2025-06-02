
// Lấy các phần tử
    const playButton = document.querySelector('.play-button');
    const overlay = document.querySelector('.overlay');
    const iframe = document.querySelector('iframe');

    // Xử lý sự kiện khi nhấp vào nút play
    playButton.addEventListener('click', () => {
      // Ẩn overlay
      overlay.classList.add('hidden');

      // Lấy URL hiện tại của iframe và thêm autoplay
      let src = iframe.getAttribute('src');
      if (!src.includes('autoplay=1')) {
        iframe.setAttribute('src', src + '&autoplay=1');
      }
    });

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Counter animation
  const counters = document.querySelectorAll('.counter-value');
  
  const startCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        counter.textContent = Math.floor(current);
        
        if (current >= target) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        }
      }, 16);
    });
  };
  
  // Use Intersection Observer to start counters when visible
  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(document.querySelector('#achievements'));
  }
  
  // Form submission
  const form = document.getElementById('registration-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      
      if (!fullname || !email || !phone) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }
      
      // Simulate form submission
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = 'Đang xử lý...';
      
      setTimeout(() => {
        alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
        form.reset();
        submitButton.disabled = false;
        submitButton.textContent = 'Đăng Ký Ngay';
      }, 1500);
    });
  }
});