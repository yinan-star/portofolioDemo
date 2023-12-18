// //处理照片
import GSAP from 'gsap'
import { Mesh,Plane, Program} from 'ogl';

import fragment from 'shaders/plane-fragment.glsl';
import vertex from 'shaders/plane-vertex.glsl';

export default class {
  constructor({ collections, gl, scene, sizes, url}) {
    this.collections = collections;
    this.gl = gl;
    this.scene = scene;
    this.sizes = sizes;
    this.url =url;

    this.geometry = new Plane(this.gl)
    // 上面的elment都是需要复用的所以在这里初始化

    this.createTexture();
    this.createProgram();
    this.createMesh();
  }
  createTexture() {
    const {index, medias} = this.collections

    // const image =this.element.querySelector('.collections__gallery__media__image')
    // this.texture = window.TEXTURES[image.getAttribute('data-src')]
    this.media = medias[index]
  }

  // 然后将选好的照片传给program处理贴图
  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
        uAlpha: { value: 1 },
        tMap: { value: this.media.texture }
      }
    })
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.scale.x =this.media.mesh.scale.x
    this.mesh.scale.y =this.media.mesh.scale.y
    this.mesh.scale.z =this.media.mesh.scale.z

    this.mesh.position.z = this.media.mesh.position.z + 0.01

    this.mesh.setParent(this.scene);
    // mesh是scene的子元素。

  }


  // Animations.
  animateDetail(element){
    console.log(element)

  }

 



}