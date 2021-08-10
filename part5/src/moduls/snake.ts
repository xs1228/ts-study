class Snake{
  // 定义蛇头元素
  head: HTMLElement;
  // 定义蛇的身体（包括蛇头），HTMLCollection表示一个元素集合,会实时刷新
  bodies: HTMLCollection;
  // 定义蛇的容器
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    
    this.head = document.querySelector('#snake>div')!;
    // document.querySelectorAll('#snack>div')!;获取到的元素有个默认长度，就是初始长度
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇的坐标（蛇头的坐标）
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  // 设置蛇的坐标（蛇头的坐标）
  set X(value: number) {
    // 如果新值和旧值相同，则直接返回不在修改
    if (this.X === value) {
      return
    }
    // 判断蛇是否撞墙
    if (value<0||value>290) {
      throw new Error('蛇撞墙了')
    }
    // 身体移动
    this.moveBody()
    this.head.style.left = value + 'px';
    // 判断蛇是否撞到自己
    this.checkHeadBody()
  }
  set Y(value: number) {
    // 如果新值和旧值相同，则直接返回不在修改
    if (this.Y === value) {
      return
    }
    // 判断蛇是否撞墙
    if (value<0||value>290) {
      throw new Error('蛇撞墙了')
    }
    // 身体移动
    this.moveBody()
    this.head.style.top = value + 'px';
    // 判断蛇是否撞到自己
    this.checkHeadBody()
  }
  // 蛇增加身体的方法
  addBody() {
    // 在element最后面添加一个div
    this.element.insertAdjacentHTML("beforeend", '<div></div>');
  }
  // 添加蛇身体移动的方法
  moveBody() {
    // 将后边的身体移动到前面一节的身体的地方
    for (let i = this.bodies.length - 1; i > 0; i--){
      // 获取到前一节身体的值
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      // 将前一节身体的值赋值给当前身体
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  // 检查蛇头和身体是否相撞
  checkHeadBody() {
    for (let index = 1; index < this.bodies.length; index++) {
      let bd = this.bodies[index] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己了~~~')
      }
      
    }
  }
}

export default Snake;
