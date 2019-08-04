const express = require("express");
const router = express.Router();
const cors = require('cors');
const News = require('../models/schemaNews.js');
router.use(cors());



router.post('/create-news', (req, res) => {
    News.create({
        name: req.body.name,
        description: req.body.description,
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
  
  
  
  router.get('/get-news', (req, res) =>{
  
    const campaignId = req.query.campaignId;
    
    News.find({campaignId:campaignId}).then((post,err)=>{
        
        if (post) {
            res.json(post)
          } 
          else {
            console.log(err);
            res.send('No such news.')
          }
    });
  
  });

  router.get('/delete-news', (req, res) =>{

    const newsId = req.query.newsId;
  
    News.remove({_id: newsId}, function(err, post){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
  });


  router.put('/update-news', (req, res) =>{
    const newsId = req.body.params.data.newsId
    News.update({_id: newsId}, 
      {
       
        name: req.body.params.data.name,
        description: req.body.params.data.description,
       
  
      })
          .then(post =>{
              res.send(post);
          })
          .catch(err => {
            res.send('error: ' + err)
          })
  })
  module.exports = router;