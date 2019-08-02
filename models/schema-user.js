const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      email: {
        type: String,
        required: true,
        unique: true 
      },
      password: {
        type: String,
        required: true
      },
      role:{
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
      }
});

const User = mongoose.model("user", userSchema);

module.exports= User;