//处理照片
import { Mesh, Program, Transform, Texture } from 'ogl';

import fragment from 'shaders/plane-fragment.glsl';
import vertex from 'shaders/plane-vertex.glsl';

export default class {
  constructor({ element, geometry, gl, index, scene }) {
    this.element = element
    this.gl = gl;
    this.geometry=geometry
    this.scene=scene
    this.index =index
    // 上面的elment都是需要复用的所以在这里初始化

    this.createTexture()
    this.createProgram()
    this.createMesh()
  }
  createTexture() {
    this.texture = new Texture(this.gl);

    this.image = new Image();
    this.image.crossOrigin = 'anonymous';
    this.image.src = this.element.getAttribute('data-src');
    this.image.onload = () => (this.texture.image = this.image);

   

  }
  // 然后将选好的照片传给program处理贴图
  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
      uniforms: {
          tMap: { value: this.texture },
      },
    });

  }
  createMesh() {
    this.mesh=new Mesh(this.gl,{
      geometry:this.geometry,
      program:this.program
    })
    this.mesh.setParent(this.scene)
    this.mesh.position.x += this.index * this.mesh.scale.x;
  }
}