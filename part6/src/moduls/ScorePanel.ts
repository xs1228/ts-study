/*
 * @Description: 记分牌类
 * @Autor: 玄猫
 * @Date: 2022-07-11 20:43:18
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-17 16:25:26
 */
class ScorePanel {
  score = 0;
  level = 1;
  maxLevel: number;//最高等级
  upScore: number;//升一级所用分数
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  constructor(maxLevel: number = 10,upScore: number = 10) {
    this.maxLevel = maxLevel
    this.upScore = upScore
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }
  
  addScore(flag: boolean) {
    if (flag) {
      this.score+=3
    } else {
      this.score++;
    }
    this.scoreEle.innerHTML = this.score + ''
    if (
      Math.floor(this.score / this.upScore) > this.level - 1 &&
      this.score < this.maxLevel * this.upScore
    ) {
      this.levelUp();
    }
  }
  
  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++
      this.levelEle.innerHTML = this.level + ''
    }
  }
  
}

export default ScorePanel;