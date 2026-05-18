function loadChapter(title, content) {
    document.getElementById('chapter-title').innerText = title;
    document.getElementById('chapter-content').innerText = content;
    document.getElementById('reading-area').style.display = 'block';
    
    // Tự động cuộn xuống phần đọc truyện
    document.getElementById('reading-area').scrollIntoView({ behavior: 'smooth' });
}

function closeChapter() {
    document.getElementById('reading-area').style.display = 'none';
}
