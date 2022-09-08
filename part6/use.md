1.初始化项目
进入项目根目录，执行命令  npm init -y,生成package.json文件

2.下载构建工具
进入项目根目录，执行命令  cnpm i -D webpack webpack-cli typescript ts-loader webpack-dev-server clean-webpack-plugin

3.创建webpack配置信息
创建webpack.config.js文件，webpack中所有的配置信息都应该写在module.exports中

4.创建ts编译器的配置文件
创建tsconfig.json文件，tsconfig.json是ts编译器的配置文件, ts编译器可以根据他的信息来对代码进行编译

5.在package.json文件的 scripts中添加"build": "webpack"
这样我们可以通过npm run build指令来打包项目


自动在webpack管理的项目中生成index.html文件的插件
1.输入命令行cnpm i -D html-webpack-plugin下载插件
2.在webpack配置文件webpack.config.js中引入和配置插件
  2.1引入HTML插件
  const HTMLWebpackPlugin = require("html-webpack-plugin")
  2.2配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      title:'这是一个自定义的title'
    }),
  ],

自动删除dist中的文件再生成新的dist中的文件的插件
1.输入命令行cnpm i -D clean-webpack-plugin下载插件  -D表示开发依赖
2.在webpack配置文件webpack.config.js中引入和配置插件
  2.1引入clean插件
  const { cleanWebpack }  = require("clean-webpack-plugin")
  2.2配置webpack插件
  plugins: [
    new cleanWebpack()
  ],

配置可以当做模块来引入使用的文件
  // 用来设置引入模块，告诉webpack哪些文件可以被当做模块来使用
  resolve: {
    extensions:['.ts','.js']
  },

安装配置babel
1.输入命令行cnpm i -D @babel/core @babel/preset-env babel-loader core-js下载插件  -D表示开发依赖
2.webpack.config.js的module中配置信息

