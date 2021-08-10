// 定义食物类
class Food{
  //定义一个属性来表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素，并将其赋值给element，尾部！表示food元素不可能为空
    // ts会自动判断food的类型为id还是class
    this.element = document.getElementById("food")!;
    console.log('food='+this.element);
    
  }
  // 获取食物X轴坐标
  get X() {
    return this.element.offsetLeft;
  }
  // 获取食物Y轴坐标
  get Y() {
    return this.element.offsetTop;
  }
  // 修改食物位置的方法
  changePosition() {
    this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px';
    this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px';
  }
}

// const food = new Food();
// console.log(food);
// food.changePosition();
// console.log(food.X,food.Y);

export default Food;