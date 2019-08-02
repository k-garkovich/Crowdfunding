
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bonUserSchema = new Schema({
          
          userId: {
            type: String
          },
          bonusId: {
            type: String
          },
          name: {
            type: String
          },
          description: {
            type: String
          },
          cost: {
            type: Number
          }
});

const BonusUser = mongoose.model("bonuser", bonUserSchema);

module.exports = BonusUser;