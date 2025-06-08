document.addEventListener("DOMContentLoaded", () => {
  // Base path cho GitHub Pages
  const repoName = "RiseFitness-Yoga"; // Thay bằng tên repository của bạn
  const basePath = `/${repoName}/`;

  // Hàm fetch và chèn HTML
  const fetchAndInsert = async (url, position, target = document.body) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      let html = await res.text();
      // Thay đường dẫn tương đối bằng tuyệt đối
      html = html.replace(/(href|src)="([^"]+)"/g, (match, attr, path) => {
        if (!path.startsWith("http") && !path.startsWith("/")) {
          return `${attr}="${basePath}${path}"`;
        }
        return match;
      });
      target.insertAdjacentHTML(position, html);
    } catch (err) {
      console.error(`Lỗi tải ${url}:`, err);
    }
  };

  // Tải header và footer đồng thời
  Promise.all([
    fetchAndInsert(`${basePath}include/header.html`, "beforeend", document.body),
    fetchAndInsert(`${basePath}include/footer.html`, "beforeend", document.body),
  ]).catch((err) => console.error("Lỗi khi tải header hoặc footer:", err));
});

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
  // Contact Modal
const contactBtn = document.querySelector(".contact-btn"); // Changed from getElementById to querySelector
const contactModal = document.getElementById("contactModal");
const closeModal = document.querySelector(".modal-close"); // Changed from getElementById to querySelector
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

if (contactBtn) {
    contactBtn.addEventListener("click", () => openModal(contactModal));
} else {
    console.error("Contact button not found");
}

if (closeModal) {
    closeModal.addEventListener("click", () => closeModalFunc(contactModal));
} else {
    console.error("Close modal button not found");
}

if (contactModal) {
    contactModal.addEventListener("click", function (e) {
        if (e.target === contactModal) closeModalFunc(contactModal);
    });
} else {
    console.error("Contact modal not found");
}

// Close modal on Escape key
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
