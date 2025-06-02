const posts = [
    {
        title: "Hot News: Top 5 Fitness Trends for 2025",
        date: "January 1, 2025",
        content: "Khám phá các xu hướng thể dục mới nhất cho năm 2025, từ công nghệ đeo tay đến kế hoạch tập luyện cá nhân hóa.",
        extendedContent: "Năm 2025, thể dục đang phát triển với công nghệ tiên tiến và cách tiếp cận cá nhân hóa. Công nghệ đeo tay, như đồng hồ thông minh và thiết bị theo dõi thể dục, cung cấp thông tin sức khỏe theo thời gian thực. Kế hoạch tập luyện cá nhân hóa, được hỗ trợ bởi AI, thích ứng với mục tiêu và tiến độ của bạn. Các lớp tập thể dục nhóm cũng đang trở lại với trải nghiệm nhập vai. Hãy thử các xu hướng này: 1) Sử dụng thiết bị theo dõi để đo nhịp tim, 2) Tham gia lớp tập thực tế ảo, 3) Tham khảo ý kiến huấn luyện viên để có kế hoạch tùy chỉnh.",
        category: "Fitness",
        author: "John Doe",
        image: "https://i.pinimg.com/736x/76/70/fc/7670fc580922037ef744189a4a46c32e.jpg"
    },
    {
        title: "Lịch Tập Gym Cho Người Mới Bắt Đầu",
        date: "January 2, 2025",
        content: "Tìm hiểu lịch tập gym cơ bản dành cho người mới, giúp xây dựng cơ bắp và tăng cường sức mạnh.",
        extendedContent: "Để thực hiện và duy trì một chế độ tập gym bài bản, khoa học cho người mới, điều quan trọng là bạn cần hiểu về thể lực (sức bền, sức mạnh, độ dẻo dai), tình trạng sức khỏe của bản thân cũng như các mục tiêu về hình thể mong muốn (giảm cân, tăng cân, giảm mỡ, siết cơ,…). Từ đó, bạn sẽ chọn được một lịch tập thích hợp. Trong hầu hết các lịch tập gym cho người mới, bạn cần nắm rõ cách tập đúng cho các nhóm bài tập gồm khởi động, cardio, tập kháng lực và bài tập bodyweight.",
        category: "Gym",
        author: "Jane Smith",
        image: "https://i.pinimg.com/736x/6e/e2/be/6ee2be08fae80bde9a74f6cb595022f4.jpg"
    },
    {
        title: "5 Bài Tập Gym Tăng Cơ Nhanh Trong 1 Tuần",
        date: "January 3, 2025",
        content: "Khám phá 5 bài tập gym tốt nhất để tăng cơ bắp nhanh chóng, từ squat đến deadlift.",
        extendedContent: "Để tăng cơ nhanh, hãy tập trung vào các bài tập compound: 1) Squat (chân, core), 2) Deadlift (lưng, mông), 3) Bench Press (ngực, tay sau), 4) Pull-up (lưng, tay trước), 5) Overhead Press (vai). Thực hiện 3-4 hiệp, 8-12 lần với tạ nặng. Nghỉ 60-90 giây giữa các hiệp. Ăn bữa giàu protein sau tập.",
        category: "Gym",
        author: "Mike Johnson",
        image: "https://i.pinimg.com/736x/1e/41/7d/1e417d46713dad03d2e8b3e985ba9ea9.jpg"
    },
    {
        title: "Cách Chọn Phòng Tập Gym Phù Hợp",
        date: "January 4, 2025",
        content: "Hướng dẫn chi tiết cách chọn phòng gym phù hợp với nhu cầu và ngân sách của bạn.",
        extendedContent: "Chọn phòng gym cần xem xét vị trí, thiết bị và chi phí. Tìm phòng gym gần nhà hoặc nơi làm việc với máy móc hiện đại (máy chạy, tạ tự do). Kiểm tra các lớp như yoga hoặc spin nếu muốn. So sánh phí thành viên và thời gian dùng thử. Thăm phòng gym vào giờ cao điểm để đánh giá độ đông. Đảm bảo huấn luyện viên có chứng chỉ.",
        category: "Gym",
        author: "Emily Davis",
        image: "https://i.pinimg.com/736x/40/e6/c5/40e6c5f5681473f4914d7a5b98245cdd.jpg"
    },
    {
        title: "Kế Hoạch Tập Gym & Yoga Fitness 30 Ngày",
        date: "January 5, 2025",
        content: "Thử thách 30 ngày với các bài tập fitness giúp cải thiện vóc dáng và sức khỏe.",
        extendedContent: "Kế hoạch fitness 30 ngày kết hợp sức mạnh và cardio. Tuần 1: Bài tập bodyweight (push-up, squat) 3 lần/tuần. Tuần 2: Thêm tạ nhẹ. Tuần 3: Tăng số lần và thêm HIIT. Tuần 4: Kết hợp tất cả với buổi tập dài hơn. Theo dõi tiến độ bằng ảnh và số đo. Duy trì đều đặn và ăn uống cân bằng.",
        category: "Fitness",
        author: "Sarah Brown",
        image: "https://i.pinimg.com/736x/06/79/c0/0679c0c32fe9cf61b934336d9a34bffc.jpg"
    },
    {
        title: "Fitness Tại Nhà: Không Cần Dụng Cụ",
        date: "January 6, 2025",
        content: "Học cách tập fitness tại nhà với các bài tập bodyweight hiệu quả, không cần dụng cụ.",
        extendedContent: "Tập tại nhà hiệu quả mà không cần thiết bị. Thử: 1) Push-up (ngực, tay), 2) Squat (chân), 3) Plank (core), 4) Burpee (cardio). Thực hiện 3 hiệp, 12-15 lần, 4 lần/tuần. Tạo không gian riêng và xem video hướng dẫn. Tạo động lực bằng nhạc.",
        category: "Fitness",
        author: "Tom Wilson",
        image: "https://i.pinimg.com/736x/ec/81/44/ec81445a8aee504e102471d196da078c.jpg"
    },
    {
        title: "Lợi Ích Của Cardio Trong Fitness",
        date: "January 7, 2025",
        content: "Tìm hiểu tại sao cardio là phần không thể thiếu trong hành trình fitness của bạn.",
        extendedContent: "Cardio tăng cường sức khỏe tim, đốt calo và cải thiện sức bền. Các lựa chọn bao gồm chạy, đạp xe hoặc nhảy dây. Đặt mục tiêu 150 phút cardio cường độ trung bình mỗi tuần. Lợi ích: cải thiện tâm trạng, hạ huyết áp, ngủ ngon hơn. Bắt đầu với các buổi 20 phút và tăng dần cường độ.",
        category: "Fitness",
        author: "Anna Lee",
        image: "https://i.pinimg.com/736x/be/d2/d9/bed2d909d6789f381b52c575e7158f42.jpg"
    },
    {
        title: "Yoga Giảm Căng Thẳng Hiệu Quả",
        date: "January 8, 2025",
        content: "Các động tác yoga đơn giản giúp bạn giảm căng thẳng và cải thiện tâm trạng mỗi ngày.",
        extendedContent: "Yoga giảm căng thẳng thông qua chuyển động có ý thức. Thử các tư thế như Child’s Pose, Cat-Cow và Savasana trong 15-20 phút mỗi ngày. Tập trung vào thở sâu để làm dịu tâm trí. Lợi ích: giảm cortisol, tăng tập trung. Sử dụng không gian yên tĩnh và thảm yoga để thoải mái.",
        category: "Yoga",
        author: "Lisa Chen",
        image: "https://i.pinimg.com/736x/c6/5f/c7/c65fc71753795f369a53193a6ad5fdf7.jpg"
    },
    {
        title: "Hướng Dẫn Tư Thế Yoga Cho Người Mới",
        date: "January 9, 2025",
        content: "Bắt đầu với yoga? Hãy thử các tư thế cơ bản như Downward Dog và Child’s Pose.",
        extendedContent: "Mới tập yoga? Bắt đầu với các tư thế cơ bản: 1) Downward Dog (kéo giãn gân kheo), 2) Child’s Pose (thư giãn), 3) Warrior II (tăng sức mạnh). Tập 3 lần/tuần, 20 phút. Xem video hướng dẫn để căn chỉnh đúng. Dùng thảm chống trượt và tránh ép buộc tư thế.",
        category: "Yoga",
        author: "Mark Taylor",
        image: "https://i.pinimg.com/736x/d2/57/62/d2576298b814e9bd4ba76ae63b5fd49a.jpg"
    },
    {
        title: "Yoga Tăng Cường Sự Linh Hoạt Cho Bạn",
        date: "January 10, 2025",
        content: "Tăng cường sự linh hoạt và sức mạnh cơ thể với các bài tập yoga chuyên sâu.",
        extendedContent: "Yoga tăng cường sự linh hoạt với các tư thế như Forward Fold, Pigeon và Cobra. Giữ mỗi tư thế 30-60 giây, 4 lần/tuần. Lợi ích: giảm cứng cơ, cải thiện tư thế. Khởi động trước để tránh chấn thương. Theo một chuỗi hướng dẫn để cân bằng kéo giãn.",
        category: "Yoga",
        author: "Sophie Nguyen",
        image: "https://i.pinimg.com/736x/99/4a/09/994a0976ef0b5ad767b03fb12e8e68ad.jpg"
    },
    {
        title: "Yoga và Thiền: Kết Hợp Hoàn Hảo",
        date: "January 11, 2025",
        content: "Kết hợp yoga và thiền để đạt được sự cân bằng giữa cơ thể và tâm trí.",
        extendedContent: "Yoga và thiền cùng nhau thúc đẩy sức khỏe toàn diện. Bắt đầu với 10 phút yoga (ví dụ: Sun Salutations), sau đó 5 phút thiền (tập trung vào hơi thở). Tập hàng ngày trong không gian yên tĩnh. Lợi ích: giảm lo âu, cải thiện tập trung. Sử dụng ứng dụng để được hướng dẫn.",
        category: "Yoga",
        author: "David Kim",
        image: "https://i.pinimg.com/736x/f7/3f/ba/f73fbab2d652ad9d6233c51637e041bd.jpg"
    },
    {
        title: "Chế Độ Dinh Dưỡng Cho Người Tập Gym",
        date: "January 12, 2025",
        content: "Học cách xây dựng chế độ ăn uống tối ưu để hỗ trợ mục tiêu tập gym của bạn.",
        extendedContent: "Người tập gym cần dinh dưỡng cân bằng: 40% carb, 30% protein, 30% chất béo. Ăn carb phức tạp (yến mạch, gạo), protein nạc (gà, trứng), và chất béo lành mạnh (bơ, hạt). Chuẩn bị bữa ăn trước để duy trì. Sau tập, tiêu thụ protein trong 30 phút. Uống đủ nước.",
        category: "Dinh dưỡng",
        author: "Rachel Green",
        image: "https://i.pinimg.com/736x/d5/18/b8/d518b837f30ad38014a662a205a1b0ef.jpg"
    },
    {
        title: "Tầm Quan Trọng Của Protein Cho Tập Gym",
        date: "January 13, 2025",
        content: "Tại sao protein là yếu tố then chốt trong chế độ dinh dưỡng cho người tập luyện?",
        extendedContent: "Protein sửa chữa cơ bắp và hỗ trợ tăng trưởng. Đặt mục tiêu 1.6-2.2g protein/kg trọng lượng cơ thể mỗi ngày. Nguồn: gà, cá, trứng, whey protein. Thời điểm quan trọng—ăn protein mỗi 3-4 giờ. Người ăn chay có thể dùng đậu phụ, đậu lăng, quinoa. Tránh phụ thuộc quá vào shake.",
        category: "Dinh dưỡng",
        author: "Chris Evans",
        image: "https://i.pinimg.com/736x/2b/20/0a/2b200a12ceea0f347ed30aec1e74c77a.jpg"
    },
    {
        title: "Thực Đơn Dinh Dưỡng cho 7 Ngày",
        date: "January 14, 2025",
        content: "Gợi ý thực đơn dinh dưỡng 7 ngày giúp bạn duy trì năng lượng và sức khỏe.",
        extendedContent: "Kế hoạch bữa ăn 7 ngày: Ngày 1) Bữa sáng: Yến mạch với quả mọng, Trưa: Salad gà nướng, Tối: Cá hồi với quinoa. Ngày 2) Bữa sáng: Sữa chua Hy Lạp với hạt, Trưa: Bánh mì cuốn gà tây, Tối: Đậu phụ xào. Đổi protein và rau mỗi ngày. Chuẩn bị bữa ăn trước.",
        category: "Dinh dưỡng",
        author: "Laura White",
        image: "https://i.pinimg.com/736x/6f/ae/a5/6faea59d18e88ce14604d2c2e3911f80.jpg"
    },
    {
        title: "Top 5 Dụng Cụ Gym Cần Có Tại Nhà",
        date: "January 15, 2025",
        content: "Danh sách 5 dụng cụ gym không thể thiếu để xây dựng phòng tập tại nhà.",
        extendedContent: "Thiết bị phòng gym tại nhà cần thiết: 1) Tạ tay (có thể điều chỉnh), 2) Dây kháng lực, 3) Thảm yoga, 4) Xà kéo, 5) Tạ ấm. Chúng hỗ trợ sức mạnh, cardio và linh hoạt. Bắt đầu với tạ nhẹ và tăng dần. Đảm bảo đủ không gian sử dụng an toàn.",
        category: "Dụng cụ gym",
        author: "James Brown",
        image: "https://i.pinimg.com/736x/8b/f6/8e/8bf68e8e0cfe9d28b7cc6499080d241e.jpg"
    },
    {
        title: "Cách Bảo Quản Dụng Cụ Tập Gym",
        date: "January 16, 2025",
        content: "Mẹo bảo quản tạ, thảm tập và các dụng cụ gym để sử dụng lâu dài.",
        extendedContent: "Bảo quản thiết bị gym bằng cách: 1) Lau tạ bằng khăn khử trùng, 2) Lưu trữ thảm phẳng, 3) Kiểm tra dây kháng lực để xem có bị mòn không. Giữ ở nơi khô ráo, mát mẻ để tránh rỉ sét hoặc hư hỏng. Kiểm tra thường xuyên để đảm bảo an toàn. Thay thế các vật dụng hỏng ngay lập tức.",
        category: "Dụng cụ gym",
        author: "Emma Wilson",
        image: "https://m.media-amazon.com/images/I/61jVXkFuOwL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        title: "Chọn Mua Máy Chạy Bộ Chất Lượng",
        date: "January 17, 2025",
        content: "Hướng dẫn chọn mua máy chạy bộ phù hợp với nhu cầu và không gian nhà bạn.",
        extendedContent: "Khi mua máy chạy bộ, hãy xem xét: 1) Công suất động cơ (2.5+ HP), 2) Kích thước bề mặt chạy, 3) Hệ thống giảm chấn để bảo vệ khớp. Kiểm tra các tính năng như độ nghiêng và chương trình tập. Đảm bảo phù hợp với không gian. Dự trù chi phí bảo trì và bảo hành.",
        category: "Dụng cụ gym",
        author: "Ryan Lee",
        image: "https://i.pinimg.com/736x/04/29/c8/0429c8736fd5829ac5ca9fcc225af9bc.jpg"
    },
    {
        title: "Cách Tăng Cường Sức Khỏe Tim Mạch",
        date: "January 18, 2025",
        content: "Các bài tập và thói quen hàng ngày giúp cải thiện sức khỏe tim mạch hiệu quả.",
        extendedContent: "Tăng cường sức khỏe tim với: 1) Đi bộ nhanh 30 phút mỗi ngày, 2) Đạp xe hoặc bơi 3 lần/tuần, 3) Tập sức mạnh 2 lần/tuần. Tránh hút thuốc, hạn chế rượu và quản lý căng thẳng. Theo dõi nhịp tim khi tập. Tham khảo ý kiến bác sĩ trước khi bắt đầu.",
        category: "Sức khỏe",
        author: "Olivia Davis",
        image: "https://i.pinimg.com/736x/0a/69/7d/0a697d07b7573f221ecef33b7ad36ada.jpg"
    },
    {
        title: "Ngủ Đủ Giấc Để Tăng Sức Khỏe Mỗi Ngày",
        date: "January 19, 2025",
        content: "Tầm quan trọng của giấc ngủ đối với sức khỏe tổng thể và hiệu suất tập luyện.",
        extendedContent: "Ngủ 7-9 giờ mỗi đêm để có sức khỏe tối ưu. Lợi ích: phục hồi cơ bắp, tập trung tốt hơn, tăng cường miễn dịch. Tạo thói quen ngủ: giảm ánh sáng, tránh màn hình 1 giờ trước khi ngủ, giữ phòng mát. Tránh caffeine vào cuối ngày.",
        category: "Sức khỏe",
        author: "Daniel Kim",
        image: "https://i.pinimg.com/736x/03/0a/da/030ada66d9f39d90c601a558a0511b6b.jpg"
    },
    {
        title: "Mách Bạn Các Thói Quen Sống Lành Mạnh",
        date: "January 20, 2025",
        content: "Xây dựng thói quen sống lành mạnh để duy trì sức khỏe lâu dài demonstração.",
        extendedContent: "Thói quen lành mạnh gồm: 1) Ăn 5 phần trái cây/rau mỗi ngày, 2) Tập thể dục 150 phút mỗi tuần, 3) Uống 2L nước mỗi ngày. Theo dõi thói quen bằng nhật ký. Bắt đầu nhỏ và duy trì đều đặn. Tránh thực phẩm chế biến sẵn và tác nhân gây căng thẳng.",
        category: "Sức khỏe",
        author: "Sophia Nguyen",
        image: "https://i.pinimg.com/736x/42/c9/46/42c94678190f075b6ba19d735ee9aa88.jpg"
    },
    {
        title: "Lợi Ích Kiểm Tra Sức Khỏe Định Kỳ",
        date: "January 21, 2025",
        content: "Tại sao bạn nên kiểm tra sức khỏe định kỳ và những xét nghiệm cần thiết.",
        extendedContent: "Kiểm tra sức khỏe định kỳ giúp phát hiện vấn đề sớm. Các xét nghiệm cần thiết: huyết áp, cholesterol, đường huyết. Lên lịch hàng năm hoặc theo chỉ định bác sĩ. Chuẩn bị bằng cách theo dõi triệu chứng và tiền sử gia đình. Theo dõi kết quả và duy trì lối sống lành mạnh.",
        category: "Sức khỏe",
        author: "Michael Chen",
        image: "https://i.pinimg.com/736x/2c/d9/d0/2cd9d0040fe2814de9d92449dccac104.jpg"
    }
];

const postsPerPage = 4;
let currentPage = 1;
let currentCategory = 'all';
let currentSearchQuery = '';
let postModal = null;

// Khởi tạo modal một lần khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    postModal = new bootstrap.Modal(document.getElementById('postModal'), {
        backdrop: 'static',
        keyboard: true
    });
    // Xóa tham số post khỏi URL
    history.replaceState({}, '', window.location.pathname);
    updateCategoryLinks('all');
    renderFeaturedPost();
    renderPosts(currentPage, currentCategory, currentSearchQuery);
});

// Hàm hiển thị bài viết trong modal
function showPost(index) {
    if (index >= 0 && index < posts.length) {
        const post = posts[index];
        document.getElementById('postModalLabel').textContent = post.title;
        document.getElementById('postModalMeta').textContent = `${post.date} | ${post.category}`;
        document.getElementById('postModalAuthor').textContent = `Đăng bởi ${post.author}`;
        document.getElementById('postModalContent').textContent = post.extendedContent;
        const modalImage = document.getElementById('postModalImage');
        modalImage.src = post.image;
        modalImage.style.display = 'block';
        modalImage.onerror = () => { modalImage.src = 'https://via.placeholder.com/700x400'; };
        postModal.show();
        history.pushState({ postIndex: index }, '', `?post=${index}`);
        document.body.style.overflow = 'auto'; // Đảm bảo cuộn khi modal mở
    }
}

// Hàm render bài viết nổi bật
function renderFeaturedPost() {
    const featuredPostContainer = document.getElementById('featured-post');
    if (!featuredPostContainer || !posts[0]) return;

    const post = posts[0];
    featuredPostContainer.innerHTML = `
        <div class="card mb-4 border-0 shadow-sm">
            <a href="#!"><img class="card-img-top post-img featured" src="${post.image}" alt="${post.title}" onerror="this.src='https://via.placeholder.com/850x350';" /></a>
            <div class="card-body">
                <div class="post-meta">${post.date} | ${post.category}</div>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">${post.content}</p>
                <a class="btn btn-primary" href="#post-0" data-post-index="0">Đọc thêm →</a>
            </div>
        </div>
    `;

    // Gắn sự kiện cho nút đọc thêm
    featuredPostContainer.querySelector('[data-post-index]').addEventListener('click', (e) => {
        e.preventDefault();
        showPost(0);
    });
}

// Hàm render bài viết cho trang hiện tại, danh mục và tìm kiếm
function renderPosts(page, category, searchQuery) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    // Lọc bài viết theo danh mục và tìm kiếm
    let filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredPosts = filteredPosts.filter(post =>
            post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query)
        );
    }

    // Loại bỏ bài viết nổi bật (index 0)
    filteredPosts = filteredPosts.filter((_, index) => index !== 0);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // Cập nhật phân trang
    updatePagination(totalPages);

    // Tính bài viết hiển thị
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const pagePosts = filteredPosts.slice(startIndex, endIndex);

    // Render bài viết hoặc thông báo không có kết quả
    if (pagePosts.length === 0) {
        blogPostsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">Không tìm thấy bài viết nào khớp với tìm kiếm.</p>
            </div>
        `;
    } else {
        pagePosts.forEach(post => {
            const globalIndex = posts.indexOf(post);
            const postElement = document.createElement('div');
            postElement.className = 'col-md-6 mb-4';
            postElement.innerHTML = `
                <div class="card border-0 shadow-sm">
                    <a href="#!"><img class="card-img-top post-img" src="${post.image}" alt="${post.title}" onerror="this.src='https://via.placeholder.com/700x350';" /></a>
                    <div class="card-body">
                        <div class="post-meta">${post.date} | ${post.category}</div>
                        <h2 class="post-title h4">${post.title}</h2>
                        <p class="post-excerpt">${post.content}</p>
                        <a class="btn btn-primary" href="#post-${globalIndex}" data-post-index="${globalIndex}">Đọc thêm →</a>
                    </div>
                </div>
            `;
            blogPostsContainer.appendChild(postElement);
        });
    }

    // Gắn sự kiện đọc thêm
    document.querySelectorAll('[data-post-index]').forEach(link => {
        link.removeEventListener('click', handleReadMoreClick); // Xóa listener cũ
        link.addEventListener('click', handleReadMoreClick);
    });

    // Gắn lại sự kiện phân trang
    setupPaginationListeners();

    // Cập nhật giao diện tìm kiếm
    updateSearchUI();
}

// Hàm xử lý sự kiện nhấn đọc thêm
function handleReadMoreClick(e) {
    e.preventDefault();
    const index = parseInt(e.currentTarget.dataset.postIndex);
    showPost(index);
}

// Hàm cập nhật phân trang
function updatePagination(totalPages) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = `
        <li class="page-item"><a class="page-link" href="#" id="prev-page" data-icon="\u2190"></a></li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationContainer.innerHTML += `
            <li class="page-item"><a class="page-link" href="#" data-page="${i}">${i}</a></li>
        `;
    }

    paginationContainer.innerHTML += `
        <li class="page-item"><a class="page-link" href="#" id="next-page" data-icon="\u2192"></a></li>
    `;

    const pageItems = document.querySelectorAll('.page-item');
    pageItems.forEach(item => {
        const pageLink = item.querySelector('.page-link');
        if (pageLink.dataset.page && parseInt(pageLink.dataset.page) === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    const prevPage = document.getElementById('prev-page').parentElement;
    const nextPage = document.getElementById('next-page').parentElement;
    prevPage.classList.toggle('disabled', currentPage === 1);
    nextPage.classList.toggle('disabled', currentPage === totalPages);
}

// Hàm cập nhật liên kết danh mục active
function updateCategoryLinks(category) {
    const categoryLinks = document.querySelectorAll('.card-body .list-unstyled a');
    categoryLinks.forEach(link => {
        if (link.dataset.category === category) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Hàm cập nhật giao diện tìm kiếm
function updateSearchUI() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearSearch = document.getElementById('clear-search');
    searchButton.disabled = !searchInput.value.trim();
    clearSearch.style.display = currentSearchQuery ? 'block' : 'none';
}

// Hàm thiết lập sự kiện phân trang
function setupPaginationListeners() {
    document.querySelectorAll('.page-link').forEach(link => {
        link.removeEventListener('click', handlePaginationClick);
        link.addEventListener('click', handlePaginationClick);
    });
}

// Xử lý nhấn phân trang
function handlePaginationClick(e) {
    e.preventDefault();
    const link = e.currentTarget;
    const page = link.dataset.page ? parseInt(link.dataset.page) : (link.id === 'prev-page' ? currentPage - 1 : currentPage + 1);
    let filteredPosts = currentCategory === 'all' ? posts : posts.filter(post => post.category === currentCategory);
    if (currentSearchQuery) {
        const query = currentSearchQuery.toLowerCase();
        filteredPosts = filteredPosts.filter(post =>
            post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query)
        );
    }
    filteredPosts = filteredPosts.filter((_, index) => index !== 0);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderPosts(currentPage, currentCategory, currentSearchQuery);
    }
}

// Sự kiện lọc danh mục
document.querySelectorAll('.card-body .list-unstyled a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentCategory = link.dataset.category;
        currentPage = 1;
        currentSearchQuery = '';
        updateCategoryLinks(currentCategory);
        renderPosts(currentPage, currentCategory, currentSearchQuery);
    });
});

// Sự kiện tìm kiếm
document.getElementById('search-button').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    currentSearchQuery = searchInput.value.trim();
    currentPage = 1;
    renderPosts(currentPage, currentCategory, currentSearchQuery);
});

document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchInput = document.getElementById('search-input');
        currentSearchQuery = searchInput.value.trim();
        currentPage = 1;
        renderPosts(currentPage, currentCategory, currentSearchQuery);
    }
});

document.getElementById('clear-search').addEventListener('click', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    currentSearchQuery = '';
    currentPage = 1;
    renderPosts(currentPage, currentCategory, currentSearchQuery);
});

// Xử lý điều hướng tiến/lùi
window.addEventListener('popstate', (e) => {
    const urlParams = new URLSearchParams(window.location.search);
    const postIndex = parseInt(urlParams.get('post'));
    if (!isNaN(postIndex) && postIndex >= 0 && postIndex < posts.length) {
        showPost(postIndex);
    } else {
        if (postModal) {
            postModal.hide();
            document.body.style.overflow = 'auto'; // Khôi phục cuộn
        }
        renderFeaturedPost();
        renderPosts(currentPage, currentCategory, currentSearchQuery);
    }
});