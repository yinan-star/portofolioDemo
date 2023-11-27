import each from 'lodash/each';

import Canvas from 'components/Canvas';
import Navigation from './components/Navigation';
import Preloader from 'components/Preloader'

import About from "./pages/About/About";
import Collections from "./pages/Collections/Collections";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

class App {
  constructor() {
    // 召唤
    this.createContent()

    this.createNavigation()
    this.createPreloader()
    this.createCanvas()
    this.createPages()

    this.addLinkListeners();
    this.addEventListeners();

    this.update();

  }
  // 初始化类
  createNavigation() {
    this.navigation = new Navigation({ template: this.template });
  }

  createPreloader(){
    this.preloader=new Preloader()
    this.preloader.once('completed',this.onPreloaded.bind(this))
  }

  createCanvas(){
    this.canvas =new Canvas()
  }

  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }

  createPages() {
    // 初始化页面,先建文档，在写这个，他会自动弹出import
    this.pages = {
      about: new About(),
      collections: new Collections(),
      detail: new Detail(),
      home: new Home(),
    }
    this.page = this.pages[this.template]
    // 你在哪个页面就渲染了哪个页面，data0tempalte它使得你可以在 HTML 元素中存储数据，然后通过 JavaScript 来读取和使用这些数据，
    this.page.create()

    
  }

  /**
   * Events
   */
  onPreloaded(){
    this.preloader.destroy()
    this.onResize()
    // this.page.show()
  }

  async onChange(url){// 同步html里的url链接，使得在check时不会看到没有更新的content名字
    await this.page.hide()
    // 当点击时，当前页面会被隐藏
    const request = await fetch(url)
    if(request.status === 200){
      const html=await request.text()
      const div =document.createElement('div')

      div.innerHTML=html

      const  divContent =div.querySelector('.content')

      this.template=divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template',this.template)
      this.content.innerHTML=divContent.innerHTML

      this.page = this.pages[this.template]
      // 这个template是新的页面的template
      
      this.page.create()
      this.onResize()
      // this.page.show()
      this.addLinkListeners()
      // 这里又写一遍是因为在创建新的页面之后，有些页面里面还有新的链接，所以在掉一次这个方法
    }
    else{
      console.log('Error')
    }

    // if (request.status)
    console.log(request)
  }

  onResize() {
    if (this.canvas && this.canvas.onResize) {
      this.canvas.onResize();
    }

    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
  }


  /**
   * Loop
   */

  update(){ // 动画或页面更新的循环

    if (this.canvas && this.canvas.update) {
      this.canvas.update();
    }
   
    if (this.page && this.page.update) {
      this.page.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners
   */
  addEventListeners(){
    window.addEventListener('resize', this.onResize.bind(this));
  }

  addLinkListeners() {// 链接跳转处理

    const links = document.querySelectorAll('a')
    // 选择所有链接，links是数组

    each(links, (link) => {
      link.onclick = (event) => {
        event.preventDefault()

        const { href } = link

        this.onChange(href)
      }
    })
  }
}
new App()