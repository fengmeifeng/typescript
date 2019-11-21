/*
 * @Author: 冯美峰
 * @Date: 2019-11-21 13:49:44
 * @LastEditTime: 2019-11-21 14:07:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo\classes.ts
 */
/**
 * Class
 *
 * public
 * 公有的，属性对外可见，默认public
 */


class Animal {
	public name: string

	constructor(name: string) {
		this.name = name
	}

	move(distance: number) {
		console.log(`Animal moved ${distance}m`)
	}
}

// 实例化
let animal: Animal = new Animal("zhangsan");


/**
 * extends 继承
 *
 * 类从基类中继承属性和方法
 */
class Dog extends Animal {
	type: string 

	constructor(name:string, type: string) {
		super(name)
		this.type = type
	}

	bark() {
		console.log("Woof! Woof")
	}
}
// 实例
let dog:Dog = new Dog('jack','type')


/**
 * private
 * 私有的，只有自己可见
 */
class Animal2{
	private name: string;
	constructor(thenName: string) {
		this.name = thenName
	}
}
// 实例
let cat:Animal2 = new Animal2("Cat")
// cat.name// 错误: 'name' 是私有的.


/**
 * protected
 * 受保护的，在派生类中可见
 */
class Person2 {
	protected booldType: string = 'A';
	name: string
	constructor() {
		this.name = name
	}
}

class child extends Person2 {
	constructor(name: string) {
		super(name)
		// code...
	}
	getBloodType():string {
		return this.booldType
	}
}

// 实例化
let person:Person2 = new Person2("zhangsan")
let howard = new child('Howard')
// person.bloodType // error 属性“bloodType”受保护，只能在类“Person”及其子类中访问
howard.getBloodType() // A


/**
 * readonly
 * 将属性设置为只读的
 * 只读属性必须在声明时或构造函数里被初始化
 */
class Octopus {
	readonly name: string;
	readonly numberOfLegs: number = 8;
	constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.