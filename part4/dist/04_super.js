"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫~~~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类的构造函数中必须要对父类的构造函数进行调用，
            // 否则父类的构造函数会被子类的构造函数重写导致父类的构造函数不起作用
            // 重写是指子类中有与父类相同的属性或方法，子类的属性或方法会覆盖父类的属性或方法
            super(name); //调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            // 在类的方法中，super就表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();
