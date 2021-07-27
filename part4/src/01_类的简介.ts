// 使用class关键字来定义一个类
class Person{
  //定义实例属性
  name: String = '孙悟空';
  // 定义静态属性,静态属性不需要创建对象就可以使用，使用方法：类名.静态属性名
  static age: number = 18;
  // 定义一个只读属性
  readonly sex: String = '男'
  //定义一个只读静态属性,注意static要放在readonly前面
  static readonly height: number = 1.88

  // 定义方法,如果方法前加static就是类方法或者叫静态方法
  seyHello() {
    console.log('hello 大家好！');
    
  }
}

const per = new Person();

console.log(per);
per.seyHello()
