/*
 * @Author: 冯美峰
 * @Date: 2019-11-21 13:48:45
 * @LastEditTime: 2019-11-21 14:02:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo\variable.ts
 */
// 变量声明
// let 在很多方面与var是相似的
// const 是对let的一个增强，它能阻止对一个变量再次赋值


// var 声明
// 例1
// var a = 10;
// function f() {
//   var Message = 'Hello';
//   return Message;
// }
// // 函数内部调用
// function h() {
//   var a = 10;
//   return function g() {
//     var b = a+1;
//     return b;
//   }
// }
// var c = f();
// g();
// 面的例子里，g可以获取到f函数里定义的a变量。 
// 每当 g被调用时，它都可以访问到f里的a变量。 
// 即使当 g在f已经执行完后才被调用，它仍然可以访问及修改a。

// 例2
// function f() {
//   var a = 1;

//   a = 2;
//   var b = g();
//   a = 3;

//   return b;

//   function g() {
//     return a;
//   }
// }
// f(); // returns 2


// 作用域规则
