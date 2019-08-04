const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require('./requests/authService.js');
const app = express();
const port = 3001;
const Campaign = require('./requests/campaignCrudService')
const Admin = require('./requests/adminService.js');
const Bonus = require('./requests/bonusService')
const Comment = require('./requests/commentsService')
const News = require('./requests/newsService.js')


mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true}, function(err){
    if(err) return console.log(err);
    app.listen(port, () => console.log(`Listening on port ${port}`))

});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( User, Campaign, Admin, Bonus, Comment, News);
