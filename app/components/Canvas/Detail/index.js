// //处理照片
import GSAP from 'gsap'
import { Mesh, Plane, Program } from 'ogl';

import fragment from 'shaders/plane-fragment.glsl';
import vertex from 'shaders/plane-vertex.glsl';

export default class {
  constructor({ gl, scene, sizes, transition }) {
    this.id = 'detail'

    this.element = document.querySelector('.detail__media__image')
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.transition = transition

    this.geometry = new Plane(this.gl)
    // 上面的elment都是需要复用的所以在这里初始化

    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({ sizes: this.sizes });

    this.show();
  }
  createTexture() {
    // 在shader里面做的渐变
    const image = this.element.getAttribute('data-src')
    this.texture = window.TEXTURES[image]
    // this.texture = new Texture(this.gl)

    // const image =this.element.querySelector('.collections__gallery__media__image')

    // this.image = new window.Image()
    // this.image.crossOrigin = 'anonymous'
    // // 因为图片是从presmic来的，所以要匿名
    // this.image.src = image.getAttribute('data-src')
    // this.image.onload = _ => (this.texture.image = this.image)
    // // 如果图片是黑色的材质，看这里，getAttribute是直接image.而不是this.image
    // // this.image 当前类的实例对象上的一个属性，image 只是一个在方法中临时存储图片元素的变量
  }

  // 然后将选好的照片传给program处理贴图
  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        uAlpha: { value: 0 },
        tMap: { value: this.texture }
      }
    })
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.rotation.z = Math.PI * 0.01

    this.mesh.setParent(this.scene);
    // mesh是scene的子元素。

  }

  createBounds({ sizes }) {
    // 将mesh和gallery所设定的尺寸绑定
    this.sizes = sizes
    // 初始化sizes，让他变成下面可以重复利用的属性
    this.bounds = this.element.getBoundingClientRect()

    this.upadteScale()
    this.upadteX()
    this.upadteY()
  }

  // Animations.
  show() {
    if (this.transition) {
      this.transition.animate(this.mesh, _ => {
        this.program.uniforms.uAlpha.value = 1
      })
    } else {
      GSAP.to(this.program.uniforms.uAlpha, {
        value: 1
      })
    }
  }

  hide() {
    GSAP.to(this.program.uniforms.uAlpha, {
      value: 0,
    });
  }

  // Events
  onResize(sizes) {
    this.createBounds(sizes)
    this.upadteX()
    this.upadteY()

  }

  onTouchDown() {

  }

  onTouchMove() {

  }

  onTouchUp() {

  }

  // Loop
  upadteScale() {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height
    // 我猜是把webGl图片变成单位向量然后再乘以正确的图片的宽高，让这些图片尺寸match原图


  }

  upadteX() {
    this.x = (this.bounds.left) / window.innerWidth
    this.mesh.position.x = (-this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width)
    // width和height是视窗的宽高。也就是mesh的position的原点在视窗口的正中心
    // -width / 2 这个部分就是将所有mesh的原点position移到视窗的左上角
  }

  upadteY() {
    this.y = (this.bounds.top) / window.innerHeight
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height)
    // 这个x是之前在index里设置的鼠标拖动的当前的x,y的距离。所以，想移动匹配好的图片，需要在整个容器加上鼠标x,y移动的距离
  }

  update() {
    this.upadteX()
    this.upadteY()

  }
  /**
   * Destroy
   */
  destroy() {
    this.scene.removeChild(this.mesh)
  }




}