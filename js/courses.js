// 新人必修模块 JavaScript

// 资讯数据
const coursesData = [
    {
        date: '5月13日',
        title: '【SOCI小课堂】福利假期 · 健康陪护假 & 病假须知~',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://docs.popo.netease.com/lingxi/fc590107b0c0478faaab266a515ff8c6?xyz=1778580126125&appVersion=4.39.0&deviceType=0&popo_hidenativebar=1&popo_noindicator=1&disposable_login_token=1&xyz=1778640315115#LKJtMvmLd'
    },
    {
        date: '5月11日',
        title: '本月的【游戏新鲜事】：5月【通识作战】游戏新鲜事~另外，本月的AI小课堂也已上线，欢迎大家积极学习~【AI小课堂】AI 编程的底层原则——回归软件工程基本功，才是驾驭AI的正解，请自行前往游戏学堂学习~',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://game.academy.163.com/training/course/760'
    },
    {
        date: '5月6日',
        title: '【SOCI小课堂】网易年假介绍！',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        video: 'neteaseannualleave260506.mp4'
    },
    {
        date: '4月29日',
        title: '【SOCI小课堂】个税专项附加扣除，你的减税好帮手~',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://docs.popo.netease.com/lingxi/fc590107b0c0478faaab266a515ff8c6?xyz=1777343026600&appVersion=4.39.0&deviceType=0&popo_hidenativebar=1&popo_noindicator=1&disposable_login_token=1&xyz=1777343661160#CrcQ5twWf'
    },
    {
        date: '4月23日',
        title: '网易游戏高校MINI GAME挑战赛21号已全面火热开启！详情请关注新人群资讯~~',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://survey.hz.netease.com/htmls/akezvs/paper_internal.html'
    },
    {
        date: '4月22日',
        title: '【SOCI小课堂】商业保险是什么？',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://docs.popo.netease.com/lingxi/fc590107b0c0478faaab266a515ff8c6?xyz=1776823451946&appVersion=4.37.1&deviceType=0&popo_hidenativebar=1&popo_noindicator=1&disposable_login_token=1&xyz=1776840813025#KOA_2N_uW'
    },
    {
        date: '4月20日',
        title: '本月【审美提升】的主题为『叙事表达』，涵盖四门课程~请自行前往学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: null
    },
    {
        date: '4月15日',
        title: '【SOCI小课堂】五险一金的钱去哪了？',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://docs.popo.netease.com/lingxi/fc590107b0c0478faaab266a515ff8c6?appVersion=4.41.0&deviceType=0&popo_hidenativebar=1&popo_noindicator=1&disposable_login_token=1&xyz=1776217436707#EKGj-1775529848060'
    },
    {
        date: '4月13日',
        title: '【UX&营销】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://ks.wjx.com/vm/tgRObdl.aspx#'
    },
    {
        date: '4月8日',
        title: '【SOCI小课堂】开课！一起来了解，五险一金是什么？',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://docs.popo.netease.com/lingxi/fc590107b0c0478faaab266a515ff8c6'
    },
    {
        date: '4月7日',
        title: '【PM通识】PM术语百科帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://ks.wjx.com/vm/YETMBT5.aspx#'
    },
    {
        date: '3月31日',
        title: '【AI小课堂】也给大家带来了关于openclaw的介绍，帮助大家了解~',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://game.academy.163.com/training/course/764'
    },
    {
        date: '3月31日',
        title: '【SOCI简报】Soci出发站震撼首发！各类"干货"汇聚一堂，你不仅可以获悉档户处理、交通报销等指引流程，还可以在VR实景里提前逛园区，更有周边租房攻略等你来看！有问题？点击右下方Soci头像进入hrhelp咨询。欢迎点击站内小窗口，反馈你的意见~',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://soci.popo.lcap.163yun.com/index/index'
    },
    {
        date: '3月30日',
        title: '【QA通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://ks.wjx.com/vm/OXmbcwr.aspx#'
    },
    {
        date: '3月25日',
        title: '【SOCI小课堂】Soci带你了解网易的那些事儿！先花2分钟，到首页【公司初识】看看网易的故事，再玩个游戏，解锁7个彩蛋！',
        tagType: 'society',
        tags: [
            { type: 'society', text: 'soci小课堂' },
            { type: 'group', text: '全序列' }
        ],
        link: 'http://xiaozhao260319.popo.lcap.163yun.com/m/index/CampusRecruitment'
    },
    {
        date: '3月23日',
        title: '【艺术通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://ks.wjx.com/vm/Yj1hyAM.aspx#'
    },
    {
        date: '3月16日',
        title: '【程序通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
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
            { type: 'info', text: 'NPC任务' },
            { type: 'group', text: '全序列' }
        ],
        link: 'https://163.lu/uW8Nrs'
    },
    {
        date: '3月2日',
        title: '【游戏行业通识】帖子现已开放，请前往游学自行学习',
        tagType: 'info',
        tags: [
            { type: 'info', text: 'NPC任务' },
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

        // 生成链接、视频或提示HTML
        let linkHtml = '';
        if (item.video) {
            linkHtml = `
                <div class="timeline-video">
                    <video controls class="timeline-video-player">
                        <source src="images/${item.video}" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                </div>
            `;
        } else if (item.link) {
            const btnText = item.date === '3月25日' ? '进入游戏' : (item.date === '3月31日' || item.date === '4月8日' || item.date === '4月15日' || item.date === '4月22日' || item.date === '4月23日' || item.date === '4月29日' || item.date === '5月13日' ? '前往了解' : (item.date === '5月11日' ? '前往学习' : '前往考验'));
            linkHtml = `<a href="${item.link}" target="_blank" class="timeline-link">${btnText}</a>`;
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
