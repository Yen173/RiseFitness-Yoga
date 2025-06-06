document.addEventListener("DOMContentLoaded", () => {
    // Kiểm tra nếu đang ở trong thư mục /pages/
    const isInPagesFolder = window.location.pathname.includes("/pages/");

    // Đường dẫn tương ứng
    const headerPath = isInPagesFolder ? "../include/header.html" : "include/header.html";
    const footerPath = isInPagesFolder ? "../include/footer.html" : "include/footer.html";

    // Chèn header
    fetch(headerPath)
        .then(response => {
            if (!response.ok) throw new Error('Không tải được header.html');
            return response.text();
        })
        .then(data => document.getElementById('header').innerHTML = data)
        .catch(error => console.error('Lỗi khi tải header:', error));

    // Chèn footer
    fetch(footerPath)
        .then(response => {
            if (!response.ok) throw new Error('Không tải được footer.html');
            return response.text();
        })
        .then(data => document.getElementById('footer').innerHTML = data)
        .catch(error => console.error('Lỗi khi tải footer:', error));
});

const trainers = {
        gym: [
            { 
                name: "Nguyễn Tuấn Anh", 
                shortDesc: "Bắt đầu hành trình tập luyện của mình với mong muốn cải thiện ngoại hình và sức khỏe. Niềm đam mê thể hình giúp anh không ngừng nỗ lực phát triển bản thân và hỗ trợ học viên đạt được mục tiêu cá nhân.", 
                details: "Tuấn Anh không ngưng học hỏi với niềm đam mê fitness, nghiên cứu về lĩnh vực tập luyện và sức khỏe trong suốt nhiều năm. Qua quãng trình học hỏi và rèn luyện, Tuấn Anh thiên hướng tập luyện một cách khoa học để đảm bảo điều kiện lý tưởng cho sức khỏe và cuộc sống. Với anh, việc trở thành huấn luyện viên thể hình là để giúp truyền cảm hứng, định hướng đúng về mục tiêu và thế mạnh của từng khách hàng, đồng hành cùng họ trên hành trình chinh phục mục tiêu của chính mình.", 
                image: "https://mbhfit.vn/wp-content/uploads/2019/05/huan-luyen-vien-the-hinh.jpg",
                field: "Gym",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Học viện Ngân hàng",
                    "Top 10 Men's Physique 2020 Vietnam Muscle Tour World Fitness Federation (WFF)",
                    "Certified Personal Trainer (CPT) of The National Academy of Sports Medicine (NASM)"
                ]
            },
            {
                name: "Lê Minh Tuấn",
                shortDesc: "Với niềm đam mê thể hình, Tuấn đã bắt đầu hành trình tập luyện từ khi còn là học sinh. Anh luôn nỗ lực để cải thiện sức khỏe bản thân và giúp đỡ mọi người đạt được mục tiêu fitness của mình.",
                details: "Lê Minh Tuấn là huấn luyện viên thể hình chuyên nghiệp với hơn 5 năm kinh nghiệm. Anh luôn cố gắng học hỏi và áp dụng các phương pháp tập luyện mới, hiện đại và hiệu quả cho từng học viên. Đặc biệt, Tuấn tập trung vào việc xây dựng sức mạnh cơ bắp và tăng cường sức khỏe cho người tập. Anh luôn tin rằng thể dục không chỉ là việc cải thiện ngoại hình mà còn là cách để sống khỏe mạnh và hạnh phúc. Kỹ thuật tập luyện cơ bản và các bài tập nâng cao là thế mạnh của Tuấn.",
                image: "https://thuongtruong24h.vn/uploads/wp-content/uploads/2020/08/386530108316255472264451872500067146680079n-1536476550357380511152-1032.jpg",
                field: "Gym",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao",
                    "Hạng 3 Men's Physique 2019 Vietnam Muscle Tour WFF",
                    "Certified Personal Trainer (CPT) by International Sports Sciences Association (ISSA)"
                ]
            },
            {
                name: "Nguyễn Thị Lan Anh",
                shortDesc: "Lan Anh bắt đầu sự nghiệp huấn luyện viên thể hình với mục tiêu giúp mọi người có sức khỏe tốt hơn và một cơ thể cân đối.",
                details: "Lan Anh là huấn luyện viên thể hình nữ với gần 3 năm kinh nghiệm trong ngành. Cô chuyên sâu vào các bài tập tăng cường sức khỏe và giảm cân cho nữ giới. Lan Anh luôn truyền cảm hứng cho các học viên của mình về việc duy trì một lối sống lành mạnh và tập luyện đều đặn. Cô rất chú trọng đến việc phát triển sự dẻo dai và sức bền của cơ thể, cùng với các kỹ thuật giảm mỡ an toàn và hiệu quả.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-the-hinh-nu-2.jpg",
                field: "Gym",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Kinh tế TP.HCM",
                    "Top 5 Women's Physique 2021 Vietnam Muscle Tour WFF",
                    "Certified Personal Trainer (CPT) by National Academy of Sports Medicine (NASM)"
                ]
            },
            {
                name: "Trần Quang Huy",
                shortDesc: "Huy là huấn luyện viên thể hình luôn đặt lợi ích của học viên lên hàng đầu, với mục tiêu phát triển cơ thể khỏe mạnh từ trong ra ngoài.",
                details: "Trần Quang Huy có hơn 7 năm kinh nghiệm trong việc huấn luyện thể hình và chăm sóc sức khỏe. Huy chuyên sâu vào các bài tập về sức mạnh và thể lực tổng thể, tập trung vào xây dựng cơ bắp cho cả nam và nữ. Huy luôn chú trọng đến các bài tập bổ trợ giúp nâng cao hiệu quả trong các bài tập nặng. Với anh, việc giúp học viên xây dựng thói quen tập luyện lâu dài và an toàn luôn là ưu tiên hàng đầu.",
                image: "https://cdnmedia.webthethao.vn/uploads/files/shin-pham-1.jpg",
                field: "Gym",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao Hà Nội",
                    "Hạng 1 Men's Physique 2018 Vietnam Muscle Tour WFF",
                    "Certified Personal Trainer (CPT) by American Council on Exercise (ACE)"
                ]
            },
            {
                name: "Phan Thị Mai",
                shortDesc: "Mai là huấn luyện viên thể hình với mục tiêu giúp phụ nữ có một cơ thể khỏe đẹp và duy trì lối sống năng động.",
                details: "Phan Thị Mai là huấn luyện viên thể hình giàu kinh nghiệm, đặc biệt trong việc huấn luyện giảm cân và phát triển thể lực cho phụ nữ. Cô giúp học viên cải thiện cả về thể hình và sức khỏe thông qua các bài tập dành riêng cho nữ giới. Mai luôn hướng dẫn học viên xây dựng một chế độ ăn uống lành mạnh và chương trình tập luyện phù hợp với mục tiêu cá nhân. Cô luôn nhấn mạnh đến việc tập luyện an toàn và hiệu quả.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-the-hinh-nu-3.jpg",
                field: "Gym",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Sư phạm Thể dục thể thao TP.HCM",
                    "Hạng 2 Women's Physique 2020 Vietnam Muscle Tour WFF",
                    "Certified Personal Trainer (CPT) by International Fitness Association (IFA)"
                ]
            }
        ],
        kickboxing: [
            {
                name: "Phan Văn Tâm",
                shortDesc: "Tâm bắt đầu tập luyện Kick Boxing từ khi còn là sinh viên và nhanh chóng phát hiện niềm đam mê mạnh mẽ với môn thể thao này.",
                details: "Phan Văn Tâm là huấn luyện viên Kick Boxing với hơn 6 năm kinh nghiệm. Anh chuyên huấn luyện các học viên muốn cải thiện kỹ thuật chiến đấu, sức mạnh và sự linh hoạt. Tâm không chỉ chú trọng đến việc rèn luyện thể lực mà còn giúp học viên phát triển chiến thuật và chiến đấu hiệuilum hiệu quả trong các trận đấu thực tế. Anh luôn truyền cảm hứng và tạo động lực cho học viên vượt qua giới hạn của bản thân và đạt được kết quả tốt nhất.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-kick-boxing-nam-1.jpg",
                field: "Kick Boxing",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao TP.HCM",
                    "Hạng 2 Kick Boxing 2019 Vietnam Championship",
                    "Certified Kick Boxing Coach by World Kickboxing Association (WKA)"
                ]
            },
            {
                name: "Nguyễn Thị Lan",
                shortDesc: "Lan là huấn luyện viên Kick Boxing với niềm đam mê mãnh liệt trong việc giúp mọi người trở nên mạnh mẽ và tự tin hơn.",
                details: "Nguyễn Thị Lan đã có hơn 5 năm kinh nghiệm huấn luyện Kick Boxing và chuyên về các bài tập tăng cường thể lực và cải thiện kỹ năng chiến đấu cho nữ giới. Cô chú trọng đến việc giúp học viên rèn luyện sự kiên trì và quyết tâm, không chỉ giúp cải thiện sức mạnh mà còn giúp phát triển sự tự tin và bản lĩnh trong cuộc sống hàng ngày. Lan luôn nhấn mạnh tầm quan trọng của kỹ thuật cơ bản và sự kiên nhẫn trong quá trình huấn luyện.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-kick-boxing-nu-1.jpg",
                field: "Kick Boxing",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Sư phạm Thể dục thể thao TP.HCM",
                    "Hạng 1 Women's Kick Boxing 2020 Vietnam Championship",
                    "Certified Kick Boxing Coach by International Kickboxing Federation (IKF)"
                ]
            },
            {
                name: "Lê Minh Chí",
                shortDesc: "Chí là huấn luyện viên Kick Boxing chuyên nghiệp với hơn 8 năm thi đấu và huấn luyện trong lĩnh vực này.",
                details: "Lê Minh Chí là huấn luyện viên Kick Boxing có bề dày kinh nghiệm thi đấu và huấn luyện. Anh đã tham gia nhiều giải đấu quốc tế và đạt được nhiều thành tích đáng chú ý. Chí chuyên huấn luyện cho các học viên ở mọi cấp độ, từ người mới bắt đầu đến các võ sĩ chuyên nghiệp. Anh không chỉ chú trọng đến kỹ thuật mà còn đào tạo các học viên về chiến thuật thi đấu và sự kiên trì trong luyện tập. Chí luôn hướng tới việc phát triển những võ sĩ mạnh mẽ, có thể tự tin thi đấu trên mọi đấu trường.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-kick-boxing-nam-2.jpg",
                field: "Kick Boxing",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao Hà Nội",
                    "Hạng 3 Kick Boxing 2018 Asian Championship",
                    "Certified Kick Boxing Coach by World Association of Kickboxing Organizations (WAKO)"
                ]
            }
        ],
        boi: [
            {
                name: "Nguyễn Minh Khoa",
                shortDesc: "Khoa bắt đầu tập luyện bơi từ khi còn nhỏ và nhanh chóng trở thành một huấn luyện viên chuyên nghiệp trong lĩnh vực này.",
                details: "Nguyễn Minh Khoa là huấn luyện viên bơi với hơn 7 năm kinh nghiệm trong việc huấn luyện các học viên ở mọi lứa tuổi. Anh chuyên huấn luyện bơi cho trẻ em, người lớn và các vận động viên thi đấu. Khoa tập trung vào việc giúp học viên cải thiện kỹ thuật bơi, sức bền và khả năng thở đúng cách. Anh luôn khuyến khích học viên duy trì thói quen luyện tập đều đặn và chú trọng đến sự phát triển toàn diện của cơ thể qua việc bơi lội.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-boi-nam-1.jpg",
                field: "Bơi",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao TP.HCM",
                    "Hạng 2 Bơi tự do 2018 Vietnam Swimming Championship",
                    "Certified Swimming Coach by International Swimming Federation (FINA)"
                ]
            },
            {
                name: "Trần Thị Lan Anh",
                shortDesc: "Lan Anh là huấn luyện viên bơi với niềm đam mê giúp mọi người cải thiện kỹ thuật bơi và sức khỏe tổng thể.",
                details: "Trần Thị Lan Anh là huấn luyện viên bơi với hơn 6 năm kinh nghiệm, chuyên huấn luyện bơi cho mọi đối tượng, đặc biệt là cho những người mới bắt đầu. Cô chú trọng vào việc giúp học viên cải thiện kỹ thuật bơi hiệu quả và nâng cao sức khỏe tổng thể. Lan Anh luôn nhấn mạnh tầm quan trọng của việc duy trì thể lực và cải thiện kỹ thuật bơi qua từng buổi tập luyện. Cô đặc biệt giỏi trong việc truyền cảm hứng và động lực cho học viên vượt qua những thử thách trong quá trình luyện tập.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-boi-nu-1.jpg",
                field: "Bơi",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Sư phạm Thể dục thể thao TP.HCM",
                    "Hạng 1 Bơi tự do 2020 Vietnam Swimming Championship",
                    "Certified Swimming Coach by American Swimming Coaches Association (ASCA)"
                ]
            },
            {
                name: "Lê Thiên Hòa",
                shortDesc: "Hòa là huấn luyện viên bơi chuyên nghiệp, giúp học viên cải thiện tốc độ và kỹ thuật bơi để đạt thành tích cao.",
                details: "Lê Thiên Hòa có hơn 8 năm kinh nghiệm huấn luyện bơi cho các vận động viên chuyên nghiệp và học viên muốn cải thiện kỹ thuật bơi. Anh chuyên về các môn bơi tự do, bơi ngửa và bơi bướm, giúp học viên nâng cao tốc độ và sức bền. Hòa luôn chú trọng đến việc tối ưu hóa kỹ thuật bơi và cải thiện thể lực để đạt thành tích cao trong các giải đấu. Anh tin rằng sự kiên trì và luyện tập nghiêm túc là yếu tố quan trọng giúp học viên thành công.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-boi-nam-2.jpg",
                field: "Bơi",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao Hà Nội",
                    "Hạng 3 Bơi bướm 2017 Asian Swimming Championship",
                    "Certified Swimming Coach by Swimming Australia"
                ]
            },
            {
                name: "Nguyễn Thị Mai",
                shortDesc: "Mai là huấn luyện viên bơi dành riêng cho trẻ em, giúp các em phát triển khả năng bơi lội và kỹ năng sinh tồn dưới nước.",
                details: "Nguyễn Thị Mai có hơn 5 năm kinh nghiệm huấn luyện bơi cho trẻ em, đặc biệt là đối với các bé từ 4 đến 10 tuổi. Cô chuyên giúp các em làm quen với nước, học các kỹ thuật bơi cơ bản và cải thiện sức bền. Mai đặc biệt chú trọng đến việc tạo môi trường học tập vui vẻ và an toàn, giúp trẻ em phát triển kỹ năng sinh tồn dưới nước một cách tự nhiên và hiệu quả. Cô luôn làm việc với từng học viên để đảm bảo rằng các em không chỉ học bơi mà còn yêu thích môn thể thao này.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-boi-nu-2.jpg",
                field: "Bơi",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Sư phạm Thể dục thể thao TP.HCM",
                    "Hạng 2 Bơi tự do trẻ em 2019 Vietnam Swimming Championship",
                    "Certified Swimming Coach for Kids by American Swimming Coaches Association (ASCA)"
                ]
            },
            {
                name: "Bùi Quang Hùng",
                shortDesc: "Hùng là huấn luyện viên bơi với nhiều năm kinh nghiệm trong việc huấn luyện các vận động viên chuyên nghiệp và người mới bắt đầu.",
                details: "Bùi Quang Hùng đã có hơn 10 năm kinh nghiệm huấn luyện bơi cho cả vận động viên chuyên nghiệp và người mới bắt đầu. Hùng chuyên huấn luyện các kỹ thuật bơi tự do, bơi ngửa và bơi ếch, đồng thời giúp học viên cải thiện sức bền và tốc độ bơi. Hùng rất chú trọng đến việc giúp học viên phát triển thể lực toàn diện và nâng cao kết quả thi đấu trong các giải bơi. Anh luôn khuyến khích học viên duy trì sự kiên trì và nỗ lực hết mình để đạt được những mục tiêu đã đề ra.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-boi-nam-3.jpg",
                field: "Bơi",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao TP.HCM",
                    "Hạng 1 Bơi tự do 2015 Vietnam Swimming Championship",
                    "Certified Swimming Coach by British Swimming"
                ]
            }
        ],
        yoga: [
            {
                name: "Nguyễn Thị Bích Ngọc",
                shortDesc: "Bích Ngọc là huấn luyện viên Yoga với niềm đam mê mạnh mẽ trong việc giúp học viên tìm thấy sự cân bằng giữa thể chất và tinh thần.",
                details: "Nguyễn Thị Bích Ngọc có hơn 6 năm kinh nghiệm huấn luyện Yoga cho mọi đối tượng, từ người mới bắt đầu đến những người đã có kinh nghiệm. Cô chuyên sâu vào các bài tập giúp cải thiện linh hoạt cơ thể, giảm căng thẳng và nâng cao sức khỏe tổng thể. Bích Ngọc luôn khuyến khích học viên duy trì sự tỉnh táo và tập trung trong suốt quá trình tập luyện để tối ưu hóa lợi ích của Yoga. Cô đặc biệt giỏi trong việc hướng dẫn các kỹ thuật hít thở và thư giãn.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-yoga-nu-1.jpg",
                field: "Yoga",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao TP.HCM",
                    "Giảng viên Yoga chứng chỉ 500 giờ từ Yoga Alliance",
                    "Chứng chỉ Yoga Instructor tại International Yoga Federation (IYF)"
                ]
            },
            {
                name: "Trần Minh Tuấn",
                shortDesc: "Minh Tuấn là huấn luyện viên Yoga với mục tiêu giúp học viên nâng cao sức khỏe, sự dẻo dai và sự an lạc nội tâm.",
                details: "Trần Minh Tuấn đã có hơn 8 năm kinh nghiệm huấn luyện Yoga, đặc biệt là các kỹ thuật hít thở và thiền định. Anh giúp học viên phát triển sức mạnh nội tâm và thể chất qua các lớp học Yoga đa dạng, từ Hatha Yoga, Vinyasa, đến Yin Yoga. Minh Tuấn tin rằng Yoga không chỉ giúp cơ thể linh hoạt mà còn là công cụ để làm dịu tâm trí và giảm căng thẳng. Anh luôn chú trọng đến sự hòa hợp giữa cơ thể và tâm trí trong mỗi buổi tập.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-yoga-nam-1.jpg",
                field: "Yoga",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao Hà Nội",
                    "Chứng chỉ Yoga Teacher Training 500 giờ từ Yoga Alliance",
                    "Yoga Instructor Certified by International Yoga Federation (IYF)"
                ]
            },
            {
                name: "Lê Thị Minh Châu",
                shortDesc: "Minh Châu là huấn luyện viên Yoga dành cho mọi lứa tuổi, từ người mới bắt đầu đến những người tìm kiếm sự nâng cao trong các động tác khó.",
                details: "Lê Thị Minh Châu có hơn 7 năm kinh nghiệm trong việc huấn luyện Yoga. Cô chuyên về các kỹ thuật Yoga giúp cải thiện sự dẻo dai và giảm căng thẳng. Minh Châu rất chú trọng đến việc giúp học viên phát triển sức mạnh cơ bắp và sự linh hoạt qua các động tác kết hợp giữa thể lực và tinh thần. Cô luôn khuyến khích học viên tập luyện một cách nhẹ nhàng và từ từ tăng cường độ tập luyện để đạt được hiệu quả tối ưu mà không gặp phải chấn thương.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-yoga-nu-2.jpg",
                field: "Yoga",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Sư phạm Thể dục thể thao TP.HCM",
                    "Giảng viên Yoga với chứng chỉ 500 giờ từ Yoga Alliance",
                    "Chứng chỉ Yoga Teacher tại International Yoga Federation (IYF)"
                ]
            },
            {
                name: "Nguyễn Tiến Dũng",
                shortDesc: "Tiến Dũng là huấn luyện viên Yoga chuyên nghiệp, giúp học viên tìm thấy sự bình an trong tâm trí và cơ thể qua các bài tập Yoga sâu sắc.",
                details: "Nguyễn Tiến Dũng có hơn 10 năm kinh nghiệm huấn luyện Yoga. Anh chuyên về các kỹ thuật hít thở sâu và các bài tập Yoga giúp cải thiện sự linh hoạt và tăng cường sức mạnh cơ thể. Tiến Dũng giúp học viên tìm thấy sự an lạc và thư giãn trong các lớp học của mình. Anh tin rằng Yoga không chỉ là về thể chất mà còn là một quá trình chữa lành cho tâm trí và tâm hồn. Anh đặc biệt nổi bật trong việc hướng dẫn các lớp thiền và Yoga trị liệu.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-yoga-nam-2.jpg",
                field: "Yoga",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao TP.HCM",
                    "Chứng chỉ Yoga Instructor 500 giờ từ Yoga Alliance",
                    "Chứng chỉ Yoga Teacher tại International Yoga Federation (IYF)"
                ]
            },
            {
                name: "Phan Ngọc Lan",
                shortDesc: "Ngọc Lan là huấn luyện viên Yoga chuyên giúp học viên cải thiện linh hoạt cơ thể và phát triển sức mạnh tinh thần.",
                details: "Phan Ngọc Lan là huấn luyện viên Yoga với hơn 5 năm kinh nghiệm. Cô chuyên huấn luyện các lớp Hatha Yoga, Vinyasa và Yoga cho người mới bắt đầu. Ngọc Lan chú trọng vào việc phát triển sự cân bằng giữa cơ thể và tâm trí, giúp học viên cảm thấy thư giãn và giảm căng thẳng. Cô luôn động viên học viên tập trung vào từng động tác, giúp họ thực hiện các bài tập một cách chính xác để đạt được hiệu quả cao nhất.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-yoga-nu-3.jpg",
                field: "Yoga",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Sư phạm Thể dục thể thao TP.HCM",
                    "Giảng viên Yoga chứng chỉ 200 giờ từ Yoga Alliance",
                    "Chứng chỉ Yoga Teacher tại International Yoga Federation (IYF)"
                ]
            }
        ],
        dance: [
            {
                name: "Nguyễn Hương Giang",
                shortDesc: "Hương Giang là huấn luyện viên Dance với niềm đam mê mãnh liệt giúp học viên nâng cao khả năng nhảy múa và thể hiện cảm xúc qua từng bước nhảy.",
                details: "Nguyễn Hương Giang đã có hơn 6 năm kinh nghiệm huấn luyện Dance cho các học viên từ cơ bản đến nâng cao. Cô chuyên về các thể loại Dance hiện đại, từ Hip Hop, Jazz đến Street Dance. Hương Giang luôn chú trọng đến việc phát triển kỹ thuật, nhịp điệu và sự sáng tạo trong từng điệu nhảy. Cô tin rằng mỗi học viên đều có khả năng bộc lộ cảm xúc qua Dance và cô luôn tìm cách giúp học viên tự tin và thể hiện được bản thân qua các bài học.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-dance-nu-1.jpg",
                field: "Dance",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Văn hóa Nghệ thuật Quân đội",
                    "Giải Nhất Dance Battle 2019 Vietnam Dance Championship",
                    "Chứng chỉ Dance Instructor từ International Dance Federation (IDF)"
                ]
            },
            {
                name: "Trần Thanh Hương",
                shortDesc: "Thanh Hương là huấn luyện viên Dance chuyên nghiệp, tập trung vào các lớp Jazz Funk và Contemporary Dance.",
                details: "Trần Thanh Hương là huấn luyện viên Dance với hơn 7 năm kinh nghiệm giảng dạy và biểu diễn. Cô chuyên về các thể loại Dance đương đại, Jazz Funk và thể dục nhịp điệu. Thanh Hương tập trung vào việc giúp học viên phát triển sự linh hoạt và khả năng biểu cảm trong từng điệu nhảy. Cô luôn tạo ra một không gian học tập thân thiện, nơi học viên có thể tự do thể hiện bản thân và cải thiện kỹ năng qua từng lớp học.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-dance-nu-2.jpg",
                field: "Dance",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Sư phạm Nghệ thuật Trung ương",
                    "Giải Nhì Dance Performance 2020 Vietnam Dance Championship",
                    "Chứng chỉ Dance Teacher Training từ Dance Educators Association (DEA)"
                ]
            },
            {
                name: "Lê Hữu Sơn",
                shortDesc: "Lê Hữu Sơn là huấn luyện viên Dance với phong cách mạnh mẽ, chủ yếu giảng dạy Hip Hop và Breakdance.",
                details: "Lê Hữu Sơn là huấn luyện viên Dance có hơn 8 năm kinh nghiệm trong việc huấn luyện và biểu diễn các thể loại Hip Hop và Breakdance. Sơn giúp học viên phát triển các kỹ thuật nhảy cơ bản và nâng cao, đồng thời chú trọng vào việc nâng cao khả năng tự do sáng tạo trong khi nhảy. Anh luôn khuyến khích học viên phá vỡ giới hạn của bản thân, khám phá phong cách riêng và thể hiện bản thân một cách mạnh mẽ qua từng bước nhảy.",
                image: "https://nuedu.vn/cdn/upload/images/huan-luyen-vien-dance-nam-1.jpg",
                field: "Dance",
                level: "Bằng cấp - Thành tích",
                achievements: [
                    "Cử nhân tại Đại học Thể dục thể thao TP.HCM",
                    "Giải Ba Breakdance 2018 Vietnam Dance Championship",
                    "Chứng chỉ Dance Instructor từ World Hip Hop Dance Championship"
                ]
            }
        ]
    };

    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const trainerList = document.getElementById('trainerList');
            const leftArrow = document.getElementById('leftArrow');
            const rightArrow = document.getElementById('rightArrow');
            
            trainerList.innerHTML = '';
            
            trainers[category].forEach(trainer => {
                const trainerItem = document.createElement('div');
                trainerItem.className = 'trainer-item';
                trainerItem.innerHTML = `
                    <img src="${trainer.image}" alt="${trainer.name}">
                    <h4>${trainer.name}</h4>
                    <p>${trainer.shortDesc}</p>
                    <button class="detail-btn">Xem chi tiết</button>
                `;
                trainerItem.querySelector('.detail-btn').addEventListener('click', () => showPopup(trainer));
                trainerList.appendChild(trainerItem);
            });

            if (trainers[category].length >= 4) {
                leftArrow.style.display = 'block';
                rightArrow.style.display = 'block';
            } else {
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'none';
            }
        });
    });

    document.getElementById('leftArrow').addEventListener('click', () => {
        const trainerList = document.getElementById('trainerList');
        trainerList.scrollLeft -= 220;
    });

    document.getElementById('rightArrow').addEventListener('click', () => {
        const trainerList = document.getElementById('trainerList');
        trainerList.scrollLeft += 220;
    });

function showPopup(trainer) {
    const popup = document.getElementById('trainerPopup');
    const trainerName = document.getElementById('trainerName');
    const trainerDetails = document.getElementById('trainerDetails'); // Đặt trainerDetails dưới trainerName
    const trainerField = document.getElementById('trainerField'); // Lĩnh vực tập luyện dưới h4
    const trainerAchievements = document.getElementById('trainerAchievements');
    const trainerImage = document.getElementById('trainerImage');

    // Cập nhật thông tin huấn luyện viên vào các phần tử trong popup
    trainerName.innerText = trainer.name;
    trainerDetails.innerHTML = trainer.details; // Đưa details ngay dưới trainerName
    trainerField.innerText = trainer.field; // Lĩnh vực tập luyện dưới h4
    trainerImage.src = trainer.image;

    // Cập nhật thành tích
    trainerAchievements.innerHTML = trainer.achievements.map(ach => `<li>${ach}</li>`).join('');

    // Hiển thị popup
    popup.style.display = 'flex';
}

    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('trainerPopup').style.display = 'none';
    });

    document.getElementById('trainerPopup').addEventListener('click', (e) => {
        if (e.target === document.getElementById('trainerPopup')) {
            document.getElementById('trainerPopup').style.display = 'none';
        }
    });

document.getElementById('submitBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

// Clear previous errors
document.getElementById('nameError').innerText = '';
document.getElementById('nameError').style.display = 'none';

document.getElementById('phoneError').innerText = '';
document.getElementById('phoneError').style.display = 'none';

nameInput.classList.remove('input-error');
phoneInput.classList.remove('input-error');

    let hasError = false;

    if (!name) {
        document.getElementById('nameError').innerText = 'Vui lòng nhập Họ và tên.';
        document.getElementById('nameError').style.display = 'block';
        nameInput.classList.add('input-error');
        hasError = true;
    }

    if (!phone) {
        document.getElementById('phoneError').innerText = 'Vui lòng nhập Số điện thoại.';
        document.getElementById('phoneError').style.display = 'block';
        phoneInput.classList.add('input-error');
        hasError = true;
    } else if (!/^\d{10,11}$/.test(phone)) {
        document.getElementById('phoneError').innerText = 'Số điện thoại không hợp lệ.';
        document.getElementById('phoneError').style.display = 'block';
        phoneInput.classList.add('input-error');
        hasError = true;
    }

    if (hasError) return;

    // Hiển thị thông báo thành công
document.getElementById('successMessage').style.display = 'block';

// Reset form
nameInput.value = '';
phoneInput.value = '';
document.getElementById('email').value = '';
document.getElementById('time').value = '';
document.getElementById('location').value = '';
});

    function closeSuccessMessage() {
        document.getElementById('successMessage').style.display = 'none';
    }
