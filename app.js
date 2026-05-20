/**
 * Hàm chuyển đổi giữa các màn hình ứng dụng (SPA Router)
 * @param {string} screenId - ID của màn hình cần hiển thị
 */
function switchScreen(screenId) {
    // 1. Ẩn toàn bộ các màn hình hiện tại
    const screens = document.querySelectorAll('.app-screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // 2. Kích hoạt hiển thị màn hình đích
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        // Tự động cuộn mượt lên trên cùng
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 3. Cập nhật trạng thái màu sắc cho Thanh điều hướng dưới (Mobile/Tablet)
    document.querySelectorAll('.nav-mobile-btn').forEach(btn => {
        if (btn.getAttribute('data-target') === screenId) {
            btn.classList.remove('text-gray-400');
            btn.classList.add('text-lore-green');
        } else {
            btn.classList.remove('text-lore-green');
            btn.classList.add('text-gray-400');
        }
    });

    // 4. Cập nhật trạng thái màu sắc cho Menu bên trái (Desktop)
    document.querySelectorAll('.nav-aside-btn').forEach(btn => {
        if (btn.getAttribute('data-target') === screenId) {
            btn.classList.remove('text-gray-400');
            btn.classList.add('text-lore-green', 'bg-emerald-950/40');
        } else {
            btn.classList.remove('text-lore-green', 'bg-emerald-950/40');
            btn.classList.add('text-gray-400');
        }
    });
}

/**
 * Hàm Bật/Tắt Menu Sidebar dạng trượt trên thiết bị di động
 */
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Lắng nghe sự kiện trang tải xong để thiết lập màn hình mặc định ban đầu là Trang Chủ
document.addEventListener('DOMContentLoaded', () => {
    switchScreen('screen-home');
});
