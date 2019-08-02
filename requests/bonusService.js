const express = require("express");
const router = express.Router();
const Bonus = require('../models/schemaBonuses.js');
const cors = require('cors');
const BonusUser = require('../models/schemaBonUser.js');
router.use(cors());


router.post('/create-bonus', (req, res) => {
    Bonus.create({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        campaignId: req.body.campaignId
 
 },)
     .then((post)=>{
         res.json({ status: post.name + ' Create!' });
         res.send(post);
     })
     .catch(err => {
         res.send('error: ' + err)
       })
     
   })

   router.get('/get-bonuses', (req, res) =>{

    const campaignId = req.query.campaignId;
    
    Bonus.find({campaignId:campaignId}).then((post,err)=>{
        
        if (post) {
            res.json(post)
          } 
          else {
            console.log(err);
            res.send('No such bonus.')
          }
    });
  
  });
   
  router.post('/save-bonus', (req, res) => {
    const data = req.body.data.userId
    
    BonusUser.create({
        userId: req.body.data.userId,
        bonusId: req.body.data.bonusId,
        name: req.body.data.name,
        description: req.body.data.description,
        cost: req.body.data.cost
 
 },)
     .then((post)=>{
         res.json({ status: ' Save!' });
         res.send(post);
     })
     .catch(err => {
         res.send('error: ' + err)
       })
     
   })

  

  router.get('/get-bonuses-user', (req, res) =>{

    const userId = req.query.userId;
    
    BonusUser.find({userId:userId}).then((post,err)=>{
        
        if (post) {
            res.json(post)
          } 
          else {
            console.log(err);
            res.send('No such bonus.')
          }
    });
  
  });

  router.get('/get-bonuses-id', (req, res) =>{

    const bonusId = req.query.bonusId;
    
    Bonus.find({_id:bonusId}).then((post,err)=>{
        
        if (post) {
            res.json(post)
          } 
          else {
            console.log(err);
            res.send('No such bonus.')
          }
    });
  
  });

  router.get('/delete-bonus', (req, res) =>{

    const bonusId = req.query.bonusId;
  
    Bonus.remove({_id: bonusId}, function(err, post){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
  });

module.exports = router;