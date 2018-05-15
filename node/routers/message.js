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
<<<<<<< HEAD
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
=======
    req.on('data', async data => {
        const obj = JSON.parse(data.toString());

        console.log(obj)
        const msg = await MessageModel.findOne({name: obj.name});
        if (msg) {
            await msg.update({
                replay: obj.replay,
                completed: obj.completed
            })
        } else {
            await MessageModel.create({
                replay: obj.replay,
                name: obj.name,
                block: obj.block,
                content: obj.content
            })
        }

        // save 方法
        // const sb = new MessageModel({
        //    name: 'sb'
        // })
        // sb.save()


        // updata方法1
        //  MessageModel.find({name: "kaso"}, (err, docs) => {
        //      console.log(docs);
        //      docs.update({replay: repley})
        //      res.end('ok')
        //  });

        // updata方法2
        // const msg = await MessageModel.findOne({name: 'kaso'});
        // await msg.update({replay: repley})

        res.end('ok')
>>>>>>> 08ce2efde2a43d5c92ccdeb2b6f8d0ca77f83316
    });
});

module.exports = router;