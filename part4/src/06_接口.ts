(function () {
  // 描述一个对象的类型
  type myType = {
    name: string,
    age: number
  };

  /**
   *  接口其实就是规范，定义一个接口就是定义一个规范，满足一个接口就是满足一个规范 
   * 
   *  用来定义一个类(class)结构,接口中所有属性都不能有实际的值，只能用来定义结构,所以接口中所有的方法都是抽象方法
   *  同时接口也可以当成类型声明去使用
   *  接口和类型声明的区别是类型声明不能重复声明，接口可以重复声明，重复声明后的接口是所有接口的总和
   * 
   */
  interface myInterface{
    name: string;
    age: number;
  }
  interface myInterface{
    gender: string
    sayHello(): void;
  }

  const obj1: myType = {
    name: 'xuanmao',
    age: 18
  }

  const obj2: myInterface = {
    name: 'xuanmao',
    age: 18,
    gender: '男',
    sayHello() {
      console.log('hello');
    }
  }
  console.log(obj1);
  console.log(obj2);

  /**
   * 定义类时，可以使类去实现一个接口
   * 实现接口就是使类满足接口的要求
   */
  class People implements myInterface{
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender:string) {
      this.name = name
      this.age = age
      this.gender = gender
    }
    sayHello(): void {
      console.log('hello');
      
    }

  }
})()