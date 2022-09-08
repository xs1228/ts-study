/*
 * @Description: 蛇对象
 * @Autor: 玄猫
 * @Date: 2022-07-12 20:45:44
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-17 17:33:36
 */
class Snake {
  element: HTMLElement;
  head: HTMLElement;
  bodies: HTMLCollection;
  constructor() {
    this.element = document.querySelector('#snake')!;
    this.head = document.querySelector('#snake > div')!;//querySelector选择器只会选择符合条件的第一个元素
    this.bodies = this.element.getElementsByTagName('div')!;//可以实时刷新
    
  }

  
  public get X() : number {
    return this.head.offsetLeft;
  }

  public get Y() : number {
    return this.head.offsetTop;
  }

  
  public set X(v: number) {
    if (v==this.X) {
      return
    }
    if (0 > v || v > 290) {
      throw new Error("GAME OVER!");
    }

    // 判断调头
    if (this.bodies[1]&&(this.bodies[1] as HTMLElement).offsetLeft==v) {
      if (v > this.X) {
        v = this.X-10
      } else {
        v = this.X+10
      }
    }
    this.moveBody();
    this.head.style.left = v + "px";
  }

  public set Y(v: number) {
    if (v == this.Y) {
      return;
    }
    if (0 > v || v > 290) {
      throw new Error("GAME OVER!");
    }

    // 判断调头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === v) {
      if (v > this.Y) {
        v = this.Y - 10;
      } else {
        v = this.Y + 10;
      }
    }
    this.moveBody()
    this.head.style.top = v + "px";
  }
  addBody() {
    //向elememt元素末尾添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  
  moveBody() {
    for (let index = this.bodies.length - 1; index > 0; index--) {
      let X = (this.bodies[index - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[index - 1] as HTMLElement).offsetTop;
      (this.bodies[index] as HTMLElement).style.left = X + 'px';
      (this.bodies[index] as HTMLElement).style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    for (let index = this.bodies.length - 1; index > 0; index--) {
      let X = (this.bodies[index] as HTMLElement).offsetLeft;
      let Y = (this.bodies[index] as HTMLElement).offsetTop;
      if (X == this.X && Y == this.Y) {
        throw new Error("GAME OVER!");
      }
    }
  }
}

export default Snake;