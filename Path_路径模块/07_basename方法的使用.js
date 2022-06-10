const path = require('path');

// 定义文件的存放路径
const fpath = '/a/b/c/index.html';

const fullNamee = path.basename(fpath);
console.log(fullNamee);  // index.html

const nameWithoutExt = path.basename(fpath,'.html');
console.log(nameWithoutExt);  // index
