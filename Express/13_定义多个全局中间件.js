const express = require('express');
const app = express();

// 定义第一个全局中间件
app.use((eeq, res, next) => {
    console.log('调用了第一个全局中间件');
    next();
});
// 定义第二个全局中间件
app.use((eeq, res, next) => {
    console.log('调用了第二个全局中间件');
    next();
});
// 定义一个路由
app.get('/user', (req, res) => {
    res.send('User page.');
});

app.listen(80, () => {
    console.log('http://127.0.0.1');
});