const express = require('express');
const router = express.Router();

const MessageModel = require('../models/message');
const message = new MessageModel;

router.get('/message', (req, res) => {
    console.log(req.method);
    message.name="kaso";
    message.save()
    res.end('dd')
});

module.exports = router;