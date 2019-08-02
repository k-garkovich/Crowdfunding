
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
          
          name: {
            type: String
          },
          description: {
            type: String
          },
         
          campaignId: {
            type: String
          }
});

const News = mongoose.model("new", newsSchema);

module.exports= News;