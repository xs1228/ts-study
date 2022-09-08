/*
 * @Description: 游戏控制器
 * @Autor: 玄猫
 * @Date: 2022-07-13 19:18:36
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-27 19:57:10
 */
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
import GradeSelect from "./GradeSelect";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  gradeSelect: GradeSelect;
  direction: string = "";
  isLive = true;
  foodNum = 0; //所吃食物个数
  speed = 1; //速度,1不加速，2.加速
  keydownNum = 0; //方向按键被连续触发的次数
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 10);
    this.gradeSelect = new GradeSelect();
  }

  // 游戏初始化方法
  init() {
    this.gradeSelect.getGrade();
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    document.addEventListener("keyup", this.keyupHandler.bind(this));
  }
  // 键盘松开监听
  keyupHandler(event: KeyboardEvent) {
    if (
      event.key == "ArrowUp" ||
      event.key == "ArrowDown" ||
      event.key == "ArrowLeft" ||
      event.key == "ArrowRight"
    ) {
      this.speed = 1;
      this.keydownNum = 0;
    }
  }
  // 创建一个监听键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    if (
      this.gradeSelect.garde != 0 &&
      (event.key == "ArrowUp" ||
        event.key == "ArrowDown" ||
        event.key == "ArrowLeft" ||
        event.key == "ArrowRight")
    ) {
      if (this.direction == "") {
        this.run();
      }
      if (this.direction == event.key) {
        this.keydownNum++;
      }
      if (this.keydownNum == 4) {
        // console.log('加速了');
        this.speed = 2;
      }
      this.direction = event.key;
    }
  }

  //蛇移动的方法
  run() {
    //关键点，X,Y变量接收移动之前的蛇头位置，
    let X = this.snake.X;
    let Y = this.snake.Y;
    //X,Y演示蛇下一步的位置
    if (this.direction == "ArrowUp") {
      Y -= 10;
    } else if (this.direction == "ArrowDown") {
      Y += 10;
    } else if (this.direction == "ArrowLeft") {
      X -= 10;
    } else if (this.direction == "ArrowRight") {
      X += 10;
    }
    //检查X,Y是否满足蛇增加身体
    this.checkEat(X, Y);
    //移动身体到当前蛇头位置
    // this.snake.moveBody()不能在移动身体
    // 蛇头往前走一步
    try {
      this.snake.X = X;
      this.snake.Y = Y;
      this.snake.checkHeadBody();
    } catch (e) {
      this.isLive = false;
      alert(e.message);
    }

    this.isLive &&
      setTimeout(() => {
        this.run();
      }, (300 - (this.scorePanel.level - 1) * 15 - this.gradeSelect.garde * 20) / this.speed);
  }

  // 定义一个方法检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (this.food.X == X && this.food.Y == Y) {
      this.foodNum++;
      // 每第四个食物是一个三分食物
      this.food.changeFoodColor((this.foodNum + 1) % 4 == 0);
      this.food.change();
      this.overlap()
      this.scorePanel.addScore(this.foodNum % 4 == 0);
      this.snake.addBody();
    }
  }
  //判断食物与蛇身体是否重合
  overlap() {
    let bodis = this.snake.bodies
    for (let index = 0; index < bodis.length; index++) {
      const element = bodis[index] as HTMLElement;
      if (this.food.X==element.offsetLeft&&this.food.Y==element.offsetTop) {
        console.log("重合了，刷新食物位置");
        this.food.change()
        this.overlap()
        return;
      }
    }
  }
}

export default GameControl;
