<!DOCTYPE html>

<html class="dark" lang="vi"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Đăng truyện mới - Lorebook</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Manrope:wght@600;700;800&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary": "#c1c9bc",
                        "primary-container": "#b7d8b0",
                        "on-tertiary-container": "#4f5b4c",
                        "surface-container-high": "#262b25",
                        "on-primary-fixed": "#062107",
                        "surface-container-lowest": "#0b0f0a",
                        "on-surface-variant": "#c3c8be",
                        "tertiary": "#e1efdb",
                        "inverse-on-surface": "#2d322b",
                        "tertiary-fixed-dim": "#bdcab7",
                        "on-background": "#dfe4da",
                        "error-container": "#93000a",
                        "inverse-primary": "#496645",
                        "on-surface": "#dfe4da",
                        "surface-variant": "#31362f",
                        "primary-fixed-dim": "#afcfa8",
                        "on-secondary-container": "#b0b7ab",
                        "on-tertiary-fixed": "#131e12",
                        "surface-tint": "#afcfa8",
                        "on-secondary-fixed": "#171d15",
                        "surface-container-low": "#181d17",
                        "secondary-fixed-dim": "#c1c9bc",
                        "on-primary-container": "#425f3f",
                        "secondary-container": "#41493f",
                        "background": "#10150f",
                        "surface-container": "#1c211b",
                        "primary": "#d3f5cb",
                        "on-tertiary-fixed-variant": "#3e4a3b",
                        "on-primary": "#1b361b",
                        "inverse-surface": "#dfe4da",
                        "surface-bright": "#353b34",
                        "outline-variant": "#434840",
                        "tertiary-fixed": "#d9e7d3",
                        "secondary-fixed": "#dde5d7",
                        "surface": "#10150f",
                        "on-primary-fixed-variant": "#314d2f",
                        "on-error": "#690005",
                        "outline": "#8d9289",
                        "tertiary-container": "#c5d3c0",
                        "error": "#ffb4ab",
                        "on-secondary": "#2b3229",
                        "surface-container-highest": "#31362f",
                        "primary-fixed": "#caecc3",
                        "on-tertiary": "#283326",
                        "on-secondary-fixed-variant": "#41493f",
                        "surface-dim": "#10150f",
                        "on-error-container": "#ffdad6"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "8px",
                        "xl": "12px",
                        "2xl": "16px",
                        "3xl": "24px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "margin-mobile": "16px",
                        "gutter": "24px",
                        "margin-desktop": "40px",
                        "container-max": "1200px",
                        "unit": "8px"
                    },
                    "fontFamily": {
                        "label-md": ["Inter"],
                        "headline-lg": ["Manrope"],
                        "display": ["Manrope"],
                        "label-sm": ["Inter"],
                        "body-lg": ["Inter"],
                        "headline-md": ["Manrope"],
                        "body-md": ["Inter"],
                        "headline-lg-mobile": ["Manrope"]
                    },
                    "fontSize": {
                        "label-md": ["14px", {"lineHeight": "1.4", "letterSpacing": "0.02em", "fontWeight": "500"}],
                        "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "display": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "label-sm": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "headline-md-mobile": ["20px", {"lineHeight": "1.3", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
        }
        body {
            background-color: #10150f;
            color: #dfe4da;
            -webkit-tap-highlight-color: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #31362f;
            border-radius: 10px;
        }
        input:focus, textarea:focus {
            outline: none;
            border-color: #b7d8b0 !important;
            box-shadow: 0 0 0 2px rgba(183, 216, 176, 0.1);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface-container-low/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(183,216,176,0.15)] flex justify-between items-center px-margin-mobile py-4">
<button class="text-on-surface-variant flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-container/20 transition-colors active:scale-95 duration-200">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="font-headline-md text-headline-md-mobile font-bold tracking-tight text-primary">Đăng truyện mới</h1>
<div class="w-10"></div> <!-- Spacer for centering -->
</header>
<main class="pt-24 pb-32 px-margin-mobile max-w-lg mx-auto overflow-y-auto min-h-screen">
<!-- Story Cover Upload -->
<section class="mb-8">
<label class="block font-label-md text-label-md text-on-surface-variant mb-3">Ảnh bìa tác phẩm (Tỉ lệ 3:4)</label>
<div class="relative aspect-[3/4] w-48 mx-auto bg-surface-container-high rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center overflow-hidden group hover:border-primary-container transition-all cursor-pointer">
<div class="text-center p-6 group-hover:scale-105 transition-transform duration-300">
<span class="material-symbols-outlined text-4xl text-outline mb-2">add_photo_alternate</span>
<p class="text-label-sm font-label-sm text-outline">Tải lên hoặc kéo thả ảnh</p>
</div>
<!-- In a real app, an <img> would be injected here after upload -->
</div>
</section>
<!-- General Information -->
<section class="space-y-6 mb-8">
<div>
<label class="block font-label-md text-label-md text-on-surface-variant mb-2 ml-1" for="title">Tên tác phẩm</label>
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-outline/50 transition-all focus:bg-surface-container" id="title" placeholder="Nhập tên truyện của bạn..." type="text"/>
</div>
<div>
<label class="block font-label-md text-label-md text-on-surface-variant mb-2 ml-1" for="author">Tác giả</label>
<div class="relative">
<input class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface-variant/70 cursor-not-allowed pr-12" id="author" readonly="" type="text" value="Người dùng hiện tại"/>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline/50">lock</span>
</div>
</div>
<div>
<label class="block font-label-md text-label-md text-on-surface-variant mb-2 ml-1" for="description">Mô tả / Tóm tắt</label>
<textarea class="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 text-on-surface placeholder:text-outline/50 transition-all focus:bg-surface-container resize-none" id="description" placeholder="Viết vài dòng giới thiệu về câu chuyện..." rows="5"></textarea>
</div>
</section>
<!-- Classification -->
<section class="space-y-6 mb-8">
<div>
<label class="block font-label-md text-label-md text-on-surface-variant mb-3 ml-1">Thể loại</label>
<div class="flex flex-wrap gap-2">
<button class="px-4 py-1.5 rounded-full border border-primary-container bg-primary-container/10 text-primary text-label-md font-label-md transition-all active:scale-95">Ngôn tình</button>
<button class="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-md font-label-md hover:border-primary/50 transition-all active:scale-95">Đam mỹ</button>
<button class="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-md font-label-md hover:border-primary/50 transition-all active:scale-95">Trinh thám</button>
<button class="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-md font-label-md hover:border-primary/50 transition-all active:scale-95">Tiên hiệp</button>
<button class="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-md font-label-md hover:border-primary/50 transition-all active:scale-95">Kỳ ảo</button>
<button class="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-label-md font-label-md hover:border-primary/50 transition-all active:scale-95">Kinh dị</button>
</div>
</div>
<div>
<label class="block font-label-md text-label-md text-on-surface-variant mb-3 ml-1">Trạng thái</label>
<div class="grid grid-cols-2 gap-3">
<button class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-primary-container bg-primary-container/10 text-primary transition-all">
<span class="material-symbols-outlined text-[20px]">pending_actions</span>
<span class="text-label-md font-label-md">Đang tiến hành</span>
</button>
<button class="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-outline-variant text-on-surface-variant hover:border-primary/50 transition-all">
<span class="material-symbols-outlined text-[20px]">task_alt</span>
<span class="text-label-md font-label-md">Hoàn thành</span>
</button>
</div>
</div>
</section>
<!-- Content Upload -->
<section class="mb-12">
<div class="flex items-center justify-between mb-4">
<label class="font-label-md text-label-md text-on-surface-variant ml-1">Nội dung chương</label>
<span class="text-label-sm font-label-sm text-outline">0 chương đã tải lên</span>
</div>
<div class="bg-surface-container p-6 rounded-xl border border-outline-variant/30 text-center">
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-3">
<span class="material-symbols-outlined text-outline">history_edu</span>
</div>
<h3 class="font-headline-md text-body-lg font-semibold text-on-surface mb-1">Chưa có nội dung</h3>
<p class="text-label-md text-outline mb-6">Hãy thêm chương đầu tiên để bắt đầu hành trình của bạn.</p>
<button class="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-primary-container text-primary font-label-md hover:bg-primary-container/5 transition-all active:scale-[0.98]">
<span class="material-symbols-outlined">add</span>
                    Thêm chương mới
                </button>
</div>
</section>
</main>
<!-- Bottom Action Bar (Fixed) -->
<div class="fixed bottom-0 w-full p-4 bg-surface/95 dark:bg-surface-container-low/95 backdrop-blur-xl shadow-[0_-10px_30px_rgba(183,216,176,0.15)] rounded-t-3xl flex flex-col gap-3 z-50">
<button class="w-full bg-primary-container text-on-primary-container font-headline-md py-4 rounded-xl font-bold active:scale-95 transition-all duration-200 shadow-lg shadow-primary-container/20">
            Đăng tác phẩm
        </button>
<button class="w-full bg-surface-container-high text-on-surface-variant font-label-md py-3 rounded-xl hover:text-primary transition-all active:scale-95 duration-200">
            Lưu bản nháp
        </button>
</div>
<!-- Background Decoration for Atmosphere -->
<div class="fixed inset-0 pointer-events-none -z-10 opacity-30 overflow-hidden">
<div class="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
<div class="absolute top-1/2 -right-24 w-64 h-64 bg-primary-container/5 rounded-full blur-[80px]"></div>
</div>
<script>
        // Simple Interaction logic
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.classList.contains('border-outline-variant') && !this.closest('.classification')) {
                    // Logic for toggle or state changes can go here
                }
            });
        });

        // Genre chip selection simulation
        const genreChips = document.querySelectorAll('.flex-wrap button');
        genreChips.forEach(chip => {
            chip.addEventListener('click', () => {
                chip.classList.toggle('border-primary-container');
                chip.classList.toggle('bg-primary-container/10');
                chip.classList.toggle('text-primary');
                chip.classList.toggle('border-outline-variant');
                chip.classList.toggle('text-on-surface-variant');
            });
        });
    </script>
</body></html>