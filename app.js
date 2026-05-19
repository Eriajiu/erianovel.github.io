// Dữ liệu truyện mẫu (Có thể mở rộng hoặc tải từ file json về lưu vào localStorage)
const mockNovels = [
    {
        id: "than-bi-phuc-to",
        title: "Thần Bí Phục Tô",
        author: "Phật Tiền Hiến Hoa",
        chapters: [
            { no: 1, title: "Chương 1: Đàn áp quỷ nhãn", content: "<p>Năm thứ nhất sau khi thế giới biến đổi...</p><p>Khắp nơi bắt đầu xuất hiện những quy luật quỷ dị không thể giải thích.</p>" },
            { no: 2, title: "Chương 2: Quy luật sống sót", content: "<p>Chỉ có quỷ mới chống lại được quỷ.</p><p>Đây là bài học xương máu đầu tiên mà mọi người phải ghi nhớ.</p>" }
        ]
    }
];

// Khởi tạo dữ liệu vào localStorage nếu chưa có để đọc offline
if (!localStorage.getItem('novels_data')) {
    localStorage.setItem('novels_data', JSON.stringify(mockNovels));
}

const novels = JSON.parse(localStorage.getItem('novels_data'));

document.addEventListener("DOMContentLoaded", () => {
    // Xử lý Chế độ nền (Dark Mode)
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            let theme = document.documentElement.getAttribute("data-theme");
            let newTheme = theme === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }

    // LÓGIC TRANG CHỦ (index.html)
    const novelListContainer = document.getElementById("novel-list");
    if (novelListContainer) {
        novels.forEach(novel => {
            const card = document.createElement("a");
            card.className = "novel-card";
            card.href = `reader.html?novelId=${novel.id}&chap=1`;
            card.innerHTML = `
                <h3>${novel.title}</h3>
                <p>Tác giả: ${novel.author}</p>
                <small>${novel.chapters.length} chương (Đã lưu offline)</small>
            `;
            novelListContainer.appendChild(card);
        });
    }

    // LÓGIC TRANG ĐỌC TRUYỆN (reader.html)
    const chapterTitle = document.getElementById("chapter-title");
    const chapterContent = document.getElementById("chapter-content");
    const prevBtn = document.getElementById("prev-chap");
    const nextBtn = document.getElementById("next-chap");

    if (chapterTitle && chapterContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const novelId = urlParams.get("novelId");
        let currentChapNo = parseInt(urlParams.get("chap")) || 1;

        const currentNovel = novels.find(n => n.id === novelId);

        if (currentNovel) {
            function renderChapter(chapNo) {
                const chapter = currentNovel.chapters.find(c => c.no === chapNo);
                if (chapter) {
                    chapterTitle.innerText = chapter.title;
                    chapterContent.innerHTML = chapter.content;
                    
                    // Cập nhật nút chuyển chương
                    prevBtn.disabled = chapNo <= 1;
                    nextBtn.disabled = chapNo >= currentNovel.chapters.length;

                    // Lưu lại tiến độ đọc
                    localStorage.setItem(`progress_${novelId}`, chapNo);
                } else {
                    chapterTitle.innerText = "Chương không tồn tại";
                }
            }

            renderChapter(currentChapNo);

            prevBtn.addEventListener("click", () => {
                if (currentChapNo > 1) {
                    currentChapNo--;
                    window.history.pushState({}, "", `reader.html?novelId=${novelId}&chap=${currentChapNo}`);
                    renderChapter(currentChapNo);
                }
            });

            nextBtn.addEventListener("click", () => {
                if (currentChapNo < currentNovel.chapters.length) {
                    currentChapNo++;
                    window.history.pushState({}, "", `reader.html?novelId=${novelId}&chap=${currentChapNo}`);
                    renderChapter(currentChapNo);
                }
            });
        } else {
            chapterTitle.innerText = "Không tìm thấy truyện!";
        }
    }
});
