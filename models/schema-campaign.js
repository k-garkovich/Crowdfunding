

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
          userId:{
            type: String
          },
          userName:{
            type: String
          },
          userLast:{
            type: String
          },
          name: {
            type: String
          },
          description: {
            type: String
          },
          subject: {
            type: String
          },
          
          tags: {
            type: Array
          },
          video:{
            type: String
          },
          image:{
            type: String
          },
          amount_money: {
            type: Number
          },
          date:{
            type: Date
          },
          money:{
            type: Number,
            default: 0
          }
});

const Campaign = mongoose.model("post", campaignSchema);

module.exports= Campaign;