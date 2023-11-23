import Page from 'classes/Page'

export default class Detail extends Page{
  constructor() {
    super({
      id:'detail',
      element:'.detail'
    })
    // super 调用了父类的构造函数，并传递了一个包含 id: 'about' 的对象。这个对象用于父类的构造函数。然后，父类的构造函数中的 console.log('Create', this.id) 将会在控制台记录 'Create about'。这是因为父类的构造函数接收到了 { id: 'about' } 这个对象，并记录了相关信息。

  }
}