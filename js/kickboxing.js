document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((faq) => faq.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
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

  // Carousel Functionality
  function initCarousel(carousel) {
    const inner = carousel.querySelector(".carousel-inner");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");
    let currentIndex = 0;
    const totalItems = items.length;
    const visibleItems = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;

    function updateCarousel() {
      const offset = -(currentIndex * (100 / visibleItems));
      inner.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = Math.min(currentIndex + 1, totalItems - visibleItems);
      updateCarousel();
    });

    window.addEventListener("resize", () => {
      const newVisibleItems = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
      if (currentIndex > totalItems - newVisibleItems) {
        currentIndex = Math.max(totalItems - newVisibleItems, 0);
      }
      updateCarousel();
    });
  }

  document.querySelectorAll(".carousel").forEach(initCarousel);

  // Form Validation
  const form = document.querySelector(".form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = form.querySelectorAll(".form-input[required]");
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add("error");
        isValid = false;
      } else {
        input.classList.remove("error");
      }
    });
    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  });

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
  let items = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const pagination = carousel.querySelector(".carousel-pagination");
  let currentIndex = 0;
  let clonedItems = [];

  // Hàm tính số lượng item hiển thị
  function getVisibleItems() {
    return carousel.classList.contains("testimonials")
      ? window.innerWidth >= 768 ? 3 : 1
      : window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
  }

  let visibleItems = getVisibleItems();
  let totalItems = items.length;

  // Hàm nhân bản nội dung
  function cloneItems() {
    // Xóa các phần tử nhân bản cũ
    clonedItems.forEach(item => item.remove());
    clonedItems = [];
    inner.style.transition = "none";

    // Nhân bản toàn bộ danh sách item gốc
    if (carousel.classList.contains("infinite-carousel")) {
      for (let i = 0; i < totalItems; i++) {
        const cloneFirst = items[i].cloneNode(true);
        cloneFirst.classList.add("clone");
        inner.appendChild(cloneFirst);
        const cloneLast = items[totalItems - 1 - i].cloneNode(true);
        cloneLast.classList.add("clone");
        inner.insertBefore(cloneLast, inner.firstChild);
        clonedItems.push(cloneFirst, cloneLast);
      }
    }

    // Cập nhật danh sách item sau khi nhân bản
    items = inner.querySelectorAll(".carousel-item");
  }

  // Tạo bullet phân trang
  function updatePagination() {
    if (!pagination) return;
    pagination.innerHTML = "";
    const totalSlides = Math.ceil(totalItems / visibleItems);
    for (let i = 0; i < totalSlides; i++) {
      const bullet = document.createElement("div");
      bullet.classList.add("carousel-pagination-bullet");
      if (i === 0) bullet.classList.add("active");
      bullet.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel(false);
        resetAutoSlide();
      });
      pagination.appendChild(bullet);
    }
  }

  // Cập nhật vị trí carousel
  function updateCarousel(animate = true) {
    if (totalItems <= visibleItems) {
      inner.style.transform = "translateX(0%)";
      return;
    }

    const offset = -(currentIndex + (carousel.classList.contains("infinite-carousel") ? totalItems : 0)) * (100 / visibleItems);
    inner.style.transition = animate ? "transform 0.5s ease" : "none";
    inner.style.transform = `translateX(${offset}%)`;

    // Xử lý vòng lặp vô hạn
    if (carousel.classList.contains("infinite-carousel")) {
      if (currentIndex >= Math.ceil(totalItems / visibleItems)) {
        setTimeout(() => {
          inner.style.transition = "none";
          currentIndex = 0;
          inner.style.transform = `translateX(-${totalItems * (100 / visibleItems)}%)`;
        }, 500);
      } else if (currentIndex < 0) {
        setTimeout(() => {
          inner.style.transition = "none";
          currentIndex = Math.ceil(totalItems / visibleItems) - 1;
          inner.style.transform = `translateX(-${(currentIndex + totalItems) * (100 / visibleItems)}%)`;
        }, 500);
      }
    }

    // Cập nhật bullet active
    if (pagination) {
      pagination.querySelectorAll(".carousel-pagination-bullet").forEach((bullet, index) => {
        bullet.classList.toggle("active", index === (currentIndex % Math.ceil(totalItems / visibleItems)));
      });
    }
  }

  // Chuyển slide tiếp theo
  function nextSlide() {
    if (totalItems <= visibleItems) return;
    currentIndex++;
    updateCarousel();
  }

  // Chuyển slide trước đó
  function prevSlide() {
    if (totalItems <= visibleItems) return;
    currentIndex--;
    updateCarousel();
  }

  // Reset tự động trượt
  let autoSlide;
  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  }

  // Khởi tạo carousel
  function init() {
    totalItems = items.length;
    visibleItems = getVisibleItems();
    cloneItems();
    updatePagination();
    updateCarousel(false);
    resetAutoSlide();
  }

  // Tự động trượt và tạm dừng khi hover
  carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
  carousel.addEventListener("mouseleave", resetAutoSlide);

  // Sự kiện nút prev/next
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  // Xử lý thay đổi kích thước màn hình
  window.addEventListener("resize", () => {
    const newVisibleItems = getVisibleItems();
    if (newVisibleItems !== visibleItems) {
      visibleItems = newVisibleItems;
      if (currentIndex >= Math.ceil(totalItems / visibleItems)) {
        currentIndex = Math.max(Math.ceil(totalItems / visibleItems) - 1, 0);
      }
      init(); // Tái tạo nhân bản và cập nhật carousel
    }
  });

  init();
}

document.querySelectorAll(".carousel").forEach(initCarousel);
  // Header and Footer Fetch
  const currentPath = window.location.pathname;
  const isInPagesFolder = currentPath.includes("/pages/");
  const headerPath = isInPagesFolder ? "/RiseFitness-Yoga-main/include/header.html" : "include/header.html";
  const footerPath = isInPagesFolder ? "/RiseFitness-Yoga-main/include/footer.html" : "include/footer.html";

  fetch(headerPath)
    .then((response) => {
      if (!response.ok) throw new Error("Không tải được header.html");
      return response.text();
    })
    .then((data) => {
      const headerEl = document.getElementById("header");
      if (headerEl) headerEl.innerHTML = data;
    })
    .catch((error) => console.error("Lỗi khi tải header:", error));

  fetch(footerPath)
    .then((response) => {
      if (!response.ok) throw new Error("Không tải được footer.html");
      return response.text();
    })
    .then((data) => {
      const footerEl = document.getElementById("footer");
      if (footerEl) footerEl.innerHTML = data;
    })
    .catch((error) => console.error("Lỗi khi tải footer:", error));
});
