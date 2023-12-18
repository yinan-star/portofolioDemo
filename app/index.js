// 关乎整个网页的展示信息
import each from 'lodash/each';
import NormalizeWheel from 'normalize-wheel'

import Canvas from 'components/Canvas';
import Navigation from './components/Navigation';
import Preloader from 'components/Preloader'

import About from "./pages/About/About";
import Collections from "./pages/Collections/Collections";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home";

class App {
  constructor() {
    // 召唤
    this.createContent()

    this.createCanvas()
    this.createPreloader()
    this.createNavigation()

    this.createPages()

    this.addLinkListeners();
    this.addEventListeners();

    this.onResize()

    this.update();

  }
  // 初始化类
  createNavigation() {
    this.navigation = new Navigation({ template: this.template });
  }

  createPreloader() {
    this.preloader = new Preloader({
      canvas: this.canvas
    })
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createCanvas() {
    this.canvas = new Canvas({
      template: this.template
    })
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
  onPreloaded() {
    this.onResize()

    this.canvas.onPreloaded()
    this.page.show()
    // 销毁-重新定义尺寸-页面展示
  }

  async onChange(url) {// 同步html里的url链接，使得在check时不会看到没有更新的content名字
    this.canvas.onChangeStart(this.template, url)

    await this.page.hide()
    // 当点击时，当前页面会被隐藏
    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')

      window.history.pushState({}, '', url)
      // 就是说你点击哪个页面,url的后缀就是哪个页面的/collectisons or /about or /slash home


      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')


      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.canvas.onChangeEnd(this.template)

      this.page = this.pages[this.template]
      // 这个template是新的页面的template

      this.page.create()
      this.onResize()
      this.page.show()
      this.addLinkListeners()
      // 这里又写一遍是因为在创建新的页面之后，有些页面里面还有新的链接，所以在掉一次这个方法
    }
    else {
      console.log('Error')
    }

    // if (request.status)
    console.log(request)
  }

  onResize() {
    window.requestAnimationFrame(_ => {
      if (this.canvas && this.canvas.onResize) {
        this.canvas.onResize();
      }
      // 处理窗口调整大小事件的函数。当浏览器窗口大小改变时（比如用户调整窗口大小或者设备发生旋转），会触发 onResize 函数。
    })


    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
  }

  onTouchDown(event) {
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(event);
    }


  }

  onTouchMove(event) {
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(event);
    }

  }

  onTouchUp(event) {
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(event);
    }
  }

  onWheel(event) {
    const normalizedWheel = NormalizeWheel(event);
    if (this.canvas && this.canvas.onWheel) {
      this.canvas.onWheel(normalizedWheel);
      // 调用画布的onWheel的方法，并将标准化处理后的滚动值作为参数传进去
    }

    if (this.page && this.page.onWheel) {
      this.page.onWheel(normalizedWheel);
    }
  }


  /**
   * Loop
   */

  update() { // 动画或页面更新的循环

    if (this.page && this.page.update) {
      this.page.update();
    }
    // 先渲染页面，因为有correct Y position，所以后面的canvas的Y也会跟着更新

    if (this.canvas && this.canvas.update) {
      this.canvas.update(this.page.scroll);
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners
   */
  addEventListeners() {
    window.addEventListener('mousewheel', this.onWheel.bind(this))

    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))
    // 电脑端的
    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))
    // 移动端的
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