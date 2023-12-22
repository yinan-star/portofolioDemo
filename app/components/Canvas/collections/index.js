
import { Plane, Transform } from 'ogl';
import GSAP from 'gsap'
import Prefix from 'prefix'

import map from 'lodash/map'

import Media from './Media'

export default class {
  constructor({ gl, scene, sizes, transition }) {
    this.transition = transition;
    this.id = 'collections';
    this.gl = gl;
    this.scene = scene
    this.sizes = sizes;

    this.transformPrefix = Prefix('transform')
    this.group = new Transform();

    this.galleryElement = document.querySelector('.collections__gallery')
    this.galleryWrapperElement = document.querySelector('.collections__gallery__wrapper')

    this.titlesElement = document.querySelector('.collections__titles')

    this.collectionsElements = document.querySelectorAll('.collections__article')
    this.collectionsElementsActive = 'collections__article--active'

    this.mediasElements = document.querySelectorAll(
      '.collections__gallery__media'
    );

    this.scroll = {
      current: 0,
      target: 0,
      lerp: 0.1
    }


    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      lerp: 0.1,
      velocity: 1
    }

    this.createGeometry();
    this.createGallery();

    this.onResize({ sizes: this.sizes });

    this.group.setParent(this.scene);

    this.show()
    // 姐，constructor格式是({}){}。不要忘记了

  }

  createGeometry() {
    this.geometry = new Plane(this.gl)
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
  async show() {
    if (this.transition) {
      const { src } = this.transition.mesh.program.uniforms.tMap.value.image;
      const texture = window.TEXTURES[src];
      const media = this.medias.find((media) => media.texture === texture);
      const scroll = -media.bounds.left - media.bounds.width / 2 + window.innerWidth / 2;

      this.update();
     
      this.transition.animate({
        position: { x: 0, y: media.mesh.position.y, z: 0 },
        rotation: media.mesh.rotation,
        scale: media.mesh.scale,
        // 让返回的图片math原来的位置

      }, _ => {
        media.opacity.multiplier = 1;

        map(this.medias, (item) => {
          if (media !== item) {
            item.show();
          }
        });
       
        this.scroll.current = this.scroll.target = this.scroll.start = this.scroll.last = scroll;
      
      })
    } else {
      map(this.medias, (media) => media.show());
    }
  }
  hide() {
    map(this.medias, (media) => media.hide());
  }

  // Events
  onResize(event) {
    this.sizes = event.sizes
    // 屏幕的尺寸，给update而不是画布的
    this.bounds = this.galleryWrapperElement.getBoundingClientRect()
    // 获取元素的位置和尺寸

    // 计算当前画廊的宽度占视窗口的宽度的多少然后乘以具体的宽度-->将元素在视口中的比例转换为具体的实际宽度。响应式布局
    this.scroll.last = this.scroll.target = 0

    map(this.medias, media => media.onResize(event, this.scroll))
    this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth

  }

  onTouchDown({ x, y }) {
    this.scroll.last = this.scroll.current
  }

  onTouchMove({ x, y }) {
    const distance = x.start - x.end

    this.scroll.target = this.scroll.last - distance
    // 如果鼠标和图片的移动相反方向，要用减号
    // console.log(this.scroll.target, distance)
    // 如果图片不能移动，看下鼠标能不能移动数据，如果鼠标能移动数据，那就是没有把这个值给到media让图片移动
  }

  onTouchUp({ x, y }) {

  }

  onWheel({ pixelY }) {
    // 捕获滚动事件的像素值，然后根据这些值来更新页面中某些元素的位置或状态，实现页面的滚动或视图的变化
    this.scroll.target += pixelY
  }

  /**
   * Changed联动动画图片文字标题
   */
  onChange(index) {
    // 从其他地方接受索引,鼠标滑动，左下角文字内容跟着图片变化
    this.index = index

    const selectedCollection = parseInt(this.mediasElements[this.index].getAttribute('data-index'))

    map(this.collectionsElements, (element, elementIndex) => {
      if (elementIndex === selectedCollection) {
        element.classList.add(this.collectionsElementsActive)
      } else {
        element.classList.remove(this.collectionsElementsActive)
      }
    })

    this.titlesElement.style[this.transformPrefix] = `translateY(-${25 * selectedCollection}%) translate(-50%, -50%) rotate(-90deg)`

  }

  // Update
  update() {
    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target)
    // 滚动滚轮限制

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

    this.galleryElement.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`
    // 将图片链接的容器match滚动的坐标随着图片一起滚而不是停在原地

    if (this.scroll.last < this.scroll.current) {
      this.scroll.direction = 'right'
    } else if (this.scroll.last > this.scroll.current) {
      this.scroll.direction = 'left'
    }
    // 检测鼠标滚动方向，当前位置和先前位置做比较。

    this.scroll.last = this.scroll.current

    const index = Math.floor(Math.abs((this.scroll.current - this.medias[0].bounds.width / 2) / this.scroll.limit) * (this.medias.length - 1));
    //减去一半的卡片宽度,使得提前highlight卡片,而不是等到卡片y轴中心才激活就慢了
    // Math.floor,取整数，滚动特定距离后确定图片元素在数组中的索引
    if (this.index !== index) {
      this.onChange(index)
    }

    map(this.medias, (media, index) => {
      media.update(this.scroll.current, this.index)
      // media.mesh.position.y += Math.cos((media.mesh.position.x / this.sizes.width) * Math.PI * 0.1) * 40 - 40

    })

    // 传给media文件,将当前的鼠标滚动位置传给media


  }

  /**
   * Destroy
   */
  destroy() {
    this.scene.removeChild(this.group)
  }

}