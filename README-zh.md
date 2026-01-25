# Create Koko React App

一个简单的 CLI 工具，用于从自定义 React 模板快速创建新项目。

## 语言切换

**English Version:** [README.md](README.md)
**中文版:** [README-zh.md](README-zh.md) (当前版本)

---

## 功能特性

- 🚀 快速创建基于 React + TypeScript + Vite 的项目
- 📦 内置 Tailwind CSS 4.x
- 🔧 自动初始化 Git 仓库
- 📝 提供交互式命令行界面
- 🛠️ 支持通过命令行参数指定项目名称
- 🎯 包含完整的开发工具链（ESLint、Prettier、Husky 等）

## 安装

您可以直接使用 npx 命令而无需安装：

```bash
npx create-koko-react-app
```

或者全局安装：

```bash
npm install -g create-koko-react-app
```

## 使用方法

### 交互式模式

运行不带参数的命令，CLI 会提示您输入项目名称：

```bash
npx create-koko-react-app
```

### 直接指定项目名称

您也可以直接在命令行中指定项目名称：

```bash
npx create-koko-react-app my-react-app
```

## 创建的项目结构

创建的项目会包含以下特性：

- **React 19** - 最新版的 React
- **TypeScript 5.9** - 类型安全的开发体验
- **Vite 7** - 快速的开发服务器和构建工具
- **Tailwind CSS 4.x** - 实用优先的 CSS 框架
- **ESLint & Prettier** - 代码质量和格式化工具
- **Husky & Commitlint** - Git 钩子和提交规范

## 项目配置文件

### package.json 脚本

创建的项目包含以下 npm 脚本：

```json
{
  "scripts": {
    "dev": "vite",                    // 启动开发服务器
    "build": "tsc -b && vite build",  // 构建生产版本
    "lint": "eslint .",              // 运行 ESLint
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,css,scss,json}\"",  // 格式化代码
    "format:check": "prettier --check \"src/**/*.{ts,tsx,js,jsx,css,scss,json}\"", // 检查代码格式
    "preview": "vite preview",       // 预览生产构建
    "lint:staged": "lint-staged",    // 检查暂存文件
    "spell:check": "cspell lint --dot --gitignore --color --cache --show-suggestions \"(packages|apps)/**/*.@(html|js|cjs|mjs|ts|tsx|css|scss|md)\"", // 拼写检查
    "commit": "git-cz",              // 交互式提交
    "prepare": "husky"              // 初始化 Husky 钩子
  }
}
```

## 开发说明

### 本地开发

如果您想修改和开发这个 CLI 工具：

```bash
# 克隆仓库
git clone https://github.com/xjxujing/create-my-react-template-cli.git

# 进入项目目录
cd create-my-react-template-cli

# 安装依赖
npm install

# 链接到全局
npm link

# 现在您可以使用本地修改的版本
create-koko-react-app my-test-project
```

### 发布

项目配置了自动版本更新功能。使用以下命令发布新版本：

```bash
npm publish
```

这会自动增加补丁版本号并发布到 npm。

## 技术栈

- **Node.js** - 运行环境
- **TypeScript** - 开发语言
- **DeGit** - 无 Git 历史的仓库克隆工具
- **Readline** - 交互式命令行界面

## 许可证

MIT

## 作者

xjxujing
