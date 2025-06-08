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
