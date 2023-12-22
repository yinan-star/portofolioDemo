// //处理照片
import GSAP from 'gsap'
import { Mesh, Program } from 'ogl';
import Detection from 'classes/Detection';

import fragment from 'shaders/plane-fragment.glsl';
import vertex from 'shaders/plane-vertex.glsl';

export default class {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element;
    this.geometry = geometry;
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.index = index;
    // 上面的elment都是需要复用的所以在这里初始化

    this.extra = {
      x: 0,
      y: 0
    };
    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({ sizes: this.sizes })

  }
  createTexture() {
    const image = this.element.querySelector('img')

    this.texture = window.TEXTURES[image.getAttribute('data-src')]

    // 如果图片渲染不出来，就看下这里
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

    this.mesh.setParent(this.scene);

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
    GSAP.fromTo(this.program.uniforms.uAlpha, {
      value: 0
    }, {
      value: 1
    })
  }

  hide() {
    GSAP.to(this.program.uniforms.uAlpha, {
      value: 0
    })
  }


  // Events
  onResize(sizes, scroll, width) {
    this.extra = 0
    this.widthTotal = width

    this.createBounds(sizes)
    this.upadteX(scroll)
    this.upadteY(0)

  }

  // Loop
  updateRotation() {
    // 视窗的左右两边
    this.mesh.rotation.z = GSAP.utils.mapRange(
      -this.sizes.width / 2,
      this.sizes.width / 2,
      Math.PI * 0.1,
      -Math.PI * 0.1,
      this.mesh.position.x
    )
  }

  upadteScale() {
    this.height = this.bounds.height / window.innerHeight
    this.width = this.bounds.width / window.innerWidth

    this.mesh.scale.x = this.sizes.width * this.width
    this.mesh.scale.y = this.sizes.height * this.height
    // 我猜是把webGl图片变成单位向量然后再乘以正确的图片的宽高，让这些图片尺寸match原图

    // const scale = GSAP.utils.mapRange(0, this.sizes.width / 2, 0.1, 0, Math.abs(this.mesh.position.x))
    // // 输入范围内的某个值，用来映射到输出范围，前面两对就是对应的输入参数和输出参数的映射。最后一个参数则是需要进行映射的具体值
    // // 当输入的最小值0，对应输出的最小值0.1。输入的最大值（this.sizes...）对应，输出的最大值0。
    // // 越远离原点（0 --> this.sizes.width / 2)时，scale的值越小（0.1 --> 0)
    // this.mesh.scale.x += scale
    // // 因此在中间的x的比例是最大的
    // this.mesh.scale.y += scale
  }

  upadteX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth
    this.mesh.position.x = (-this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width) + this.extra
    // width和height是视窗的宽高。也就是mesh的position的原点在视窗口的正中心
    // -width / 2 这个部分就是将所有mesh的原点position移到视窗的左上角
  }

  upadteY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;

    const extra = Detection.isPhone() ? 15 : 40;
    // Gallery图片的滚动间距在手机上的设置
    this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height)
    // 这个x是之前在index里设置的鼠标拖动的当前的x,y的距离。所以，想移动匹配好的图片，需要在整个容器加上鼠标x,y移动的距离
    this.mesh.position.y += Math.cos((this.mesh.position.x / this.sizes.width) * Math.PI * 0.1) * extra - extra
    // 累加是方向，向上还是向下
    // Math.PI是弧度？
    // 75也是弧度
  }

  update(scroll) {
    // 以下的方法会不断更新执行
    this.updateRotation()
    this.upadteScale()
    this.upadteX(scroll)
    this.upadteY(0)
  }




}