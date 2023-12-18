import { Texture } from 'ogl'
import Component from '../classes/Component';
import GSAP from 'gsap'

import { split } from 'utils/text'

export default class Preloader extends Component {
  constructor({ canvas }) {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        number: '.preloader__number',
        numberText: '.preloader__number__text',
      }
    })
    this.canvas = canvas
    window.TEXTURES = {}

    split({
      element: this.elements.title,
      expression: '<br>'
    })
    // 好像是在span里面做遮罩
    split({
      element: this.elements.title,
      expression: '<br>'
    })

    this.elements.titleSpans = this.elements.title.querySelectorAll('span span')

    this.length = 0

    this.createLoader()
  }

  createLoader() { // 创建加载页后直接奔着about page并且将about图片都显示出来
    // each(this.elements.images,element =>{
    //     element.onload=_ => this.onAssetLoaded(element)
    //     element.src=element.getAttribute('data-src')           
    // }) 
    window.ASSETS.forEach(image => {
      const texture = new Texture(this.canvas.gl, {
        generateMipmaps: false
      })
      const media = new window.Image()

      media.crossOrigin = 'anonymous'
      media.src = image
      media.onload = _ =>{
        texture.image =media
        this.onAssetLoaded()
      }
      window.TEXTURES[image] = texture
    })

  }

  onAssetLoaded(image) {// 加载页的计算响应公式     
    this.length += 1
    // 每load一次，这个当前加载的进度会加一
    const percent = this.length / window.ASSETS.length
    this.elements.numberText.innerHTML = `${Math.round(percent * 100)}%`
    // 这个是加载完所有图像后的加载页的number的计算公式

    if (percent === 1) {
      this.onloaded()
    }
  }

  onloaded() {// 控制加载页等待多久进入主页及动画
    return new Promise(resolve => {
      this.emit('completed')

      this.animateOut = GSAP.timeline({
        delay: 1
        // 控制加载页等待多久进入主页
      })

      this.animateOut.to(this.elements.titleSpans, {
        // 字体设计逐渐向下消失
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%',
      })

      this.animateOut.to(this.elements.numberText, {
        // 数字设计逐渐向下消失
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
        y: '100%',
      }, '-=1.4')

      this.animateOut.to(this.element, {
        // 让preloader沿Y轴向上消失
        autoAlpha: 0,
        duration: 1

      })

      this.animateOut.call(_ =>{
        this.destroy()
      })

    
    })
  }

  destroy() {
    this.element.parentNode.removeChild(this.element)
  }
}