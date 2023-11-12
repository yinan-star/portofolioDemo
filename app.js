require('dotenv').config()

console.log(process.env.PRISMIC_ENDPOINT, process.env.PRISMIC_CLIENT_ID)
// express 是一个把html传送给user
// 这是后端写的东西
const express = require('express')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')


const app = express()
const path = require('path')
const port = 3000

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(errorHandler());
app.use(express.static(path.join(__dirname, 'public')));

const PrismicDOM = require('prismic-dom')
const Prismic = require('@prismicio/client')

// 初始化 Presmic的api
const initApi = req => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  })
}
// link Resolver
const handleLinkResolver = (doc) => {
  if (doc.type === 'product') {
    return `/detail/${doc.slug}`;
  }
  if (doc.type === 'about') {
    return '/about';
  }

  if (doc.type === 'collections') {
    return '/collections';
  }
  return '/';
}
// 导航链接的判断



//Middleware to add prismic content
app.use((req, res, next) => {
  // res.locals.ctx = {
  //   endpoint: process.env.PRISMIC_ENDPOINT,
  //   linkResolver: handleLinkResolver,

  // }

  res.locals.PrismicDOM = PrismicDOM;
  res.locals.Link = handleLinkResolver;
  res.locals.Numbers = (index) => {
    return index === 0
      ? 'One'
      : index === 1
      ? 'Two'
      : index === 2
      ? 'Three'
      : index === 3
      ? 'Four'
      : '';
  }

  next()
})


app.set('views', path.join(__dirname, 'views'))
// 将路径设置好，添加进前端，这样，前端才能渲染html
app.set('view engine', 'pug')
// 告诉express 用pug而不是用普通的html

const handleRequest= async api =>{
  const meta = await api.getSingle('meta')
  const navigation = await api.getSingle('navigation')
  const preloader = await api.getSingle('preloader')
  return{
    meta,
    navigation,
    preloader
  }
}

app.get('/', async (req, res) => {
  const api = initApi(req)
  const defaults =await handleRequest(api) 
  const home = await api.getSingle('home')
  
  const { results: collections } = await api.get({
    // Prismic API 返回的响应中的 results 属性是一个包含多个文档数据的数组。拿的数组也要给到数组
    filters: [Prismic.filter.at('document.type', 'collection')],
      fetchLinks:'product.image',
    })
  
  console.log(defaults.navigation)
  // 查看nabvigation的内容有哪些（因为它源自defaults

  res.render('pages/home', { ...defaults,home,collections })
  // 所以pages是个大的框架，是在prismic里找到home的文件嵌入到pages这个大框架里渲染出来
  // ...是扩展运算符，传递对象的

})


app.get('/about', async (req, res) => {
  const api = initApi(req)
  // console.log('Prismic client instance:', api)
  // 记录下看下是否初始化成功
  const defaults =await handleRequest(api) 
  const about = await api.getSingle('about')
  // 暂时不知道怎么获取meta，好像要render里面之渲染了about，没有继承base里的meta

  // about.data.gallery.forEach(media =>{console.log(media)})
  // about.data.gallery 是一个包含多个媒体元素的数组，media 代表当前迭代中处理的媒体元素
  // 在这里只是让你在终端运行时，查看
  // console.log(about.data.body)
  // about.data.gallery.forEach(media =>{
  //   console.log(media)
  // })

  res.render('pages/about', { ...defaults,about})
})


app.get('/collections', async(req, res) => {
  const api = initApi(req)
  const defaults = await handleRequest(api) 
  const { results: collections } = await api.get({
    // Prismic API 返回的响应中的 results 属性是一个包含多个文档数据的数组。拿的数组也要给到数组
    filters: [Prismic.filter.at('document.type', 'collection')],
      fetchLinks:'product.image',
    })
  const home=await api.getSingle('home')
  
  // getsingle()里面是presmic的API ID,
  // filters: [Prismic.filter.at()] 拿collection API的所有文档（我写了4个docs
 
  // console.log(collections)
  // 可以在编写detail.pug时，可以在终端运行出来要写的程序

  res.render('pages/collections',{ ...defaults,collections,home })
  // =>就是相当于返回值，比old code更加简洁
})


app.get('/detail/:uid', async(req, res) => {
  // :是一个占位符，当访问/detail/任何文本，应该是有不同的detail页面吧
  const api = initApi(req)
  const defaults =await handleRequest(api) 
  const product = await api.getByUID('product',req.params.uid,{
    fetchLinks:'collection.title'
    // 获取与该页产品相关联的链接
  })
  // 动态获取产品页

  // console.log(product)
  // // 可以在编写detail.pug时，可以在终端运行出来要写的程序
  // console.log(preloader)

  res.render('pages/detail',{ ...defaults,product })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})