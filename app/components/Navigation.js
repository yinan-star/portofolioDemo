import Component from '../classes/Component';
import GSAP from 'gsap';

import { COLOR_BRIGHT_GRAY, COLOR_QUARTER_SPANISH_WHITE } from 'utils/color';

export default class Naviagation extends Component {
  constructor({ template }) {
    super({
      element: '.navigation',
      elements: {
        items: '.navigation__list__item',
        links: '.navigation__list__link',
      }
    })
    this.onChange(template);
  }
  
  onChange(template){
    // 如果用户点击about页面，导航的字体的颜色会变成灰色，如果不是就是会反白
    if (template === 'about') {
      GSAP.to(this.element, {
        color: COLOR_BRIGHT_GRAY,
        duration: 1.5,
      });
      // 链接是数组的话，itmes容器下面有几个链接，去pug里面查看,第一个你写的是collection，第二个是about
      GSAP.to(this.elements.items[0], {
        autoAlpha: 1,
        delay: 0.75,
        duration: 0.75,
      });

      GSAP.to(this.elements.items[1], {
        autoAlpha: 0,
        duration: 0.75,
      });
      // autoalpha是可见与不可见，1为可见，反之
    }else {
      GSAP.to(this.element, {
        color: COLOR_QUARTER_SPANISH_WHITE,
        duration: 1.5,
      });
      GSAP.to(this.elements.items[0], {
        autoAlpha: 0,
      });

      GSAP.to(this.elements.items[1], {
        autoAlpha: 1,
        delay: 0.75,
        duration: 0.75,
      });
    }
  }

}