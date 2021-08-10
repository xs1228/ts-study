// 定义记分牌的类
class ScorePanel{
  // 记录分数和等级
  score = 0;
  level = 1;
  // 获取分数和等级的对象
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  // 设置最大等级的参数
  maxLevel: number;
  // 设置多少分升级的参数
  upScore: number
  constructor(maxLevel:number = 10,upScore:number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置加分的方法
  addScore() {
    // 分数自增
    this.score++;
    this.scoreEle.innerHTML = this.score + '';
    // 分数达到要求等级提升
    if (this.score%this.upScore===0) {
      this.levelUp()
    }
  }
  //提升等级的方法
  levelUp() {
    if (this.level<this.maxLevel) {
    this.level++;
    this.levelEle.innerHTML = this.level + '';
    }
  }
}

// const scorePanel = new ScorePanel();
// scorePanel.addScore();
// scorePanel.addScore();
// scorePanel.levelUp();

export default ScorePanel;
