import Snake from "./snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他所有类
class GameControl{
  // 定义对象属性
  snack: Snake;
  food: Food;
  scorePanel: ScorePanel;
  // 创建一个属性来存储蛇的移动方向
  direction: string = '';
  // 创建一个属性用来记录游戏是否结束 true表示时间不过短
  isLive = true;
  constructor() {
    this.snack = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  // 游戏的初始化方法,调用后游戏就开始了
  init() {
    document.addEventListener('keydown', this.keydownHander.bind(this))
    // 使蛇移动
    this.run();
  }
  // 创建一个键盘按下的响应函数
  keydownHander(event: KeyboardEvent) {
    // 创建一个属性用来记录两次按键间隔是否过短
    let isTime = true;
    setTimeout(function(){},300-(this.scorePanel.level-1)*30)
    // 检查event.key的值是否合法
    if ( event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
      if (this.snack.bodies.length == 1) {
        // 修改direction的值
        this.direction = event.key;
      }else if (event.key == 'ArrowUp'&& this.direction =='ArrowDown' || event.key == 'ArrowDown' && this.direction =='ArrowUp' || event.key == 'ArrowLeft' && this.direction =='ArrowRight' || event.key == 'ArrowRight'&& this.direction =='ArrowLeft' ) {
        return
      } else {
        // 修改direction的值
        this.direction = event.key;       
      }
    } 
  }
  // 创建蛇移动的方法
  run() {
    let X = this.snack.X;
    let Y = this.snack.Y;
    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10;
        break;
      case 'ArrowDown':
        Y += 10;
        break;
      case 'ArrowLeft':
        X -= 10;
        break;
      case 'ArrowRight':
        X += 10;
        break;
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y)

    // 修改蛇的X和Y值
    try {
      this.snack.X = X;
      this.snack.Y = Y;
    } catch (e) {
      alert(e.message + 'GAME OVER!');
      // 将isLive设置为false
      this.isLive = false;
    }
    
    // 开启一个定时调用
    this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30);
  }

  // 定义一个方法检查蛇是否吃到食物
  checkEat(X:number,Y:number) {
    if (X===this.food.X&&Y===this.food.Y) {
      console.log('蛇吃到了食物');
      // 食物改变
      this.food.changePosition();
      //蛇要增加一节
      this.snack.addBody();
      //分数增加
      this.scorePanel.addScore();
    } 
  }

}
export default GameControl;