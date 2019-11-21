"use strict";
exports.__esModule = true;
var zhangsan = {
    name: 'zhangsan',
    age: 34,
    isMale: true,
    birthDay: new Date("2018-11-23")
};
// zhangsan.birthDay = '1990-10-19'
function getMyName(person) {
    return "i am " + person.name;
}
var mingcheng = getMyName(zhangsan);
console.log(zhangsan);
console.log(mingcheng);
