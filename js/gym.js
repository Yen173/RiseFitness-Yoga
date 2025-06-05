document.addEventListener("DOMContentLoaded", function () {
  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((faq) => {
        faq.classList.remove("active");
      });
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Contact Modal
  const contactBtn = document.getElementById("contactBtn");
  const contactModal = document.getElementById("contactModal");
  const closeModal = document.getElementById("closeModal");
  const modalContent = document.querySelector(".modal-content");

  function openModal() {
    contactModal.classList.add("active");
    setTimeout(() => {
      modalContent.style.transform = "scale(1)";
      modalContent.style.opacity = "1";
    }, 10);
  }

  function closeModalFunc() {
    modalContent.style.transform = "scale(0.95)";
    modalContent.style.opacity = "0";
    setTimeout(() => {
      contactModal.classList.remove("active");
    }, 300);
  }

  contactBtn.addEventListener("click", openModal);
  closeModal.addEventListener("click", closeModalFunc);
  contactModal.addEventListener("click", function (e) {
    if (e.target === contactModal) {
      closeModalFunc();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && contactModal.classList.contains("active")) {
      closeModalFunc();
    }
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
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});