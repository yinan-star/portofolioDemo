// 这个文件的上一级交接是components的index.js文件
import { Camera, Renderer, Transform } from 'ogl';

import Home from './home';
import About from './about';
import Collections from './collections'
import Detail from './Detail';

import Transition from './Transition'

export default class Canvas {
  constructor({ template }) {
    this.template = template
    // template是数据模版
    this.x = {
      start: 0,
      distance: 0,
      end: 0
    }
    this.y = {
      start: 0,
      distance: 0,
      end: 0
    }


    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.onResize()

    // this.createCube()
    // 什么什么忘记define了，就看这里有没有被初始化
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      // 让webgl的背景色透明，从而显示css设置的颜色
      antialias: true
      // 抗锯齿
    });

    this.gl = this.renderer.gl; //TIP works like a canvas context

    document.body.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.position.z = 5

  }

  createScene() {
    this.scene = new Transform()
  }

  /**
   * Home.
   */
  createHome() {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    });

  }

  destroyHome() {
    if (!this.home) return
    // 如果不存在home，就销毁home，！是不成立的意思，条件为假
    this.home.destroy()
    this.home = null
  }


  /**
   * About.
   */
  createAbout() {
    this.about = new About({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    });
  }

  destroyAbout() {
    if (!this.about) return
    // 如果不存在about，就销毁about，！是不成立的意思，条件为假
    this.about.destroy()
    this.about = null
  }

  /**
   * Collections.
   */
  createCollections() {
    this.collections = new Collections({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    });
  }

  destroyCollections() {
    if (!this.collections) return
    // 如果不存在Collections，就销毁Collections，！是不成立的意思，条件为假
    this.collections.destroy()
    this.collections = null
  }


  /**
   * Detail.
   */
  createDetail() {
    this.detail = new Detail({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    });
  }

  destroyDetail() {
    if (!this.detail) return
    // 如果不存在detail，就销毁detail，！是不成立的意思，条件为假
    this.detail.destroy()
    this.detail = null
  }


  /**
   * EVENTS
   */
  onPreloaded() {
    this.onChangeEnd(this.template)
  }

  onChangeStart(template, url) {
    if (this.about) {
      this.about.hide()
    }

    if (this.collections) {
      this.collections.hide()
    }

    if (this.home) {
      this.home.hide()
    }

    this.isFromCollectionsToDetail = this.template === 'collections' && url.indexOf('detail') > -1; // prettier-ignore
    this.isFromDetailToCollections = this.template === 'detail' && url.indexOf('collections') > -1; // prettier-ignore

    // 如果是detail并且,collections are the part of the url他的值就是>-1的

    if (this.isFromCollectionsToDetail || this.isFromDetailToCollections) {
      this.transition = new Transition({
        collections: this.collections,
        gl: this.gl,
        scene: this.scene,
        sizes: this.sizes,
        url,
      });
    }
  }
  onChangeEnd(template) {
    // 就是当用户change the route
    if (template === 'about') {
      this.createAbout()
    } else if (this.about) {
      this.destroyAbout()
    }

    if (template === 'collections') {
      this.createCollections()
      if(this.transition){
        this.transition.animateCollections(this.collections)
      }
    } else if (this.collections) {
      this.destroyCollections()
    }

    if (template === 'detail') {
      this.createDetail()

      if(this.transition){
        this.transition.animateDetail(this.detail)
      }
    } else if (this.detail) {
      this.destroyDetail()
    }

    if (template === 'home') {
      this.createHome()
    } else {
      this.destroyHome()
    }

    this.template = template

  }

  onResize() {
    // 将渲染的画布尺寸填满视窗口
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // 创建了camera之后才能创建透视图
    this.camera.perspective({ aspect: window.innerWidth / window.innerHeight });

    const fov = this.camera.fov * (Math.PI / 180);
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.sizes = {
      height,
      width,
    };

    const values = { sizes: this.sizes }

    if (this.about) {
      this.about.onResize(values);
    }

    if (this.collections) {
      this.collections.onResize(values);
    }

    if (this.detail) {
      this.detail.onResize(values);
    }

    if (this.home) {
      this.home.onResize(values);
    }
  }

  onTouchDown(event) {
    this.isDown = true
    this.x.start = event.touches ? event.touches[0].clientX : event.clientX
    this.y.start = event.touches ? event.touches[0].clientY : event.clientY

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchDown(values)
    }

    if (this.collections) {
      this.collections.onTouchDown(values)
    }

    if (this.detail) {
      this.detail.onTouchDown(values)
    }

    if (this.home) {
      this.home.onTouchDown(values)
    }
  }

  onTouchMove(event) {
    if (!this.isDown) return

    const x = event.touches ? event.touches[0].clientX : event.clientX
    const y = event.touches ? event.touches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y


    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchMove(values)
    }

    if (this.collections) {
      this.collections.onTouchMove(values)
    }

    if (this.detail) {
      this.detail.onTouchMove(values)
    }

    if (this.home) {
      this.home.onTouchMove(values)
    }
  }

  onTouchUp(event) {
    this.isDown = false
    const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX
    const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY

    this.x.end = x
    this.y.end = y

    const values = {
      x: this.x,
      y: this.y
    }

    if (this.about) {
      this.about.onTouchUp(values)
    }

    if (this.collections) {
      this.collections.onTouchUp(values)
    }

    if (this.detail) {
      this.detail.onTouchUp(values)
    }

    if (this.home) {
      this.home.onTouchUp(values)
    }
  }

  onWheel(event) {
    if (this.home) {
      this.home.onWheel(event)
    }

    if (this.collections) {
      this.collections.onWheel(event)
    }
  }

  // Loop
  update(scroll) {
    // 实时渲染
    // this.mesh.rotation.x += 0.01
    // this.mesh.rotation.y += 0.01
    if (this.about) {
      this.about.update(scroll)
    }
    // 因为只有about page有下滑

    if (this.collections) {
      this.collections.update()
    }

    if (this.detail) {
      this.detail.update()
    }

    if (this.home) {
      this.home.update()
    }

    this.renderer.render({
      camera: this.camera,
      scene: this.scene
    })
  }
}