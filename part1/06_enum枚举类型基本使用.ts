enum Gender{
  Male = 0,
  Female = 1
}

let obj: { name: string, gender: Gender };// 对象表示方法一
// let obj: { name: string } & { gender: number };// 对象表示方法二

obj = {
  name: '孙悟空',
  gender:Gender.Male
}

console.log(obj);
