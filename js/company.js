// 公司模块 JavaScript

// 返回首页功能
function goHome() {
    // 这里跳转到首页，暂时使用相对路径
    window.location.href = 'index.html';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initVRButtons();
    initVideoPlayer();
    initTimeline();
    initReadingNav();
    initValueCards();
    initScrollEffect();
});

// VR按钮初始化
function initVRButtons() {
    const vrButtons = document.querySelectorAll('.vr-btn');
    
    vrButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const vrUrl = this.dataset.url;
            if (vrUrl) {
                window.open(vrUrl, '_blank');
            }
        });
    });
}

// 视频播放初始化
function initVideoPlayer() {
    const videoPlaceholder = document.querySelector('.video-placeholder');

    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // 这里可以集成实际的视频播放器
            // 如使用 HTML5 video, Video.js, 或第三方播放器
            alert('视频播放功能\n\n请替换为实际的视频播放器实现\n建议使用: HTML5 video 标签或 Video.js');

            // 示例：使用HTML5 video
            // const videoContainer = document.querySelector('.video-container');
            // videoContainer.innerHTML = `
            //     <video controls autoplay style="width: 100%; border-radius: 8px;">
            //         <source src="videos/company-intro.mp4" type="video/mp4">
            //         您的浏览器不支持视频播放。
            //     </video>
            // `;
        });
    }
}

// 时间轴初始化
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // 为时间轴项目添加滚动动画
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    timelineItems.forEach((item, index) => {
        // 初始状态
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(item);
    });

    // 查看完整版按钮
    const viewMoreBtn = document.querySelector('.view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            // 可以跳转到完整时间轴页面或展开更多内容
            alert('查看完整版时间轴\n\n可以在此添加更多历史事件\n或跳转到专门的页面');
        });
    }
}

// 价值观卡片点击效果
function initValueCards() {
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach(card => {
        card.addEventListener('click', function() {
            // 可以添加更多详细信息展示
            card.classList.toggle('expanded');
        });
    });
}

// 页面滚动效果
function initScrollEffect() {
    let lastScrollTop = 0;
    const moduleHeader = document.querySelector('.module-header');

    if (!moduleHeader) return;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            moduleHeader.style.boxShadow = '0 4px 20px rgba(230, 0, 18, 0.2)';
        } else {
            moduleHeader.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = scrollTop;
    });
}

// 阅读导航的锚点点击已在 initReadingNav 中处理，这里不再重复处理

// 触摸事件处理（移动端优化）
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 左滑 - 可以添加页面切换功能
            console.log('向左滑动');
        } else {
            // 右滑 - 返回上一页
            console.log('向右滑动');
            // goHome(); // 如果需要的话取消注释
        }
    }
}

// 页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时可以暂停视频等资源
        console.log('页面隐藏');
    } else {
        // 页面重新可见时恢复
        console.log('页面可见');
    }
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
});

// 性能优化：懒加载图片
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// 阅读导航初始化
function initReadingNav() {
    const navItems = document.querySelectorAll('.reading-nav .nav-item');
    const sections = document.querySelectorAll('section[id]');
    const navToggle = document.querySelector('.nav-toggle');
    const readingNav = document.querySelector('.reading-nav');

    // 标记是否正在滚动（由点击导航项触发）
    let isScrollingFromNav = false;

    // 移动端导航切换
    if (navToggle && readingNav) {
        navToggle.addEventListener('click', function() {
            readingNav.classList.toggle('expanded');
        });

        // 点击其他区域关闭导航
        document.addEventListener('click', function(e) {
            if (!readingNav.contains(e.target)) {
                readingNav.classList.remove('expanded');
            }
        });
    }

    // 使用 IntersectionObserver 来检测可见的 section
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5]
    };

    const observer = new IntersectionObserver(function(entries) {
        // 如果是从导航点击触发的滚动，暂不更新高亮
        if (isScrollingFromNav) return;

        // 找到所有可见的 section
        const visibleSections = entries
            .filter(entry => entry.isIntersecting)
            .map(entry => entry.target);

        if (visibleSections.length === 0) return;

        // 计算每个可见 section 在视口中的占比
        let bestSection = null;
        let maxRatio = 0;

        visibleSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // 计算 section 在视口中的可见高度
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(viewportHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            // 计算可见比例
            const ratio = visibleHeight / viewportHeight;

            if (ratio > maxRatio) {
                maxRatio = ratio;
                bestSection = section;
            }
        });

        // 更新导航高亮
        if (bestSection) {
            const sectionId = bestSection.id;
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.dataset.section === sectionId) {
                    item.classList.add('active');
                }
            });
        }
    }, observerOptions);

    // 观察所有 section
    sections.forEach(section => {
        observer.observe(section);
    });

    // 点击导航项平滑滚动
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // 阻止事件冒泡

            // 立即更新高亮状态
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // 关闭移动端导航
            if (readingNav) {
                readingNav.classList.remove('expanded');
            }

            // 平滑滚动到目标位置
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;

                // 标记正在从导航滚动
                isScrollingFromNav = true;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // 等待平滑滚动完成后恢复Observer
                setTimeout(() => {
                    isScrollingFromNav = false;
                }, 800); // 等待滚动完成
            }
        }, { passive: false });
    });
}