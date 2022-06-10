const ziDingYi = require('./ziDingYiBao/index');


// 格式化时间的功能
const dtStr = ziDingYi.dateFormat(new Date());
console.log(dtStr);

console.log('------------')
//
 const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
 console.log(htmlStr);
 console.log('------------')

const str = ziDingYi.htmlEscape(htmlStr);
console.log(str);
console.log('------------')

const str2 = ziDingYi.htmlUnEscape(str);
console.log(str2);