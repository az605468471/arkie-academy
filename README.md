# Arkie Academy (阿奇学院)

去中心化 AI 教育平台 — 基于 BSC 区块链，钱包即身份，链上证书认证。

## 🎯 核心特性

- **钱包即身份** — 用 MetaMask / Trust Wallet 等直接连接，无需注册
- **BNB 支付** — 用 BNB 购买课程，去中心化支付
- **链上 NFT 证书** — 完成课程自动铸造 NFT 证书，永久可查
- **智能合约驱动** — 课程管理、购买、进度追踪全部上链
- **全球可访问** — 部署在 BSC 链上，无国界限制

## 📁 项目结构

```
arkie-academy/
├── contracts/                 # 智能合约
│   ├── contracts/
│   │   └── EduPlatform.sol    # 核心平台合约
│   ├── scripts/
│   │   └── deploy.js          # 部署脚本
│   └── hardhat.config.cjs     # Hardhat 配置
├── frontend/                  # 前端 DApp
│   ├── src/
│   │   ├── components/        # UI 组件
│   │   │   ├── Header.jsx     # 钱包连接导航
│   │   │   ├── Hero.jsx       # 首页主视觉
│   │   │   ├── Features.jsx   # 6 大核心特点
│   │   │   ├── CourseList.jsx # 课程列表
│   │   │   ├── Certificate.jsx# NFT 证书预览
│   │   │   └── Footer.jsx     # 底部
│   │   ├── utils/
│   │   │   └── wallet.jsx     # 钱包连接工具
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── tailwind.config.js
└── README.md
```

## 🚀 快速开始

### 安装依赖

```bash
cd frontend
npm install
```

### 启动开发服务器

```bash
npm run dev
# 访问 http://localhost:5180
```

### 编译智能合约

```bash
cd contracts
npm install
npx hardhat compile
```

### 部署合约 (测试网)

```bash
PRIVATE_KEY=your_private_key npx hardhat run scripts/deploy.js --network bscTestnet
```

## 📚 课程体系

| 等级 | 课程名称 | 课时 | 价格 |
|------|---------|------|------|
| 🟢 入门 | 阿奇AI入门 - 你的第一个AI助手 | 8 | 0.01 BNB |
| 🟡 进阶 | 提示词工程 - 让AI听懂你的话 | 12 | 0.02 BNB |
| 🟡 进阶 | AI文案写作 - 10倍提升内容产出 | 10 | 0.02 BNB |
| 🟡 进阶 | AI数据分析师 - 从Excel到智能报表 | 14 | 0.03 BNB |
| 🔴 高级 | AI自媒体运营 - 全平台内容矩阵 | 16 | 0.03 BNB |
| 🔴 高级 | AI商业实战 - 从工具到变现 | 20 | 0.05 BNB |

## 🔗 链上信息

- **网络**: BSC (Binance Smart Chain)
- **Chain ID**: 56
- **支付方式**: BNB

## 📄 License

MIT
