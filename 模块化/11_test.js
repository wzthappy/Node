// 在外界使用 require 导入一个模块的时候，得到的成员,
// 就是 那个模块中，通过 module.exports 指向的那个对象
const m = require('./11_自定义模块');

console.log(m);
