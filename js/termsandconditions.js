document.addEventListener("DOMContentLoaded", () => {
  // Base path cho GitHub Pages
  const repoName = "RiseFitness-Yoga"; // Thay bằng tên repository của bạn
  const basePath = `/${repoName}/`;

  // Hàm fetch và chèn HTML
  const fetchAndInsert = async (url, position, target = document.body) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      let html = await res.text();
      // Thay đường dẫn tương đối bằng tuyệt đối
      html = html.replace(/(href|src)="([^"]+)"/g, (match, attr, path) => {
        if (!path.startsWith("http") && !path.startsWith("/")) {
          return `${attr}="${basePath}${path}"`;
        }
        return match;
      });
      target.insertAdjacentHTML(position, html);
    } catch (err) {
      console.error(`Lỗi tải ${url}:`, err);
    }
  };

  // Tải header và footer đồng thời
  Promise.all([
    fetchAndInsert(`${basePath}include/header.html`, "beforeend", document.body),
    fetchAndInsert(`${basePath}include/footer.html`, "beforeend", document.body),
  ]).catch((err) => console.error("Lỗi khi tải header hoặc footer:", err));
});

    // Xử lý smooth scrolling cho tất cả anchor links
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
});
