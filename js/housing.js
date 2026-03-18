// 安居指南模块 JavaScript

// 各地交通报销和周边租房数据
const housingData = {
    guangzhou: {
        name: '广州',
        transport: {
            condition: {
                title: '适用对象',
                text: '公司将为【非当地院校且非当地户籍】的同学们报销报到时的单程路费（不含行李托运费、打包费等其他费用）',
                example: '例如：入职广州区域的同学，如果是广州院校毕业或拥有广州户籍则无法报销'
            },
            sections: [
                {
                    title: '路费报销规则',
                    icon: '📋',
                    content: '在下述标准内实报实销，超出标准部分由个人承担',
                    subsections: [
                        {
                            title: 'A. 出发地可直达至工作地',
                            list: [
                                '火车：以硬卧下铺票价封顶',
                                '高铁：以二等座票价封顶',
                                '飞机：以相应行程的高铁二等座票或火车硬卧下铺金额，就高原则予以报销'
                            ]
                        },
                        {
                            title: 'B. 出发地无法直达至工作地',
                            content: ['转乘出发时间需与上一程到达原则上应在同一天内'],
                            list: [
                                '火车或高铁多程组合到达工作地：按每段行程火车硬卧下铺或高铁二等座票标准封顶，标准范围内分段累计报销',
                                '飞机多程到达工作地：以每段行程相应的高铁二等座票或火车硬卧下铺标准封顶，标准范围内就高原则进行累计报销',
                                '对于非客观原因所致的转乘，参考出发地至工作地可直达的火车硬卧下铺或高铁二等座标准，就高原则予以报销，不分段累计报销'
                            ]
                        },
                        {
                            title: 'C. 境外院校生入境',
                            content: ['交通费统一报销上限为2000元，若涉及外币结算，则按照交通费付费当天的汇率折算。']
                        }
                    ]
                },
                {
                    title: '报销材料提交时间',
                    icon: '⏰',
                    subsections: [
                        {
                            content: [
                                '入职后一个月内提交至HR共享运营中心，逾期不予受理。',
                                '票据将由HR共享运营中心统一报销，费用将划入发薪工资账户中。',
                                '请大家务必留存好车票原件、飞机票行程单原件，丢失或损毁将无法报销。'
                            ]
                        }
                    ]
                },
                {
                    title: '备注',
                    icon: '📌',
                    subsections: [
                        {
                            content: ['如乘坐飞机但无法开具行程单原件，可提供公司抬头的发票进行报销（发票若无公司抬头及税号信息无法报销，请留意）。']
                        },
                        {
                            content: ['原则上每人享受一次报到交通费报销，取得校招Offer提前到公司实习的，交通费报销在办理入职成为正式员工后进行，根据应届正职员工报销标准进行。']
                        }
                    ],
                    infoBox: {
                        title: '公司抬头与税号',
                        items: [
                            { label: '广州公司抬头', value: '广州博冠信息科技有限公司' },
                            { label: '税号', value: '91440101755585983Y' }
                        ]
                    }
                }
            ]
        },
        renting: {
            sections: [
                {
                    title: '酒店住宿安排',
                    icon: '🏨',
                    condition: {
                        title: '适用对象',
                        text: '公司可为【非当地院校且非当地户籍】的毕业生提供短期免费酒店住宿',
                        example: '例如：入职广州区域的同学，如果是广州院校毕业或拥有广州户籍则不提供'
                    },
                    subsections: [
                        {
                            content: [
                                'HR共享运营中心将在入职前发送入职问卷，届时请在入职问卷中填写是否需公司安排住宿。',
                                '入住时间将由HR共享运营中心后续通过《入职欢迎信》发送给您，入住的短信凭证将在入职前一周内发送给您。'
                            ]
                        }
                    ]
                },
                {
                    title: '周边租房指南',
                    icon: '🏠',
                    subsections: [
                        {
                            content: ['附上各园区周边房屋租赁资源如下：']
                        }
                    ],
                    links: [
                        {
                            text: '高唐片区租房指南',
                            url: 'https://docs.popo.netease.com/ofedit/11083095032446b5b9c569c20b34d40b'
                        },
                        {
                            text: '网易大厦租房指南',
                            url: 'https://docs.popo.netease.com/docs/628e8480c6c241b6a63f8c598b74a4ba'
                        }
                    ]
                }
            ]
        }
    },
    shanghai: {
        name: '上海',
        transport: {
            condition: {
                title: '适用对象',
                text: '公司将为【非当地院校且非当地户籍】的同学们报销报到时的单程路费（不含行李托运费、打包费等其他费用）',
                example: '例如：入职上海区域的同学，如果是上海院校毕业或拥有上海户籍则无法报销'
            },
            sections: [
                {
                    title: '路费报销规则',
                    icon: '📋',
                    content: '在下述标准内实报实销，超出标准部分由个人承担',
                    subsections: [
                        {
                            title: 'A. 出发地可直达至工作地',
                            list: [
                                '火车：以硬卧下铺票价封顶',
                                '高铁：以二等座票价封顶',
                                '飞机：以相应行程的高铁二等座票或火车硬卧下铺金额，就高原则予以报销'
                            ]
                        },
                        {
                            title: 'B. 出发地无法直达至工作地',
                            content: ['转乘出发时间需与上一程到达原则上应在同一天内'],
                            list: [
                                '火车或高铁多程组合到达工作地：按每段行程火车硬卧下铺或高铁二等座票标准封顶，标准范围内分段累计报销',
                                '飞机多程到达工作地：以每段行程相应的高铁二等座票或火车硬卧下铺标准封顶，标准范围内就高原则进行累计报销',
                                '对于非客观原因所致的转乘，参考出发地至工作地可直达的火车硬卧下铺或高铁二等座标准，就高原则予以报销，不分段累计报销'
                            ]
                        },
                        {
                            title: 'C. 境外院校生入境',
                            content: ['交通费统一报销上限为2000元，若涉及外币结算，则按照交通费付费当天的汇率折算。']
                        }
                    ]
                },
                {
                    title: '报销材料提交时间',
                    icon: '⏰',
                    subsections: [
                        {
                            content: [
                                '入职后一个月内提交至HR共享运营中心，逾期不予受理。',
                                '票据将由HR共享运营中心统一报销，费用将划入发薪工资账户中。',
                                '请大家务必留存好车票原件、飞机票行程单原件，丢失或损毁将无法报销。'
                            ]
                        }
                    ]
                },
                {
                    title: '备注',
                    icon: '📌',
                    subsections: [
                        {
                            content: ['如乘坐飞机但无法开具行程单原件，可提供公司抬头的发票进行报销（发票若无公司抬头及税号信息无法报销，请留意）。']
                        },
                        {
                            content: ['原则上每人享受一次报到交通费报销，取得校招Offer提前到公司实习的，交通费报销在办理入职成为正式员工后进行，根据应届正职员工报销标准进行。']
                        }
                    ],
                    infoBox: {
                        title: '公司抬头与税号',
                        items: [
                            { label: '上海公司抬头', value: '网易（上海）网络有限公司' },
                            { label: '税号', value: '91310000MA1JN0R46J' }
                        ]
                    }
                }
            ]
        },
        renting: {
            sections: [
                {
                    title: '酒店住宿安排',
                    icon: '🏨',
                    condition: {
                        title: '适用对象',
                        text: '公司可为【非当地院校且非当地户籍】的毕业生提供短期免费酒店住宿',
                        example: '例如：入职上海区域的同学，如果是上海院校毕业或拥有上海户籍则不提供'
                    },
                    subsections: [
                        {
                            content: [
                                'HR共享运营中心将在入职前发送入职问卷，届时请在入职问卷中填写是否需公司安排住宿。',
                                '入住时间将由HR共享运营中心后续通过《入职欢迎信》发送给您，入住的短信凭证将在入职前一周内发送给您。'
                            ]
                        }
                    ]
                },
                {
                    title: '周边租房指南',
                    icon: '🏠',
                    subsections: [
                        {
                            content: ['附上各园区周边房屋租赁资源如下：']
                        }
                    ],
                    links: [
                        {
                            text: '上海租房指南',
                            url: 'https://docs.popo.netease.com/lingxi/f681728a2df640229ab5e5075b5a1ec6'
                        }
                    ]
                }
            ]
        }
    },
    hangzhou: {
        name: '杭州',
        transport: {
            condition: {
                title: '适用对象',
                text: '公司将为【非当地院校且非当地户籍】的同学们报销报到时的单程路费（不含行李托运费、打包费等其他费用）',
                example: '例如：入职杭州区域的同学，如果是杭州院校毕业或拥有杭州户籍则无法报销'
            },
            sections: [
                {
                    title: '路费报销规则',
                    icon: '📋',
                    content: '在下述标准内实报实销，超出标准部分由个人承担',
                    subsections: [
                        {
                            title: 'A. 出发地可直达至工作地',
                            list: [
                                '火车：以硬卧下铺票价封顶',
                                '高铁：以二等座票价封顶',
                                '飞机：以相应行程的高铁二等座票或火车硬卧下铺金额，就高原则予以报销'
                            ]
                        },
                        {
                            title: 'B. 出发地无法直达至工作地',
                            content: ['转乘出发时间需与上一程到达原则上应在同一天内'],
                            list: [
                                '火车或高铁多程组合到达工作地：按每段行程火车硬卧下铺或高铁二等座票标准封顶，标准范围内分段累计报销',
                                '飞机多程到达工作地：以每段行程相应的高铁二等座票或火车硬卧下铺标准封顶，标准范围内就高原则进行累计报销',
                                '对于非客观原因所致的转乘，参考出发地至工作地可直达的火车硬卧下铺或高铁二等座标准，就高原则予以报销，不分段累计报销'
                            ]
                        },
                        {
                            title: 'C. 境外院校生入境',
                            content: ['交通费统一报销上限为2000元，若涉及外币结算，则按照交通费付费当天的汇率折算。']
                        }
                    ]
                },
                {
                    title: '报销材料提交时间',
                    icon: '⏰',
                    subsections: [
                        {
                            content: [
                                '入职后一个月内提交至HR共享运营中心，逾期不予受理。',
                                '票据将由HR共享运营中心统一报销，费用将划入发薪工资账户中。',
                                '请大家务必留存好车票原件、飞机票行程单原件，丢失或损毁将无法报销。'
                            ]
                        }
                    ]
                },
                {
                    title: '备注',
                    icon: '📌',
                    subsections: [
                        {
                            content: ['如乘坐飞机但无法开具行程单原件，可提供公司抬头的发票进行报销（发票若无公司抬头及税号信息无法报销，请留意）。']
                        },
                        {
                            content: ['原则上每人享受一次报到交通费报销，取得校招Offer提前到公司实习的，交通费报销在办理入职成为正式员工后进行，根据应届正职员工报销标准进行。']
                        }
                    ],
                    infoBox: {
                        title: '公司抬头与税号',
                        items: [
                            { label: '杭州公司抬头', value: '网易（杭州）网络有限公司' },
                            { label: '税号', value: '91330000788831167A' }
                        ]
                    }
                }
            ]
        },
        renting: {
            sections: [
                {
                    title: '酒店住宿安排',
                    icon: '🏨',
                    condition: {
                        title: '适用对象',
                        text: '公司可为【非当地院校且非当地户籍】的毕业生提供短期免费酒店住宿',
                        example: '例如：入职杭州区域的同学，如果是杭州院校毕业或拥有杭州户籍则不提供'
                    },
                    subsections: [
                        {
                            content: [
                                'HR共享运营中心将在入职前发送入职问卷，届时请在入职问卷中填写是否需公司安排住宿。',
                                '入住时间将由HR共享运营中心后续通过《入职欢迎信》发送给您，入住的短信凭证将在入职前一周内发送给您。'
                            ]
                        }
                    ]
                },
                {
                    title: '周边租房指南',
                    icon: '🏠',
                    subsections: [
                        {
                            content: ['附上各园区周边房屋租赁资源如下：']
                        }
                    ],
                    links: [
                        {
                            text: '杭州租房指南',
                            url: 'https://docs.popo.netease.com/lingxi/24b39007a4314a4192b8707be2c1ba46'
                        }
                    ]
                }
            ]
        }
    }
};

// 当前选中的工作地
let currentLocation = 'guangzhou';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initLocationSelector();
    updateContent(currentLocation);
    initReadingNav();
});

// 初始化工作地选择器
function initLocationSelector() {
    const locationBtns = document.querySelectorAll('.location-btn');
    
    locationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的active状态
            locationBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active状态
            this.classList.add('active');
            
            // 更新当前工作地
            currentLocation = this.dataset.location;
            
            // 更新内容
            updateContent(currentLocation);
        });
    });
}

// 更新内容显示
function updateContent(location) {
    const data = housingData[location];
    if (!data) return;
    
    // 更新交通报销内容
    updateTransportContent('transport-content', data.transport);
    
    // 更新周边租房内容
    updateRentingContent('renting-content', data.renting);
}

// 更新交通报销内容
function updateTransportContent(containerId, transportData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    
    // 条件提示框
    if (transportData.condition) {
        html += `<div class="condition-box">`;
        html += `<div class="condition-icon">⚠️</div>`;
        html += `<div class="condition-content">`;
        html += `<div class="condition-title">${transportData.condition.title}</div>`;
        html += `<p class="condition-text">${transportData.condition.text}</p>`;
        if (transportData.condition.example) {
            html += `<p class="condition-example">${transportData.condition.example}</p>`;
        }
        html += `</div>`;
        html += `</div>`;
    }
    
    // 各部分内容
    if (transportData.sections) {
        transportData.sections.forEach((section, sIndex) => {
            html += `<div class="content-section">`;
            html += `<div class="section-title-bar">`;
            html += `<span class="section-icon">${section.icon}</span>`;
            html += `<h3 class="section-title-text">${section.title}</h3>`;
            html += `</div>`;
            
            // 如果有内容描述
            if (section.content) {
                html += `<p class="subsection-content" style="margin-bottom: 0.75rem;">${section.content}</p>`;
            }
            
            // 子项内容
            if (section.subsections) {
                section.subsections.forEach((sub, subIndex) => {
                    html += `<div class="subsection">`;
                    
                    if (sub.title) {
                        html += `<div class="subsection-title">${sub.title}</div>`;
                    }
                    
                    if (sub.content) {
                        html += `<div class="subsection-content">`;
                        sub.content.forEach(p => {
                            html += `<p>${p}</p>`;
                        });
                        html += `</div>`;
                    }
                    
                    if (sub.list) {
                        html += `<ul class="subsection-list">`;
                        sub.list.forEach(item => {
                            html += `<li>${item}</li>`;
                        });
                        html += `</ul>`;
                    }
                    
                    html += `</div>`;
                });
            }
            
            // 信息框
            if (section.infoBox) {
                html += `<div class="info-box">`;
                html += `<div class="info-box-title">${section.infoBox.title}</div>`;
                html += `<div class="info-box-items">`;
                section.infoBox.items.forEach(item => {
                    html += `<div class="info-item">`;
                    html += `<span class="info-label">${item.label}：</span>`;
                    html += `<span class="info-value">${item.value}</span>`;
                    html += `</div>`;
                });
                html += `</div>`;
                html += `</div>`;
            }
            
            html += `</div>`;
        });
    }
    
    container.innerHTML = html;
    container.style.animation = 'fadeIn 0.3s ease-out';
}

// 更新周边租房内容
function updateRentingContent(containerId, rentingData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    
    // 各部分内容
    if (rentingData.sections) {
        rentingData.sections.forEach((section, sIndex) => {
            html += `<div class="content-section">`;
            html += `<div class="section-title-bar">`;
            html += `<span class="section-icon">${section.icon}</span>`;
            html += `<h3 class="section-title-text">${section.title}</h3>`;
            html += `</div>`;
            
            // 条件提示框（在section内部）
            if (section.condition) {
                html += `<div class="condition-box">`;
                html += `<div class="condition-icon">⚠️</div>`;
                html += `<div class="condition-content">`;
                html += `<div class="condition-title">${section.condition.title}</div>`;
                html += `<p class="condition-text">${section.condition.text}</p>`;
                if (section.condition.example) {
                    html += `<p class="condition-example">${section.condition.example}</p>`;
                }
                html += `</div>`;
                html += `</div>`;
            }
            
            // 子项内容
            if (section.subsections) {
                section.subsections.forEach((sub, subIndex) => {
                    html += `<div class="subsection">`;
                    
                    if (sub.title) {
                        html += `<div class="subsection-title">${sub.title}</div>`;
                    }
                    
                    if (sub.content) {
                        html += `<div class="subsection-content">`;
                        sub.content.forEach(p => {
                            html += `<p>${p}</p>`;
                        });
                        html += `</div>`;
                    }
                    
                    html += `</div>`;
                });
            }
            
            // 链接卡片
            if (section.links) {
                section.links.forEach(link => {
                    html += `<a href="${link.url}" target="_blank" class="link-card">`;
                    html += `<span class="link-icon">🔗</span>`;
                    html += `<span class="link-text">${link.text}</span>`;
                    html += `<span class="link-arrow">›</span>`;
                    html += `</a>`;
                });
            }
            
            html += `</div>`;
        });
    }
    
    container.innerHTML = html;
    container.style.animation = 'fadeIn 0.3s ease-out';
}

// 返回首页
function goHome() {
    window.location.href = 'index.html';
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

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

