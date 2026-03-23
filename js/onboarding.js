// 入职准备模块 JavaScript

// 各地档户处理和党关系转移数据
const locationData = {
    guangzhou: {
        name: '广州',
        dossier: {
            sections: [
                {
                    title: '境内学历档案户口挂靠',
                    icon: '🎓',
                    subsections: [
                        {
                            title: '档案挂靠',
                            content: [
                                '公司提供在职员工的档案挂靠',
                                '签订三方协议时，如选择了挂靠档案，并将《单位接收函》提供给学校，档案由学校直接寄到以下地址：'
                            ],
                            infoBox: {
                                title: '档案接收信息',
                                items: [
                                    { label: '档案存放机构', value: '广东南油对外服务有限公司' },
                                    { label: '档案接收地址', value: '广州市越秀区德政北路538号达信大厦20楼' },
                                    { label: '联系人', value: '周锦怡' },
                                    { label: '联系电话', value: '020-83820783' }
                                ],
                                note: '网易公司无人事档案接收权，将委托专业人力资源服务公司---广东南油对外服务有限公司，来协助处理接收校招毕业生落户落档事宜，其仅作为档案户口接收机构。'
                            }
                        },
                        {
                            title: '集体户口挂靠',
                            content: [
                                '公司提供在职员工的集体户口挂靠',
                                '前提：选择档案挂靠公司，顺利拿到毕业证书和学位证书'
                            ],
                            infoBox: {
                                title: '户口迁入信息',
                                items: [
                                    { label: '迁入地址', value: '广州市越秀区环市东路505号' },
                                    { label: '对应派出所', value: '广州市公安局黄花岗派出所' }
                                ],
                                note: '如当前户口为集体户口：请提前联系集体户管理员获取集体户首页复印件加盖红章+个人页原件'
                            }
                        }
                    ]
                },
                {
                    title: '境外学历档案户口挂靠',
                    icon: '🌏',
                    subsections: [
                        {
                            title: '办理条件（个人条件）',
                            content: [
                                '符合以下条件之一即可：'
                            ],
                            list: [
                                '具有经教育部认证的国（境）外学士学位',
                                '具有研究生以上学历或硕士以上学位'
                            ]
                        },
                        {
                            title: '社保条件',
                            content: [
                                '在公司缴纳一个月社保即可办理'
                            ]
                        },
                        {
                            title: '转档流程',
                            content: [
                                '注：办理落户不要求转入档案，自愿选择转入档案'
                            ],
                            steps: [
                                '需先确认目前档案保管单位全称',
                                '正式<strong style="color: red;">入职后</strong>联系HR共享运营中心办理档案调入'
                            ]
                        },
                        {
                            title: '指引发送',
                            content: [
                                'HR共享运营中心将在入职前发送挂靠指引给您，请留意查收'
                            ]
                        }
                    ]
                },
                {
                    title: '落户材料下载及指引',
                    icon: '📄',
                    link: {
                        text: '2025年应届生档户办理指引',
                        url: 'https://note.youdao.com/ynoteshare/index.html?id=ba600022cc3e675938b3892ee560bcd4&type=note&_time=1743581549485'
                    }
                }
            ]
        },
        league: {
            content: '公司暂无团员关系管理，如学校无特殊要求，建议转回家里所属的团支部。'
        },
        party: {
            sections: [
                {
                    title: '党组织关系转入说明',
                    icon: '📋',
                    subsections: [
                        {
                            title: '原单位在广东省内',
                            content: [
                                '由原党组织在广东省党务系统中开具电子介绍信，将你的党员关系转至：'
                            ],
                            highlight: '广州网易计算机系统有限公司党委（或网易公司党委）'
                        },
                        {
                            title: '原单位在广东省外',
                            content: [
                                '向原党组织申请纸质的介绍信：'
                            ],
                            list: [
                                '抬头为：天河科技园党委',
                                '去向为：广州网易计算机系统有限公司党委'
                            ]
                        }
                    ]
                },
                {
                    title: '备注',
                    icon: '📌',
                    subsections: [
                        {
                            content: [
                                '可提前与学校档案室申请打印全本入党志愿书的复印件（需整本复印）'
                            ]
                        },
                        {
                            content: [
                                '具体转入操作需<strong style="color: red;">入职后</strong>方可进行，避免政策变更影响，建议正式办理转入前先沟通确认'
                            ]
                        },
                        {
                            content: [
                                '<strong style="color: red;">入职后</strong>按照上述指引备齐资料后，提交给党建同学'
                            ]
                        }
                    ]
                }
            ],
            link: {
                text: '【广州】党组织关系转入流程',
                url: 'https://mp.popo.netease.com/pt/show?identify=AM2SDOV45u7Bu993gcegEO'
            }
        }
    },
    shanghai: {
        name: '上海',
        dossier: {
            sections: [
                {
                    title: '档案户口挂靠',
                    icon: '🔺',
                    subsections: [
                        {
                            title: '档案挂靠',
                            content: [
                                '公司暂无档案管理服务，建议您的档案从学校转回户籍地所在街道。'
                            ]
                        },
                        {
                            title: '户口挂靠',
                            content: [
                                '公司暂无集体户口，因此您无法直接落户至公司集体户。如您有落户上海的需求，公司可协助您办理上海应届生落户相关手续，您可通过上述咨询通道告知HR共享运营中心，我们将以邮件形式提供您最新的落户流程指引。后续请按照邮件要求提交相关材料，并签署相应落户协议。'
                            ]
                        },
                        {
                            title: '备注',
                            content: [
                                '如您入职网易公司未满2年（无论任何原因）离职，按照落户协议需于离职前向网易公司支付办理落户所需的服务费。'
                            ]
                        }
                    ]
                }
            ]
        },
        league: {
            content: '公司暂无团员关系管理，建议转回户籍地所在街道的团支部。'
        },
        party: {
            sections: [
                {
                    title: '党组织关系转入说明',
                    icon: '📋',
                    subsections: [
                        {
                            content: [
                                '上海尚未成立党组织，不强制要求转入，可保留原处或转至户籍所在地党委便于参与组织活动。若确实有转入的需要，可参考以下流程，转至网易北京党委'
                            ]
                        }
                    ]
                }
            ],
            link: {
                text: '网易党委（北京）党员组织关系接转说明',
                url: 'https://mp.weixin.qq.com/s/UVbQ-GKxdJrZp6NnE0W3VA'
            },
            contact: {
                title: '咨询联系方式',
                name: '王佳雯',
                email: 'wangjiawen10@corp.netease.com'
            }
        }
    },
    hangzhou: {
        name: '杭州',
        dossier: {
            sections: [
                {
                    title: '境内学历档案户口挂靠',
                    icon: '🎓',
                    subsections: [
                        {
                            title: '档案挂靠',
                            content: [
                                '公司提供在职员工的档案挂靠',
                                '签订三方协议时，如选择了挂靠档案，档案由学校直接寄到以下地址：'
                            ],
                            infoBox: {
                                title: '档案接收信息',
                                items: [
                                    { label: '档案存放机构', value: '浙江省人才市场' },
                                    { label: '档案接收地址', value: '杭州市古翠路50号' },
                                    { label: '联系人', value: '档案部' },
                                    { label: '联系电话', value: '0571-88397127' }
                                ]
                            }
                        },
                        {
                            title: '集体户口挂靠',
                            content: [
                                '公司提供在职员工的集体户口挂靠',
                                '前提：选择档案挂靠公司，顺利拿到毕业证书和学位证书'
                            ],
                            infoBox: {
                                title: '户口迁入信息',
                                items: [
                                    { label: '迁入地址', value: '浙江省杭州市司马渡巷60号' },
                                    { label: '对应派出所', value: '杭州市小营派出所' }
                                ]
                            }
                        }
                    ]
                },
                {
                    title: '境内和境外学历档案户口挂靠所需材料',
                    icon: '📄',
                    note: '办理落户要求先转入人事档案，境外学历需先确认目前档案保管的机构全称，正式<strong style="color: red;">入职后</strong>联系HR共享运营中心办理档案调入。',
                        warning: {
                        text: '如流程图清晰度不足，请前往《互娱校招生入职初期适用手册》查阅',
                        link: {
                            text: '互娱校招生入职初期适用手册',
                            url: 'https://docs.popo.netease.com/lingxi/49d7a411e8684d21a5273b3e3a07d8ff?xyz=1773820567879#6u8n-1773208774141'
                        }
                    },
                    subsections: [
                        {
                            title: '大专及以上学历（户口在学校）',
                            content: [
                                '提供户口迁移证，操作如下：'
                            ],
                            image: 'https://i.ibb.co/jP5B10HX/image.png'
                        },
                        {
                            title: '全球全日制大专学历',
                            content: [
                                '落户指引操作如下：'
                            ],
                            image: 'https://i.ibb.co/nq1nS063/image.png'
                        },
                        {
                            title: '全球全日制本科学历',
                            content: [
                                '落户指引操作如下：'
                            ],
                            image: 'https://i.ibb.co/dJgrVrWH/image.png'
                        },
                        {
                            title: '全球全日制硕士和博士学历',
                            content: [
                                '落户指引操作如下：'
                            ],
                            image: 'https://i.ibb.co/1Jvt2xVx/image.png'
                        }
                    ]
                }
            ]
        },
        league: {
            content: '由原团组织在"智慧团建"发起申请，组织全称：<strong>浙江省杭州市滨江区网易（杭州）网络有限公司团委</strong>，转移申请中写明自己所属的工作部门和岗位，待正式<strong style="color: red;">入职后</strong>公司会确认接收。'
        },
        party: {
            sections: [
                {
                    title: '党组织关系转入说明',
                    icon: '📋',
                    subsections: [
                        {
                            content: [
                                '可接收党组织关系，建议转入，但不强制要求。'
                            ]
                        },
                        {
                            title: '步骤一：发起转移申请',
                            content: [
                                '浙江省内转移的请原党组织在系统线上发起至：'
                            ],
                            highlight: '中共网易综合第一支部委员会'
                        },
                        {
                            title: '跨省转移',
                            content: [
                                '由原党组织开具介绍信：'
                            ],
                            list: [
                                '抬头写"中共网易(杭州)网络有限公司委员会"',
                                '去向写"中共网易综合第一支部委员会"',
                                '介绍信先自行留存，待<strong style="color: red;">入职后</strong>参考步骤二办理（请关注介绍信的有效期）'
                            ]
                        },
                        {
                            content: [
                                '若也支持线上转移，可以按上述抬头&去向发起转出。'
                            ]
                        },
                        {
                            title: '步骤二：提交报到材料',
                            content: [
                                '待毕业正式<strong style="color: red;">入职后</strong>，使用公司邮箱发送党员报到材料至公司党委审核处理，具体流程可<strong style="color: red;">入职后</strong>通过内部门户-易网 搜索"党组织关系转移"，或内部软件POPO-应用-hrhelp搜索"党组织关系转移"查看具体流程和材料要求。'
                            ]
                        }
                    ]
                },
                {
                    title: '备注',
                    icon: '📌',
                    subsections: [
                        {
                            content: [
                                '上述附件在<strong style="color: red;">入职后</strong>可关注popo服务号"网易党委"获取并详细了解。'
                            ]
                        },
                        {
                            content: [
                                '预备期内的预备党员也可以将党员关系转入，档案存档证明无需体现"转正申请书"。'
                            ]
                        },
                        {
                            content: [
                                '部分党组织额外要求提供党组织编码，可以告知：001033401008'
                            ]
                        }
                    ]
                }
            ],
            contact: {
                title: '咨询联系方式',
                content: '如有问题请电话咨询：0571-89852163转1818'
            }
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
    const data = locationData[location];
    if (!data) return;
    
    // 更新档户处理内容
    updateDossierContent('dossier-content', data.dossier);
    
    // 更新团员关系管理内容
    updateLeagueContent('league-content', data.league);
    
    // 更新党关系转移内容
    updateProcessContent('party-content', data.party);
}

// 更新档户处理内容（新格式）
function updateDossierContent(containerId, processData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    
    // 如果是新格式（sections）
    if (processData.sections) {
        processData.sections.forEach((section, sIndex) => {
            html += `<div class="content-section">`;
            html += `<div class="section-title-bar">
                <span class="section-icon">${section.icon}</span>
                <h3 class="section-title-text">${section.title}</h3>
            </div>`;
            
            // 如果有链接
            if (section.link) {
                html += `<a href="${section.link.url}" target="_blank" class="link-card">
                    <span class="link-icon">🔗</span>
                    <span class="link-text">${section.link.text}</span>
                    <span class="link-arrow">›</span>
                </a>`;
            }
            
            // section级别的备注
            if (section.note) {
                html += `<div class="section-note">📌 ${section.note}</div>`;
            }
            
            // section级别的警告提示（高亮）
            if (section.warning) {
                html += `<div class="section-warning">`;
                html += `<div class="warning-icon">⚠️</div>`;
                html += `<div class="warning-content">`;
                html += `<p class="warning-text">${section.warning.text}</p>`;
                if (section.warning.link) {
                    html += `<a href="${section.warning.link.url}" target="_blank" class="warning-link">${section.warning.link.text} ›</a>`;
                }
                html += `</div>`;
                html += `</div>`;
            }
            
            // 如果有子项
            if (section.subsections) {
                section.subsections.forEach((sub, subIndex) => {
                    html += `<div class="subsection">`;
                    
                    // 标题（可选）
                    if (sub.title) {
                        html += `<div class="subsection-title">${sub.title}</div>`;
                    }
                    
                    // 内容段落
                    if (sub.content) {
                        html += `<div class="subsection-content">`;
                        sub.content.forEach(p => {
                            html += `<p>${p}</p>`;
                        });
                        html += `</div>`;
                    }
                    
                    // 列表
                    if (sub.list) {
                        html += `<ul class="subsection-list">`;
                        sub.list.forEach(item => {
                            html += `<li>${item}</li>`;
                        });
                        html += `</ul>`;
                    }
                    
                    // 步骤
                    if (sub.steps) {
                        html += `<ol class="subsection-steps">`;
                        sub.steps.forEach((step, i) => {
                            html += `<li><span class="step-num">${i + 1}</span>${step}</li>`;
                        });
                        html += `</ol>`;
                    }
                    
                    // 信息框
                    if (sub.infoBox) {
                        html += `<div class="info-box">`;
                        html += `<div class="info-box-title">${sub.infoBox.title}</div>`;
                        html += `<div class="info-box-items">`;
                        sub.infoBox.items.forEach(item => {
                            html += `<div class="info-item">
                                <span class="info-label">${item.label}：</span>
                                <span class="info-value">${item.value}</span>
                            </div>`;
                        });
                        html += `</div>`;
                        if (sub.infoBox.note) {
                            html += `<div class="info-note">📌 ${sub.infoBox.note}</div>`;
                        }
                        html += `</div>`;
                    }
                    
                    // 图片
                    if (sub.image) {
                        html += `<div class="subsection-image">
                            <img src="${sub.image}" alt="指引图片" onclick="openImagePreview(this.src)" loading="lazy">
                            <div class="image-actions">
                                <a href="${sub.image}" target="_blank" class="image-action-btn" title="在新标签页打开原始图片">
                                    <span>🔍 查看原图</span>
                                </a>
                            </div>
                        </div>`;
                    }
                    
                    // 链接
                    if (sub.link) {
                        html += `<a href="${sub.link.url}" target="_blank" class="link-card">
                            <span class="link-icon">🔗</span>
                            <span class="link-text">${sub.link.text}</span>
                            <span class="link-arrow">›</span>
                        </a>`;
                    }
                    
                    html += `</div>`; // subsection
                });
            }
            
            html += `</div>`; // content-section
        });
    }
    // 如果是旧格式（steps）
    else if (processData.steps) {
        html = '<div class="process-steps">';
        processData.steps.forEach((step, index) => {
            const tagClass = step.tagType === 'warning' ? 'warning' : '';
            html += `
                <div class="step-item">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content">
                        <div class="step-title">
                            ${step.title}
                            <span class="step-tag ${tagClass}">${step.tag}</span>
                        </div>
                        <p class="step-desc">${step.desc}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        
        if (processData.contact) {
            html += `
                <div class="contact-card">
                    <div class="contact-title">${processData.contact.title}</div>
                    <div class="contact-info">${processData.contact.content}</div>
                </div>
            `;
        }
    }
    
    container.innerHTML = html;
    container.style.animation = 'fadeIn 0.3s ease-out';
}

// 更新团员关系管理内容
function updateLeagueContent(containerId, leagueData) {
    const container = document.getElementById(containerId);
    if (!container || !leagueData) return;
    
    let html = '<div class="league-content">';
    html += `<p class="league-text">${leagueData.content}</p>`;
    html += '</div>';
    
    container.innerHTML = html;
    container.style.animation = 'fadeIn 0.3s ease-out';
}

// 更新流程内容（支持新旧格式）
function updateProcessContent(containerId, processData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    
    // 如果是新格式（sections）
    if (processData.sections) {
        processData.sections.forEach((section, sIndex) => {
            html += `<div class="content-section">`;
            html += `<div class="section-title-bar">
                <span class="section-icon">${section.icon}</span>
                <h3 class="section-title-text">${section.title}</h3>
            </div>`;
            
            // 如果有子项
            if (section.subsections) {
                section.subsections.forEach((sub, subIndex) => {
                    html += `<div class="subsection">`;
                    
                    // 标题（可选）
                    if (sub.title) {
                        html += `<div class="subsection-title">${sub.title}</div>`;
                    }
                    
                    // 内容段落
                    if (sub.content) {
                        html += `<div class="subsection-content">`;
                        sub.content.forEach(p => {
                            html += `<p>${p}</p>`;
                        });
                        html += `</div>`;
                    }
                    
                    // 高亮文本
                    if (sub.highlight) {
                        html += `<div class="highlight-text">${sub.highlight}</div>`;
                    }
                    
                    // 列表
                    if (sub.list) {
                        html += `<ul class="subsection-list">`;
                        sub.list.forEach(item => {
                            html += `<li>${item}</li>`;
                        });
                        html += `</ul>`;
                    }
                    
                    // 信息框
                    if (sub.infoBox) {
                        html += `<div class="info-box">`;
                        html += `<div class="info-box-title">${sub.infoBox.title}</div>`;
                        html += `<div class="info-box-items">`;
                        sub.infoBox.items.forEach(item => {
                            html += `<div class="info-item">
                                <span class="info-label">${item.label}：</span>
                                <span class="info-value">${item.value}</span>
                            </div>`;
                        });
                        html += `</div>`;
                        if (sub.infoBox.note) {
                            html += `<div class="info-note">📌 ${sub.infoBox.note}</div>`;
                        }
                        html += `</div>`;
                    }
                    
                    html += `</div>`; // subsection
                });
            }
            
            html += `</div>`; // content-section
        });
        
        // 添加链接
        if (processData.link) {
            html += `
                <a href="${processData.link.url}" target="_blank" class="link-card">
                    <span class="link-icon">🔗</span>
                    <span class="link-text">${processData.link.text}</span>
                    <span class="link-arrow">›</span>
                </a>
            `;
        }
        
        // 添加联系方式
        if (processData.contact) {
            html += `<div class="contact-card">`;
            html += `<div class="contact-title">${processData.contact.title}</div>`;
            html += `<div class="contact-info">`;
            if (processData.contact.name) {
                html += `<span class="contact-name">${processData.contact.name}</span>`;
            }
            if (processData.contact.email) {
                html += `<a href="mailto:${processData.contact.email}" class="contact-email">${processData.contact.email}</a>`;
            }
            if (processData.contact.extraEmail) {
                html += `<br><a href="mailto:${processData.contact.extraEmail}" class="contact-email">${processData.contact.extraEmail}</a>`;
            }
            if (processData.contact.content) {
                html += processData.contact.content;
            }
            html += `</div>`;
            if (processData.contact.hint) {
                html += `<div class="contact-hint">${processData.contact.hint}</div>`;
            }
            html += `</div>`;
        }
    }
    // 如果是旧格式（steps）
    else if (processData.steps) {
        html = '<div class="process-steps">';
        
        processData.steps.forEach((step, index) => {
            const tagClass = step.tagType === 'warning' ? 'warning' : '';
            html += `
                <div class="step-item">
                    <div class="step-number">${index + 1}</div>
                    <div class="step-content">
                        <div class="step-title">
                            ${step.title}
                            <span class="step-tag ${tagClass}">${step.tag}</span>
                        </div>
                        <p class="step-desc">${step.desc}</p>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        
        // 添加链接
        if (processData.link) {
            html += `
                <a href="${processData.link.url}" target="_blank" class="link-card">
                    <span class="link-icon">🔗</span>
                    <span class="link-text">${processData.link.text}</span>
                    <span class="link-arrow">›</span>
                </a>
            `;
        }
        
        // 添加联系方式
        if (processData.contact) {
            // 新格式：有name和email字段
            if (processData.contact.name && processData.contact.email) {
                html += `
                    <div class="contact-card">
                        <div class="contact-title">${processData.contact.title}</div>
                        <div class="contact-info">
                            <span class="contact-name">${processData.contact.name}</span>
                            <a href="mailto:${processData.contact.email}" class="contact-email">${processData.contact.email}</a>
                        </div>
                    </div>
                `;
            }
            // 旧格式：只有content字段
            else if (processData.contact.content) {
                html += `
                    <div class="contact-card">
                        <div class="contact-title">${processData.contact.title}</div>
                        <div class="contact-info">${processData.contact.content}</div>
                    </div>
                `;
            }
        }
    }
    
    container.innerHTML = html;
    
    // 添加淡入动画
    container.style.animation = 'fadeIn 0.3s ease-out';
}

// 返回首页
function goHome() {
    window.location.href = 'index.html';
}

// 图片预览功能
function openImagePreview(src) {
    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.className = 'image-preview-overlay';
    overlay.onclick = function() {
        document.body.removeChild(this);
    };
    
    // 创建图片容器
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-preview-container';
    
    // 创建图片
    const img = document.createElement('img');
    img.src = src;
    img.className = 'image-preview-img';
    img.onclick = function(e) {
        e.stopPropagation();
    };
    
    // 创建操作栏
    const actionBar = document.createElement('div');
    actionBar.className = 'image-preview-actions';
    
    // 创建新标签页打开按钮
    const openNewTabBtn = document.createElement('a');
    openNewTabBtn.href = src;
    openNewTabBtn.target = '_blank';
    openNewTabBtn.className = 'preview-action-btn';
    openNewTabBtn.innerHTML = '🔍 原图查看';
    openNewTabBtn.onclick = function(e) {
        e.stopPropagation();
    };
    
    // 创建关闭按钮
    const closeBtn = document.createElement('span');
    closeBtn.className = 'image-preview-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = function() {
        document.body.removeChild(overlay);
    };
    
    actionBar.appendChild(openNewTabBtn);
    imgContainer.appendChild(img);
    imgContainer.appendChild(actionBar);
    imgContainer.appendChild(closeBtn);
    overlay.appendChild(imgContainer);
    document.body.appendChild(overlay);
}

// 添加CSS动画和图片预览样式
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
    
    .section-note {
        background: linear-gradient(135deg, #fff3e0 0%, #fff 100%);
        border-left: 3px solid #ff9800;
        padding: 0.75rem 1rem;
        margin: 0.75rem 0;
        font-size: 0.875rem;
        color: var(--text-secondary);
        line-height: 1.5;
        border-radius: 0 8px 8px 0;
    }
    
    .section-warning {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        background: linear-gradient(135deg, #fff8e1 0%, #fff3cd 100%);
        border: 2px solid #ffc107;
        border-radius: 8px;
        padding: 0.75rem;
        margin: 0.75rem 0;
        box-shadow: 0 2px 6px rgba(255, 193, 7, 0.25);
    }
    
    .warning-icon {
        font-size: 1.25rem;
        flex-shrink: 0;
        animation: pulse 2s infinite;
    }
    
    .warning-content {
        flex: 1;
    }
    
    .warning-text {
        margin: 0 0 0.375rem 0;
        font-size: 0.8125rem;
        color: #856404;
        font-weight: 500;
        line-height: 1.4;
    }
    
    .warning-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        color: #0d6efd;
        text-decoration: none;
        font-size: 0.75rem;
        font-weight: 500;
        padding: 0.25rem 0.625rem;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        transition: all 0.2s ease;
    }
    
    .warning-link:hover {
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
    
    .subsection-image {
        margin-top: 0.75rem;
        text-align: center;
    }
    
    .subsection-image img {
        max-width: 100%;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s ease;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        image-rendering: auto;
        image-rendering: high-quality;
        object-fit: contain;
        background: #fff;
    }
    
    .subsection-image img:hover {
        transform: scale(1.02);
    }
    
    .image-actions {
        margin-top: 0.5rem;
    }
    
    .image-action-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.875rem;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
    }
    
    .image-action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
    }
    
    .image-preview-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    }
    
    .image-preview-container {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .image-preview-img {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        image-rendering: auto;
        image-rendering: high-quality;
        object-fit: contain;
        background: #fff;
    }
    
    .image-preview-actions {
        position: absolute;
        bottom: -50px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 1rem;
    }
    
    .preview-action-btn {
        padding: 0.5rem 1rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.875rem;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
    }
    
    .preview-action-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
    }
    
    .image-preview-close {
        position: absolute;
        top: -40px;
        right: 0;
        font-size: 36px;
        color: #fff;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        transition: background 0.2s ease;
    }
    
    .image-preview-close:hover {
        background: rgba(255, 255, 255, 0.3);
    }
    
    @media (prefers-color-scheme: dark) {
        .section-note {
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(30, 30, 30, 0.8) 100%);
        }
        
        .section-warning {
            background: linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.15) 100%);
            border-color: #ffc107;
        }
        
        .warning-text {
            color: #ffd54f;
        }
        
        .warning-link {
            color: #64b5f6;
            background: rgba(255, 255, 255, 0.1);
        }
        
        .warning-link:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .subsection-image img {
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .image-action-btn,
        .preview-action-btn {
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
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
