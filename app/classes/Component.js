// 管理网页中的特定页面的动画、元素和交互效果,单单是为了preloader的页面继承
import EventEmitter from 'events';
// 这个从node.js里看看有没有events
import each from 'lodash/each'

export default class Component extends EventEmitter {
  // 果你想在一个文件中定义一些东西并在另一个文件中使用它，你需要将这些内容导出并在其他文件中导入
  constructor({// 构造函数在实例化时会为对象设置初始属性或状态。构造函数定义了对象在创建时应该具备的特征。在创建类的实例后，可以访问和操作这些属性，还可以调用与该类相关联的方法。
    element,
    elements
  })
  {
    super()

    this.selector=element
    this.selectorChildren={...elements}
    // selector用来存储传入这两个属性的引用，用来存储对页面元素的引用。element可能是一个页面的元素，elements可能是元素集合
    // ...element是展开运算符，用于快速复制对象或合并对象属性到一个新的对象中。创建了一个新的对象，该对象包含了 elements 中的所有属性
    this.create()
    this.addEventListeners()
  }

  create(){// create方法是使用 querySelector进行页面的元素选择和操作
    if (this.selector instanceof window.HTMLElement) {
        this.element = this.selector;
      } else {
        this.element = document.querySelector(this.selector);
      }
    // 就是先调用上面的构造函数，将页面的element的值存到thi.selector的容器里，然后在执行这个create函数，获取到当前被选择器所指定的元素。querySelctor这个方法不会选择所有匹配的元素，而只会返回第一个匹配的元素。
    this.elements={}

    each(this.selectorChildren, (entry,key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList
      ) {
        this.elements[key] = entry;
        // 将属性值即页面元素存储在elements对象中并以他们的属性名命名
      } 
      else {
        this.elements[key] = document.querySelectorAll(entry);
      // 无论是直接的页面元素（<div>、<p>、<span>）还是选择器字符串（类名、ID、标签名）都存在elements里，好用做后续操作访问
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } 
        else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
      // entry:每个属性的值，也就是属性所对应的内容;key:属性的名称。优点按照属性名（表示元素类型或特征）来访问对应的元素或元素集合
      // 每个属性的名称表示了一组元素的类型或特征（如 animationTitles、animationParagraphs 等），而对应的属性值是用这些选择器选择到的元素或元素集合。
    });
    // entry是当前元素,foreach用不了换成了lowcash/each来遍历
  }

// 开始做动画了～⬇️

  addEventListeners(){
   
  }

  removeEventListeners(){
  }
}