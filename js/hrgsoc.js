// 找HRGSOC模块 JavaScript

// 返回首页
function goHome() {
    window.location.href = 'index.html';
}

// 图片预览功能
function openImagePreview(src) {
    const overlay = document.getElementById('imagePreview');
    const img = document.getElementById('previewImg');

    if (overlay && img) {
        img.src = src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// 关闭图片预览
function closeImagePreview() {
    const overlay = document.getElementById('imagePreview');

    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ESC键关闭预览
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImagePreview();
    }
});

// 页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 为HRGSOC图片添加点击提示
    const hrgsocImage = document.querySelector('.hrgsoc-image');
    if (hrgsocImage) {
        hrgsocImage.addEventListener('mouseenter', function() {
            this.title = '点击查看大图';
        });
    }
});
