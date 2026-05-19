// Dữ liệu truyện mặc định ban đầu nếu bộ nhớ máy trống rỗng
const defaultNovels = [
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

// Hàm lấy dữ liệu mới nhất từ LocalStorage
function getNovelsData() {
    if (!localStorage.getItem('novels_data')) {
        localStorage.setItem('novels_data', JSON.stringify(defaultNovels));
    }
    return JSON.parse(localStorage.getItem('novels_data'));
}

// Hàm lưu dữ liệu vào LocalStorage
function saveNovelsData(data) {
    localStorage.setItem('novels_data', JSON.stringify(data));
}

// Hàm chuyển đổi Tên truyện thành ID (Ví dụ: "Đạo Sĩ Xuất Sơn" -> "dao-si-xuat-son")
function slugify(text) {
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')           // Thay khoảng trắng bằng -
        .replace(/[^\w\-]+/g, '')       // Xóa ký tự đặc biệt
        .replace(/\-\-+/g, '-');        // Thay -- thành -
}

document.addEventListener("DOMContentLoaded", () => {
    let novels = getNovelsData();

    // 1. XỬ LÝ ĐỔI NỀN (DARK MODE)
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

    // 2. LÓGIC TẠI TRANG CHỦ (index.html)
    const novelListContainer = document.getElementById("novel-list");
    const btnToggleForm = document.getElementById("btn-toggle-form");
    const btnCancelForm = document.getElementById("btn-cancel-form");
    const publishFormSection = document.getElementById("publish-form-section");
    const publishForm = document.getElementById("publish-form");

    if (novelListContainer) {
        // Hàm hiển thị danh sách truyện ra màn hình
        function renderLibrary() {
            novelListContainer.innerHTML = "";
            novels.forEach(novel => {
                const wrapper = document.createElement("div");
                wrapper.className = "novel-card-wrapper";

                // Nút xóa truyện nếu không muốn đọc nữa
                const deleteBtn = document.createElement("button");
                deleteBtn.className = "btn-delete-novel";
                deleteBtn.innerText = "X";
                deleteBtn.onclick = (e) => {
                    e.preventDefault();
                    if(confirm(`Bạn có chắc muốn xóa truyện "${novel.title}" khỏi máy?`)) {
                        novels = novels.filter(n => n.id !== novel.id);
                        saveNovelsData(novels);
                        renderLibrary();
                    }
                };

                const card = document.createElement("a");
                card.className = "novel-card";
                card.href = `reader.html?novelId=${novel.id}&chap=1`;
                card.innerHTML = `
                    <h3>${novel.title}</h3>
                    <p>Tác giả: ${novel.author}</p>
                    <small>${novel.chapters.length} chương (Sẵn sàng đọc)</small>
                `;

                wrapper.appendChild(deleteBtn);
                wrapper.appendChild(card);
                novelListContainer.appendChild(wrapper);
            });
        }

        renderLibrary();

        // Đóng mở Form đăng truyện
        btnToggleForm.addEventListener("click", () => publishFormSection.classList.remove("hidden"));
        btnCancelForm.addEventListener("click", () => publishFormSection.classList.add("hidden"));

        // Xử lý khi bấm nút "Xuất bản" truyện mới
        publishForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("novel-title").value;
            const author = document.getElementById("novel-author").value;
            const chapTitle = document.getElementById("chapter-title-input").value;
            const chapContentRaw = document.getElementById("chapter-content-input").value;

            // Xử lý xuống dòng trong textarea thành thẻ <p> để truyện hiển thị đẹp
            const chapContentHTML = chapContentRaw.split('\n').map(para => {
                if(para.trim() !== "") return `<p>${para.trim()}</p>`;
                return "";
            }).join('');

            const novelId = slugify(title) || Date.now().toString();

            // Kiểm tra trùng lặp ID truyện
            if (novels.some(n => n.id === novelId)) {
                alert("Truyện này đã tồn tại trong thư viện!");
                return;
            }

            // Tạo object cấu trúc truyện mới
            const newNovel = {
                id: novelId,
                title: title,
                author: author,
                chapters: [
                    {
                        no: 1,
                        title: chapTitle,
                        content: chapContentHTML
                    }
                ]
            };

            // Đẩy vào mảng dữ liệu hiện tại và lưu lại
            novels.push(newNovel);
            saveNovelsData(novels);

            // Reset form và đóng lại
            publishForm.reset();
            publishFormSection.classList.add("hidden");

            // Vẽ lại danh sách truyện mới
            renderLibrary();
            alert("Đăng truyện mới thành công! Bạn có thể tắt mạng và đọc thử.");
        });
    }

    // 3. LÓGIC TẠI TRANG ĐỌC TRUYỆN (reader.html)
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
                    
                    prevBtn.disabled = chapNo <= 1;
                    nextBtn.disabled = chapNo >= currentNovel.chapters.length;

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
