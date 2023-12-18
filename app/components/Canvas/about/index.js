
import { Plane, Transform } from 'ogl';
import GSAP from 'gsap'

import map from 'lodash/map'

import Gallery from './Gallery'

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.sizes = sizes;
    this.group = new Transform();

    this.createGeometry();
    this.createGalleries();


    this.group.setParent(scene);
    this.show()

    // 姐，constructor格式是({}){}。不要忘记了

  }

  createGeometry() {
    this.geometry = new Plane(this.gl)
  }

  createGalleries() {
    // 传到Media里面
    this.galleriesElements = document.querySelectorAll('.about__gallery')
    this.galleries = map(this.galleriesElements, (element, index) => {
      return new Gallery({
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
    map(this.galleries, gallery => gallery.show())
  }
  hide() {
    map(this.galleries, gallery => gallery.hide())
  }


  // Events
  onResize(event) {
    map(this.galleries, gallery => gallery.onResize(event))
  }

  onTouchDown(event) {
    map(this.galleries, gallery => gallery.onTouchDown(event))
  }

  onTouchMove(event) {
    map(this.galleries, gallery => gallery.onTouchMove(event))
  }

  onTouchUp(event) {
    map(this.galleries, gallery => gallery.onTouchUp(event))
  }

  onWheel({ pixelX, pixelY }) {
    // 捕获滚动事件的像素值，然后根据这些值来更新页面中某些元素的位置或状态，实现页面的滚动或视图的变化

  }

  // Update
  update(scroll) {
    map(this.galleries, gallery => gallery.update(scroll))

  }
  /**
   * Destroy
   */
  destroy() {
    map(this.galleries, gallery => gallery.destroy())
  }
}