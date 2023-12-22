import { Transform } from 'ogl'
import GSAP from 'gsap'

import map from 'lodash/map';

import Media from './Media';

export default class Gallery {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element
    this.elementWrapper = element.querySelector('.about__gallery__wrapper')
    this.geometry = geometry
    this.gl = gl
    this.index = index
    this.scene = scene
    this.sizes = sizes

    this.group = new Transform()

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      lerp: 0.1,
      velocity: 1
    }

    this.createMedias()
    this.onResize({sizes: this.sizes});
    this.group.setParent(this.scene)
  }

  createMedias() {
    this.mediaElements = this.element.querySelectorAll('.about__gallery__media')
    // 注意，图片选择是选择一个类名（.) 或者ID名（#）所以，要注意不是选择字符串

    this.medias = map(this.mediaElements, (element, index) => {

      return new Media({
        element,
        geometry: this.geometry,
        gl: this.gl,
        index,
        scene: this.group,
        sizes: this.sizes
      });

    })
  }

  // Animations
  show() {
    map(this.medias, media => media.show())
  }
  hide() {
    map(this.medias, media => media.hide())
  }

  /**
   * Events.
   */
  onResize(event) {
    this.bounds = this.elementWrapper.getBoundingClientRect()
    // 获取元素的位置和尺寸

    this.sizes = event.sizes
    // 屏幕的尺寸，给update而不是画布的

    this.width = this.bounds.width / window.innerWidth * this.sizes.width
    // 计算当前画廊的宽度占视窗口的宽度的多少然后乘以具体的宽度-->将元素在视口中的比例转换为具体的实际宽度。响应式布局

    this.scroll.current = this.scroll.target = 0

    map(this.medias, media => media.onResize(event, this.scroll.current))

  }

  onTouchDown({ x, y }) {
    this.scroll.start = this.scroll.current
  }

  onTouchMove({ x, y }) {
    const distance = x.start - x.end

    this.scroll.target = this.scroll.start - distance

    // 如果鼠标和图片的移动相反方向，要用减号


  }

  onTouchUp({ x, y }) {

  }



  // Update
  update(scroll) {
    const distance =(scroll.current -scroll.target) * 0.1

    const y =scroll.current / window.innerHeight
    // 了计算滚动位置相对于视窗高度的比例或比率，一个比例因子，更好用语后面的调整和匹配

    if (this.scroll.current < this.scroll.target) {
      this.direction = 'right'
      this.scroll.velocity = -1
    } else if (this.scroll.current > this.scroll.target) {
      this.direction = 'left'
      this.scroll.velocity = 1
    }
    // 检测鼠标滚动方向，当前位置和先前位置做比较。

    // 自动滚动图片，无需手动滚，在手动滚动之前.滚动的方向在上面设置了根据direction滚动
    this.scroll.target -= this.scroll.velocity 
    // 每次都会减小目标位置，使得滚动有逐渐停下来的趋势，通过减去速度来模拟减速的效果
    this.scroll.target += distance
    // 根据当前位置和目标位置之间的距离来动态调整目标位置


    // 手动滚
    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)


    map(this.medias, (media, index) => {
      // For X axis
      const scaleX = media.mesh.scale.x / 2 + 0.25
      // 每张图片之间的间隔？

      if (this.direction === 'left') {
        const x = media.mesh.position.x + scaleX

        if (x < -this.sizes.width / 2) {
          media.extra += this.width

        }
      } else if (this.direction === 'right') {
        const x = media.mesh.position.x - scaleX

        if (x > this.sizes.width / 2) {
          media.extra -= this.width
        }
        // 这个元素的左边边界大于屏幕最右边,就移到前面来
      }


      media.update(this.scroll.current)
      // 根据滚动的位置来更新媒体元素的状态。
      // 如果图片加载了，但是没有按照原来的位置放，记得更新这个
      // media.mesh.position.y = Math.cos((media.mesh.position.x / this.width) * Math.PI) * 1 - 1
      // // gallery的滚动动画


    })
    // 传给media文件
    this.group.position.y = y * this.sizes.height
    // 因为y还只是个比例因子，所以还不是真实的值

  }
  /**
  * Destroy
  */
  destroy() {
    this.scene.removeChild(this.group)
  }

}