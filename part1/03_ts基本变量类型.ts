//1.number类型
let a: number = 10

//2.string类型
let b: string = 'xuanmao'

//3.字面量类型,定义字面量类型后c的值就只能是10或20
let c: 10 | 20
c = 10

//4.any类型,表示可以是任意类型,
// let d: any
let d//隐式any类型
d = 1
d = '2'
//c = d  //any类型的变量可以赋任何类型的值,也可以用做值去赋值给其他任意类型

//5.unknown类型 表示未知类型的值
let e: unknown;
e = 1
e = 'xixi'
e = true
//c = e 会报错,unknown类型的变量可以赋任何类型的值，但不可以用做值去赋值给其他任意类型

//类型断言，可以用来告诉解析器变量的实际类型
let s: string;
s = e as string;// 或者s = <string>e;
//s = a as string  明确类型变量不能断言

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void{

}

// never 表示永远不会返回结果,函数一定报错执行不完函数用这个
// function fn2(): never{
// console.log('111');
// }