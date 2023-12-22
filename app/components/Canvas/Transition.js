// //处理照片
import GSAP from 'gsap'
import { Mesh, Plane, Program, Texture } from 'ogl';

import fragment from 'shaders/plane-fragment.glsl';
import vertex from 'shaders/plane-vertex.glsl';

export default class {
  constructor({ collections, gl, scene, sizes, url }) {
    this.collections = collections;
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.url = url;

    this.geometry = new Plane(this.gl)
    // 上面的elment都是需要复用的所以在这里初始化

  }

  // 然后将选好的照片传给program处理贴图
  createProgram(texture) {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        uAlpha: { value: 1 },
        tMap: { value: texture }
      }
    })
  }

  createMesh(mesh) {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.scale.x = mesh.scale.x;
    this.mesh.scale.y = mesh.scale.y;
    this.mesh.scale.z = mesh.scale.z;

    this.mesh.position.x = mesh.position.x;
    this.mesh.position.y = mesh.position.y;
    this.mesh.position.z = mesh.position.z + 0.01;

    this.mesh.rotation.x = mesh.rotation.x;
    this.mesh.rotation.y = mesh.rotation.y;
    this.mesh.rotation.z = mesh.rotation.z;


    this.mesh.setParent(this.scene);
    // mesh是scene的子元素。

  }

  // Element
  setElement(element) {
    console.log(element.id)

    if (element.id === 'collections') {
      const { index, medias } = element
      const media = medias[index]

      this.createProgram(media.texture)
      this.createMesh(media.mesh)

      this.transition = 'detail'
    } else {
      this.createProgram(element.texture)
      this.createMesh(element.mesh)

      this.transition = 'collections'
    }


  }
  // Animations.
  animate(element, onComplete) {
    // 让faking image动起来match原有的image,但是这个过程需要等几秒,因为在collections的index里设置了bounds需要等几秒.这个等几秒在Canvas的index文件里设置GSAP.delayedCall
    const timeline = GSAP.timeline()

    timeline.to(this.mesh.scale, {
      duration: 1.5,
      ease: 'expo.inOut',
      x: element.scale.x,
      y: element.scale.y,
      z: element.scale.z,

    }, 0)
    timeline.to(this.mesh.position, {
      duration: 1.5,
      ease: 'expo.inOut',
      x: element.position.x,
      y: element.position.y,
      z: element.position.z,
    }, 0)

    timeline.to(this.mesh.rotation, {
      duration: 1.5,
      ease: 'expo.inOut',
      x: element.rotation.x,
      y: element.rotation.y,
      z: element.rotation.z,
    }, 0)

    timeline.call(_ => {
      onComplete()
    })
    // 消灭抖动法

    timeline.call(_ => {
      this.scene.removeChild(this.mesh)
    }, null, '+=1')
    // 完成动画后,等个几秒,销毁图片,不然他会抖动,图片恢复原先的位置上时

  }

}





