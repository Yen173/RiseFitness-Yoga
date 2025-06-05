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

    const faqButtons = document.querySelectorAll('[id^="faq-"][id$="-button"]');
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            const iconId = this.id.replace('-button', '-icon');
            const icon = document.getElementById(iconId);
            // Toggle content visibility
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
        });
    });
});
