var mongoose = require("mongoose");

var girlSchema = new mongoose.Schema({
  name: String,
  img: String
})

var Girl = mongoose.model('Girl', girlSchema)

module.exports = Girl;