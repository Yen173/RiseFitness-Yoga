document.addEventListener('DOMContentLoaded', () => {
    // Chèn header
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

        // Hiển thị tên file đã chọn
        const existingFileList = uploadBox.querySelector('.file-list');
        if (existingFileList) {
            existingFileList.remove();
        }
        if (fileNames.length > 0) {
            const fileList = document.createElement('p');
            fileList.className = 'file-list';
            fileList.style.marginTop = '8px';
            fileList.style.fontSize = '14px';
            fileList.style.color = '#374151';
            fileList.textContent = `Đã chọn: ${fileNames.join(', ')}`;
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
});
