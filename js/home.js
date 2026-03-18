// 首页 JavaScript

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initNavigation();
    initSearch();
});

// 倒计时功能
function initCountdown() {
    // 设置入职日期 - 这里设置为7月13日
    const targetDate = new Date();
    targetDate.setMonth(6); // 7月（JavaScript月份从0开始）
    targetDate.setDate(13);
    targetDate.setFullYear(2026);

    // 如果今年的入职日期已经过了，就设置为明年
    const today = new Date();
    if (targetDate < today) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    // 更新倒计时
    updateCountdownDisplay(targetDate);

    // 每天更新一次
    setInterval(function() {
        updateCountdownDisplay(targetDate);
    }, 24 * 60 * 60 * 1000);
}

function updateCountdownDisplay(targetDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diff = targetDate - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    const daysElement = document.getElementById('days-count');
    if (daysElement) {
        daysElement.textContent = days > 0 ? days : 0;

        // 添加动画效果
        daysElement.style.animation = 'none';
        setTimeout(() => {
            daysElement.style.animation = 'fadeIn 0.5s ease-out';
        }, 10);
    }
}

// 导航功能
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        // 鼠标悬停效果
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });

        // 点击效果
        item.addEventListener('click', function(e) {
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // 检查是否是链接
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                // 已经是链接，默认行为会处理
                console.log('跳转到:', href);
            } else {
                // 其他导航项可以在这里添加相应逻辑
                e.preventDefault();
                const navText = this.querySelector('.nav-text').textContent;
                handleNavClick(navText);
            }
        });
    });
}

// 导航点击处理
function handleNavClick(navText) {
    const moduleMap = {
        '公司初识': 'company.html',
        '入职准备': 'onboarding.html',
        '安居指南': '#living',
        '新人必修': '#courses',
        '找SOC': '#contact'
    };

    const target = moduleMap[navText];

    if (target && target.startsWith('#')) {
        // 如果是锚点，显示提示
        alert(`${navText} 模块正在建设中...\n\n请稍后再试`);
    } else if (target) {
        // 如果是文件链接，跳转
        window.location.href = target;
    }
}

// 搜索功能
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
        // 搜索按钮点击
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });

        // 回车键搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });

        // 搜索框聚焦效果
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 4px 16px rgba(230, 0, 18, 0.15)';
        });

        searchInput.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = '';
        });
    }
}

// 执行搜索
function performSearch(query) {
    if (!query.trim()) {
        alert('请输入搜索关键词');
        return;
    }

    // 这里可以实现实际的搜索功能
    console.log('搜索:', query);
    alert(`搜索功能\n\n搜索关键词: ${query}\n\n搜索功能正在建设中...`);
}

// 页面滚动效果
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // 欢迎区域视差效果
    const welcomeSection = document.querySelector('.welcome-section');
    if (welcomeSection) {
        welcomeSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// 页面可见性变化
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('页面隐藏');
    } else {
        console.log('页面可见');
        // 重新计算倒计时
        const targetDate = new Date();
        targetDate.setMonth(6); // 7月
        targetDate.setDate(13);
        targetDate.setFullYear(2026);
        updateCountdownDisplay(targetDate);
    }
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('页面加载时间:', pageLoadTime, 'ms');
        }, 0);
    });
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// 触摸优化
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', function(e) {
    // 防止页面过度滚动
    const touchY = e.touches[0].clientY;
    const touchX = e.touches[0].clientX;

    // 如果是横向滚动，允许
    const deltaX = Math.abs(touchX - touchStartX);
    const deltaY = Math.abs(touchY - touchStartY);

    if (deltaX > deltaY && deltaX > 10) {
        // 横向滚动，允许默认行为
    } else if (window.scrollY <= 0 && touchY > touchStartY) {
        // 在顶部向下滑动，允许默认行为（下拉刷新）
    } else if (window.scrollY + window.innerHeight >= document.body.scrollHeight && touchY < touchStartY) {
        // 在底部向上滑动，允许默认行为
    }
}, { passive: true });

// PWA支持（可选）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // 可以在这里注册Service Worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(function(registration) {
        //         console.log('ServiceWorker 注册成功:', registration);
        //     })
        //     .catch(function(error) {
        //         console.log('ServiceWorker 注册失败:', error);
        //     });
    });
}

// 数据统计（可选）
function trackEvent(category, action, label) {
    // 可以集成Google Analytics或其他统计工具
    console.log('事件追踪:', { category, action, label });
}

// 示例：追踪导航点击
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const navText = this.querySelector('.nav-text').textContent;
        trackEvent('Navigation', 'Click', navText);
    });
});