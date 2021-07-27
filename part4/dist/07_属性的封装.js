"use strict";
(function () {
    //定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter方法用于读取属性
         * setter方法用于设置属性
         *   - 他们被称为属性的存储器
         */
        getName() {
            return this.name;
        }
        // getName简便方法
        get name() {
            return this._name;
        }
        setName(value) {
            this._name = value;
        }
        // setName简便实现方法
        set name(value) {
            this._name = value;
        }
        getAge() {
            return this._age;
        }
        setAge(value) {
            if (value >= 0) {
                this._age = value;
            }
            else {
                console.log('你输入的年龄不合法！');
            }
        }
    }
    const per = new Person('玄猫', 18);
    per.setName('玄小猫');
    per.name = '玄小小猫';
    console.log(per.getName());
    console.log(per.name);
    console.log(per);
    /**
     * 现在属性是在对象中设置的，属性可以任意的被修改
     * 属性可以任意被修改将使对象中的数据变得非常不安全
     */
  const res1 = /^[1-8][1-7]\d{4}(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/
  const res2 = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/
  
  console.log(res2.test('362202001228503'));
})();
