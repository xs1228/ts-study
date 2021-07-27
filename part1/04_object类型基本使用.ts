// object表示一个js对象,在开发中一般不这样使用，因为js中对象太多，{}和函数都是对象
let a: object;
a = {};
a = function () { }


//这个也不常用
//{} 用来指定对象中包含哪些属性
// 语法：{属性名：属性值,属性名：属性值,...}
// 在属性后面加上？，表示属性是可选的
let b: { name: string ,age?: number};
b = { name: 'xuanmao' }


//开发中对象一般这样使用
//[[propName: string]: any]表示可选的string类型的变量名,变量值为any类型,这里的propName只是一个形参
let c: { name: string, [propName: string]: any }
c = { name: 'xuanmao', age: 18, sex: '男' }


//开发中函数一般这样用
//表示函数d有两个参数,参数类型都是number，函数返回值也是number
let d: (a: number, b: number) => number; //声明函数类型
d = function (n1: number,n2: number) {  //创建符合函数声明的函数
  return n1 + n2;
}
