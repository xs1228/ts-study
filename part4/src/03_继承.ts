(function () {
  class Animal {
  name: string;
  age: number;
  constructor(name:string,age:number) {
    this.name = name;
    this.age = age
  }
  back() {
    console.log('动物在叫');
  }
}
// Dog类继承Animal类，关键字 extends
class Dog extends Animal{
  run() {
      console.log(`${this.name}在跑~~~`);
      console.log(this.name+'在跑~~');
      }
  }
  
// Cat类继承Animal类，关键字 extends
class Cat extends Animal{

  }
  const dog1 = new Dog('小白', 3);
  const cat1 = new Cat('小花', 3);
  console.log(dog1);
  console.log(cat1);
  dog1.run();
  
  
})()

