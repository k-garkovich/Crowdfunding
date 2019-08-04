const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bonusesSchema = new Schema({
          
          name: {
            type: String
          },
          description: {
            type: String
          },
          cost: {
            type: Number
          },
          campaignId: {
            type: String
          }
});

const Bonus = mongoose.model("bonuse", bonusesSchema);

module.exports= Bonus;