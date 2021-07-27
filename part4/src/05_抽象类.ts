(function () {
  /*
  以abstract开头的类是抽象类
  抽象类只能当做父类来使用，不能用来创建对象
  抽象类中可以添加抽象方法
  */
  abstract class Animal {
    name:string
    constructor(name:string) {
      this.name = name;
    }
    // 定义一个抽象方法
    // 抽象方法使用abstract开头，没有方法体
    // 抽象类只能定义在抽象方法中，并且子类必须对抽象方法进行重写
    abstract sayHello(): void;
  }
  class Dog extends Animal{
    sayHello() {
      console.log('汪汪汪汪汪');
      
    }
  }
  const dog = new Dog('旺财');
  dog.sayHello()
})()