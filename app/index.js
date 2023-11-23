import About from "./pages/About/About";
import Collections from "./pages/Collections/Collections";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
class App{
  constructor(){
    // 召唤
    this.createContent()
    this.createPages()
      
  }

  createContent() {
    this.content = document.querySelector('.content'); //DES: selecting the content class
    this.template = this.content.getAttribute('data-template'); //DES: getting the dataset-template
  }


  createPages(){
    // 初始化页面,先建文档，在写这个，他会自动弹出import
      this.pages={
        about:new About(),
        collections:new Collections(),
        detail:new Detail(),
        home:new Home(),       
      }
      this.page=this.pages[this.template]
      // 你在哪个页面就渲染了哪个页面，data0tempalte它使得你可以在 HTML 元素中存储数据，然后通过 JavaScript 来读取和使用这些数据，
      this.page.create()
      this.page.show()
  }
}
new App()