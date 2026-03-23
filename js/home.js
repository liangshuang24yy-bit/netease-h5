// 首页 JavaScript

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initNavigation();
    initSearch();
});

// 倒计时功能
function initCountdown() {
    // 设置入职月份 - 2026年7月
    const targetYear = 2026;
    const targetMonth = 6; // 7月（JavaScript月份从0开始）

    // 更新倒计时
    updateCountdownDisplay(targetYear, targetMonth);

    // 每天更新一次
    setInterval(function() {
        updateCountdownDisplay(targetYear, targetMonth);
    }, 24 * 60 * 60 * 1000);
}

function updateCountdownDisplay(targetYear, targetMonth) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // 计算月份差
    let months = 0;
    if (targetYear > currentYear || (targetYear === currentYear && targetMonth >= currentMonth)) {
        months = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);
    } else {
        // 如果已经过了目标月份，显示0
        months = 0;
    }

    const monthsElement = document.getElementById('days-count');
    if (monthsElement) {
        monthsElement.textContent = months > 0 ? months : 0;

        // 添加动画效果
        monthsElement.style.animation = 'none';
        setTimeout(() => {
            monthsElement.style.animation = 'fadeIn 0.5s ease-out';
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
        '新人必修': 'courses.html',
        '找HRGSOC': 'hrgsoc.html'
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

// 搜索索引 - 包含所有页面的内容
const searchIndex = [
    // 公司初识页面
    {
        page: '公司初识',
        url: 'company.html',
        sections: [
            { id: 'section-video', title: '视频快速了解', keywords: '视频,快速了解,看网易,1分半钟', content: '视频快速了解网易公司，1分半钟看网易' },
            { id: 'section-timeline', title: '网易发展历程', keywords: '发展历程,大事记,1997,1998,2000,2001,2006,2009,2013,2016,2019,2020,2026,上市,网易音乐,有道,严选,历史', content: '网易发展历程，从1997年到2026年，包含上市、游戏、音乐等里程碑' },
            { id: 'section-games', title: '互娱事业群', keywords: '游戏,互娱,梦幻西游,大话西游,阴阳师,燕云十六声,蛋仔派对,哈利波特,第五人格,荒野行动,率土之滨,世界之外,暴雪,华纳,漫威', content: '网易互娱事业群，拥有梦幻西游、阴阳师、蛋仔派对等知名游戏产品' },
            { id: 'section-values', title: '使命愿景', keywords: '使命,愿景,价值观,网聚人的力量,热爱,用户,创新,匠心', content: '网易使命愿景：网聚人的力量，以科技创新缔造美好生活' },
            { id: 'section-vr', title: '园区VR', keywords: 'VR,园区,全景,广州,上海,杭州,云游', content: '广州、上海、杭州园区VR全景展示' }
        ]
    },
    // 入职准备页面
    {
        page: '入职准备',
        url: 'onboarding.html',
        sections: [
            { id: 'section-dossier', title: '档户处理', keywords: '档户,档案,户口,挂靠,户籍,应届生,毕业生,办理', content: '境内学历、境外学历档案户口挂靠办理指引' },
            { id: 'section-league', title: '团员关系', keywords: '团员,团关系,转移,智慧团建', content: '团员关系转移指引和说明' },
            { id: 'section-party', title: '党关系转移', keywords: '党关系,党员,组织关系,转移,党委,党务', content: '党组织关系转入说明和流程' }
        ]
    },
    // 安居指南页面
    {
        page: '安居指南',
        url: 'housing.html',
        sections: [
            { id: 'section-transport', title: '交通报销', keywords: '交通,报销,路费,火车,高铁,飞机,标准,单程', content: '入职报到交通费报销规则和标准' },
            { id: 'section-renting', title: '周边租房', keywords: '租房,住宿,酒店,周边,指南', content: '园区周边租房指南和酒店住宿安排' }
        ]
    },
    // 新人必修页面
    {
        page: '新人必修',
        url: 'courses.html',
        sections: [
            { id: 'section-timeline', title: '资讯时间线', keywords: '新人必修,资讯,闯关任务,soci小课堂,游学,通识,学习', content: '新人必修资讯时间线，包含闯关任务和soci小课堂' }
        ]
    }
];

// 同义词映射 - 用于模糊匹配
const synonymMap = {
    '租房': ['租房', '租屋', '房屋', '住房', '住宿', '房子', '公寓', '租房指南'],
    '档案': ['档案', '档户', '档案挂靠', '人事档案'],
    '户口': ['户籍', '落户', '集体户口', '户口挂靠'],
    '党员': ['党员', '党关系', '党组织', '党务', '入党'],
    '团员': ['团员', '团关系', '团组织', '共青团'],
    '交通': ['交通', '路费', '报销', '差旅', '火车', '高铁', '飞机'],
    'VR': ['VR', 'vr', '全景', '园区', '云游', '虚拟现实'],
    '游戏': ['游戏', '互娱', '梦幻西游', '阴阳师', '蛋仔派对', '手游', '端游'],
    '入职': ['入职', '报到', '入职准备', '新员工'],
    '广州': ['广州', '广分', '广州园区'],
    '上海': ['上海', '沪分', '上海园区'],
    '杭州': ['杭州', '杭研', '杭州园区', '杭州研究院'],
    '公司': ['公司', '网易', '公司介绍', '企业文化'],
    '视频': ['视频', '视频了解', '介绍视频', '宣传片'],
    '新人': ['新人', '新人必修', '新员工', '校招', '应届生'],
    '闯关': ['闯关', '闯关任务', '任务', '通识', '学习', '游学'],
    'SOC': ['SOC', 'soc', 'soci', 'HRGSOC', '人力资源', '小课堂']
};

// 根据搜索词获取所有相关的搜索词（包含同义词）
function getExpandedSearchTerms(searchTerm) {
    const terms = [searchTerm];

    // 检查是否有同义词映射
    for (const [key, synonyms] of Object.entries(synonymMap)) {
        // 如果搜索词匹配到某个同义词组
        if (synonyms.some(syn => syn.includes(searchTerm) || searchTerm.includes(syn))) {
            // 添加该组的所有同义词
            synonyms.forEach(syn => {
                if (!terms.includes(syn)) {
                    terms.push(syn);
                }
            });
        }
    }

    return terms;
}

// 执行搜索
function performSearch(query) {
    if (!query.trim()) {
        alert('请输入搜索关键词');
        return;
    }

    const searchTerm = query.toLowerCase().trim();
    const searchTerms = getExpandedSearchTerms(searchTerm);
    const results = [];

    // 搜索所有页面和section
    searchIndex.forEach(page => {
        // 搜索页面名称
        if (page.page.toLowerCase().includes(searchTerm)) {
            results.push({
                type: 'page',
                page: page.page,
                title: page.page,
                url: page.url,
                section: null,
                score: 3
            });
        }

        // 搜索每个section
        page.sections.forEach(section => {
            let score = 0;

            // 使用扩展的搜索词进行匹配
            searchTerms.forEach(term => {
                const termLower = term.toLowerCase();

                // 标题匹配
                if (section.title.toLowerCase().includes(termLower)) {
                    score += 3;
                }

                // 关键词匹配
                if (section.keywords.toLowerCase().includes(termLower)) {
                    score += 2;
                }

                // 内容匹配
                if (section.content.toLowerCase().includes(termLower)) {
                    score += 1;
                }
            });

            if (score > 0) {
                results.push({
                    type: 'section',
                    page: page.page,
                    title: section.title,
                    url: `${page.url}#${section.id}`,
                    section: section.id,
                    score: score
                });
            }
        });
    });

    // 按分数排序
    results.sort((a, b) => b.score - a.score);

    // 显示搜索结果
    if (results.length === 0) {
        alert('未找到相关内容\n\n请尝试其他关键词');
    } else {
        showSearchResults(query, results);
    }
}

// 显示搜索结果
function showSearchResults(query, results) {
    // 创建搜索结果弹窗
    const modal = document.createElement('div');
    modal.className = 'search-results-modal';

    let resultsHTML = `
        <div class="search-results-content">
            <div class="search-results-header">
                <h3>搜索结果: "${query}"</h3>
                <button class="close-results-btn">&times;</button>
            </div>
            <div class="search-results-list">
    `;

    results.forEach(result => {
        const typeLabel = result.type === 'page' ? '页面' : '章节';
        resultsHTML += `
            <a href="${result.url}" class="search-result-item" onclick="closeSearchModal()">
                <div class="result-header">
                    <span class="result-type">${typeLabel}</span>
                    <span class="result-page">${result.page}</span>
                </div>
                <div class="result-title">${result.title}</div>
            </a>
        `;
    });

    resultsHTML += `
            </div>
            <div class="search-results-footer">
                <p>找到 ${results.length} 个相关结果</p>
            </div>
        </div>
    `;

    modal.innerHTML = resultsHTML;

    // 添加样式
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.2s ease-out;
    `;

    const content = modal.querySelector('.search-results-content');
    content.style.cssText = `
        background: white;
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    `;

    modal.querySelector('.search-results-header').style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 1.5rem;
        border-bottom: 1px solid #f0f0f0;
    `;

    modal.querySelector('.search-results-header h3').style.cssText = `
        margin: 0;
        font-size: 1.25rem;
        color: #1a1a1a;
    `;

    modal.querySelector('.close-results-btn').style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.2s ease;
    `;

    modal.querySelector('.close-results-btn').addEventListener('mouseover', function() {
        this.style.background = '#f5f5f5';
    });

    modal.querySelector('.close-results-btn').addEventListener('mouseout', function() {
        this.style.background = 'none';
    });

    const list = modal.querySelector('.search-results-list');
    list.style.cssText = `
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
    `;

    modal.querySelectorAll('.search-result-item').forEach(item => {
        item.style.cssText = `
            display: block;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px;
            margin-bottom: 0.75rem;
            text-decoration: none;
            color: inherit;
            transition: all 0.2s ease;
            border: 1px solid #e9ecef;
        `;

        item.addEventListener('mouseover', function() {
            this.style.background = '#e9ecef';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        });

        item.addEventListener('mouseout', function() {
            this.style.background = '#f8f9fa';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    modal.querySelectorAll('.result-header').forEach(header => {
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
        `;

        const type = header.querySelector('.result-type');
        type.style.cssText = `
            background: linear-gradient(135deg, #e60012 0%, #ff3b3b 100%);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 500;
        `;

        const page = header.querySelector('.result-page');
        page.style.cssText = `
            font-size: 0.75rem;
            color: #888;
        `;
    });

    modal.querySelectorAll('.result-title').forEach(title => {
        title.style.cssText = `
            margin: 0;
            font-size: 1rem;
            font-weight: 500;
            color: #1a1a1a;
        `;
    });

    modal.querySelector('.search-results-footer').style.cssText = `
        padding: 1rem 1.5rem;
        border-top: 1px solid #f0f0f0;
        text-align: center;
        color: #888;
        font-size: 0.875rem;
    `;

    modal.querySelector('.search-results-footer p').style.cssText = `
        margin: 0;
    `;

    // 关闭按钮事件
    modal.querySelector('.close-results-btn').addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape' && document.body.contains(modal)) {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', closeOnEsc);
        }
    });

    document.body.appendChild(modal);
}

// 关闭搜索弹窗（用于在跳转前调用）
window.closeSearchModal = function() {
    const modal = document.querySelector('.search-results-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
};

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
        updateCountdownDisplay(2026, 6); // 2026年7月
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

    /* 搜索结果滚动条样式 */
    .search-results-list::-webkit-scrollbar {
        width: 6px;
    }

    .search-results-list::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }

    .search-results-list::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }

    .search-results-list::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
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