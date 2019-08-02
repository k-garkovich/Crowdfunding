const express = require("express");
const router = express.Router();
const User = require('../models/schema-user.js');
const Campaign = require('../models/schema-campaign.js');


router.get('/getusers', (req, res) =>{

    User.find().then((user,err)=>{
        
        if (user) {
           
            res.json(user)
          } 
          else {
            console.log(err);
            res.send('User does not exist')
          }
    });
  
  });
  
  
  router.get('/getall', (req, res) =>{

    Campaign.find().then((post,err)=>{
        
        if (post) {
            //console.log(post);
            res.json(post)
          } 
          else {
            console.log(err);
            res.send('User does not exist')
          }
    });
  
  });

  router.get('/user', (req, res) =>{

    const userId = req.query.userId;
    
    User.find({_id:userId}).then((post,err)=>{
        
        if (post) {
            res.json(post)
          } 
          else {
            console.log(err);
            res.send('User does not exist')
          }
    });

});

router.get('/delete', (req, res) =>{

  const userId = req.query.userId;

   User.remove({_id: userId}, function(err, post){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});


router.get('/get', (req, res) =>{

  const userId = req.query.userId;
  
  Campaign.find({userId:userId}).then((post,err)=>{
      
      if (post) {
          //console.log(post);
          res.json(post)
        } 
        else {
          console.log(err);
          res.send('User does not exist')
        }
  });

});

router.get('/delete-campaign', (req, res) =>{

  const campaignId = req.query.campaignId;

    Campaign.remove({_id: campaignId}, function(err, post){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});



router.get('/getone-campaign', (req, res) =>{

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

router.put('/change-role', (req, res) =>{
  
  const userId = req.body.params.data.item
  const role = req.body.params.data.role
 
  User.update({_id: userId}, {role: role})
        .then(post =>{
            res.send(post);
        })
        .catch(err => {
          res.send('error: ' + err)
        })
      

})



  module.exports = router;
  