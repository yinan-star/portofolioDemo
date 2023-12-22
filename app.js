// API的调用
require('dotenv').config()


// express 是一个把html传送给user
// 这是后端写的东西
const fetch = require('node-fetch');
const logger = require('morgan');
const path = require('path');
const express = require('express');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express();
const port = process.env.PORT || 3000;

const Prismic = require('@prismicio/client')
const PrismicDOM = require('prismic-dom');
const UAParser = require('ua-parser-js');


// 将 PrismicDOM 设置为本地变量，使其在 Pug 模板中可用
app.locals.PrismicDOM = PrismicDOM;
// const PrismicH = require('@prismicio/helpers')







app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(errorHandler());
app.use(express.static(path.join(__dirname, 'public')));



// 初始化 Presmic的api
const initApi = (req) => {
  return Prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req,
    fetch,
  });
};


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
  const ua = UAParser(req.headers['user-agent']);

  res.locals.isDesktop = ua.device.type === undefined;
  res.locals.isPhone = ua.device.type === 'mobile';
  res.locals.isTablet = ua.device.type === 'tablet';

  console.log(res.locals.isDesktop, res.locals.isPhone, res.locals.isTablet)

  // 移动端的,手机端的
  res.locals.ctx = {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: handleLinkResolver,
  }

  res.locals.Prismic = Prismic;
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

const handleRequest= async (api) =>{
  const about = await api.getSingle('about')
  const home = await api.getSingle('home')
  const meta = await api.getSingle('meta')
  const navigation = await api.getSingle('navigation')
  const preloader = await api.getSingle('preloader')

  const { results: collections } = await api.get({
    // Prismic API 返回的响应中的 results 属性是一个包含多个文档数据的数组。拿的数组也要给到数组
    filters: [Prismic.filter.at('document.type', 'collection')],
      fetchLinks:'product.image',
  })
  const assets =[]

  home.data.gallery.forEach((item) => {
    assets.push(item.image.url);
  });

  about.data.gallery.forEach((item) => {
    assets.push(item.image.url);
  });

  about.data.body.forEach((section) => {
    if (section.slice_type === 'gallery') {
      section.items.forEach((item) => {
        assets.push(item.image.url);
      });
    }
  });

  collections.forEach((collection) => {
    collection.data.products.forEach((item) => {
      assets.push(item.products_product.data.image.url);
    });
  });
//预渲染


  return{
    about,
    assets,
    collections,
    home,
    meta,
    navigation,
    preloader
  }
}

app.get('/', async (req, res) => {
  const api = initApi(req)
  const defaults =await handleRequest(api) 

  res.render('pages/home', { ...defaults})
  // 所以pages是个大的框架，是在prismic里找到home的文件嵌入到pages这个大框架里渲染出来
  // ...是扩展运算符，传递对象的

})


app.get('/about', async (req, res) => {
  const api = initApi(req)
  // console.log('Prismic client instance:', api)
  // 记录下看下是否初始化成功
  const defaults =await handleRequest(api) 

  res.render('pages/about', { ...defaults})
})


app.get('/collections', async(req, res) => {
  const api = initApi(req)
  const defaults = await handleRequest(api) 
  
  // getsingle()里面是presmic的API ID,
  // filters: [Prismic.filter.at()] 拿collection API的所有文档（我写了4个docs
 
  // console.log(collections)
  // 可以在编写detail.pug时，可以在终端运行出来要写的程序

  res.render('pages/collections',{ ...defaults})
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

  res.render('pages/detail',{ ...defaults,product })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})