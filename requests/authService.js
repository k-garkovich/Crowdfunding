const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require('../models/schema-user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { check, validationResult } = require('express-validator/check');

router.use(cors());
process.env.SECRET_KEY = 'secret';

let transporter=nodemailer.createTransport({  
   host: 'smtp.gmail.com',
    port:587,
    secure: false,
    auth: {
     
         user: 'panda.bell.fran@gmail.com',
         pass: 'myimmortal'
     }}
);


router.post('/register',  (req, res) => {
  
   
    let userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password
    }
  
 

    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash
            const email = req.body.email
            var mailOptions = {
              from: 'panda.bell.fran@gmail.com', 
              to: email, 
              subject: 'Hello ✔', 
              text: 'Hello world ?', 
              html: `<p>Click this to active your account <a href='http://localhost:3001/register/${hash}'>http://localhost:3001/register/${hash}</a></p>` 
          };
      
      
          transporter.sendMail(mailOptions, function(error, info){
              if(error){
                  return console.log(error);
              }
              console.log('Message sent: ' + info.response);
              
          });
          router.get('/register/:hash',(req, res) =>{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(422).json({ errors: errors.array() });
            }
          
            User.create(userData)
              .then(user => {
                res.json({ status: user.email + ' Registered!' })
                console.log(hash)
              })
              .catch(err => {
                res.send('error: ' + err)
              })

          })
            
          })
        } else {
          res.json({ error: 'User already exists' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })
  


 router.post('/login', (req, res) => {
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            
            const payload = {
              _id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              role: user.role
            }
            
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.send(token);
          } else {
            
            res.json({ error: 'Invalid username or password!!' })
          }
        } else {
          res.json({ error: 'Invalid username or password!!' })
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

  
  router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
    User.findOne({
      _id: decoded._id
    })
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('User does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })


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


module.exports = router;


