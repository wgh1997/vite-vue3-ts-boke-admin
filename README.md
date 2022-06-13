### 技术栈

涉及的技术栈均采用当前最新的版本和语法：

- 使用 vite 快速创建脚手架
- 使用*typescript* 和 _Vue3_ 开发
- 采用 *vue-router*4 工具 配置项目路由；
- 采用 _pinia_ 实现项目数据状态管理；
- 封装 Axios 库实现与后台 http 请求交互；
- UI 库采用流行的 *ant-design-vue*组件库完整项目实现及模块结构拆分;
- 约束代码风格 Eslint 支持 prettier 支持
- css 预处理器 less

### 目录结构

暂时不是最新的,准备以后慢慢新增

```
├── build                   // webpack配置
│   ├── webpack.common.js   // webpack通用配置
│   ├── webpack.dev.js      // webpack开发环境配置
│   └── webpack.prod.js     // webpack生产环境配置
├── dist                    // 打包输出目录
├── public                  // 项目公开目录
├── src                     // src开发目录
│   ├── api                 // api目录
│   ├── assets              // 静态资源
│   ├── components          // 公共组件
│   ├── layouts             // 页面布局组件
│   ├── modules             // 公共业务模块
│   ├── pages               // 具体业务页面
│   ├── routers             // 项目路由配置
│   ├── services            // axios服务等相关
│   ├── stores              // 全局公共 mobx store
│   ├── styles              // 存放公共样式
│   ├── utils               // 工具库/通用函数
│   ├── index.html          // 入口html页面
│   └── main.js             // 项目入口文件
├── .babelrc                // babel配置
├── .editorconfig           // 项目格式配置
├── .eslintrc.js            // ESLint配置
├── .gitignore              // git 忽略配置
├── .postcssrc.js           // postcss配置
├── package.json            // 依赖包配置
└── README.md               // 项目说明
```

### 初始化依赖配置

```bash
yarn install
```

### 开发环境 启动运行

```bash
yarn dev
```

### 生产环境 打包构建

```bash
npm run build  #  生产环境 打包构建

npm run preview #  本地启动生产环境

npm run lint  # eslint 检查

npm run prettier # prettier 自动格式化
```
