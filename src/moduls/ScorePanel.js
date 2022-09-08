/*
 * @Description: 记分牌类
 * @Autor: 玄猫
 * @Date: 2022-07-11 20:43:18
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-11 20:45:24
 */
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        this.score = 0;
        this.level = 1;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
    }
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if (this.score % this.upScore == 0 && this.score < this.maxLevel * this.upScore) {
            this.levelUp();
        }
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelEle.innerHTML = this.level + '';
        }
    }
}
export default ScorePanel;
