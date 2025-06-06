// Banner Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    slides.forEach(slide => slide.classList.add('hidden'));
    dots.forEach(dot => dot.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.remove('hidden');
    dots[slideIndex].classList.add('active');
}
setInterval(showSlides, 5000);

// FAQ Slideshow
let faqSlideIndex = 0;
const faqSlides = document.querySelectorAll('.faq-slide');
const faqDots = document.querySelectorAll('.faq-dot');

function showFaqSlides() {
    faqSlides.forEach(slide => slide.classList.add('hidden'));
    faqDots.forEach(dot => dot.classList.remove('active'));
    faqSlideIndex = (faqSlideIndex + 1) % faqSlides.length;
    faqSlides[faqSlideIndex].classList.remove('hidden');
    faqSlides[faqSlideIndex].classList.add('active');
    faqDots[faqSlideIndex].classList.add('active');
}
setInterval(showFaqSlides, 1000);

// Countdown Timer
function startCountdown() {
    const endDate = new Date('2025-06-30T23:59:59').getTime();
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerText = 'Hết hạn';
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('countdown').innerText = `${days} ngày ${hours}:${minutes}:${seconds}`;
    }, 1000);
}
startCountdown();

// Modal
function openModal(plan) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalPrice = document.getElementById('modal-price');
    const modalDuration = document.getElementById('modal-duration');
    const modalBenefits = document.getElementById('modal-benefits');
    const modalTerms = document.getElementById('modal-terms');

    const plans = {
        basic: {
            title: 'Gói Basic',
            image: 'https://i.pinimg.com/736x/d9/fe/38/d9fe38aa847d361f2f3b5fd1b7bf068d.jpg',
            price: '500,000 VNĐ',
            duration: '1 Tháng',
            benefits: ['Truy cập phòng gym', 'Phòng tắm nóng lạnh', 'Wifi miễn phí'],
            terms: 'Không hoàn tiền sau 7 ngày đăng ký.'
        },
        premium: {
            title: 'Gói Premium',
            image: 'https://i.pinimg.com/736x/fb/c5/12/fbc512d3c2b0306737fc2ba5b7075cf9.jpg',
            price: '1,200,000 VNĐ',
            duration: '3 Tháng',
            benefits: ['Truy cập phòng gym', '5 buổi PT miễn phí', 'Tham gia lớp Yoga', 'Dịch vụ khăn tập'],
            terms: 'Không hoàn tiền sau 7 ngày đăng ký.'
        },
        vip: {
            title: 'Gói VIP',
            image: 'https://i.pinimg.com/736x/0b/73/ca/0b73ca7790f1dcc0846a74c82a6b015b.jpg',
            price: '4,000,000 VNĐ',
            duration: '12 Tháng',
            benefits: ['Truy cập phòng gym', '10 buổi PT miễn phí', 'Tham gia tất cả lớp học', 'Dịch vụ cao cấp'],
            terms: 'Không hoàn tiền sau 7 ngày đăng ký.'
        }
    };

    modalTitle.innerText = plans[plan].title;
    modalImage.src = plans[plan].image;
    modalPrice.innerText = plans[plan].price;
    modalDuration.innerText = plans[plan].duration;
    modalBenefits.innerHTML = plans[plan].benefits.map(b => `<li>✔️ ${b}</li>`).join('');
    modalTerms.innerText = plans[plan].terms;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// FAQ Accordion
document.querySelectorAll('.faq-item button').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').classList.add('hidden');
        });
        if (!isActive) {
            faqItem.classList.add('active');
            answer.classList.remove('hidden');
        }
    });
});
