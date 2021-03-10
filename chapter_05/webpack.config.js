const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin") 
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'boundle.js',
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            chrome: '88'
                                        },
                                        'corejs': '3',
                                        "useBuiltIns": 'usage' // 使用方式，按需加载
                                    }
                                ]
                            ]
                        }
                    },
                'ts-loader'],
                exclude: /node-modules/
            },
            {
                test: /\.less$/,
                use: [
                   "style-loader",
                   "css-loader",
                   {
                       loader: 'postcss-loader',
                       options: {
                           postcssOptions: {
                               plugins: [
                                   [
                                       "postcss-preset-env",
                                       {
                                           browsers: 'last 2 versions'
                                       }
                                   ]
                               ]
                           }
                       }
                   },
                   "less-loader" 
                ]
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: 'spaceTop',
            template: './src/index.html'
        })
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}