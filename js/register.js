document.addEventListener("DOMContentLoaded", () => {
    // Kiểm tra nếu đang ở trong thư mục /pages/
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

//xử lý form đăng ký tập thử
document.addEventListener('DOMContentLoaded', function () {
  const formContainer = document.querySelector('#form-container');
  const submitButton = document.querySelector('#submit-btn');
  const nameInput = document.querySelector('#name');
  const phoneInput = document.querySelector('#phone');
  const sportSelect = document.querySelector('#sport');
  const timeSelect = document.querySelector('#time');
  const nameError = document.querySelector('#nameError');
  const phoneError = document.querySelector('#phoneError');
  const sportError = document.querySelector('#sportError');
  const timeError = document.querySelector('#timeError');

  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }

  submitButton.addEventListener('click', function () {
    nameError.textContent = '';
    phoneError.textContent = '';
    sportError.textContent = '';
    timeError.textContent = '';

    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = 'Vui lòng nhập tên!';
      valid = false;
    }

    if (!phoneInput.value.trim()) {
      phoneError.textContent = 'Vui lòng nhập SĐT!';
      valid = false;
    } else if (!validatePhone(phoneInput.value.trim())) {
      phoneError.textContent = 'Số điện thoại không hợp lệ!';
      valid = false;
    }

    if (!sportSelect.value) {
      sportError.textContent = 'Vui lòng chọn 1 môn thể thao!';
      valid = false;
    }

    if (!timeSelect.value) {
      timeError.textContent = 'Vui lòng chọn khung giờ!';
      valid = false;
    }

    if (valid) {
      showSuccessOverlay();
    }
  });

function showSuccessOverlay() {
  const leftForm = document.querySelector('.left-form');
  const rightForm = document.querySelector('.right-form');
  const formSection = document.querySelector('.form');

  if (leftForm) leftForm.style.opacity = '0';
  if (rightForm) rightForm.style.opacity = '0';

  formSection.style.position = 'relative';

  const overlay = document.createElement('div');
  overlay.className = 'success-overlay';

  const title = document.createElement('h2');
  title.textContent = 'ĐĂNG KÝ THÀNH CÔNG';

  const message = document.createElement('p');
  message.innerHTML = 'Cảm ơn bạn đã đăng ký với chúng tôi.<br>Chúng tôi sẽ gọi lại bạn sớm nhất có thể.';

  overlay.appendChild(title);
  overlay.appendChild(message);
  formSection.appendChild(overlay);
}
});
