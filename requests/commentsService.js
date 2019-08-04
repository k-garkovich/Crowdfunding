const express = require("express");
const router = express.Router();
const Comments = require('../models/schemaComments.js');
const cors = require('cors');
router.use(cors());

router.get('/get-comments', (req, res) =>{
    const campaignId = req.query.campaignId;
    Comments.find({campaignId:campaignId}).then((post,err)=>{
        if (post) {
            res.json(post)
        } 
        else {
            res.send('No such comments.')
        }
    });
});


router.post('/create-comment', (req, res) => {
   Comments.create({
       text: req.body.text,
       nameUser: req.body.nameUser,
       surnameUser: req.body.surnameUser,
       campaignId: req.body.campaignId
    },)
    .then((post)=>{
      res.send(post);
      res.json({ status: post + ' Create!' });
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})


router.get('/delete-comment', (req, res) =>{
  const _id = req.query.commentId;
  Comment.remove({_id: _id}, function(err, post){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = router;
