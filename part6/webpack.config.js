// 引入一个包
const path = require("path");

// 引入HTML插件 HTMLWebpackPlugin为默认名称，不用加{}
const HTMLWebpackPlugin = require("html-webpack-plugin");

// 引入clean插件  引入插件首字母必须大写，相当于结构要一一对应
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中所有的配置信息都应该写在module.exports中
module.exports = {
  //指定入口文件
  entry: "./src/index.ts",

  //指定打包文件所在目录
  output: {
    //指定打包文件的目录
    //__dirname = c:\Users\13576\Desktop\笔记\ts练习\part3
    //path.resolve(__dirname, 'dist') = c:\Users\13576\Desktop\笔记\ts练习\part3\dist
    path: path.resolve(__dirname, "dist"),
    //打包后文件的名字
    filename: "bundle.js",
    // publicPath: "/dist",
    // 配置打包的环境
    environment: {
      // 告诉webpack别使用箭头函数
      arrowFunction: false,
      const: false,
    },
  },

  //指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义环境，即转换为适合哪些浏览器的js代码
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  {
                    //配置信息，要兼容的浏览器版本
                    targets: {
                      chrome: "88",
                    },
                    //这个看你下载的corejs的版本，指定corejs的版本，corejs中有自己实现的promise的方法等，可以用到不兼容的浏览器中
                    corejs: "3",
                    //使用corejs的方式,usage表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          //使用ts-loader去处理指定的规则生效的文件,
          //'ts-loader'放后面是因为use的触发是从后往前,先通过ts-loader把ts转换为js，再通过babel来吧js转换为对应需要的版本
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node_modules/,
      },
      //  设置less文件的处理
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //  设置mp3文件的处理
      // {
      //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
      //   use: "file-loader",
      // },
    ],
  },

  //配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // 自定义HTML文件标题
      // title:'这是一个自定义的title'
      //自定义生成HTML文件模板
      template: "./src/index.html",
    }),

    new CleanWebpackPlugin(),
  ],

  // 用来设置引入模块，告诉webpack哪些文件可以被当做模块来使用,
  // 在引入模块时，如果没有写后缀，那么webpack会在该目录下去查找有没有.js或者.ts文件，再进行引用
  resolve: {
    extensions: [".ts", ".js"],
  },

  // 指定生成文件不被压缩
  mode: "development",
};
