const{merge}=require('webpack-merge')
// 合并webpack的配置
const path=require('path')
// 处理文件路径

const config=require('./webpack.config')
// 导入另一个文件webpack.config.js配置
module.exports=merge(config,{
    // 导出模块，将原始的config配置与新对象合并，生成新配置
    mode: 'development',
    devtool:'inline-source-map',
    // 内联源映射，就是能在开发网页时，右击Inspect可以查看源代码，而不是压缩的代码
    devServer: {
        devMiddleware: {
            // 开发中间件，将文件提供给开发服务器
         writeToDisk: true,
        //  将数据开发的这些数据存磁盘，而不仅仅是内存中
        },
       },
    output:{
        path:path.resolve(__dirname,'public')
        // "resolve" 是用来配置如何解析模块路径的选项
    }
})