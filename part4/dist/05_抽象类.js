"use strict";
(function () {
    /*
    以abstract开头的类是抽象类
    抽象类只能当做父类来使用，不能用来创建对象
    抽象类中可以添加抽象方法
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪汪汪');
        }
    }
    const dog = new Dog('旺财');
    dog.sayHello();
})();
