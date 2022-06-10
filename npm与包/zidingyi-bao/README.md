## 安装
、、、
npm install zidingyi-bao
、、、

## 导入
、、、js
const ziDingYi = require('zidingyi-bao');
、、、

## 格式化时间
、、、js
// 调用 dateFormat 对时间进行格式化
const dtStr = ziDingYi.dateFormat(new Date());
// 结果 2022-04-13 22:10:30
console.log(dtStr);
、、、

## 转义 HTML 中的特殊字符
、、、js
// 待转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';
// 调用 htmlEscape 方法执行转换
const str = ziDingYi.htmlEscape(htmlStr);
// 转换的结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str);
、、、

## 还原 HTML 中的特殊字符
、、、js
// 待还原的 HTML 字符串
const str2 = ziDingYi.htmlUnEscape(str);
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2);
、、、

## 开源协议
ISC