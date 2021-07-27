(function () {
  //定义一个表示人的类
  class Person{
    /**
     * ts可以在属性前添加属性的修饰符
     * public  公共属性(默认值)，可在任意地方修改
     * private  私有属性，私有属性只能在类内部进行修改
     *     --通过在类中添加方法使得私有属性可以被外部访问
     * protected 受保护的属性只能在当前类和当前类的子类中访问
     */
    private _name: string;
    private _age: number;
    constructor(name:string,age:number) {
      this._name = name;
      this._age = age;
    }
    /**
     * getter方法用于读取属性
     * setter方法用于设置属性
     *   - 他们被称为属性的存储器
     */
    getName() {
      return this.name
    }
    // getName简便方法
    get name(){
      return this._name
    }

    setName(value:string) {
      this._name = value
    }

    // setName简便实现方法
    set name(value: string) {
      this._name = value
    }
    getAge() {
      return this._age;
    }
    setAge(value: number) {
      if (value >= 0) {
        this._age = value
      } else {
        console.log('你输入的年龄不合法！');
        
      }
    }
  }
  const per = new Person('玄猫', 18);
  per.setName('玄小猫');
  per.name = '玄小小猫'
  console.log(per.getName());
  console.log(per.name);
  
  console.log(per);
  
  /**
   * 现在属性是在对象中设置的，属性可以任意的被修改
   * 属性可以任意被修改将使对象中的数据变得非常不安全
   */
})()