
import { Plane, Transform } from 'ogl';
import GSAP from 'gsap'

import map from 'lodash/map'

import Media from './Media'

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.scene = scene
    this.sizes = sizes;
    this.group = new Transform();

    this.galleryElement = document.querySelector('.home__gallery')
    this.mediasElements = document.querySelectorAll(
      '.home__gallery__media__image'
    );

    this.x = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.y = {
      current: 0,
      target: 0,
      lerp: 0.1
    }

    this.scrollCurrent = {
      x: 0,
      y: 0
    }

    this.scroll = {
      x: 0,
      y: 0
    }

    this.speed = {
      current: 0,
      target: 0,
      lerp: 0.1
      // 不要小于0.1
    }

    this.createGeometry();
    this.createGallery();


    this.group.setParent(this.scene);

    this.show()
    // 姐，constructor格式是({}){}。不要忘记了

  }

  createGeometry() {
    this.geometry = new Plane(this.gl, {
      widthSegments: 20,
      heightSegments: 20
      // 把平面增加分段,像3d一样,在home-vertex里面做算法
    })
  }

  createGallery() {
    // 传到Media里面
    this.medias = map(this.mediasElements, (element, index) => {
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

  // Events
  onResize(event) {
    this.galleryBounds = this.galleryElement.getBoundingClientRect()
    // 获取元素的位置和尺寸

    this.sizes = event.sizes
    // 屏幕的尺寸，给update而不是画布的

    this.gallerySizes = {
      height: this.galleryBounds.height / window.innerHeight * this.sizes.height,
      width: this.galleryBounds.width / window.innerWidth * this.sizes.width
    }
    // 计算当前画廊的宽度占视窗口的宽度的多少然后乘以具体的宽度-->将元素在视口中的比例转换为具体的实际宽度。响应式布局
    this.scroll.x = this.x.target = 0
    this.scroll.y = this.y.target = 0
    map(this.medias, media => media.onResize(event, this.scroll))

  }

  onTouchDown({ x, y }) {
    this.speed.target = 1
    // 按下的高度
    this.scrollCurrent.x = this.scroll.x
    this.scrollCurrent.y = this.scroll.y
  }

  onTouchMove({ x, y }) {
    const xDistance = x.start - x.end
    const yDistance = y.start - y.end

    this.x.target = this.scrollCurrent.x - xDistance,
      this.y.target = this.scrollCurrent.y - yDistance
    // 如果鼠标和图片的移动相反方向，要用减号


  }

  onTouchUp({ x, y }) {
    this.speed.target = 0

  }

  onWheel({ pixelX, pixelY }) {
    // 捕获滚动事件的像素值，然后根据这些值来更新页面中某些元素的位置或状态，实现页面的滚动或视图的变化
    this.x.target += pixelX
    this.y.target += pixelY
  }

  // Update
  update() {
    if (!this.galleryBounds) return


    this.scroll.x = this.x.current
    this.scroll.y = this.y.current

    this.speed.current = GSAP.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp)

    this.x.current = GSAP.utils.interpolate(this.x.current, this.x.target, this.x.lerp)
    this.y.current = GSAP.utils.interpolate(this.y.current, this.y.target, this.y.lerp)

    if (this.scroll.x < this.x.current) {
      this.x.direction = 'right'
    } else if (this.scroll.x > this.x.current) {
      this.x.direction = 'left'
    }
    // 检测鼠标滚动方向，当前位置和先前位置做比较。
    if (this.scroll.y < this.y.current) {
      this.y.direction = 'top'
    } else if (this.scroll.y > this.y.current) {
      this.y.direction = 'bottom'
    }

    map(this.medias, (media, index) => {
      // For X axis
      const offsetX = this.sizes.width * 0.6
      const scaleX = media.mesh.scale.x / 2
      if (this.x.direction === 'left') {
        const x = media.mesh.position.x + scaleX
        // 元素的x位置+这个元素的一半的宽度，就是第一个元素的最右边边界，这个边界小雨屏幕的最左边的边界就是图片out of picture
        if (x < -offsetX ) {
          // 表示屏幕宽度的一半。将其取负值的原因是，通常情况下屏幕左侧边界的坐标值是负的，而屏幕右侧边界是正的。
          // 检查第一个媒体元素的位置是否超出屏幕左侧边界
          media.extra.x += this.gallerySizes.width
          // 当用户往左边拽，并且移出去后，要将它放到最右边让他从右边进来， 达成一个循环,就是第一个元素的X累加上整个画廊的宽度，就到了最右边
          // 相对于对象自身的中心轴或者原点的位置，也就是说local position
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)

        }
      } else if (this.x.direction === 'right') {
        const x = media.mesh.position.x - scaleX
        if (x > offsetX ) {
          media.extra.x -= this.gallerySizes.width
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
        }
        // 这个元素的左边边界大于屏幕最右边,就移到前面来
      }
      // For Y axis
      const offsetY = this.sizes.height * 0.6
      const scaleY = media.mesh.scale.y / 2
      
      if (this.y.direction === 'bottom') {
        const y = media.mesh.position.y - scaleY
        if (y > offsetY) {
          media.extra.y -= this.gallerySizes.height
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
        }
        // 往下滑，顶部元素的底部边界大于屏幕最最顶端,就移到底部来
      } else if (this.y.direction === 'top') {
        const y = media.mesh.position.y + scaleY
        if (y < -offsetY) {
          media.extra.y += this.gallerySizes.height
          media.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03)
        }
        // 往上滑，这个元素的顶部边界小于屏幕最最底端,就移到顶部来
      }



      media.update(this.scroll, this.speed.current)
    })
    // 传给media文件
  }

  /**
   * Destroy
   */
  destroy() {
    this.scene.removeChild(this.group)
  }

}