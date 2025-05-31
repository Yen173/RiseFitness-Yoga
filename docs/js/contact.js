document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.contact-icon');
    const contactContainer = document.querySelector('.contact-container');
    const contactIconStack = document.querySelector('.contact-icon-stack');
    let currentIndex = 0;
    let isDragging = false;
    let justReleased = false; // Biến để kiểm soát click ngay sau khi thả chuột
    let hasMoved = false; // Biến để kiểm tra xem có thực sự kéo thả hay không
    let currentX, currentY, initialX, initialY;
    let targetX, targetY;
    let interval;

    // Hàm hiển thị icon hiện tại
    function showIcon(index) {
        icons.forEach((icon, i) => {
            icon.classList.remove('active');
            if (i === index) {
                icon.classList.add('active');
            }
        });
    }

    // Hàm tự động xoay icon
    function autoRotate() {
        showIcon(currentIndex);
        currentIndex = (currentIndex + 1) % icons.length;
    }

    // Khởi tạo và chạy xoay tự động với thời gian cố định 2 giây
    function startAutoRotate() {
        if (!interval) {
            interval = setInterval(autoRotate, 2000);
        }
    }

    // Dừng xoay tự động
    function stopAutoRotate() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    // Bắt đầu hiển thị icon đầu tiên
    showIcon(currentIndex);

    // Khởi động xoay tự động
    startAutoRotate();

    // Khi hover, dừng chuyển đổi tự động
    contactIconStack.addEventListener('mouseenter', () => {
        stopAutoRotate();
    });

    // Khi rời chuột, tiếp tục chuyển đổi với tốc độ cố định
    contactIconStack.addEventListener('mouseleave', () => {
        startAutoRotate();
    });

    // Khi click vào icon, chỉ mở liên kết nếu không vừa thả chuột và không kéo thả
    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            if (justReleased || hasMoved) {
                e.preventDefault();
                e.stopPropagation();
                return; // Ngăn mở liên kết nếu vừa thả hoặc đã kéo thả
            }
            // Mở liên kết nếu click bình thường
            e.preventDefault();
            const link = icon.parentElement.href;
            if (link) {
                // Xử lý các loại liên kết khác nhau
                if (link.startsWith('mailto:') || link.startsWith('tel:')) {
                    window.location.href = link; // Mở ứng dụng email hoặc gọi điện
                } else {
                    window.open(link, '_blank'); // Mở liên kết web trong tab mới
                }
            }
        });
    });

    // Logic kéo thả
    contactContainer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Ngăn sự kiện lan truyền dẫn đến click
        isDragging = true;
        hasMoved = false; // Reset hasMoved khi bắt đầu kéo
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;
        stopAutoRotate();
        contactContainer.style.cursor = 'grabbing';
    });

    // Xử lý chuyển động (di chuyển ngay lập tức theo chuột)
    function updatePosition() {
        if (isDragging) {
            currentX = targetX;
            currentY = targetY;
            contactContainer.style.left = `${currentX}px`;
            contactContainer.style.top = `${currentY}px`;
        }
        requestAnimationFrame(updatePosition);
    }

    // Bắt đầu vòng lặp cập nhật vị trí
    requestAnimationFrame(updatePosition);

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            e.preventDefault();
            targetX = e.clientX - initialX;
            targetY = e.clientY - initialY;
            // Kiểm tra xem có di chuyển đáng kể hay không
            if (Math.abs(targetX - currentX) > 5 || Math.abs(targetY - currentY) > 5) {
                hasMoved = true; // Đánh dấu đã di chuyển
            }
        }
    });

    document.addEventListener('mouseup', (e) => {
        if (isDragging) {
            e.preventDefault(); // Ngăn hành động mặc định của mouseup
            e.stopPropagation(); // Ngăn sự kiện lan truyền
            isDragging = false;
            if (hasMoved) {
                justReleased = true; // Chỉ đặt justReleased nếu đã kéo thả
            }
            contactContainer.style.cursor = 'move';
            startAutoRotate();
            // Đặt timeout để reset justReleased và hasMoved
            setTimeout(() => {
                justReleased = false;
                hasMoved = false; // Reset hasMoved để cho phép click sau
            }, 200); // 200ms để chặn click ngay sau thả
        }
    });

    // Khởi tạo vị trí ban đầu
    currentX = window.innerWidth - 100;
    currentY = window.innerHeight - 120;
    targetX = currentX;
    targetY = currentY;
    contactContainer.style.left = `${currentX}px`;
    contactContainer.style.top = `${currentY}px`;
});