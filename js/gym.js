document.addEventListener("DOMContentLoaded", () => {
const isInPagesFolder = window.location.pathname.includes("/pages/");

    // Đường dẫn tương ứng
    const headerPath = isInPagesFolder ? "../include/header.html" : "include/header.html";
    const footerPath = isInPagesFolder ? "../include/footer.html" : "include/footer.html";

    // Chèn header
    fetch(headerPath)
        .then(response => {
            if (!response.ok) throw new Error('Không tải được header.html');
            return response.text();
        })
        .then(data => document.getElementById('header').innerHTML = data)
        .catch(error => console.error('Lỗi khi tải header:', error));

    // Chèn footer
    fetch(footerPath)
        .then(response => {
            if (!response.ok) throw new Error('Không tải được footer.html');
            return response.text();
        })
        .then(data => document.getElementById('footer').innerHTML = data)
        .catch(error => console.error('Lỗi khi tải footer:', error));
});

document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) { // Thêm kiểm tra nếu question tồn tại
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach((faq) => faq.classList.remove("active"));
        if (!isActive) item.classList.add("active");
      });
    }
  });

  // Contact Modal
  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");
  const modalContent = document.querySelector(".modal-content");

  function openModal(modal) {
    modal.classList.add("active");
    setTimeout(() => {
      modal.querySelector(".modal-content").style.transform = "scale(1)";
      modal.querySelector(".modal-content").style.opacity = "1";
    }, 10);
  }

  function closeModalFunc(modal) {
    modal.querySelector(".modal-content").style.transform = "scale(0.95)";
    modal.querySelector(".modal-content").style.opacity = "0";
    setTimeout(() => modal.classList.remove("active"), 300);
  }

  contactBtn.addEventListener("click", () => openModal(contactModal));
  closeModal.addEventListener("click", () => closeModalFunc(contactModal));
  contactModal.addEventListener("click", function (e) {
    if (e.target === contactModal) closeModalFunc(contactModal);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.active").forEach((modal) => closeModalFunc(modal));
    }
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }, 100); // delay nhẹ để DOM cập nhật
    }
  });
});

  // Ripple Effect
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      item.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Service Modal
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".btn-primary")) return;
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) openModal(modal);
    });
  });

  document.querySelectorAll(".service-modal .modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModalFunc(modal);
    });
  });

  document.querySelectorAll(".service-modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModalFunc(modal);
    });
  });


  // Form Validation
  const consultationForm = document.getElementById("consultationForm"); // Sử dụng ID mới
  if (consultationForm) {
    consultationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const inputs = consultationForm.querySelectorAll(".form-input[required]");
      let isValid = true;
      let firstErrorInput = null;

      inputs.forEach((input) => {
        if (!input.value.trim() || (input.type === "email" && !input.checkValidity())) {
          // Thêm class error cho input không hợp lệ
          // Bạn có thể thêm style cho class .error trong gym.css, ví dụ: border-color: red;
          input.style.borderColor = "red"; // Hoặc thêm class error
          isValid = false;
          if (!firstErrorInput) {
            firstErrorInput = input;
          }
        } else {
          input.style.borderColor = ""; // Xóa border đỏ nếu hợp lệ
        }
      });
    

      if (isValid) {
        alert("Đăng ký tư vấn thành công! Chúng tôi sẽ liên hệ với bạn sớm.");
        consultationForm.reset();
      } else {
        alert("Vui lòng điền đầy đủ và chính xác các thông tin bắt buộc (đánh dấu *).");
        if (firstErrorInput) {
          firstErrorInput.focus(); // Focus vào trường lỗi đầu tiên
        }
      }
    });
  }
  

  // Lazy Loading Images
  const images = document.querySelectorAll("img[loading='lazy']");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        observer.unobserve(img);
      }
    });
  });
  images.forEach((img) => observer.observe(img));
  

  function initCarousel(carousel) {
  const inner = carousel.querySelector(".carousel-inner");
  const items = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const pagination = carousel.querySelector(".carousel-pagination");
  let currentIndex = 0;
  const totalItems = items.length;
  const visibleItems = carousel.classList.contains("testimonials")
    ? window.innerWidth >= 768
      ? 3
      : 1
    : window.innerWidth >= 1024
    ? 4
    : window.innerWidth >= 768
    ? 2
    : 1;
  let autoSlide;

  // Nhân bản các phần tử để tạo vòng lặp vô hạn
  const isInfinite = carousel.classList.contains("infinite-carousel");
  let clonedItems = [];
  if (isInfinite) {
    // Nhân bản số lượng phần tử bằng visibleItems cho đầu và cuối
    for (let i = 0; i < visibleItems; i++) {
      const cloneFirst = items[i % totalItems].cloneNode(true);
      cloneFirst.classList.add("clone");
      inner.appendChild(cloneFirst);
      const cloneLast = items[totalItems - 1 - (i % totalItems)].cloneNode(true);
      cloneLast.classList.add("clone");
      inner.insertBefore(cloneLast, inner.firstChild);
    }
    clonedItems = inner.querySelectorAll(".carousel-item.clone");
  }

  const totalSlides = Math.ceil(totalItems / visibleItems);

  // Tạo bullet phân trang
  if (pagination) {
    pagination.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const bullet = document.createElement("div");
      bullet.classList.add("carousel-pagination-bullet");
      if (i === 0) bullet.classList.add("active");
      bullet.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel(false);
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
      });
      pagination.appendChild(bullet);
    }
  }

  function updateCarousel(animate = true) {
    const offset = -(currentIndex + (isInfinite ? visibleItems : 0)) * (100 / visibleItems);
    inner.style.transition = animate ? "transform 0.5s ease" : "none";
    inner.style.transform = `translateX(${offset}%)`;

    // Xử lý vòng lặp vô hạn
    if (isInfinite) {
      if (currentIndex >= totalSlides) {
        setTimeout(() => {
          inner.style.transition = "none";
          currentIndex = 0;
          inner.style.transform = `translateX(-${visibleItems * (100 / visibleItems)}%)`;
        }, 500);
      } else if (currentIndex < 0) {
        setTimeout(() => {
          inner.style.transition = "none";
          currentIndex = totalSlides - 1;
          inner.style.transform = `translateX(-${(totalSlides - 1 + visibleItems) * (100 / visibleItems)}%)`;
        }, 500);
      }
    }

    // Cập nhật bullet active
    if (pagination) {
      pagination.querySelectorAll(".carousel-pagination-bullet").forEach((bullet, index) => {
        bullet.classList.toggle("active", index === (currentIndex % totalSlides));
      });
    }
  }

  function nextSlide() {
    currentIndex++;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex--;
    updateCarousel();
  }

  // Tự động chuyển slide
  autoSlide = setInterval(nextSlide, 5000);

  // Tạm dừng khi hover
  carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
  carousel.addEventListener("mouseleave", () => {
    autoSlide = setInterval(nextSlide, 5000);
  });

  // Sự kiện nút prev/next
  prevBtn.addEventListener("click", () => {
    prevSlide();
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  });

  // Xử lý thay đổi kích thước màn hình
  window.addEventListener("resize", () => {
    const newVisibleItems = carousel.classList.contains("testimonials")
      ? window.innerWidth >= 768
        ? 3
        : 1
      : window.innerWidth >= 1024
      ? 4
      : window.innerWidth >= 768
      ? 2
      : 1;
    if (currentIndex >= Math.ceil(totalItems / newVisibleItems)) {
      currentIndex = Math.max(Math.ceil(totalItems / newVisibleItems) - 1, 0);
    }
    updateCarousel(false);
  });

  updateCarousel(false);
}

document.querySelectorAll(".carousel").forEach(initCarousel);

});
