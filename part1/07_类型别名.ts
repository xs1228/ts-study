type myType1 = string;
let m: myType1;// 此时m的类型就是string

// 当变量类型比较复杂时且多次用到就适合使用类型别名
type myType2 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
let k: myType2;
let l: myType2;
l = 5
l = 9