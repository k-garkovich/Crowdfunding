const express = require("express");
const router = express.Router();
const Campaign = require('../models/schema-campaign.js');
const cors = require('cors');
router.use(cors());

router.get('/get', (req, res) =>{

    const userId = req.query.userId;
    
    Campaign.find({userId:userId}).then((post,err)=>{
        
        if (post) {
            res.json(post)
          } 
          else {
            console.log(err);
            res.send('No such campaign.')
          }
    });

});


router.get('/getall', (req, res) =>{

  Campaign.find().then((post,err)=>{
      
      if (post) {
          res.json(post)
        } 
        else {
          console.log(err);
          res.send('No such campaign.')
        }
  });

});


router.post('/post', (req, res) => {
   Campaign.create({
       name: req.body.name,
       description: req.body.description,
       bonuses: req.body.bonuses,
       subject: req.body.subject,
       video: req.body.video,
       image: req.body.image,
       amount_money: req.body.amount_money,
       date: req.body.date,
       userId: req.body.userId,
       tags: req.body.tags,
       userName: req.body.userName,
       userLast: req.body.userLast,
       money: req.body.money

    },)
    .then((post)=>{

      res.send(post);
        res.json({ status: post + ' Create!' });
        
        
    })
    .catch(err => {
        res.send('error: ' + err)
      })
    
})


router.get('/delete', (req, res) =>{

  const campaignId = req.query.campaignId;

    Campaign.remove({_id: campaignId}, function(err, post){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


router.put('/update', (req, res) =>{
  
  const campaignId = req.body.params.data.campaignId
  const money = req.body.params.data.count
 
  Campaign.update({_id: campaignId}, {money: money})
        .then(post =>{
            res.send(post);
        })
        .catch(err => {
          res.send('error: ' + err)
        })
      

})

router.put('/update-campaign', (req, res) =>{
    const campaignId = req.body.params.data.campaignId
    Campaign.update({_id: campaignId}, 
      {
        name: req.body.params.data.name,
        description: req.body.params.data.description,
        subject: req.body.params.data.subject,
        video: req.body.params.data.video,
        amount_money: req.body.params.data.amount_money,
        date: req.body.params.data.date,
        userName: req.body.userName,
        userLast: req.body.userLast
  
      })
          .then(post =>{
              res.send(post);
          })
          .catch(err => {
            res.send('error: ' + err)
          })
  })


router.get('/getone', (req, res) =>{

  const campaignId = req.query.campaignId;
  
  Campaign.find({_id:campaignId}).then((post,err)=>{
      
      if (post) {
          //console.log(post);
          res.json(post)
        } 
        else {
          console.log(err);
          res.send('No such campaign.')
        }
  });

});


module.exports = router;



// Post.findOne({_id: campaignId},
//   )
//     .then(post =>{
//         res.send(post);
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
  
// });