document.addEventListener('DOMContentLoaded', () => {
    console.log('termsandconditions.js loaded');

    // Kiểm tra DOM
    console.log('Header element:', document.getElementById('header'));
    console.log('Footer element:', document.getElementById('footer'));

    // Chèn header
    fetch('/RiseFitness-Yoga-main/include/header.html')
        .then(response => {
            console.log('Header fetch status:', response.status, response.url);
            if (!response.ok) throw new Error('Không tải được header.html');
            return response.text();
        })
        .then(data => {
            console.log('Header content loaded');
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Lỗi khi tải header:', error));

    // Chèn footer
    fetch('/RiseFitness-Yoga-main/include/footer.html')
        .then(response => {
            console.log('Footer fetch status:', response.status, response.url);
            if (!response.ok) throw new Error('Không tải được footer.html');
            return response.text();
        })
        .then(data => {
            console.log('Footer content loaded');
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Lỗi khi tải footer:', error));

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