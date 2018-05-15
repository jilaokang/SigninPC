const express = require('express');

const app = express();

const mongoose = require('mongoose');

const messageRouter = require('./routers/message');

// 解决跨域请求
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use('/', messageRouter);

mongoose.connect('mongodb://localhost/dataAnalysis', (err) => {
    if (err) throw err;
});


app.listen(8084);