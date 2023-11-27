import Component from "./Component"

export default class Animation extends Component {
    constructor({ element, elements }) {
        super({ element, elements });
    
        this.createObserver();
        this.animateOut();
      }
  
    createObserver() {
      this.obesever = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateIn();
          } else {
            this.animateOut();
          }
        });
      });
    //   如果是进入动画，就调用进入动画的方法，反之。然后在animations的设定的不同动画方法里工作
  
      this.obesever.observe(this.element);
    }

    animateIn() {}
    animateOut() {}
    onResize(){

    }
}  