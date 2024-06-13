const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NewsModel = new Schema({
  id: ObjectId,
  title: String,
  content: String,
  image: String
});

module.exports = mongoose.model('NewsModel', NewsModel);