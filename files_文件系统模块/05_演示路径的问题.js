const fs = require('fs');

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行

// 移植性非常差，不利于维护
// fs.readFile('F:\\网页制作\\Node\\files\\1.txt', 'utf-8', function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败!' + err.message);
//     }
//     console.log('读取文件成功!' + dataStr);
// });

// __dirname 表示当前文件所在的目录
console.log(__dirname);
fs.readFile(__dirname + '/1.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败!' + err.message);
    }
    console.log('读取文件成功!' + dataStr);
});

