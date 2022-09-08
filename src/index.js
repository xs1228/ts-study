/*
 * @Description: 描述
 * @Autor: 玄猫
 * @Date: 2022-07-10 20:19:58
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-11 20:55:55
 */
import './style/index.less';
import Food from './moduls/Food';
import ScorePanel from './moduls/ScorePanel';
let food = new Food();
console.log(food.x, food.y);
food.change();
console.log(food.x, food.y);
let scorePanel = new ScorePanel();
scorePanel.addScore();
scorePanel.addScore();
scorePanel.addScore();
scorePanel.addScore();
scorePanel.addScore();
scorePanel.addScore();
