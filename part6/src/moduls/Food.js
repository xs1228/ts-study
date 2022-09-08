/*
 * @Description: 定义食物类
 * @Autor: 玄猫
 * @Date: 2022-07-11 20:42:04
 * @LastEditors: 玄猫
 * @LastEditTime: 2022-07-11 20:44:59
 */
class Food {
    constructor() {
        //!表示元素不可能为空
        this.element = document.getElementById('food');
    }
    //定义一个获取食物x轴坐标的方法
    get x() {
        return this.element.offsetLeft;
    }
    get y() {
        return this.element.offsetTop;
    }
    change() {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
export default Food;
