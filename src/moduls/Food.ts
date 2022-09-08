/*
 * @Description: 定义食物类
 * @Autor: 玄猫
 * @Date: 2022-07-11 20:42:04
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-17 16:08:54
 */
class Food {
  element: HTMLElement;
  constructor() {
    //!表示元素不可能为空
    this.element = document.getElementById('food')!

  }

  //定义一个获取食物x轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  
  get Y() {
    return this.element.offsetTop;
  }

  change() {
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    
    this.element.style.left = left+'px'
    this.element.style.top = top+'px'
  }
  changeFoodColor(flag: boolean) {
    let foods = this.element.getElementsByTagName('div')
    for (let index = 0; index < foods.length; index++) {
      const element = foods[index];
      if (flag) {
        element.style.backgroundColor = "red";
      } else {
        element.style.backgroundColor = "black";
      }
    }
  }
  
}

export default Food;