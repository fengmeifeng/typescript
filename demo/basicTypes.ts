/*
 * @Author: fengmeifeng
 * @Date: 2019-11-19 10:03:23
 * @LastEditTime: 2019-11-21 13:41:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo\test.ts
 */
// 布尔型
let isDone: boolean = false;
console.log("布尔型:"+isDone);

// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log("数字:"+decLiteral);

// 字符串
let message: string = 'hello world';
console.log("字符串:"+message);
// 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。
// 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
let name: string = `zhangsan`;
let age: number = 36;
let sentence: string = `Hello, my name is ${ name }. I'll be ${ age + 1 } years old next month.`;
// 另一种写法
// let sentence:string = "Hello, my name is " + name + ".\n\n I'll be "+ (age+1) +" years old next month.";
console.log("模版字符串:"+sentence);

// 数组
let list: number[] = [1,2,3];
// 数组泛型
let list1: Array<number> = [1,2,3];
console.log(list);

// 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 比如，你可以定义一对值分别为 string和number类型的元组。
let x : [string, number];
x = ['zhangsan', 23];
console.log(x);
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// 当访问一个越界的元素，会使用联合类型替代：
// x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
// x[6] = true; // Error, 布尔不是(string | number)类型

// 枚举
// enum类型是对JavaScript标准数据类型的一个补充。
// 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum color {Red, Green, Blue};
let c:color = color.Green;
console.log(c);
// 全部都采用手动赋值：
enum color1 {Red = 1, Green = 2, Blue = 3};
let c1:color1 = color1.Green;
console.log(c1);
// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 
// 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
enum color3 { Red = 1, Green, Blue }
let colorName: string = color3[2];
console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

// Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
console.log(notSure);
// 跟Object相似
// 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
let notSure1: any = 4;
notSure1.ifItExists(); // okay, ifItExists might exist at runtime
notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// object
// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.


// Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void ：
function warnUser(): void {
  console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// Null 和 Undefined
let u:null = null;
let n:undefined = undefined;

// Never
// never类型表示的是那些永不存在的值的类型。 
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式
// 的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message:string): never{
  throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
declare function creat(o:object | null):void;
creat({prop:0});
creat(null);

// 类型断言


// 在 Typescript 中，只要文件存在 import 或 export 关键字，都被视为 module
export{};
