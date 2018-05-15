const express = require('express');
const router = express.Router();

const MessageModel = require('../models/message');
const message = new MessageModel;

router.get('/message', (req, res) => {
    console.log(req.method);
    MessageModel.find({}, (err, docs) => {
        res.end(JSON.stringify(docs))
    })
});

router.post('/message', (req, res) => {
    res.on('data', data => {
        console.log(data);
        let obj = JSON.parse(data.toString());
        let repley = obj.replay;
        let name = obj.name;

        console.log(repley);

        MessageModel.find({name: "kaso"}, (err, docs) => {
            MessageModel.repley = repley;
            MessageModel.save();
            req.end('ok')
        });
    });
});

module.exports = router;