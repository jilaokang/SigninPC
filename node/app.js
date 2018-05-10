const express = require('express');

const app = express();

const mongoose = require('mongoose');

const messageRouter = require('./routers/message');

app.use('/', messageRouter);

mongoose.connect('mongodb://localhost/dataAnalysis', (err) => {
    if (err) throw err;
});
app.listen(8083);