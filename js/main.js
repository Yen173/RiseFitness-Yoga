document.addEventListener("DOMContentLoaded", () => {
    // === Header & Footer Loading ===
    const currentPath = window.location.pathname;
    const isInPagesFolder = currentPath.includes("/pages/");

    // Nếu chạy trên GitHub Pages hoặc có thư mục gốc như "RiseFitness-Yoga"
    const basePath = currentPath.includes("RiseFitness-Yoga") ? "/RiseFitness-Yoga/" : "/";

    const headerPath = isInPagesFolder ? basePath + "include/header.html" : "include/header.html";
    const footerPath = isInPagesFolder ? basePath + "include/footer.html" : "include/footer.html";

    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });

    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});

    // === Modal Popup ===
    const modal = document.getElementById('consultModal');
    const consultButtons = document.querySelectorAll('.consult-btn');
    const closeBtn = document.querySelector('.close-btn');

    if (modal && closeBtn && consultButtons.length > 0) {
        consultButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'flex';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

   // === Popup Khuyến Mãi Mùa Hè (Summer Swimming Sale) ===
    const promoModal = document.getElementById('summerPromoModal');
    const promoCloseBtn = promoModal?.querySelector('.close-btn');
    const promoMessage = document.getElementById('promo-message');
    const showConsultFormBtn = document.getElementById('showConsultForm');

    if (promoModal && promoCloseBtn && showConsultFormBtn) {
        // Hiển thị popup lần đầu nếu chưa hiển thị
        if (!localStorage.getItem('summerPromoShown')) {
            promoModal.style.display = 'flex';
            localStorage.setItem('summerPromoShown', 'true');
        }

        promoCloseBtn.addEventListener('click', () => {
            promoModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === promoModal) {
                promoModal.style.display = 'none';
            }
        });

        // Mở popup form khi nhấn "Nhận Ưu Đãi Ngay!"
        showConsultFormBtn.addEventListener('click', () => {
            promoModal.style.display = 'none'; // Ẩn popup khuyến mãi
            const consultModal = document.getElementById('consultModal');
            if (consultModal) {
                consultModal.style.display = 'flex'; // Hiển thị popup form
            }
        });
    }

    // === Form Tư Vấn ===
    const consultForm = document.getElementById('consult-form');
    const consultMessage = document.getElementById('consult-form-message');
    if (consultForm) {
        consultForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(consultForm);
            consultMessage.textContent = 'Đang gửi...';
            consultMessage.classList.add('visible');
            consultMessage.style.color = '#000';

            fetch(consultForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (!response.ok) throw new Error('Lỗi khi gửi form');
                    return response.json();
                })
                .then(data => {
                    consultMessage.textContent = 'Cảm ơn bạn đã đăng ký!';
                    consultMessage.style.color = '#2f855a';
                    consultForm.reset();
                    setTimeout(() => {
                        modal.style.display = 'none';
                        consultMessage.classList.remove('visible');
                    }, 2000);
                })
                .catch(error => {
                    consultMessage.textContent = 'Lỗi khi gửi đăng ký.';
                    consultMessage.style.color = '#e53e3e';
                });
        });
    }

    // === Form Đăng Ký Tập Thử ===
    const registrationForm = document.getElementById('registration-form');
    const messageDiv = document.getElementById('form-message');
    if (registrationForm && messageDiv) {
        console.log('Registration form found. Action:', registrationForm.action);
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!registrationForm.action || registrationForm.action.includes('your-trial-form-id')) {
                console.error('Invalid form action:', registrationForm.action);
                messageDiv.textContent = 'Lỗi: Vui lòng cấu hình Formspree hợp lệ.';
                messageDiv.style.color = '#ff4d4d';
                messageDiv.classList.add('visible');
                return;
            }

            const formData = new FormData(registrationForm);
            messageDiv.textContent = 'Đang gửi...';
            messageDiv.style.color = '#f0f0f0';
            messageDiv.classList.add('visible');

            fetch(registrationForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Lỗi khi gửi form: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Formspree response:', data);
                    messageDiv.textContent = 'Cảm ơn bạn đã đăng ký!';
                    messageDiv.style.color = '#8B0000';
                    messageDiv.classList.add('visible');
                    registrationForm.reset();
                    setTimeout(() => {
                        messageDiv.classList.remove('visible');
                    }, 3000);
                })
                .catch(error => {
                    console.error('Lỗi chi tiết:', error);
                    messageDiv.textContent = `Lỗi khi gửi đăng ký: ${error.message}`;
                    messageDiv.style.color = '#ff4d4d';
                    messageDiv.classList.add('visible');
                });
        });
    } else {
        console.error('Registration form or message div not found:', { registrationForm, messageDiv });
    }

    // === Tính BMI ===
    const bmiForm = document.getElementById('bmi-form');
    if (bmiForm) {
        bmiForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const height = parseFloat(document.getElementById('height').value) / 100;
            const weight = parseFloat(document.getElementById('weight').value);
            const bmiValue = document.getElementById('bmi-value');
            const bmiMessage = document.getElementById('bmi-message');
            const bmiResult = document.getElementById('bmi-result');

            if (height > 0 && weight > 0) {
                const bmi = weight / (height * height);
                bmiValue.textContent = bmi.toFixed(1);

                let message = '';
                if (bmi < 18.5) {
                    message = 'Bạn đang thiếu cân. Hãy đến với chúng tôi để có chế độ ăn uống và tập luyện hợp lý!';
                } else if (bmi < 25) {
                    message = 'Bạn đang có cân nặng bình thường. Tiếp tục duy trì lối sống lành mạnh!';
                } else if (bmi < 30) {
                    message = 'Bạn đang có dấu hiệu thừa cân. Hãy đến với chúng tôi để có kế hoạch tập luyện và dinh dưỡng phù hợp!';
                } else {
                    message = 'Bạn đang thừa cân. Hãy đến với chúng tôi để được tư vấn và hỗ trợ giảm cân hiệu quả!';
                }

                bmiMessage.textContent = message;
                bmiResult.classList.remove('hidden');
            } else {
                alert('Vui lòng nhập chiều cao và cân nặng hợp lệ!');
            }
        });
    }

    // === Slider ===
    document.querySelectorAll('.slider-container').forEach(container => {
        const slider = container.querySelector('.product-slider, .promotion-slider');
        const prevBtn = container.querySelector('.slider-prev');
        const nextBtn = container.querySelector('.slider-next');

        if (!slider || !prevBtn || !nextBtn) {
            console.error('Slider or buttons not found:', { slider, prevBtn, nextBtn });
            return;
        }

        let currentIndex = 0;
        const cards = slider.children;
        const cardsPerView = 3;

        function updateSlider() {
            const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
            const gap = 20;
            const totalCards = cards.length;
            const maxIndex = Math.max(0, Math.ceil(totalCards / cardsPerView) - 1);
            const slideWidth = (cardWidth + gap) * cardsPerView;

            currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === maxIndex;
        }

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateSlider();
        });

        window.addEventListener('resize', updateSlider);
        updateSlider();
    });

    // === Slideshow ===
    const slides = document.querySelectorAll('.about-image.slideshow .slide');
    if (slides.length > 1) {
        let slideIndex = 0;
        function showNextSlide() {
            slides[slideIndex].classList.remove('active');
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].classList.add('active');
        }
        setInterval(showNextSlide, 2000);
    }
    //Contact Modal
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
  }); const contactItems = document.querySelectorAll(".contact-item");
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
