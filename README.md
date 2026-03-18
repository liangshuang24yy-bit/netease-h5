# 网易互娱校招生H5信息门户

面向2026届未入职校招生的H5信息门户，用于承接公司介绍、入职准备、租房指南等内容推送。

## 📋 项目特点

- ✅ 无需登录验证，扫码即可访问
- ✅ 完美适配手机端浏览（H5）
- ✅ 支持嵌入视频、VR链接
- ✅ 区域（广州/上海/杭州）内容区分展示
- ✅ 后续可随时在后台更新内容

## 📁 项目结构

```
comate-zulu-demo/
├── index.html              # 首页
├── company.html            # 公司初识模块
├── css/
│   ├── style.css          # 全局样式
│   ├── home.css           # 首页样式
│   └── company.css        # 公司模块样式
├── js/
│   ├── home.js            # 首页功能
│   └── company.js         # 公司模块功能
├── images/                # 图片资源目录（待添加）
└── videos/                # 视频资源目录（待添加）
```

## 🎯 功能模块

### 已完成模块

#### 首页 (index.html)
- 欢迎界面
- 入职倒计时
- 快捷导航
- 热门推送
- 搜索功能

#### 公司初识模块 (company.html)
- 视频快速了解
- 28年大事记（时间轴）
- 互娱事业群（代表作展示）
- 使命愿景价值观
- 园区VR查看

### 待开发模块

- 入职准备模块
- 安居乐业模块
- 新人必修模块
- 倒计时专区模块
- 联系SSC模块

## 🚀 快速开始

### 1. 本地运行

直接用浏览器打开 `index.html` 文件即可查看效果。

### 2. 部署上线

#### 使用 GitHub Pages
```bash
# 1. 初始化git仓库
git init
git add .
git commit -m "初始提交"

# 2. 推送到GitHub
git remote add origin <你的仓库地址>
git push -u origin main
```

然后在GitHub仓库设置中启用GitHub Pages功能。

#### 使用 Vercel
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 📱 移动端适配

- 响应式设计，支持各种手机屏幕尺寸
- 触摸优化，提供流畅的移动端体验
- 支持手势操作（左右滑动等）

## 🎨 设计特点

- 采用网易品牌色（红色系）
- 现代化渐变设计
- 卡片式布局
- 平滑过渡动画
- 深色模式支持（自动检测）

## 🔧 配置说明

### 入职日期设置

在 `js/home.js` 中修改入职日期：

```javascript
const targetDate = new Date();
targetDate.setMonth(6); // 7月（月份从0开始）
targetDate.setDate(1);
targetDate.setFullYear(2026);
```

### VR全景集成

在 `js/company.js` 中的 `simulateVRLoading` 函数中集成实际的VR全景查看器：

```javascript
// 示例：集成 Photo Sphere Viewer
const viewer = new Viewer({
    panorama: `images/vr/${vrType}-360.jpg`,
    container: '.vr-viewer'
});
```

## 📝 后续扩展

### 内容管理系统

建议使用以下方式实现后台内容更新：

1. **JSON数据文件**
   - 将动态内容存储在JSON文件中
   - 使用JavaScript读取并渲染

2. **无头CMS**
   - Strapi、Contentful等
   - 提供友好的后台管理界面

3. **数据库后端**
   - Node.js + Express + MongoDB
   - 提供API接口

### 建议集成库

- **VR全景**: Three.js、Photo Sphere Viewer
- **视频播放**: Video.js、Plyr
- **动画效果**: GSAP、Animate.css
- **图片懒加载**: LazyLoad.js
- **表单验证**: Validate.js

## 🌐 生成二维码

使用在线工具生成访问链接的二维码：

- 草料二维码: https://cli.im/
- QR Code Generator: https://www.qrcode-generator.com/

## 📊 性能优化

- 图片懒加载
- 代码分割
- 静态资源CDN
- Service Worker缓存
- Gzip压缩

## 🛠️ 浏览器兼容性

- Chrome/Edge (最新版本)
- Safari (iOS 12+)
- Firefox (最新版本)
- 微信内置浏览器
- 支付宝内置浏览器

## 📧 技术支持

如有问题或建议，请联系项目维护者。

## 📄 许可证

© 2026 网易互娱 版权所有

---

**当前版本**: v1.0.0
**最后更新**: 2026-03-16