const express = require('express');
const path = require('path');
const app = express();

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use(express.static(path.join(__dirname, '/clock2')));

app.use('/abc',express.static(path.join(__dirname, '/clock')));


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
});