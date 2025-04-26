// Lấy các phần tử cần thiết trong trang
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Lắng nghe sự kiện submit form
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Hiển thị thông điệp thành công sau khi gửi form
    formMessage.textContent = "Cảm ơn bạn! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.";
    formMessage.style.opacity = 1; // Làm cho thông điệp hiện lên

    // Reset form để chuẩn bị cho lần gửi tiếp theo
    contactForm.reset();

    // Ẩn thông điệp sau 5 giây
    setTimeout(() => {
        formMessage.style.opacity = 0;
    }, 5000);
});
