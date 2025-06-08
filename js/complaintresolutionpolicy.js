document.addEventListener("DOMContentLoaded", () => {
  const repoName = "RiseFitness-Yoga";
  const isLocal = location.hostname === "localhost";
  const basePath = isLocal ? "/" : `/${repoName}/`;

  const fetchAndInsert = async (url, position, target = document.body) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      let html = await res.text();

      // Chỉnh các href/src bên trong header/footer thành tuyệt đối dựa trên basePath
      html = html.replace(/(href|src)="(?!https?:|\/|#|mailto:|tel:)([^"]+)"/g, (match, attr, path) => {
        return `${attr}="${basePath}${path}"`;
      });

      target.insertAdjacentHTML(position, html);
    } catch (err) {
      console.error(`Lỗi tải ${url}:`, err);
    }
  };

  Promise.all([
    fetchAndInsert(`${basePath}include/header.html`, "afterbegin", document.body),
    fetchAndInsert(`${basePath}include/footer.html`, "beforeend", document.body),
  ]).catch((err) => console.error("Lỗi khi tải header/footer:", err));
});


  // Tải header và footer đồng thời
  Promise.all([
    fetchAndInsert(`${basePath}include/header.html`, "beforeend", document.body),
    fetchAndInsert(`${basePath}include/footer.html`, "beforeend", document.body),
  ]).catch((err) => console.error("Lỗi khi tải header hoặc footer:", err));
});

    // Xử lý smooth scrolling cho anchor links
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Lấy ID từ href (bỏ #)
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                console.log('Scrolling to:', targetId);
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                console.error('Target element not found:', targetId);
            }
        });
    });

    // Xử lý accordion FAQ
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);
        const icon = document.getElementById(button.id.replace('button', 'icon'));

        // Đặt trạng thái ban đầu: đóng
        button.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        icon.classList.add('ri-add-line');
        icon.classList.remove('ri-subtract-line');

        // Xử lý sự kiện click để mở/đóng
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Đóng tất cả các mục FAQ khác
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherContentId = otherButton.getAttribute('aria-controls');
                    const otherContent = document.getElementById(otherContentId);
                    const otherIcon = document.getElementById(otherButton.id.replace('button', 'icon'));
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherContent.classList.add('hidden');
                    otherIcon.classList.add('ri-add-line');
                    otherIcon.classList.remove('ri-subtract-line');
                }
            });

            // Toggle trạng thái của mục hiện tại
            button.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('hidden');
            icon.classList.toggle('ri-add-line');
            icon.classList.toggle('ri-subtract-line');
        });
    });

    // Xử lý upload file
    const uploadButton = document.querySelector('.upload-button');
    const uploadBox = document.querySelector('.upload-box');
    let fileInput = document.querySelector('input[type="file"]');

    // Tạo input file nếu chưa có
    if (!fileInput) {
        fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/jpeg,image/png,application/pdf';
        fileInput.style.display = 'none';
        uploadBox.appendChild(fileInput);
    }

    // Kích hoạt input file khi nhấn nút "Chọn file"
    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    // Xử lý khi chọn file
    fileInput.addEventListener('change', () => {
        const files = fileInput.files;
        const maxSize = 5 * 1024 * 1024; // 5MB
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        let fileNames = [];

        // Kiểm tra file hợp lệ
        for (let file of files) {
            if (!allowedTypes.includes(file.type)) {
                alert(`File ${file.name} không hợp lệ. Chỉ hỗ trợ JPG, PNG, PDF.`);
                fileInput.value = ''; // Xóa input
                return;
            }
            if (file.size > maxSize) {
                alert(`File ${file.name} vượt quá kích thước tối đa 5MB.`);
                fileInput.value = ''; // Xóa input
                return;
            }
            fileNames.push(file.name);
        }

        // Hiển thị tên file đã chọn với nút xóa
        const existingFileList = uploadBox.querySelector('.file-list');
        if (existingFileList) {
            existingFileList.remove();
        }
        if (fileNames.length > 0) {
            const fileList = document.createElement('div');
            fileList.className = 'file-list';
            fileList.style.marginTop = '8px';
            fileList.style.fontSize = '14px';
            fileList.style.color = '#374151';

            fileNames.forEach((name, index) => {
                const fileItem = document.createElement('div');
                fileItem.style.display = 'flex';
                fileItem.style.alignItems = 'center';
                fileItem.style.marginBottom = '4px';

                const fileNameSpan = document.createElement('span');
                fileNameSpan.textContent = name;
                fileItem.appendChild(fileNameSpan);

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Xóa';
                removeButton.style.marginLeft = '8px';
                removeButton.style.padding = '2px 8px';
                removeButton.style.backgroundColor = '#ef4444';
                removeButton.style.color = 'white';
                removeButton.style.border = 'none';
                removeButton.style.borderRadius = '4px';
                removeButton.style.cursor = 'pointer';
                removeButton.addEventListener('click', () => {
                    fileNames.splice(index, 1);
                    fileItem.remove();
                    if (fileNames.length === 0) {
                        fileList.remove();
                    }
                    const dataTransfer = new DataTransfer();
                    for (let i = 0; i < fileInput.files.length; i++) {
                        if (i !== index) {
                            dataTransfer.items.add(fileInput.files[i]);
                        }
                    }
                    fileInput.files = dataTransfer.files;
                });
                fileItem.appendChild(removeButton);

                fileList.appendChild(fileItem);
            });

            uploadBox.appendChild(fileList);
        }
    });

    // Xử lý kéo thả file
    uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.style.backgroundColor = '#eff6ff';
    });

    uploadBox.addEventListener('dragleave', () => {
        uploadBox.style.backgroundColor = 'transparent';
    });

    uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.style.backgroundColor = 'transparent';
        fileInput.files = e.dataTransfer.files;
        fileInput.dispatchEvent(new Event('change')); // Kích hoạt sự kiện change
    });

    // Hàm làm mới form và file input
    const resetFormAndFiles = (form, box) => {
        form.reset();
        if (fileInput) {
            fileInput.value = ''; // Reset input file
        }
        const fileList = box.querySelector('.file-list');
        if (fileList) {
            fileList.remove();
        }
    };

    // Xử lý gửi form khiếu nại qua Formspree
    const complaintForm = document.getElementById('consult-form');
    const submitButton = document.querySelector('.submit-button');

    if (complaintForm && submitButton) {
        submitButton.addEventListener('click', async (e) => {
            e.preventDefault();

            // Thu thập dữ liệu từ form
            const name = document.getElementById('fullname').value;
            const memberId = document.getElementById('membership').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const complaintType = document.getElementById('complaint-type').value;
            const complaintDetails = document.getElementById('complaint-detail').value;
            const agreeCheckbox = document.getElementById('privacy').checked;
            const files = fileInput ? fileInput.files : [];

            // Kiểm tra các trường bắt buộc
            if (!name || !email || !phone || !complaintType || !complaintDetails || !agreeCheckbox) {
                alert('Vui lòng điền đầy đủ các trường bắt buộc và đồng ý với chính sách bảo mật.');
                return;
            }

            // Tạo FormData để gửi dữ liệu
            const formData = new FormData();
            formData.append('fullname', name);
            formData.append('membership', memberId);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('complaint-type', complaintType);
            formData.append('complaint-detail', complaintDetails);
            for (let file of files) {
                formData.append('files', file);
            }

           try {
    const response = await fetch('https://formspree.io/f/mdkzkbkz', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();

    if (response.ok && result.ok === true) {
        alert('✅ Khiếu nại của bạn đã được gửi thành công! Vui lòng kiểm tra email (bao gồm thư mục spam) để nhận phản hồi từ chúng tôi trong 24-48 giờ.');
    } else {
        console.warn('Phản hồi từ Formspree:', result);
        alert('⚠️ Khiếu nại có thể đã được gửi, nhưng phản hồi từ hệ thống không rõ ràng. Vui lòng kiểm tra email hoặc thử lại.');
    }

    resetFormAndFiles(complaintForm, uploadBox);
} catch (error) {
    console.error('Lỗi khi gửi khiếu nại:', error);
    alert('❌ Đã có lỗi xảy ra khi gửi khiếu nại. Vui lòng thử lại sau.');
}
        });
    }
});
