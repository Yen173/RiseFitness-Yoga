document.addEventListener("DOMContentLoaded", () => {
  const repoName = "RiseFitness-Yoga";
  const isLocal = location.hostname === "localhost";
  const basePath = isLocal ? "/" : `/${repoName}/`;

  const fetchAndInsert = async (url, position, target = document.body) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      let html = await res.text();

      // Chuyển link tương đối thành tuyệt đối
      html = html.replace(/(href|src)="(?!https?:|\/|#|mailto:|tel:)([^"]+)"/g, (match, attr, path) => {
        return `${attr}="${basePath}${path}"`;
      });

      target.insertAdjacentHTML(position, html);
    } catch (err) {
      console.error(`Lỗi tải ${url}:`, err);
    }
  };

  // Tải header & footer
  Promise.all([
    fetchAndInsert(`${basePath}include/header.html`, "afterbegin", document.body),
    fetchAndInsert(`${basePath}include/footer.html`, "beforeend", document.body),
  ]).catch((err) => console.error("Lỗi khi tải header/footer:", err));
  
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

    // Sidebar smooth scroll
    document.querySelectorAll('.sidebar-link').forEach(link => {
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

    // FAQ toggle
    document.querySelectorAll('[id^="faq-"][id$="-button"]').forEach(button => {
        button.addEventListener('click', function () {
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const iconId = this.id.replace('-button', '-icon');
            const icon = document.getElementById(iconId);
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                this.setAttribute('aria-expanded', 'true');
                icon.classList.remove('ri-add-line');
                icon.classList.add('ri-subtract-line');
            } else {
                content.classList.add('hidden');
                this.setAttribute('aria-expanded', 'false');
                icon.classList.remove('ri-subtract-line');
                icon.classList.add('ri-add-line');
            }
            console.log('FAQ toggled:', contentId);
        });
    });

    // Xử lý nút upload file
    const uploadBtn = document.querySelector('.upload-button');
    const fileInput = document.querySelector('input[type="file"]');
    if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', () => {
            fileInput.click();
        });
        fileInput.addEventListener('change', () => {
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const fileName = file.name;
                const fileSize = file.size / 1024 / 1024; // MB
                if (fileSize > 5) {
                    alert('File quá lớn! Vui lòng chọn file dưới 5MB.');
                    fileInput.value = '';
                    return;
                }
                const uploadBox = fileInput.closest('.upload-box');
                const uploadInfo = uploadBox.querySelector('.upload-info');
                uploadInfo.textContent = `Đã chọn: ${fileName}`;
                console.log('File selected:', fileName, `Size: ${fileSize.toFixed(2)}MB`);
            }
        });
    } else {
        console.warn('Upload button or file input not found');
    }

  // Xử lý gửi form qua AJAX
const form = document.querySelector('.form-content-complaint');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();

        const formMessage = form.querySelector('.form-message');
        const submitButton = form.querySelector('.submit-button');

        // Vô hiệu hóa nút
        submitButton.disabled = true;
        submitButton.textContent = 'Đang gửi...';
        formMessage.classList.add('hidden');
        formMessage.classList.remove('show');
        console.log('Form submission started');

        const formData = new FormData(form);
        console.log('FormData:', Array.from(formData.entries()));

        fetch('https://formspree.io/f/mdkzkbkz', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log('Response status:', response.status);
            return response.json().then(data => ({ status: response.status, data }));
        })
        .then(({ status, data }) => {
            if (status === 200) {
                formMessage.classList.remove('hidden', 'error');
                formMessage.classList.add('success', 'show');
                formMessage.textContent = 'Yêu cầu của bạn đã được gửi thành công!';
                console.log('Form submitted successfully:', data);

                // ✅ Xóa dữ liệu form sau khi gửi thành công
                form.reset();
                const uploadInfo = form.querySelector('.upload-info');
                if (uploadInfo) {
                    uploadInfo.textContent = 'Hỗ trợ file: JPG, PNG, PDF. Tối đa 5MB';
                }

                // ✅ Xóa các thông báo sau vài giây
                setTimeout(() => {
                    formMessage.classList.remove('show');
                    formMessage.classList.add('hidden');
                    formMessage.textContent = '';
                }, 10000); // 10 giây
            } else {
                throw new Error(data.error || 'Gửi yêu cầu thất bại.');
            }
        })
        .catch(error => {
            formMessage.classList.remove('hidden', 'success');
            formMessage.classList.add('error', 'show');
            formMessage.textContent = `Có lỗi xảy ra: ${error.message}. Vui lòng thử lại sau.`;
            console.error('Form submission error:', error);

            setTimeout(() => {
                formMessage.classList.remove('show');
                formMessage.classList.add('hidden');
                formMessage.textContent = '';
            }, 10000); // 10 giây
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Gửi khiếu nại';
            console.log('Form submission completed');
        });
    });
} else {
    console.error('Form not found! Check class .form-content-complaint');
}

});
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});
