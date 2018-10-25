

项目构建
做什么：
      编译项目中的js，sass，less，stylus
      合并js，css等资源文件
      压缩js，css，html等资源文件
      js语法的检查
构建工具：简化项目构建，实现自动化构建，webpack

核心概念
Entry：入口，Webpack进行打包的起始点文件
Output：出口，webpack编译打包生成的bundle文件
Loader：模块加载（转换器），将非js模块包装生成webpack能理解的js模块
Plugin：插件，在webpack构建流程中的特定时机插入特定功能的代码
Module：模块，在webpack眼里一切皆模块，默认只识别js文件，如果是其他类型的文件利用对应的loader转换为js模块
Chunk/bundle：代码块/束，一个Chunk由多个模块组合而成的，最终浏览器执行的是webpack打包生成的chunk文件




/*
1)说说你对项目构建的理解
1). 构建项目到底做些什么
   编译项目中的js, sass, less, stylus
   合并js/css等资源文件
   压缩js/css/html等资源文件
   JS语法的检查
2). 构建工具
   作用: 简化项目构建, 实现自动化构建
   常用: grunt/gulp/webpack

2)webpack的核心概念
Entry：入口，Webpack进行打包的起始点(文件)
Output：出口，webpack编译打包生成的bundle(文件)
Loader：模块加载(转换)器，将非js模块包装成webpack能理解的js模块
Plugin：插件，在 Webpack 构建流程中的特定时机插入具有特定功能的代码
Module：模块，在 Webpack眼里一切皆模块，默认只识别js文件, 如果是其它类型文件利用对应的loader转换为js模块
Chunk/bundle：代码块/束，一个 Chunk 由多个模块组合而成, 最终浏览器执行的是webpack打包生成的chunk文件




13)chrome调试应用的常用功能(窗口)
Elements: 查看DOM标签和样式
Console: 查看打印和错误信息
NetWork: 查看请求(url, 请求方式, 请求参数)和响应
Application: 查看浏览器端存储(localStorage, sessionStorage, cookie)
Sources: debugger调试
react: 查看react组件(state, props)
redux: 查看redux管理的state
vue: 查看vue组件或vuex状态


mock的理解
1). 对于前后台分离的项目来说, 前后台可以独立开发, 当后台还没有写好时, 前台应用就可以编写了
2). 前台应用需要自己mock数据接口动态为前台提供数据, 当真实接口完成后, 切换到真实接口即可
3). 要求: mock的json数据与真实接口的数据在结构上要相同
4). 工具包: mockjs


json的理解
1). 什么: json是一种用来存储结构化数据的文本数据结构
2). 优点: 小巧, 可以轻松的与js相互转换
3). 整体类型:
   json对象: {}, 与js对象对应
   json数组: []  与js数组对应
4). 组成:
   结构: 类型与名称
   值
5). 模拟json数据:
   与真实json数据在结构上要相同, 值可以不同


{
  "name": "react-demo", // 标识名称
  "version": "1.0.0", // 版本号
  "scripts": { // 打包运行相关的npm命令
    "xxx": "具体命令"   npm run xxx
  },
  dependencies: {}, // 运行时依赖
  devDependencies: {} // 开发时依赖
}*/

