/*
 * @Description: 选择游戏等级对象
 * @Autor: 玄猫
 * @Date: 2022-07-17 13:30:11
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-17 14:00:52
 */
class gradeSelect {
  gradeWarp: HTMLElement;
  gradeItem: HTMLCollection;
  garde: number = 0;
  constructor() {
    this.gradeWarp = document.getElementById("mc")!;
    this.gradeItem = document.getElementsByClassName("grade")
  }
  getGrade() {
    let items = this.gradeItem;
    for (let index = 0; index < items.length; index++) {
      const element = items[index] as HTMLElement;
      element.addEventListener("click", () => {
        this.garde = index + 1
        this.gradeWarp.style.display = "none"
      });
    }
  }
}

export default gradeSelect