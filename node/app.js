const express = require('express');

const app = express();

const cors = require('express-cors')

const mongoose = require('mongoose');

const messageRouter = require('./routers/message');

app.use(cors({
    allowedOrigins: [
        'http://localhost:8080'
    ]
}))

app.use('/', messageRouter);

mongoose.connect('mongodb://localhost/dataAnalysis', (err) => {
    if (err) throw err;
});

app.listen(8084);