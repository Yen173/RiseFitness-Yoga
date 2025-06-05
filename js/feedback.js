document.addEventListener('DOMContentLoaded', function() {
    fetch('/RiseFitness-Yoga-main/include/header.html')
        .then(response => {
            if (!response.ok) throw new Error('Không tải được header.html');
            return response.text();
        })
        .then(data => document.getElementById('header').innerHTML = data)
        .catch(error => console.error('Lỗi khi tải header:', error));

    // Chèn footer
    fetch('/RiseFitness-Yoga-main/include/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Không tải được footer.html');
            return response.text();
        })
        .then(data => document.getElementById('footer').innerHTML = data)
        .catch(error => console.error('Lỗi khi tải footer:', error));

        // Xử lý smooth scrolling cho anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            console.log('Scrolling to:', targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error('Target element not found:', targetId);
        }
    });
});

document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const privacyCheckbox = document.getElementById('privacy');
    const formMessage = document.getElementById('form-message');
    
    if (!privacyCheckbox.checked) {
        formMessage.textContent = 'Vui lòng đồng ý với chính sách bảo mật';
        formMessage.style.color = 'red';
        formMessage.style.display = 'block';
        return;
    }
    
    formMessage.textContent = 'Cảm ơn bạn đã gửi góp ý. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!';
    formMessage.style.color = 'green';
    formMessage.style.display = 'block';
    
    this.reset();
    privacyCheckbox.checked = false;
});
});
