"use strict";
(function () {
    const obj1 = {
        name: 'xuanmao',
        age: 18
    };
    const obj2 = {
        name: 'xuanmao',
        age: 18,
        gender: '男',
        sayHello() {
            console.log('hello');
        }
    };
    console.log(obj1);
    console.log(obj2);
    /**
     * 定义类时，可以使类去实现一个接口
     * 实现接口就是使类满足接口的要求
     */
    class People {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        sayHello() {
            console.log('hello');
        }
    }
})();
