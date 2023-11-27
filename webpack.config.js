// 直接谷歌搜webpack useful plugins
const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirShared = path.join(__dirname, 'shared')
const dirStyles = path.join(__dirname, 'styles')
const dirNode = 'node_modules'

module.exports = {
    entry: [//网站从哪里开始构建
        path.join(dirApp, 'index.js'),
        path.join(dirStyles, 'index.scss')
    ],

    resolve: {//用来查找不同层级的文件夹，防止手动打.
        modules: [
            dirApp,
            dirShared,
            dirStyles,
            dirNode
        ]
    },

    plugins: [// 用来做额外的任务

        new webpack.DefinePlugin({//定义在什么模式下开发
            IS_DEVELOPMENT
        }),

        new CopyWebpackPlugin({//从哪个文件夹复制文件到当前构架中使用，可以自动复制？
            patterns: [
                {
                    from: './shared',
                    to: ''
                }
            ]
        }),

        new MiniCssExtractPlugin({//让css样式从java中分离
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),


    ],



    module: {//用于定义如何处理不同类型的模块（文件）的部分。它包含了一系列的规则（rules），每个规则告诉Webpack如何处理特定类型的模块。
        rules: [//是一个数组，每个元素定义了如何处理特定类型的模块
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'//当遇到.js的文件时，拥babel处理器来兼容新版和旧版的javascript
                }
            },

            {
                test: /\.scss$/,//当遇到.scss结尾的文件时：
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''//将css文件与java分开后所存在的位置
                        }
                    },
                    {
                        loader: 'css-loader',//处理css后缀的文件，转换成网页理解的css
                    },
                    {
                        loader: 'postcss-loader',
                        //不同浏览器对某些CSS属性要求添加不同的前缀（如 -webkit-、-moz- 等），
                        // 那么postcss-loader可以帮你自动添加这些前缀，以确保跨浏览器的兼容性。
                    },
                    {
                        loader: 'sass-loader'//处理由更高级的sass语言编写的文件，转换成网页理解的css
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpe?g|svg|woff2?|fnt|webp|mp4)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name].[hash].[ext]',
                },

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: ImageMinimizerPlugin.loader,
                        options: {
                            minimizer: {
                                implementation: ImageMinimizerPlugin.imageminMinify,
                                options: {
                                    plugins: ['imagemin-gifsicle'],
                                },
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(glsl|frag|vert)$/,
                loader: 'raw-loader',
                exclude: /node_modules/,
            },

            {
                test: /\.(glsl|frag|vert)$/,
                loader: 'glslify-loader',
                exclude: /node_modules/,
            },

        ]
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}