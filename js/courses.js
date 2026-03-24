// 新人必修模块 JavaScript

// 资讯数据
const coursesData = [
    {
        date: '3月23日',
        title: '【艺术通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: '闯关任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://ks.wjx.com/vm/Yj1hyAM.aspx#'
    },
    {
        date: '3月16日',
        title: '【程序通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: '闯关任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://ks.wjx.com/vm/eInIXFY.aspx#'
    },
    {
        date: '3月11日',
        title: '【SOCI简报】Soci小助进驻新人培训popo群啦~HR相关服务咨询小助手常在你身边~',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: null
    },
    {
        date: '3月9日',
        title: '【策划通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: '闯关任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://163.lu/uW8Nrs'
    },
    {
        date: '3月2日',
        title: '【游戏行业通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: '闯关任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://163.lu/3PLHGQ'
    }
];

// 当前筛选类型
let currentFilter = 'all';

// 返回首页
function goHome() {
    window.location.href = 'index.html';
}

// 筛选功能
function initFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新按钮状态
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 更新筛选类型
            currentFilter = this.dataset.filter;

            // 重新渲染时间线
            renderTimeline();
        });
    });
}

// 渲染时间线
function renderTimeline(filterType = currentFilter) {
    const container = document.querySelector('.timeline-container');

    if (!container || coursesData.length === 0) {
        container.innerHTML = `
            <div class="timeline-empty">
                <div class="timeline-empty-icon">📚</div>
                <p class="timeline-empty-text">暂无资讯内容</p>
            </div>
        `;
        return;
    }

    // 根据筛选类型过滤数据
    let filteredData = coursesData;
    if (filterType !== 'all') {
        filteredData = coursesData.filter(item => item.tagType === filterType);
    }

    // 如果筛选后没有数据
    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="timeline-empty">
                <div class="timeline-empty-icon">🔍</div>
                <p class="timeline-empty-text">暂无匹配的资讯</p>
            </div>
        `;
        return;
    }

    let html = '';

    filteredData.forEach((item, index) => {
        // 生成标签HTML
        let tagsHtml = '';
        item.tags.forEach(tag => {
            if (tag.type === 'info') {
                tagsHtml += `<span class="tag-info">${tag.text}</span>`;
            } else if (tag.type === 'society') {
                tagsHtml += `<span class="tag-society">${tag.text}</span>`;
            } else if (tag.type === 'group') {
                tagsHtml += `<span class="tag-group">${tag.text}</span>`;
            }
        });

        // 生成链接或提示HTML
        let linkHtml = '';
        if (item.link) {
            linkHtml = `<a href="${item.link}" target="_blank" class="timeline-link">前往学习</a>`;
        } else {
            linkHtml = `<span class="timeline-hint">请关注内部通知</span>`;
        }

        html += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-date">${item.date}</div>
                    <h3 class="timeline-title">${item.title}</h3>
                    <div class="timeline-tags">${tagsHtml}</div>
                    ${linkHtml}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initFilter();
    renderTimeline();
});
