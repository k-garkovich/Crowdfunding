
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
          
          text: {
            type: String
          },
          nameUser: {
            type: String
          },
          surnameUser: {
            type: String
          },
          campaignId: {
            type: String
          }
});

const Comments = mongoose.model("comment", commentsSchema);

module.exports= Comments;