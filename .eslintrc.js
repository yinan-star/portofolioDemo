// 这个配置文件的目的是将标准的 JavaScript 代码风格规则应用到您的项目中，同时定义了一个全局变量 Is_DEVELOPMENT，并指定了使用 ECMAScript 2023 版本的语法规则。这将帮助您确保项目中的代码一致性，并提供一些全局变量的规范。
module.exports={
    root:true,
    extends:['standard'],
    globals:{'Is_DEVELOPMENT':'readonly'
    },
    parserOptions:{
        ecmasVersion:2023
    }
}