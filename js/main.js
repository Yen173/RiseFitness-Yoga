document.addEventListener("DOMContentLoaded", () => {
    // Lấy đường dẫn hiện tại
    const currentPath = window.location.pathname;

    // Kiểm tra xem trang hiện tại có nằm trong thư mục 'pages' không
    const isInPagesFolder = currentPath.includes("/pages/");

    // Xác định đường dẫn đến header và footer
    const headerPath = isInPagesFolder ? "../include/header.html" : "include/header.html";
    const footerPath = isInPagesFolder ? "../include/footer.html" : "include/footer.html";

    // Chèn header
    fetch(headerPath)
        .then(response => {
            if (!response.ok) throw new Error('Không tải được header.html');
            return response.text();
        })
        .then(data => {
            const headerEl = document.getElementById('header');
            if (headerEl) headerEl.innerHTML = data;
        })
        .catch(error => console.error('Lỗi khi tải header:', error));

    // Chèn footer
    fetch(footerPath)
        .then(response => {
            if (!response.ok) throw new Error('Không tải được footer.html');
            return response.text();
        })
        .then(data => {
            const footerEl = document.getElementById('footer');
            if (footerEl) footerEl.innerHTML = data;
        })
        .catch(error => console.error('Lỗi khi tải footer:', error));
});
// Xử lý form đăng ký tập thử với Formspree
document.getElementById('trial-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('form-message');
    
    messageDiv.textContent = 'Đang gửi...';
    messageDiv.style.color = '#f0f0f0';
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) throw new Error('Lỗi khi gửi form');
        return response.json();
    })
    .then(data => {
        messageDiv.textContent = 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong 24 giờ.';
        messageDiv.style.color = '#8B0000'; // Đỏ sẫm để đồng bộ nút
        form.reset();
    })
    .catch(error => {
        console.error('Lỗi:', error);
        messageDiv.textContent = 'Lỗi khi gửi đăng ký. Vui lòng thử lại sau.';
        messageDiv.style.color = '#ff4d4d';
    });
});

// Tính BMI
document.getElementById('bmi-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / (height * height)).toFixed(1);
    let result = `Chỉ số BMI của bạn là <strong>${bmi}</strong>. `;
    if (bmi < 18.5) {
        result += 'Bạn hơi gầy, hãy tham gia gói tập tăng cân tại RiseFitness & Yoga!';
    } else if (bmi < 25) {
        result += 'Cơ thể bạn cân đối, tiếp tục duy trì với các lớp tập của chúng tôi!';
    } else if (bmi < 30) {
        result += 'Bạn hơi mũm mĩm, thử các lớp giảm mỡ với HLV cá nhân tại Rise Fitness & Yoga nhé!';
    } else {
        result += 'Có vẻ bạn cần giảm cân, liên hệ Rise Fitness & Yoga để được tư vấn lộ trình phù hợp nhé!';
    }
    document.getElementById('bmi-result').innerHTML = result;
});

// Xử lý slider
document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.product-slider, .promotion-slider');
    const prevBtn = container.querySelector('.slider-prev');
    const nextBtn = container.querySelector('.slider-next');
    let currentIndex = 0;
    const cards = slider.children;
    const totalCards = cards.length;

    function getCardsPerView() {
        return window.innerWidth > 1024 ? 4 : window.innerWidth > 768 ? 2 : 1;
    }

    function updateSlider() {
        const cardsPerView = getCardsPerView();
        currentIndex = Math.min(currentIndex, totalCards - cardsPerView);
        currentIndex = Math.max(currentIndex, 0);
        const offset = -currentIndex * (100 / cardsPerView);
        slider.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        const cardsPerView = getCardsPerView();
        currentIndex = Math.min(currentIndex + 1, totalCards - cardsPerView);
        updateSlider();
    });

    window.addEventListener('resize', () => {
        updateSlider();
    });

    updateSlider();
});
